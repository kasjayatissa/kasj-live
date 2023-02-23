---
sidebar_position: 3
---

# Useful Kubernetes Commands

```bash

# Find resources in namespaces
kubectl api-resources --verbs=list --namespaced -o name | xargs -n 1 kubectl get --show-kind --ignore-not-found -n <NAMESPACE>

# Delete pods that are not running
kubectl delete -A --field-selector 'status.phase!=Running' pods

# Restart all deployments in a namespace
kubectl rollout restart deployment --namespace apps

# Delete Pods stuck in Terminating state
for p in $(kubectl get pods -n metallb-system| grep Terminating | awk '{print $1}'); do kubectl delete pod $p --grace-period=0 --force -n metallb-system;done

# Exec into a pod
kubectl exec <PODNAME> -n <NAMESPACE> -i -t -- bash -il

# Scan local network range to see who is up
nmap -sP 192.168.86.1-254

# Removing default storage class
kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'

# Set default storage class
kubectl patch storageclass nfs-client -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

# Delete Deployments
kubectl delete deployments --all -n longhorn-system

# Delete Services
kubectl delete services --all

# Delete Pods
kubectl delete pods --all -n longhorn-system

# Delete Daemonset
kubectl delete daemonset --all -n longhorn-system

# Delete namespaces stuck in terminating state
(
NAMESPACE=recipebud
kubectl proxy &
kubectl get namespace $NAMESPACE -o json |jq '.spec = {"finalizers":[]}' >temp.json
curl -k -H "Content-Type: application/json" -X PUT --data-binary @temp.json 127.0.0.1:8001/api/v1/namespaces/$NAMESPACE/finalize
)

# Export existing deployment to YAML
kubectl get deploy deploymentname -o yaml
```