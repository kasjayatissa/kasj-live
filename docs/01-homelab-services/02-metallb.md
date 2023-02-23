---
sidebar_position: 2
---

# Metallb

Metallb is the load balancer which I am currently using to expose my homelab services outside my cluster.

## Installing metallb

Installing metallb is pretty easy out of the box. You are already provided with manifest to deploy using the **kubectl apply** command:

```bash
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.9/config/manifests/metallb-native.yaml
```


## Configuring metallb

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