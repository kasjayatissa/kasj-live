"use strict";(self.webpackChunkkasj_live=self.webpackChunkkasj_live||[]).push([[715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"hardware",title:"Gear up",authors:["kas"],tags:["homelab","self-hosting","nuc","hardware"]},l=void 0,s={permalink:"/kasj-live/blog/hardware",source:"@site/blog/2023-01-20-hardware/index.md",title:"Gear up",description:"I've normally resorted to buying raspberry pi's (I now have a Model 2B, 3B and 4) and don't have any major self-hosting requirements so I considered clustering them together. Given the current ARM architecture limitations on the older models, I decided I will bite the bullet and buy some more dedicated hardware. I also figured I could:",date:"2023-01-20T00:00:00.000Z",formattedDate:"January 20, 2023",tags:[{label:"homelab",permalink:"/kasj-live/blog/tags/homelab"},{label:"self-hosting",permalink:"/kasj-live/blog/tags/self-hosting"},{label:"nuc",permalink:"/kasj-live/blog/tags/nuc"},{label:"hardware",permalink:"/kasj-live/blog/tags/hardware"}],readingTime:1.1,hasTruncateMarker:!1,authors:[{name:"Kas J",title:"Author",url:"https://github.com/kasjayatissa",imageURL:"https://avatars.githubusercontent.com/u/90017589?v=4",key:"kas"}],frontMatter:{slug:"hardware",title:"Gear up",authors:["kas"],tags:["homelab","self-hosting","nuc","hardware"]},prevItem:{title:"Kubernetes cluster - K3s",permalink:"/kasj-live/blog/k3s"},nextItem:{title:"Clean up",permalink:"/kasj-live/blog/cable-management"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I've normally resorted to buying raspberry pi's (I now have a Model 2B, 3B and 4) and don't have any major self-hosting requirements so I considered clustering them together. Given the current ARM architecture limitations on the older models, I decided I will bite the bullet and buy some more dedicated hardware. I also figured I could:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add the raspberry pi's into the cluster for some more resources if need be at a later date. "),(0,n.kt)("li",{parentName:"ul"},"Use the raspberry pi's as an isolated sandbox for testing")),(0,n.kt)("p",null,"With Raspberry Pi 4's currently in low stocks, I started exploring mini PCs/NUCs. They are actually pretty cool, the specs are much better, the costs aren't that much higher and they are built to last."),(0,n.kt)("p",null,"I ended up getting ",(0,n.kt)("a",{parentName:"p",href:"https://www.centrecom.com.au/intel-nuc-11-essential-kit-celeron-n4505-atlas-canyon"},"Intel NUC 11 Essential Kit Celeron N4505 (Atlas Canyon)")," which was on special at CentreCom. I unboxed and plugged it in immediately only to realise that it is pretty barebones unfortunately. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn1.centrecom.com.au/images/upload/0135473_0.jpeg",alt:"NUC"})),(0,n.kt)("p",null,"The site doesn't cover it but it doesn't come with any pre-installed HDD or RAM (that's why it was cheap!) so I needed to get those off Amazon. Here's what I bought:"),(0,n.kt)("p",null,"2 X ",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com.au/dp/B08C4Z69LN?psc=1&ref=ppx_yo2ov_dt_b_product_details"},"8GB DDR4 RAM")),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://m.media-amazon.com/images/I/71exOjbZWiL._AC_SX679_.jpg",alt:"RAM"})),(0,n.kt)("p",null,"1 x ",(0,n.kt)("a",{parentName:"p",href:"https://m.media-amazon.com/images/I/418VuyafoUL._AC_SL1075_.jpg"},"500GB SSD Hard Drive")),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://cdn.mwave.com.au/images/400/crucial_p5_plus_500gb_nvme_m2_pcie_3d_nand_ssd_ct500p5pssd8_ac46349.jpg",alt:"HDD"})),(0,n.kt)("p",null,"Installing them were pretty easy - plug n play, I was then ready to rock n roll!"))}m.isMDXComponent=!0}}]);