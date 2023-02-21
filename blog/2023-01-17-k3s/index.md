---
slug: k8s
title: Kubernetes Cluster
authors: [kas]
tags: [k8s, k3s, kubernetes]
---

# Kubernetes cluster set up

So with my hardware set up, it was time to get my software up and running. One of the main objectives of setting up this homelab was to get familiar with kubernetes so we need to get a cluster up and running so I can do more than this:

![dilbert](https://pbs.twimg.com/media/EDrZEKCWwAAG_Ty.jpg)

## Installing an OS

I needed to get an OS installed on my NUC before anything else. There are plenty of open source options out there but I stuck with trusty [Ubuntu Server 22.04.1 LTS ](https://ubuntu.com/download/server)

## Setting up a kubernetes cluster

Before I got stuck into deploying my kubernetes I wanted to investigate what options I had for a homelab. It boiled down to two main ones: K8s vs K3s. Both K8s and K3s share the same source code but the key difference for me was that K3s was significantly more lightweight, can be deployed much faster and still all all the key capabilities of K8s. There are a number of "production grade" features that are excluded from K3s such has handling of complex applications and intergrations with public cloud providers which I didn't require.

