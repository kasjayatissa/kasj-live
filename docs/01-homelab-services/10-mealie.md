---
sidebar_position: 10
---

# Mealie

[Mealie](https://hay-kot.github.io/mealie/) is a self-hosted recipe manager and meal planner with a RestAPI backend and a reactive frontend application

Mealie Manifests generated from Kompose:

## Persistent Volumes:

```yaml title="01-mealie-claim0-persistentvolumeclaim.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  creationTimestamp: null
  labels:
    io.kompose.service: mealie-claim0
  name: mealie-claim0
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi
status: {}
```

## Deployment:

```yaml title="02-mealie-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    kompose.cmd: kompose convert
    kompose.version: 1.26.0 (40646f47)
  creationTimestamp: null
  labels:
    io.kompose.service: mealie
  name: mealie
spec:
  replicas: 1
  selector:
    matchLabels:
      io.kompose.service: mealie
  strategy:
    type: Recreate
  template:
    metadata:
      annotations:
        kompose.cmd: kompose convert
        kompose.version: 1.26.0 (40646f47)
      creationTimestamp: null
      labels:
        io.kompose.service: mealie
    spec:
      containers:
        - env:
            - name: PGID
              value: "1000"
            - name: PUID
              value: "1000"
            - name: RECIPE_DISABLE_AMOUNT
              value: "false"
            - name: RECIPE_DISABLE_COMMENTS
              value: "false"
            - name: RECIPE_LANDSCAPE_VIEW
              value: "true"
            - name: RECIPE_PUBLIC
              value: "true"
            - name: RECIPE_SHOW_ASSETS
              value: "true"
            - name: RECIPE_SHOW_NUTRITION
              value: "true"
            - name: TZ
              value: Australia/Melbourne
          image: hkotel/mealie:latest
          name: mealie
          ports:
            - containerPort: 80
          resources: {}
          volumeMounts:
            - mountPath: /app/data
              name: mealie-claim0
      restartPolicy: Always
      volumes:
        - name: mealie-claim0
          persistentVolumeClaim:
            claimName: mealie-claim0
status: {}
```

## Service:

```yaml title="03-mealie-service.yaml"
apiVersion: v1
kind: Service
metadata:
  annotations:
    kompose.cmd: kompose convert
    kompose.version: 1.26.0 (40646f47)
  creationTimestamp: null
  labels:
    io.kompose.service: mealie
  name: mealie
spec:
  ports:
    - name: "9925"
      port: 9925
      targetPort: 80
  selector:
    io.kompose.service: mealie
status:
  loadBalancer: {}
```

## Middleware

```yaml title="04-mealie-headers.yaml"
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: mealie-headers
  namespace: mealie
spec:
  headers:
    browserXssFilter: true
    contentTypeNosniff: true
    forceSTSHeader: true
    stsIncludeSubdomains: true
    stsPreload: true
    stsSeconds: 15552000
    customFrameOptionsValue: SAMEORIGIN
    customRequestHeaders:
      X-Forwarded-Proto: https
```

## Ingress

```yaml title="05-mealie-ingress.yaml"
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: mealie-ingress
  namespace: mealie
  annotations:
    kubernetes.io/ingress.class: traefik-external
spec:
  entryPoints:
    - websecure
  routes:
  - match: Host(`mealie.local.kasj.live`)
    kind: Rule
    services:
    - name: mealie
      port: 9925
    middlewares:
        - name: mealie-headers
  tls:
    secretName: local-kasj-live-tls
```