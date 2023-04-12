---
slug: ansible
title: Automating configurations with Ansible
authors: [kas]
tags: [ansible, automation]
---

# Automating configurations with Ansible

Over the past couple of weeks, I've been experimenting quite a bit on my server (installing, uninstalling, changing config everywhere). Before I started installing and using my apps in anger I thought it might be best to start clean. This was also a great opporunity to learn Ansible to automate the entire cluster set up.

I've been using Terraform quite a bit as part of my day job and for me Ansible is Terraform's perfect partner in crime. Terraform sets up the infrastructure and Ansible then goes over the top and installs the configuration. Both tools operate under the same way, configurations describe the state that you need in a declarative manner. So for cluster set up my target is to automate the following tasks after a fresh version of Ubuntu is installed:

1. Install K3s
2. Install load balancer Metallb
3. Install NFS server
4. Install reverse proxy Traefik
5. Install Cert Manager and Certificates
6. Install ArgoCD (which will deploy all my apps - more on this in a future post)

## Ansible playbooks and roles

Ansible configurations are written in a file which contains all the various config tasks that are needed to be run along with instructions to execute these tasks called **ansible playbooks**. You could theoretically write one big playbook to automate all the tasks above but it is easier to keep things modular. This is where **ansible roles** comes in - roles are simply a more modular version of a playbook which contains its own file structure, variables and handlers. More importantly for me, grouping things by roles allow you to share your playbooks easier with other users. 

Through the wonderful open source community I was able to source some great roles through Ansible galaxy (Ansible role marketplace) and Github, I was able to source and tweak the following roles:

* Techno Tim's role to install [K3s and Metallb](https://github.com/techno-tim/k3s-ansible)
* Jeff Geerling's role to install [NFS server](https://galaxy.ansible.com/geerlingguy/nfs)
* Githubixx's role to install [cert-manager](https://galaxy.ansible.com/githubixx/cert_manager_kubernetes) and [traefik](https://galaxy.ansible.com/githubixx/traefik_kubernetes)
* Reefland's role to install [ArgoCD](https://github.com/reefland/ansible-k3s-argocd-renovate)

Honestly, I didn't need to make many tweaks to these playbooks at all, if anything I needed to remove tasks because they were doing more than I needed to do. All I needed to do was point these playbooks to my local servers, ensure I had SSH connectivity and the playbooks did the rest - Pretty cool!

