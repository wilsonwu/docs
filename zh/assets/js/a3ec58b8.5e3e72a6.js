"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(3117),r=(n(7294),n(3905));const l={title:"\u624b\u52a8\u5347\u7ea7",weight:10},s=void 0,p={unversionedId:"upgrades/manual",id:"upgrades/manual",title:"\u624b\u52a8\u5347\u7ea7",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/zh/upgrades/manual",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1691773630,formattedLastUpdatedAt:"2023\u5e748\u670811\u65e5",frontMatter:{title:"\u624b\u52a8\u5347\u7ea7",weight:10},sidebar:"mySidebar",previous:{title:"\u505c\u6b62 K3s",permalink:"/zh/upgrades/killall"},next:{title:"\u81ea\u52a8\u5347\u7ea7",permalink:"/zh/upgrades/automated"}},o={},i=[{value:"\u7248\u672c Channels",id:"\u7248\u672c-channels",level:3},{value:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s",id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-k3s",level:3},{value:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 K3s",id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-k3s",level:3},{value:"\u91cd\u542f K3s",id:"\u91cd\u542f-k3s",level:3}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5347\u7ea7\u65f6\u4f1a\u5148\u5347\u7ea7 Server \u8282\u70b9\uff0c\u7136\u540e\u518d\u5347\u7ea7 Agent \u8282\u70b9\u3002")),(0,r.kt)("h3",{id:"\u7248\u672c-channels"},"\u7248\u672c Channels"),(0,r.kt)("p",null,"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u6216\u4f7f\u7528\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\u529f\u80fd\u6267\u884c\u7684\u5347\u7ea7\u53ef\u4ee5\u7ed1\u5b9a\u5230\u4e0d\u540c\u7684\u7248\u672c channels\u3002\u4ee5\u4e0b\u662f\u53ef\u7528\u7684 channels\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Channel"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stable"),(0,r.kt)("td",{parentName:"tr",align:null},"\uff08\u9ed8\u8ba4\uff09\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528\u7a33\u5b9a\u7248\u3002\u8fd9\u4e9b\u7248\u672c\u5df2\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684\u793e\u533a\u5f3a\u5316\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u6765\u8bd5\u7528\u6700\u65b0\u529f\u80fd\u3002\u8fd9\u4e9b\u7248\u672c\u5df2\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684\u793e\u533a\u5f3a\u5316\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v1.26\uff08\u793a\u4f8b\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a Kubernetes \u6b21\u8981\u7248\u672c\u90fd\u6709\u4e00\u4e2a release channel\uff0c\u5305\u62ec EOL \u7684\u7248\u672c\u3002\u8fd9\u4e9b channel \u4f1a\u9009\u62e9\u53ef\u7528\u7684\u6700\u65b0\u8865\u4e01\uff0c\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\u3002")))),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u7684\u6700\u65b0 channel \u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://update.k3s.io/v1-release/channels"},"k3s channel \u670d\u52a1 API"),"\u3002\u6709\u5173 channel \u5982\u4f55\u5de5\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver \u9879\u76ee"),"\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c1d\u8bd5\u5347\u7ea7\u5230 K3s \u65b0\u7248\u672c\u65f6\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes \u7248\u672c\u503e\u659c\u7b56\u7565"),"\u9002\u7528\u3002\u786e\u4fdd\u4f60\u7684\u8ba1\u5212\u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u8df3\u8fc7\u4e2d\u95f4\u6b21\u8981\u7248\u672c\u3002system-upgrade-controller \u672c\u8eab\u4e0d\u4f1a\u9632\u6b62\u66f4\u6539\u5230\u4e0d\u652f\u6301\u7684 Kubernetes \u7248\u672c\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-k3s"},"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s"),(0,r.kt)("p",null,"\u8981\u5347\u7ea7\u65e7\u7248\u672c\u7684 K3s\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6700\u521d\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u4f7f\u7528\u7684\u76f8\u540c\u914d\u7f6e\u9009\u9879\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u811a\u672c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC")," \u53d8\u91cf\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_")," \u53d8\u91cf\u548c\u5c3e\u968f\u7684 shell \u53c2\u6570\u6765\u751f\u6210 systemd \u5355\u5143\u548c\u73af\u5883\u6587\u4ef6\u3002\n\u5982\u679c\u4f60\u5728\u6700\u521d\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u8fdb\u884c\u4e86\u914d\u7f6e\uff0c\u4f46\u5728\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u6ca1\u6709\u91cd\u65b0\u8bbe\u7f6e\uff0c\u5219\u539f\u59cb\u503c\u5c06\u4f1a\u4e22\u5931\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6")," \u7684\u5185\u5bb9\u4e0d\u53d7\u5b89\u88c5\u811a\u672c\u7ba1\u7406\u3002\n\u8981\u8ba9\u4f60\u7684\u914d\u7f6e\u72ec\u7acb\u4e8e\u5b89\u88c5\u811a\u672c\uff0c\u8bf7\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u800c\u4e0d\u662f\u4f20\u9012\u73af\u5883\u53d8\u91cf\u6216\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u53c2\u6570\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u5347\u7ea7\u5230\u5f53\u524d\u7684\u7a33\u5b9a\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5347\u7ea7\u5230\u7279\u5b9a channel\uff08\u5982 latest\uff09\u4e2d\u7684\u66f4\u65b0\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a channel\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("p",null,"\u5982\u679c\u8981\u5347\u7ea7\u5230\u7279\u5b9a\u7248\u672c\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-k3s"},"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 K3s"),(0,r.kt)("p",null,"\u6216\u8005\u624b\u52a8\u5347\u7ea7 K3s\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," \u9875\u9762\u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4e0b\u8f7d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s"),"\uff08\u6216\u4f60\u60f3\u8981\u7684\u4f4d\u7f6e\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u505c\u6b62\u65e7\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u65b0\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,r.kt)("h3",{id:"\u91cd\u542f-k3s"},"\u91cd\u542f K3s"),(0,r.kt)("p",null,"systemd \u548c OpenRC \u7684\u5b89\u88c5\u811a\u672c\u652f\u6301\u91cd\u542f K3s\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"systemd")),(0,r.kt)("p",null,"\u624b\u52a8\u91cd\u542f Server\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s\n")),(0,r.kt)("p",null,"\u624b\u52a8\u91cd\u542f Agent\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s-agent\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenRC")),(0,r.kt)("p",null,"\u624b\u52a8\u91cd\u542f Server\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s restart\n")),(0,r.kt)("p",null,"\u624b\u52a8\u91cd\u542f Agent\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s-agent restart\n")))}c.isMDXComponent=!0}}]);