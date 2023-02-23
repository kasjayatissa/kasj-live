---
slug: cert-manager
title: Certificate manager for cluster
authors: [kas]
tags: [cert-manager, kubernetes]
---

# Certificate manager for K3s cluster

## Certificates in K3s

In my previous post I mentioned that Traefik allows me to provide SSL termination certificate handling. The thing is certificates are actually an unknown resource type in the kubernetes ecosystem like "pods" or "services". 

[cert-manager](https://cert-manager.io/) adds certificates and certificate issuers as resource types in Kubernetes clusters, and simplifies the process of obtaining, renewing and using those certificates.

![certmanager](https://cert-manager.io/images/high-level-overview.svg)

## Installing cert-manager

Add customer resource definition (CRD) using a manifest from cert-manager:

```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.crds.yaml
```

Like with traefik, I also created a `values.yaml` file for the helm installation:

```yaml title="values.yaml"
installCRDs: false # Oops didn't realise I could do it here
replicaCount: 1
extraArgs:
  - --dns01-recursive-nameservers=1.1.1.1:53,9.9.9.9:53
  - --dns01-recursive-nameservers-only
podDnsPolicy: None
podDnsConfig:
  nameservers:
    - "1.1.1.1"
    - "9.9.9.9"
```
Create namespace, add the repo and update the repo

```bash
kubectl create namespace cert-manager
helm repo add jetstack https://charts.jetstack.io
helm repo update
```

Install cert-manager via helm

```bash
helm install cert-manager jetstack/cert-manager --namespace cert-manager --values=values.yaml --version v1.11.0
```

With cert-manager now installed it was time get some certificates!