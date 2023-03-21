---
sidebar_position: 5
---

# Let's Encrypt

LetsEncrypt is a nonprofit Certificate Authority that provides free TLS certificates to millions of websites all around the world.

## Connect a domain from CloudFlare

Providing cert-manager my cloudflare token could be done with a simple manifest:

```yaml title=secret-cf-token.yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloudflare-token-secret
  namespace: cert-manager
type: Opaque
stringData:
  cloudflare-token: <redacted>
```

To apply the manifest run:

```bash
kubectl apply -f secret-cf-token.yaml
```

## Adding Let's Encrypt as an Issuer to cert-manager

I now need to let cert-manager know that I'll be using Let's Encrypt as my certificate issuer of choice through another manifest:

```yaml title="letsencrypt-production.yaml"
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-production
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: kasunj@gmail.com
    privateKeySecretRef:
      name: letsencrypt-production
    solvers:
      - dns01:
          cloudflare:
            email: kasunj@gmail.com
            apiTokenSecretRef:
              name: cloudflare-token-secret
              key: cloudflare-token
        selector:
          dnsZones:
            - "kasj.live"
```

and execute using:

```bash
kubectl apply -f letsencrypt-production.yaml
```

## Issuing certificates

The certificate is issued with the following manifest:

```yaml title="local-kasj-live.yaml"
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: local-kasj-live
  namespace: default
spec:
  secretName: local-kasj-live-tls
  issuerRef:
    name: letsencrypt-production
    kind: ClusterIssuer
  commonName: "*.local.kasj.live"
  dnsNames:
  - "local.kasj.live"
  - "*.local.kasj.live"
```

and execute using:

```bash
kubectl apply -f local-kasj-live.yaml
```

Issuing  and validating the certificates takes time (20 minutes minimum). To check how things are progressing run:

```bash
kubectl get challenges
```

## Update since 21/03/2023

Traefik by default normally uses its own self-signed certificate for each ingress service that you define. What I needed to configure was something to tell Traefik to serve the new wildcard certifate I'd created instead. This can be done through a kubernetes resource called **TLSStore**. 

Create a TLSStore resource with the name  `default`. According to the article above, it needed to be called default to be picked up by Traefik by default:

```yaml title="/home-lab/cluster-setup/cert-manager/tls-store.yaml"
---
apiVersion: traefik.containo.us/v1alpha1
kind: TLSStore
metadata:
  name: default
  namespace: kube-system
spec:
  defaultCertificate:
    secretName: wildcard-home-kasj-live-tls"
```

Restart Traefik deployment so that it knows to pick up the new cert by default

## Testing the new solution

To test if Traefik was issuing my new wildcard certificate by default, I created a simple nginx server and exposed it using the following manifest on `test.home.kasj.live`:

```yaml title="/home-lab/prod-apps/nginx/ingress.yaml"
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx
  namespace: nginx
  annotations:
    kubernetes.io/ingress.class: traefik
    traefik.ingress.kubernetes.io/redirect-entry-point: https
spec:
  rules:
    - host: test.home.kasj.live
      http:
        paths:
          - backend:
              service:
                name: nginx
                port:
                  number: 80
            path: /
            pathType: Prefix
```