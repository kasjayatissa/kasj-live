"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[1161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?s.createElement(g,o(o({ref:t},u),{},{components:n})):s.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const r={slug:"nfs",title:"Persistent volumes and NFS",authors:["kas"],tags:["nfs","persistent-volumes"]},o="Storage classes, persistent volumes and NFS",i={permalink:"/kasj-live/blog/nfs",source:"@site/blog/2023-01-26-nfs/index.md",title:"Persistent volumes and NFS",description:"Containers and pods are ephemeral, kubernetes provides a great advantage of being able to orchestrate the deployment, scaling, deletion of pods. But what about storage? If we use a pod's local filesystem for a given application and that pod is deleted, the application data disappears with it. To solve for this, we need to leverage kubernetes storage classes. Kubernetes supports a number of various storage classes ranging from public cloud storage offering to local file storage. Think the best option for me is a NFS",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"nfs",permalink:"/kasj-live/blog/tags/nfs"},{label:"persistent-volumes",permalink:"/kasj-live/blog/tags/persistent-volumes"}],readingTime:2.925,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"nfs",title:"Persistent volumes and NFS",authors:["kas"],tags:["nfs","persistent-volumes"]},prevItem:{title:"Recipe and shopping list management",permalink:"/kasj-live/blog/mealie"},nextItem:{title:"Certificates for HTTPS",permalink:"/kasj-live/blog/certs"}},l={authorsImageUrls:[void 0]},p=[{value:"Installing an NFS server",id:"installing-an-nfs-server",level:2},{value:"Persistent Volumes",id:"persistent-volumes",level:2},{value:"Dynamic Provisioning of Persistent Volumes",id:"dynamic-provisioning-of-persistent-volumes",level:2},{value:"Testing the provisioner",id:"testing-the-provisioner",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Containers and pods are ephemeral, kubernetes provides a great advantage of being able to orchestrate the deployment, scaling, deletion of pods. But what about storage? If we use a pod's local filesystem for a given application and that pod is deleted, the application data disappears with it. To solve for this, we need to leverage kubernetes ",(0,a.kt)("strong",{parentName:"p"},"storage classes"),". Kubernetes supports a number of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#provisioner"},"various storage classes")," ranging from public cloud storage offering to local file storage. Think the best option for me is a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#nfs"},"NFS")),(0,a.kt)("h2",{id:"installing-an-nfs-server"},"Installing an NFS server"),(0,a.kt)("p",null,"So if I were to do this properly, I'd be running a NAS or NFS box but since I've skimped on the hardware, I'll be installing a NFS server on the same server as my cluster. You might be thinking ",(0,a.kt)("em",{parentName:"p"},'"mate, that\'s just the same as local storage"')," and you would be right but I wanted to eventually switch to a separate NAS so figured I'd just learn how to do this."),(0,a.kt)("p",null,"There are plenty of tutorials available on how to install NFS on Ubuntu but i followed this one. Here are the key commands I took away to get the job done:"),(0,a.kt)("p",null,"Install the NFS server and export ",(0,a.kt)("inlineCode",{parentName:"p"},"/nfs")," which is accessible by the Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\napt update && apt -y upgrade\napt install -y nfs-server\nexit\n\nmkdir /nfs\ncat << EOF >> /etc/exports\n/nfs 192.168.86.41(rw,no_subtree_check,no_root_squash)\nEOF\n\nsystemctl enable --now nfs-server\nexportfs -ar\n")),(0,a.kt)("p",null,"If I ever add another node to my cluster I need to ensure that a NFS client package is installed  able to connect to the NFS server but this isn't required as my NFS server is the same as my Kubernetes node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install -y nfs-common\n")),(0,a.kt)("h2",{id:"persistent-volumes"},"Persistent Volumes"),(0,a.kt)("p",null,"Now that I have a storage location, it is probably worth mentioning that the kubernetes rescource associated to persistent storage is ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volumes"),". Like any other resource, I can provision persistent volumes declaritively to whatever storage class I specify."),(0,a.kt)("p",null,"Once a persistent volume is created, an application deployment can leverage the persistent volume using a ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volume Claim"),". I could be wrong here but I think only one persistent volume claim can be applied to a persistent volume."),(0,a.kt)("h2",{id:"dynamic-provisioning-of-persistent-volumes"},"Dynamic Provisioning of Persistent Volumes"),(0,a.kt)("p",null,"Kubernetes also provides you the ability to dynamically provision storage to applications. I found a nifty little tool that someone made called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"},"NFS subdir external provisioner")," which is an automatic provisioner that uses your existing and already configured NFS server to support dynamic provisioning of Kubernetes Persistent Volumes via Persistent Volume Claims. Persistent volumes are provisioned as ",(0,a.kt)("inlineCode",{parentName:"p"},"${namespace}-${pvcName}-${pvName}"),". To install this I run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner\n\nhelm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\\n  --create-namespace \\\n  --namespace nfs-provisioner \\\n  --set nfs.server=192.168.86.41 \\\n  --set nfs.path=/nfs\n")),(0,a.kt)("h2",{id:"testing-the-provisioner"},"Testing the provisioner"),(0,a.kt)("p",null,"To test the provisioner I run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"nfs",src:n(1251).Z,width:"1915",height:"185"})),(0,a.kt)("p",null,"And will use following persistent volume claim manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: nfs-test\n  labels:\n    storage.k8s.io/name: nfs\n    storage.k8s.io/part-of: kubernetes-complete-reference\n    storage.k8s.io/created-by: ssbostan\nspec:\n  accessModes:\n    - ReadWriteMany\n  storageClassName: nfs-client\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,a.kt)("p",null,"Things of note here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," will vary for each volume claim - I will use the convention of ",(0,a.kt)("inlineCode",{parentName:"li"},"<app_name>-pvc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"labels")," doesn't change for my needs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accessModes")," doesn't change for my needs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storageClassName")," doesn't change for my needs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," will vary for the app but worth noting that the whole specified range is provisioned (not just what you use)")),(0,a.kt)("p",null,"That covers all the core cluster services I reckon, time to install some apps!"))}m.isMDXComponent=!0},1251:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/nfs-2b29f5a958c3a1cccfffc7de4b7e766b.png"}}]);