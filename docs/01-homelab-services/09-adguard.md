---
sidebar_position: 9
---

# Adguard

Adguard Home Manifests:

## Volume claims

```yaml title="adguard-claim0-persistentvolumeclaim.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  creationTimestamp: null
  labels:
    io.kompose.service: adguard-claim0
  name: adguard-claim0
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi
status: {}
```

```yaml title="adguard-claim1-persistentvolumeclaim.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  creationTimestamp: null
  labels:
    io.kompose.service: adguard-claim1
  name: adguard-claim1
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi
status: {}
```

## Deployment

```yaml title="adguard-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    kompose.cmd: kompose convert
    kompose.version: 1.26.0 (40646f47)
  creationTimestamp: null
  labels:
    io.kompose.service: adguard
  name: adguard
spec:
  replicas: 1
  selector:
    matchLabels:
      io.kompose.service: adguard
  strategy:
    type: Recreate
  template:
    metadata:
      annotations:
        kompose.cmd: kompose convert
        kompose.version: 1.26.0 (40646f47)
      creationTimestamp: null
      labels:
        io.kompose.service: adguard
    spec:
      containers:
        - image: adguard/adguardhome
          name: adguardhome
          ports:
            - containerPort: 53
            - containerPort: 53
              protocol: UDP
            - containerPort: 67
              protocol: UDP
            - containerPort: 68
              protocol: UDP
            - containerPort: 80
            - containerPort: 443
            - containerPort: 443
              protocol: UDP
            - containerPort: 3000
            - containerPort: 853
            - containerPort: 784
              protocol: UDP
            - containerPort: 853
              protocol: UDP
            - containerPort: 8853
              protocol: UDP
            - containerPort: 5443
            - containerPort: 5443
              protocol: UDP
          resources: {}
          volumeMounts:
            - mountPath: /opt/adguardhome/work
              name: adguard-claim0
            - mountPath: /opt/adguardhome/conf
              name: adguard-claim1
      restartPolicy: Always
      volumes:
        - name: adguard-claim0
          persistentVolumeClaim:
            claimName: adguard-claim0
        - name: adguard-claim1
          persistentVolumeClaim:
            claimName: adguard-claim1
status: {}
```

## Service

```yaml title="adguard-service.yaml"
apiVersion: v1
kind: Service
metadata:
  annotations:
    kompose.cmd: kompose convert
    kompose.version: 1.26.0 (40646f47)
  creationTimestamp: null
  labels:
    io.kompose.service: adguard
  name: adguard
spec:
  ports:
    - name: "53"
      port: 53
      targetPort: 53
    - name: 53-udp
      port: 53
      protocol: UDP
      targetPort: 53
    - name: "67"
      port: 67
      protocol: UDP
      targetPort: 67
    - name: "68"
      port: 68
      protocol: UDP
      targetPort: 68
    - name: "80"
      port: 80
      targetPort: 80
    - name: "443"
      port: 443
      targetPort: 443
    - name: 443-udp
      port: 443
      protocol: UDP
      targetPort: 443
    - name: "3000"
      port: 3000
      targetPort: 3000
    - name: "853"
      port: 853
      targetPort: 853
    - name: "784"
      port: 784
      protocol: UDP
      targetPort: 784
    - name: 853-udp
      port: 853
      protocol: UDP
      targetPort: 853
    - name: "8853"
      port: 8853
      protocol: UDP
      targetPort: 8853
    - name: "5443"
      port: 5443
      targetPort: 5443
    - name: 5443-udp
      port: 5443
      protocol: UDP
      targetPort: 5443
  type: LoadBalancer
  selector:
    io.kompose.service: adguard
```
