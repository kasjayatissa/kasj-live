"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[2630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?l.createElement(h,i(i({ref:t},c),{},{components:a})):l.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:n,i[1]=r;for(var u=2;u<o;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));const o={slug:"metallb",title:"Cluster load balancer",authors:["kas"],tags:["loadbalancer","metallb","kubernetes"]},i="Load balancer for K3s cluster",r={permalink:"/kasj-live/blog/metallb",source:"@site/blog/2023-01-22-metallb/index.md",title:"Cluster load balancer",description:"So now I have a cluster - woot! My first thing was to get stuck in and deploying some apps but quickly realised there were a couple of other things that needed to be considered. Say I deployed a web server to my cluster using a small nginx container. It's up and running but how do I access it when it is only routable within my cluster. if you look at the pods IP addresses, they are all 10.1.x.x which is not in my home network.",date:"2023-01-22T00:00:00.000Z",formattedDate:"January 22, 2023",tags:[{label:"loadbalancer",permalink:"/kasj-live/blog/tags/loadbalancer"},{label:"metallb",permalink:"/kasj-live/blog/tags/metallb"},{label:"kubernetes",permalink:"/kasj-live/blog/tags/kubernetes"}],readingTime:2.99,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"metallb",title:"Cluster load balancer",authors:["kas"],tags:["loadbalancer","metallb","kubernetes"]},prevItem:{title:"Cluster reverse proxy",permalink:"/kasj-live/blog/traefik"},nextItem:{title:"Kubernetes cluster - K3s",permalink:"/kasj-live/blog/k3s"}},s={authorsImageUrls:[void 0]},u=[{value:"Installing applications",id:"installing-applications",level:2},{value:"Installing metallb",id:"installing-metallb",level:2},{value:"Configuring metallb",id:"configuring-metallb",level:2},{value:"Verifying installation",id:"verifying-installation",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So now I have a cluster - woot! My first thing was to get stuck in and deploying some apps but quickly realised there were a couple of other things that needed to be considered. Say I deployed a web server to my cluster using a small nginx container. It's up and running but how do I access it when it is only routable within my cluster. if you look at the pods IP addresses, they are all ",(0,n.kt)("em",{parentName:"p"},"10.1.x.x")," which is not in my home network."),(0,n.kt)("p",null,"Well, the answer is I need use a load balancer to expose that web server outside the cluster so that I can see it on my home network. When working in public cloud, these load balancers are usually provided by the cloud providers but I need one for my locally hosted environment."),(0,n.kt)("p",null,"After a bit of research, I found that ",(0,n.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/"},"metallb"),' is the best solution for this. You give it a "pool" of IP addresses within your home network to allocate to services that you want to expose and it just does it (much like a DHCP server)'),(0,n.kt)("h2",{id:"installing-applications"},"Installing applications"),(0,n.kt)("p",null,"So this is my first app that I am going to install on my cluster so it took me a little bit of reading to get to this point but here are my key takeaways of installing this and any app:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can specify kubernetes a ",(0,n.kt)("em",{parentName:"li"},"manifest")," which is basically a yaml file which allows you to declaritively specify what you want to install, where to install it from and what configurations you want and how to expose it."),(0,n.kt)("li",{parentName:"ul"},"Most container applications are containerised with docker and often come with an associated docker-compose file. There is a nifty tool called ",(0,n.kt)("a",{parentName:"li",href:"https://kompose.io/"},"kompose")," which allows you to take these docker-compose files and it converts it to a kubernetes manifest for you to allow it to be deployed to your cluster - I plan on using this a lot."),(0,n.kt)("li",{parentName:"ul"},"Another popular way of installing application is Helm. Helm is a package manager similar to apt (if you're familiar with Ubuntu) which allows you to easily install applications on to your cluster. All you need to do is specify the repo for the application you are wanting to install and it does the rest - I plan on using this a lot too.")),(0,n.kt)("h2",{id:"installing-metallb"},"Installing metallb"),(0,n.kt)("p",null,"Installing metallb is pretty easy out of the box. You are already provided with manifest to deploy using the ",(0,n.kt)("strong",{parentName:"p"},"kubectl apply")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.9/config/manifests/metallb-native.yaml\n")),(0,n.kt)("p",null,"This installs metallb into a new ",(0,n.kt)("strong",{parentName:"p"},"namespace")," called ",(0,n.kt)("strong",{parentName:"p"},"metallb-system"),'. Namespaces are a kubenetes construct that basically allow you a way to organise resources within your cluster. I like to think of them as "folders" in a typical file system. So for metallb, all my resources will live in the metallb-system namespace. This allows for easy troubleshooting in the future as I know where they all live.'),(0,n.kt)("h2",{id:"configuring-metallb"},"Configuring metallb"),(0,n.kt)("p",null,"Once installed, there were some configuration changes that needed to be made. As mentioned earlier, I needed to specify a pool of IP address for metallb to allocate out. I put this into another yaml file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/home-lab/cluster-setup/metallb/metallb-ipconfig.yaml"',title:'"/home-lab/cluster-setup/metallb/metallb-ipconfig.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: first-pool\n  namespace: metallb-system\nspec:\n  addresses:\n  - 192.168.86.100-192.168.86.110\n\n---\napiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: default\n  namespace: metallb-system\n")),(0,n.kt)("h2",{id:"verifying-installation"},"Verifying installation"),(0,n.kt)("p",null,"All done! Here are a few commands to verify my install:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"metallbverify",src:a(8683).Z,width:"1131",height:"323"})),(0,n.kt)("p",null,"But the real test is if it will allocate an IP to a service. Let's test it with reverse proxy service. Stay tuned as I will cover this in my next post!"))}m.isMDXComponent=!0},8683:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/metallbverify-ad2a8d5f1c661e10bce86df9fb31d13f.png"}}]);