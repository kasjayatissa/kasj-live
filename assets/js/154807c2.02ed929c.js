"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[1365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={slug:"bitwarden",title:"I switched to a self-hosted password manager and I'm not going back",authors:["kas"],tags:["passwords","bitwarden"]},s="I switched to a self-hosted password manager and I'm not going back",i={permalink:"/kasj-live/blog/bitwarden",source:"@site/blog/2023-03-22-passwords/index.md",title:"I switched to a self-hosted password manager and I'm not going back",description:"One of the biggest reasons for creating a homelab is I wanted the ability to leverage the some of the great services and solutions that were available in the public cloud within the safety of my home network where my data was out of reach in the wild world of the internet. I can't think of a better example of this than Password Management.",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"passwords",permalink:"/kasj-live/blog/tags/passwords"},{label:"bitwarden",permalink:"/kasj-live/blog/tags/bitwarden"}],readingTime:2.945,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"bitwarden",title:"I switched to a self-hosted password manager and I'm not going back",authors:["kas"],tags:["passwords","bitwarden"]},prevItem:{title:"Automating configurations with Ansible",permalink:"/kasj-live/blog/ansible"},nextItem:{title:"Fixing my wildcard certificates",permalink:"/kasj-live/blog/certv2"}},l={authorsImageUrls:[void 0]},d=[{value:"There is always a self-hosted alternative",id:"there-is-always-a-self-hosted-alternative",level:2},{value:"Installing Bitwarden",id:"installing-bitwarden",level:2},{value:"Using Bitwarden",id:"using-bitwarden",level:2},{value:"Closing thoughts",id:"closing-thoughts",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the biggest reasons for creating a homelab is I wanted the ability to leverage the some of the great services and solutions that were available in the public cloud within the safety of my home network where my data was out of reach in the wild world of the internet. I can't think of a better example of this than Password Management. "),(0,n.kt)("p",null,"The last 12 months have been incredibly eye opening for a lot of folks when it comes to data privacy with some pretty large breaches impacting millions of people. The Office of the Australian Information Commissioner ",(0,n.kt)("a",{parentName:"p",href:"https://www.oaic.gov.au/privacy/notifiable-data-breaches/notifiable-data-breaches-publications/notifiable-data-breaches-report-july-to-december-2022"},"reports")," 497 breaches were notified compared with 393 in January to June 2022 \u2013 a 26% increase, most of which were malicious or criminal attacks."),(0,n.kt)("p",null,"So many of us (me included) have so many accounts/subscriptions/emails, it is very hard for us to keep up with strong password requirements and practices. Luckily for us there are a number of excellent solutions to generate and manage passwords for us so we don't have to. Passwords can now be long and complicated which dramatically reduce the chances of being hacked or exploited. "),(0,n.kt)("p",null,"I've been using ",(0,n.kt)("a",{parentName:"p",href:"https://www.lastpass.com/"},"LastPass"),' for a number of years and has served me well however late last year I was reminded that there will be attempts to access your data. In December 2022, "an unauthorized party gained access to a third-party cloud-based storage service, which LastPass uses to store archived backups of our production data. Whilst no customer data was accessed during the August 2022 incident, some source code and technical information were stolen from our development environment and used to target another employee, obtaining credentials and keys which were used to access and decrypt some storage volumes within the cloud-based storage service." ',(0,n.kt)("a",{parentName:"p",href:"https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/"},"source")),(0,n.kt)("p",null,"I know, no customer data was stolen and even if the customer data was stolen, it is all encrypted anyway. Also, if I wasn't using LastPass, there was far more of chance I re-use or use weak passwords making it more likely to be exploited."),(0,n.kt)("h2",{id:"there-is-always-a-self-hosted-alternative"},"There is always a self-hosted alternative"),(0,n.kt)("p",null,"Having a free, open-source alternative to a service I would've normally paid for is awesome but this one felt really good. Enter ",(0,n.kt)("a",{parentName:"p",href:"https://bitwarden.com/"},"Bitwarden"),". It is a fantastic, self-hosted, free alternative password manager that does pretty much everything LastPass does (all the features I've been using anyway). Passwords are encrypted, it comes with an official Android and IoS app so that you can access your passwords from your phone and most importantly everything is stored locally."),(0,n.kt)("h2",{id:"installing-bitwarden"},"Installing Bitwarden"),(0,n.kt)("p",null,"I was gearing up to write some manifests when I found a great ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/guerzon/bitwarden-kubernetes"},"repo")," that had some great ones pre-written. Some minor tweaks and it all deployed fine. "),(0,n.kt)("p",null,"One thing I deliberately didn't configure was a mail server (which Bitwarden needs to send out an email verification or send you a password hint if needed). I plan on revisiting this after I deploy a small mail server later."),(0,n.kt)("h2",{id:"using-bitwarden"},"Using Bitwarden"),(0,n.kt)("p",null,"Using Bitwarden couldn't be easier either, it even comes with a handy little ","[guide(https://bitwarden.com/help/import-from-lastpass/)]"," to help you import all your passwords from LastPass"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bitwarden",src:a(5674).Z,width:"2147",height:"1402"})),(0,n.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,n.kt)("p",null,"Password managers are a must have service for everyone and whilst there are a number pretty great cloud-based password managers out there (Google and Apple included), it is quite nice knowing that I don't have to store my data encrypted or otherwise on a server somewhere that isn't one that I own and know. For that reason (and really that reason alone) I'll be sticking to Bitwarden."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/l0G17mcoGBEabVgn6/giphy.gif",alt:"password"})))}p.isMDXComponent=!0},5674:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bitwarden-845582bbe1a3e9a9a16e8c983316e1b6.png"}}]);