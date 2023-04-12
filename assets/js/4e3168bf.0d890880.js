"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[1919],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>v});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),m=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,v=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return a?t.createElement(v,i(i({ref:n},c),{},{components:a})):t.createElement(v,i({ref:n},c))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2034:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_position:10},i="Mealie",s={unversionedId:"homelab-services/mealie",id:"homelab-services/mealie",title:"Mealie",description:"Mealie is a self-hosted recipe manager and meal planner with a RestAPI backend and a reactive frontend application",source:"@site/docs/01-homelab-services/10-mealie.md",sourceDirName:"01-homelab-services",slug:"/homelab-services/mealie",permalink:"/kasj-live/docs/homelab-services/mealie",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Adguard",permalink:"/kasj-live/docs/homelab-services/adguard"},next:{title:"Useful Kubernetes Commands",permalink:"/kasj-live/docs/kube-commands"}},o={},m=[{value:"Persistent Volumes:",id:"persistent-volumes",level:2},{value:"Deployment:",id:"deployment",level:2},{value:"Service:",id:"service",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Ingress",id:"ingress",level:2}],c={toc:m},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mealie"},"Mealie"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hay-kot.github.io/mealie/"},"Mealie")," is a self-hosted recipe manager and meal planner with a RestAPI backend and a reactive frontend application"),(0,r.kt)("p",null,"Mealie Manifests generated from Kompose:"),(0,r.kt)("h2",{id:"persistent-volumes"},"Persistent Volumes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="01-mealie-claim0-persistentvolumeclaim.yaml"',title:'"01-mealie-claim0-persistentvolumeclaim.yaml"'},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  creationTimestamp: null\n  labels:\n    io.kompose.service: mealie-claim0\n  name: mealie-claim0\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 100Mi\nstatus: {}\n")),(0,r.kt)("h2",{id:"deployment"},"Deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="02-mealie-deployment.yaml"',title:'"02-mealie-deployment.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n    kompose.cmd: kompose convert\n    kompose.version: 1.26.0 (40646f47)\n  creationTimestamp: null\n  labels:\n    io.kompose.service: mealie\n  name: mealie\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      io.kompose.service: mealie\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      annotations:\n        kompose.cmd: kompose convert\n        kompose.version: 1.26.0 (40646f47)\n      creationTimestamp: null\n      labels:\n        io.kompose.service: mealie\n    spec:\n      containers:\n        - env:\n            - name: PGID\n              value: "1000"\n            - name: PUID\n              value: "1000"\n            - name: RECIPE_DISABLE_AMOUNT\n              value: "false"\n            - name: RECIPE_DISABLE_COMMENTS\n              value: "false"\n            - name: RECIPE_LANDSCAPE_VIEW\n              value: "true"\n            - name: RECIPE_PUBLIC\n              value: "true"\n            - name: RECIPE_SHOW_ASSETS\n              value: "true"\n            - name: RECIPE_SHOW_NUTRITION\n              value: "true"\n            - name: TZ\n              value: Australia/Melbourne\n          image: hkotel/mealie:latest\n          name: mealie\n          ports:\n            - containerPort: 80\n          resources: {}\n          volumeMounts:\n            - mountPath: /app/data\n              name: mealie-claim0\n      restartPolicy: Always\n      volumes:\n        - name: mealie-claim0\n          persistentVolumeClaim:\n            claimName: mealie-claim0\nstatus: {}\n')),(0,r.kt)("h2",{id:"service"},"Service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="03-mealie-service.yaml"',title:'"03-mealie-service.yaml"'},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    kompose.cmd: kompose convert\n    kompose.version: 1.26.0 (40646f47)\n  creationTimestamp: null\n  labels:\n    io.kompose.service: mealie\n  name: mealie\nspec:\n  ports:\n    - name: "9925"\n      port: 9925\n      targetPort: 80\n  selector:\n    io.kompose.service: mealie\nstatus:\n  loadBalancer: {}\n')),(0,r.kt)("h2",{id:"middleware"},"Middleware"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="04-mealie-headers.yaml"',title:'"04-mealie-headers.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: Middleware\nmetadata:\n  name: mealie-headers\n  namespace: mealie\nspec:\n  headers:\n    browserXssFilter: true\n    contentTypeNosniff: true\n    forceSTSHeader: true\n    stsIncludeSubdomains: true\n    stsPreload: true\n    stsSeconds: 15552000\n    customFrameOptionsValue: SAMEORIGIN\n    customRequestHeaders:\n      X-Forwarded-Proto: https\n")),(0,r.kt)("h2",{id:"ingress"},"Ingress"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="05-mealie-ingress.yaml"',title:'"05-mealie-ingress.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: mealie-ingress\n  namespace: mealie\n  annotations:\n    kubernetes.io/ingress.class: traefik-external\nspec:\n  entryPoints:\n    - websecure\n  routes:\n  - match: Host(`mealie.local.kasj.live`)\n    kind: Rule\n    services:\n    - name: mealie\n      port: 9925\n    middlewares:\n        - name: mealie-headers\n  tls:\n    secretName: local-kasj-live-tls\n")))}u.isMDXComponent=!0}}]);