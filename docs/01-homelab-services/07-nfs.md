---
sidebar_position: 7
---

# NFS Persistent Volumes Provisioner

## Install NFS Server

Install the NFS server and export `/nfs` which is accessible by the Kubernetes cluster:

```bash
sudo su
apt update && apt -y upgrade
apt install -y nfs-server
exit

mkdir /nfs
cat << EOF >> /etc/exports
/nfs 192.168.86.41(rw,no_subtree_check,no_root_squash)
EOF

systemctl enable --now nfs-server
exportfs -ar
```

If I ever add another node to my cluster I need to ensure that a NFS client package is installed  able to connect to the NFS server but this isn't required as my NFS server is the same as my Kubernetes node:

```bash
apt install -y nfs-common
```

## Install NFS provisioner

```bash
helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner

helm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \
  --create-namespace \
  --namespace nfs-provisioner \
  --set nfs.server=192.168.86.41 \
  --set nfs.path=/nfs
```

## Testing the provisioner

To test the provisioner I run:

```bash
kubectl get sc
```

And will use following persistent volume claim manifest:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: nfs-test
  labels:
    storage.k8s.io/name: nfs
    storage.k8s.io/part-of: kubernetes-complete-reference
    storage.k8s.io/created-by: ssbostan
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: nfs-client
  resources:
    requests:
      storage: 1Gi
```

Things of note here:

* `name` will vary for each volume claim - I will use the convention of `<app_name>-pvc`
* `labels` doesn't change for my needs
* `accessModes` doesn't change for my needs
* `storageClassName` doesn't change for my needs
* `storage` will vary for the app but worth noting that the whole specified range is provisioned (not just what you use)


