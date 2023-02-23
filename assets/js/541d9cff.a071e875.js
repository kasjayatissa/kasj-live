"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[3016],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={slug:"certs",title:"Certificates for HTTPS",authors:["kas"],tags:["certificates","letsencrypt"]},s="Certificates for HTTPS",l={permalink:"/kasj-live/blog/certs",source:"@site/blog/2023-02-16-letsencrypt/index.md",title:"Certificates for HTTPS",description:"Automatic Certificate Management Environment (ACME) Certificates can are usually provided through issuers. LetsEncrypt is a nonprofit Certificate Authority that provides free TLS certificates to millions of websites all around the world. This is was good enough for me!",date:"2023-02-16T00:00:00.000Z",formattedDate:"February 16, 2023",tags:[{label:"certificates",permalink:"/kasj-live/blog/tags/certificates"},{label:"letsencrypt",permalink:"/kasj-live/blog/tags/letsencrypt"}],readingTime:3.575,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"certs",title:"Certificates for HTTPS",authors:["kas"],tags:["certificates","letsencrypt"]},prevItem:{title:"Persistent volumes and NFS",permalink:"/kasj-live/blog/nfs"},nextItem:{title:"Cluster reverse proxy",permalink:"/kasj-live/blog/traefik"}},o={authorsImageUrls:[void 0]},c=[{value:"Adding cloudflare token to cert-manager",id:"adding-cloudflare-token-to-cert-manager",level:2},{value:"Adding Let&#39;s Encrypt as an Issuer to cert-manager",id:"adding-lets-encrypt-as-an-issuer-to-cert-manager",level:2},{value:"Issuing certificates",id:"issuing-certificates",level:2},{value:"Testing the issued certificate",id:"testing-the-issued-certificate",level:2},{value:"And the results",id:"and-the-results",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Automatic Certificate Management Environment (ACME) Certificates can are usually provided through issuers. LetsEncrypt is a nonprofit Certificate Authority that provides free TLS certificates to millions of websites all around the world. This is was good enough for me!"),(0,r.kt)("h2",{id:"adding-cloudflare-token-to-cert-manager"},"Adding cloudflare token to cert-manager"),(0,r.kt)("p",null,"First I needed a domain name which I purchased through CloudFlare but can be from anywhere really. You guessed it - mine is ",(0,r.kt)("inlineCode",{parentName:"p"},"kasj.live"),". From there I needed to obtain an cloudflare token which was a personal access token to manage my DNS records in my cloudflare account. I needed this as I needed to provide it to cert-manager, which will be brokering the certificates between letsencrypt and my domain."),(0,r.kt)("p",null,"Providing cert-manager my cloudflare token could be done with a simple manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=secret-cf-token.yaml",title:"secret-cf-token.yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-token-secret\n  namespace: cert-manager\ntype: Opaque\nstringData:\n  cloudflare-token: <redacted>\n")),(0,r.kt)("p",null,"To apply the manifest run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f secret-cf-token.yaml\n")),(0,r.kt)("h2",{id:"adding-lets-encrypt-as-an-issuer-to-cert-manager"},"Adding Let's Encrypt as an Issuer to cert-manager"),(0,r.kt)("p",null,"I now need to let cert-manager know that I'll be using Let's Encrypt as my certificate issuer of choice through another manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="letsencrypt-production.yaml"',title:'"letsencrypt-production.yaml"'},'apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-production\nspec:\n  acme:\n    server: https://acme-v02.api.letsencrypt.org/directory\n    email: kasunj@gmail.com\n    privateKeySecretRef:\n      name: letsencrypt-production\n    solvers:\n      - dns01:\n          cloudflare:\n            email: kasunj@gmail.com\n            apiTokenSecretRef:\n              name: cloudflare-token-secret\n              key: cloudflare-token\n        selector:\n          dnsZones:\n            - "kasj.live"\n')),(0,r.kt)("p",null,"and execute using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f letsencrypt-production.yaml\n")),(0,r.kt)("h2",{id:"issuing-certificates"},"Issuing certificates"),(0,r.kt)("p",null,"With the issuer now configured, all I need to do is request for a certificate. I will be hosting all my internal applications under the subdomain ",(0,r.kt)("inlineCode",{parentName:"p"},"local.kasj.live")," so i will request for a wildcard certicate that covers ",(0,r.kt)("inlineCode",{parentName:"p"},"*.local.kasj.live")),(0,r.kt)("p",null,"The certificate is issued with the following manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="local-kasj-live.yaml"',title:'"local-kasj-live.yaml"'},'apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: local-kasj-live\n  namespace: default\nspec:\n  secretName: local-kasj-live-tls\n  issuerRef:\n    name: letsencrypt-production\n    kind: ClusterIssuer\n  commonName: "*.local.kasj.live"\n  dnsNames:\n  - "local.kasj.live"\n  - "*.local.kasj.live"\n')),(0,r.kt)("p",null,"and execute using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f local-kasj-live.yaml\n")),(0,r.kt)("p",null,"Issuing  and validating the certificates takes time (20 minutes minimum). To check how things are progressing run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get challenges\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You'll notice that I use the issuer name ",(0,r.kt)("inlineCode",{parentName:"p"},"letsencrypt-production")," - I didn't jump straight to this but rather used ",(0,r.kt)("inlineCode",{parentName:"p"},"letsencrypt-staging")," first to make sure all my configuration was correct. If you jump straight to production but if it doesn't work for whatever reason you might be locked out by letsencrypt for a period of time.")),(0,r.kt)("h2",{id:"testing-the-issued-certificate"},"Testing the issued certificate"),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get challenges")," command produces nothing, that's when you know the process is complete. To use a certificate, you need to ensure a couple of things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The certificate needs to be made available in multiple namespaces. The certificate only works if it is deployed in the same namespaces as the service you are using it for. With a bit of googling I've been using the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mittwald/kubernetes-replicator"},"solution")," for this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We use Traefik to specify and ",(0,r.kt)("inlineCode",{parentName:"p"},"ingressRoute")," which essentionally provides traefik with the instructions on where to route traffic hitting the reverse proxy. We can also specify here that a certificate must be used."))),(0,r.kt)("p",null,"To test above, I deployed the Traefik dashboard (with the help of their documentation and TechnoTim) with the following steps:"),(0,r.kt)("p",null,"Create and deploy a middleware manifest that forces https:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="middleware.yaml"',title:'"middleware.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: Middleware\nmetadata:\n  name: traefik-dashboard-basicauth\n  namespace: traefik\nspec:\n  basicAuth:\n    secret: traefik-dashboard-auth\n")),(0,r.kt)("p",null,"Generate a credential whichi is mandatory for the dashboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate a credential / password that\u2019s base64 encoded\nhtpasswd -nb kas <redacted> | openssl base64\n")),(0,r.kt)("p",null,"Create and apply a manifest to deploy the dashboard. Note you need to use the output from command above for the password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: traefik-dashboard-auth\n  namespace: traefik\ntype: Opaque\ndata:\n  users: <redacted hased password which is output from above>\n")),(0,r.kt)("p",null,"Finally I create a manifest for an ",(0,r.kt)("inlineCode",{parentName:"p"},"ingressRoute")," which will route traffic from ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.local.kasj.live")," to my dashboard using TLS certificate I just created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="traefik-ingress.yaml"',title:'"traefik-ingress.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: traefik-dashboard\n  namespace: traefik\n  annotations:\n    kubernetes.io/ingress.class: traefik-external\nspec:\n  entryPoints:\n    - websecure\n  routes:\n    - match: Host(`traefik.local.kasj.live`)\n      kind: Rule\n      middlewares:\n        - name: traefik-dashboard-basicauth\n          namespace: traefik\n      services:\n        - name: api@internal\n          kind: TraefikService\n  tls:\n    secretName: local-kasj-live-tls\n")),(0,r.kt)("h2",{id:"and-the-results"},"And the results"),(0,r.kt)("p",null,"So now if I navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://traefik.local.kasj.live")," I can not see the traefik dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"traefik",src:a(2715).Z,width:"2256",height:"1158"})),(0,r.kt)("p",null,"And more importantly with a certificate issued from Let's Encrypt!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cert",src:a(6351).Z,width:"2251",height:"1210"})))}d.isMDXComponent=!0},6351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cert-3dae7784beb4f09de97fa3c456323fc5.png"},2715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/traefik-964c8931ab2b50b4ed482c7819086692.png"}}]);