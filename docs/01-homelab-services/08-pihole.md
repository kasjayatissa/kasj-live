---
sidebar_position: 8
---

# Pihole

Pihole manifests for deployment

## Namespace

```yaml title="01-pihole-namespaces.yaml"
apiVersion: v1
kind: Namespace
metadata:
  name: pihole
```

## Configuration

```yaml title="02-pihole-configs.yaml"
apiVersion: v1
kind: ConfigMap
metadata:
  name: custom.list
  namespace: pihole
data:
  custom.list: |
    192.168.86.41 k3smaster
    192.168.86.40 k3snode01
    192.168.86.100 traefik.local.kasj.live
    192.168.86.101 pihole.local.kasj.live
    192.168.86.100 dash.local.kasj.live
    192.168.86.100 grocy.local.kasj.live
    192.168.86.100 kuma.local.kasj.live
    192.168.86.100 cloud.local.kasj.live
    192.168.86.100 portainer.local.kasj.live
    192.168.86.100 argocd.local.kasj.live
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: adlists.list
  namespace: pihole
data:
  adlists.list: |
    https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts
    https://adaway.org/hosts.txt
    https://v.firebog.net/hosts/AdguardDNS.txt
    https://v.firebog.net/hosts/Admiral.txt
    https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt
    https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt
    https://v.firebog.net/hosts/Easylist.txt
    https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext
    https://raw.githubusercontent.com/FadeMind/hosts.extras/master/UncheckyAds/hosts
    https://raw.githubusercontent.com/bigdargon/hostsVN/master/hosts
    https://v.firebog.net/hosts/static/w3kbl.txt
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: whitelist.txt
  namespace: pihole
data:
  whitelist.txt: |
    ichnaea.netflix.com
    nrdp.nccp.netflix.com
    androidtvchannels-pa.googleapis.com
    lcprd1.samsungcloudsolution.net
```

## Deployment

```yaml title="03-pihole-deployment.yaml"
as@lappa:~$ cat home-lab/prod-apps/pihole/03-pihole-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: pihole
  name: pihole
  namespace: pihole
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pihole
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: pihole
    spec:
      containers:
      - env:
        - name: TZ
          value: Australia/Melbourne
        - name: WEBPASSWORD
          value:
        - name: DNS1
          value: 9.9.9.9
        - name: DNS2
          value: 1.1.1.1
        image: pihole/pihole:latest
        imagePullPolicy: IfNotPresent
        name: pihole
        ports:
        - name: dns-tcp
          containerPort: 53
          protocol: TCP
        - name: dns-udp
          containerPort: 53
          protocol: UDP
        - name: dhcp
          containerPort: 67
          protocol: UDP
        - name: web
          containerPort: 80
          protocol: TCP
        - name: https
          containerPort: 443
          protocol: TCP
        resources:
          requests:
            cpu: "20m"
            memory: "512Mi"
          limits:
            cpu: "250m"
            memory: "896Mi"
        readinessProbe:
          exec:
            command: ['dig', '@127.0.0.1', 'cnn.com']
          timeoutSeconds: 20
          initialDelaySeconds: 5
          periodSeconds: 60
        livenessProbe:
          tcpSocket:
            port: dns-tcp
          initialDelaySeconds: 15
          periodSeconds: 30
        volumeMounts:
        - name: etc-pihole
          mountPath: /etc/pihole
        - name: etc-dnsmasq
          mountPath: /etc/dnsmasq.d
        - name: var-log
          mountPath: /var/log
        - name: var-log-lighttpd
          mountPath: /var/log/lighttpd
        - name: adlists
          mountPath: /etc/pihole/adlists.list
          subPath: adlists.list
        - name: customlist
          mountPath: /etc/pihole/custom.list
          subPath: custom.list
      restartPolicy: Always
      volumes:
      - name: etc-pihole
        emptyDir:
          medium: Memory
      - name: etc-dnsmasq
        emptyDir:
          medium: Memory
      - name: var-log
        emptyDir:
          medium: Memory
      - name: var-log-lighttpd
        emptyDir:
          medium: Memory
      - name: adlists
        configMap:
          name: adlists.list
          items:
            - key: adlists.list
              path: adlists.list
      - name: customlist
        configMap:
          name: custom.list
          items:
            - key: custom.list
              path: custom.list
```

## Service

```yaml title="04-pihole-service.yaml"
kind: Service
apiVersion: v1
metadata:
  name: pihole-udp
  namespace: pihole
  annotations:
    metallb.universe.tf/allow-shared-ip: dns
spec:
  selector:
    app: pihole
  ports:
  - protocol: UDP
    port: 53
    name: dnsudp
    targetPort: 53
  type: LoadBalancer

---
kind: Service
apiVersion: v1
metadata:
  name: pihole-tcp
  namespace: pihole
  annotations:
    metallb.universe.tf/allow-shared-ip: dns
spec:
  selector:
    app: pihole
  ports:
  - protocol: TCP
    port: 53
    name: dnstcp
    targetPort: 53
  - protocol: TCP
    port: 80
    name: web
    targetPort: 80
  type: LoadBalancer
```