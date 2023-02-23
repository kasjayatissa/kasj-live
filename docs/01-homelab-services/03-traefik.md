---
sidebar_position: 3
---

# Traefik

Traefik deploys a **reverse proxy** which intercepts and routes every incoming request to the corresponding backend services. It can also provide SSL termination and can be used with an ACME provider (like Let’s Encrypt) for automatic certificate generation.

## Installing Traefik

Create a `values.yaml` with install config:


```yaml title="values.yaml"
globalArguments:
  - "--global.sendanonymoususage=false"
  - "--global.checknewversion=false"

additionalArguments:
  - "--serversTransport.insecureSkipVerify=true"
  - "--log.level=INFO"

deployment:
  enabled: true
  replicas: 1
  annotations: {}
  podAnnotations: {}
  additionalContainers: []
  initContainers: []

ports:
  web:
    redirectTo: websecure
  websecure:
    tls:
      enabled: true

ingressRoute:
  dashboard:
    enabled: false

providers:
  kubernetesCRD:
    enabled: true
    ingressClass: traefik-external
    allowExternalNameServices: true
  kubernetesIngress:
    enabled: true
    allowExternalNameServices: true
    publishedService:
      enabled: false

rbac:
  enabled: true

service:
  enabled: true
  type: LoadBalancer
  annotations: {}
  labels: {}
  spec:
    loadBalancerIP: 192.168.86.100 # this should be an IP in the MetalLB range
  loadBalancerSourceRanges: []
  externalIPs: []
```

Then I needed to execute these commands to install via helm (after installing [helm](https://helm.sh/) of course):

Add repo
```bash
helm repo add traefik https://helm.traefik.io/traefik
```

Update repo
```bash 
helm repo update
```
Create namespace
```bash
kubectl create namespace traefik
```
Finally install using helm and our custom values file:
```bash
helm install --namespace=traefik traefik traefik/traefik --values=values.yaml
```


## Configuring Traefik

Once installed, there were some configuration changes that needed to be made. As mentioned earlier, I needed to specify a pool of IP address for metallb to allocate out. I put this into another yaml file:

```yaml title="/home-lab/cluster-setup/metallb/metallb-ipconfig.yaml"
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: first-pool
  namespace: metallb-system
spec:
  addresses:
  - 192.168.86.100-192.168.86.110

---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: default
  namespace: metallb-system
```

## Verifying installation

Get the pods running in the **metallb-system** namespace

```bash
kubectl get pods -n metallb-system
```

Get the **ipaddresspool** resource running in the **metallb-system** namespace

```bash
kubectl get ipaddresspool -n metallb-system
```