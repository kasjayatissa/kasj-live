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
