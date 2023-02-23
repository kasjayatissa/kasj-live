"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[2807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={slug:"k3s",title:"Kubernetes cluster - K3s",authors:["kas"],tags:["k8s","k3s","kubernetes"]},o="Kubernetes cluster set up",l={permalink:"/kasj-live/blog/k3s",source:"@site/blog/2023-01-25-k3s/index.md",title:"Kubernetes cluster - K3s",description:"So with my hardware set up, it was time to get my software up and running. One of the main objectives of setting up this homelab was to get familiar with kubernetes so we need to get a cluster up and running so I can do more than this:",date:"2023-01-25T00:00:00.000Z",formattedDate:"January 25, 2023",tags:[{label:"k8s",permalink:"/kasj-live/blog/tags/k-8-s"},{label:"k3s",permalink:"/kasj-live/blog/tags/k-3-s"},{label:"kubernetes",permalink:"/kasj-live/blog/tags/kubernetes"}],readingTime:2.695,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"k3s",title:"Kubernetes cluster - K3s",authors:["kas"],tags:["k8s","k3s","kubernetes"]},prevItem:{title:"Cluster load balancer",permalink:"/kasj-live/blog/metallb"},nextItem:{title:"Gear up",permalink:"/kasj-live/blog/hardware"}},i={authorsImageUrls:[void 0]},u=[{value:"Installing an OS",id:"installing-an-os",level:2},{value:"K8s vs K3s",id:"k8s-vs-k3s",level:2},{value:"Installing K3s",id:"installing-k3s",level:2},{value:"Accessing my K3s cluster",id:"accessing-my-k3s-cluster",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"So with my hardware set up, it was time to get my software up and running. One of the main objectives of setting up this homelab was to get familiar with kubernetes so we need to get a cluster up and running so I can do more than this:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pbs.twimg.com/media/EDrZEKCWwAAG_Ty.jpg",alt:"dilbert"})),(0,s.kt)("h2",{id:"installing-an-os"},"Installing an OS"),(0,s.kt)("p",null,"I needed to get an OS installed on my NUC before anything else. There are plenty of open source options out there but I stuck with trusty ",(0,s.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"},"Ubuntu Server 22.04.1 LTS ")),(0,s.kt)("h2",{id:"k8s-vs-k3s"},"K8s vs K3s"),(0,s.kt)("p",null,'Before I got stuck into deploying my kubernetes I wanted to investigate what options I had for a homelab. It boiled down to two main ones: K8s vs K3s. Both K8s and K3s share the same source code but the key difference for me was that K3s was significantly more lightweight, can be deployed much faster and still all all the key capabilities of K8s. There are a number of "production grade" features that are excluded from K3s such has handling of complex applications and intergrations with public cloud providers which I didn\'t require.'),(0,s.kt)("h2",{id:"installing-k3s"},"Installing K3s"),(0,s.kt)("p",null,"Installing K3s couldn't be more easier out of the box and it takes no time at all. I simply needed to ssh into my freshly install ubuntu server and execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh - \n")),(0,s.kt)("p",null,"and to uninstall it is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-uninstall.sh\n")),(0,s.kt)("p",null,"I must admit I ran these commands ",(0,s.kt)("strong",{parentName:"p"},"ALOT")," because there were a number of things that were installed by default which I didn't need (yet). I'm not going to get into the various customisable configuration options here but there is some pretty good ",(0,s.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation/configuration"},"documentation")," for it. After tweaking my configuration, I ended up with the following command to install the cluster I wanted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" INSTALL_K3S_EXEC="--disable traefik --disable servicelb --disable kube-proxy --disable local-storage --cluster-init --tls-san 10.43.0.1" sh -s -\n')),(0,s.kt)("h2",{id:"accessing-my-k3s-cluster"},"Accessing my K3s cluster"),(0,s.kt)("p",null,"Ok time to run my first kubectl command. To verify that everything was running properly I run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kubectl get nodes\n")),(0,s.kt)("p",null,"which shows me my single node in my cluster is up and running:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"getnodes",src:n(908).Z,width:"1030",height:"229"})),(0,s.kt)("p",null,"I needed to run it in sudo which I thought was annoying -I had to fix this (OCD much?). The K3s kubeconfig file is stored at a rancher location /etc/rancher/k3s.\nI ",(0,s.kt)("em",{parentName:"p"},"think")," this is why I needed to run kubectl in sudo. So I ran the following steps to rectify that:"),(0,s.kt)("p",null,"Create .kube directory in my home directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /home/kas/.kube\n")),(0,s.kt)("p",null,"Copy the kubeconfig file into the newly created directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp /etc/rancher/k3s/k3s.yaml /home/kas/.kube/config\n")),(0,s.kt)("p",null,"Change ownership of the directory so that root wasn't needed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown kas:kas /home/kas/.kube/config\n")),(0,s.kt)("p",null,"Let K3s know the location of the new config file (and hopefully the last time I have to use sudo for kubectl)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kubectl config set-cluster default --server=https://192.168.86.41:6443 --kubeconfig /home/kas/.kube/config\n")),(0,s.kt)("p",null,"I wanted to ensure I could access my cluster from my laptop without having to SSH into my ubuntu server (k3smaster) everytime. To do this I needed copy the kubeconfig file across to my laptop using scp:"),(0,s.kt)("p",null,"From my laptop I run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scp k3smaster:/home/kas/.kube/config /home/kas/.kube/config\n")),(0,s.kt)("p",null,"...and I'm laughing::"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"getnodes",src:n(8135).Z,width:"975",height:"218"})))}m.isMDXComponent=!0},8135:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getnodes-lappa-454d3ff3a3eb61f077ff7204c1a51ebb.png"},908:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getnodes-0b268dc6880ef4aa52b4ad1b5c643261.png"}}]);