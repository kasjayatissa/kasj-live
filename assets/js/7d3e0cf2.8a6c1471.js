"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[8453],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={slug:"mealie",title:"Recipe and Shopping List Management with Mealie",authors:["kas"],tags:["mealie","recipe","shopping-list"]},r="Recipe and Shopping List Management with Mealie",o={permalink:"/kasj-live/blog/mealie",source:"@site/blog/2023-02-24-mealie/index.md",title:"Recipe and Shopping List Management with Mealie",description:"During the COVID period, we start using online grocery shopping with click and collect. It has actually been saving us a bit of money as we're not tempted with impulse purchases while walking up and down the ailes. The downside is that the process can actually be quite cumbersome.",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"mealie",permalink:"/kasj-live/blog/tags/mealie"},{label:"recipe",permalink:"/kasj-live/blog/tags/recipe"},{label:"shopping-list",permalink:"/kasj-live/blog/tags/shopping-list"}],readingTime:3.1,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"mealie",title:"Recipe and Shopping List Management with Mealie",authors:["kas"],tags:["mealie","recipe","shopping-list"]},nextItem:{title:"Adblocker and DNS server",permalink:"/kasj-live/blog/dns"}},s={authorsImageUrls:[void 0]},p=[{value:"Mealie",id:"mealie",level:2},{value:"Installing Mealie",id:"installing-mealie",level:2},{value:"Testing mealie",id:"testing-mealie",level:2},{value:"Closing thoughts",id:"closing-thoughts",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,i.kt)(c,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"During the COVID period, we start using online grocery shopping with click and collect. It has actually been saving us a bit of money as we're not tempted with impulse purchases while walking up and down the ailes. The downside is that the process can actually be quite cumbersome."),(0,i.kt)("p",null,"What we do now:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Spend ages looking for meal ideas for the week"),(0,i.kt)("li",{parentName:"ol"},"Collate a list of recipes"),(0,i.kt)("li",{parentName:"ol"},"Collate recipe ingredients"),(0,i.kt)("li",{parentName:"ol"},"Check the pantry and finalise shopping list"),(0,i.kt)("li",{parentName:"ol"},"Order items in shopping list")),(0,i.kt)("p",null,"Now we haven't been necessarily doing it in that order either, we have been sporadically looking up recipe at a time and adding things to our online shopping cart over time, a lot of time. Now I don't think I can automate this completely but surely there was a better way to help reduce this time with a homelab app. Enter Mealie."),(0,i.kt)("h2",{id:"mealie"},"Mealie"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hay-kot.github.io/mealie/"},"Mealie")," is a self-hosted recipe manager and meal planner with a RestAPI backend and a reactive frontend application. It has some awesome features but the key ones I hope to leverage are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to create a custome recipe book by importing online recipes"),(0,i.kt)("li",{parentName:"ul"},"Meal planner to choose our recipes for the week"),(0,i.kt)("li",{parentName:"ul"},"Shopping list creator based on our meal plan")),(0,i.kt)("h2",{id:"installing-mealie"},"Installing Mealie"),(0,i.kt)("p",null,"I'll be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kompose convert")," method to install Mealie. I'm not going to cover it again but if you are interested check out my previous post as I installed ",(0,i.kt)("strong",{parentName:"p"},"Adguard Home")," with the same method."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kompose convert")," command generated the following manifest files for me (I renamed them for my convenience):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"01-mealie-claim0-persistentvolumeclaim.yaml"),(0,i.kt)("li",{parentName:"ul"},"02-mealie-deployment.yaml"),(0,i.kt)("li",{parentName:"ul"},"03-mealie-service.yaml")),(0,i.kt)("p",null,"Deploying these files using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f mealie/")," deploys mealie in my cluster. Now what I need to do is expose this service to a webbrowser. If you've been following my previous posts, I've tried this in two ways, either giving it a network IP through Metallb or using my reverse proxy Traefik to route it through an internal domain. I'll be using the Traefik method today."),(0,i.kt)("p",null,"So to expose my service I create two additional files:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"04-mealie-headers.yaml")," to specify some middleware to force https:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="04-mealie-headers.yaml"',title:'"04-mealie-headers.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: Middleware\nmetadata:\n  name: mealie-headers\n  namespace: mealie\nspec:\n  headers:\n    browserXssFilter: true\n    contentTypeNosniff: true\n    forceSTSHeader: true\n    stsIncludeSubdomains: true\n    stsPreload: true\n    stsSeconds: 15552000\n    customFrameOptionsValue: SAMEORIGIN\n    customRequestHeaders:\n      X-Forwarded-Proto: https\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"05-mealie-ingress.yaml")," to specify my routing rule so that when I navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mealie.local.kasj.live")," Traefik will route to my mealie application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="05-mealie-ingress.yaml"',title:'"05-mealie-ingress.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: mealie-ingress\n  namespace: mealie\n  annotations:\n    kubernetes.io/ingress.class: traefik-external\nspec:\n  entryPoints:\n    - websecure\n  routes:\n  - match: Host(`mealie.local.kasj.live`)\n    kind: Rule\n    services:\n    - name: mealie\n      port: 9925\n    middlewares:\n        - name: mealie-headers\n  tls:\n    secretName: local-kasj-live-tls\n")),(0,i.kt)("h2",{id:"testing-mealie"},"Testing mealie"),(0,i.kt)("p",null,"Navigate to  ",(0,i.kt)("inlineCode",{parentName:"p"},"mealie.local.kasj.live")," and woot - we have an application!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie1",src:a(2289).Z,width:"2240",height:"1424"})),(0,i.kt)("p",null,"Cool feature #1 - ",(0,i.kt)("strong",{parentName:"p"},"Recipe Import"),". All I need to do is enter a recipe URL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie5",src:a(8508).Z,width:"2221",height:"1424"})),(0,i.kt)("p",null,"And mealie imports it for me!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie6",src:a(5130).Z,width:"2216",height:"1423"})),(0,i.kt)("p",null,"Once I have a bunch of recipes imported it is time for feature #2 - ",(0,i.kt)("strong",{parentName:"p"},"Weekly Meal Planner"),". I simply just pick from my imported recipes which is pretty quick!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie2",src:a(8132).Z,width:"2232",height:"1414"})),(0,i.kt)("p",null,"Sweet, now that I have weekly meal plan all I need is a shopping list. Hey look feature number #3 - ",(0,i.kt)("strong",{parentName:"p"},"Shopping List"),". Mealie takes all the ingredients from the meals you've selected in your weekly meal plan and throws them in a list for you."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie3",src:a(6835).Z,width:"2235",height:"1427"})),(0,i.kt)("p",null,"All we need to do now is trim the list based on what we have already, split the list between us and add to shopping cart!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mealie4",src:a(7617).Z,width:"2237",height:"1424"})),(0,i.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,i.kt)("p",null,"We've been using Mealie for about a week now and we've cut the time spent on grocery ordering signficantly. Happy wife - thanks mealie!"))}u.isMDXComponent=!0},2289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie1-734616c3593dbaf6bd4f74d0da174929.png"},8132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie2-1b943133f74806cd4cd330a3bc99b498.png"},6835:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie3-7e4e6696b03957e402ac5566eaa3fa3c.png"},7617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie4-85d8274336a17fbbdf50ac7ff6120929.png"},8508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie5-7cc366d9fa577e7ece6444928e79e38f.png"},5130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mealie6-aa69598bfdb27c28cc310a1c4147a82a.png"}}]);