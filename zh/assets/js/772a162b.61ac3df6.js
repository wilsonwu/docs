"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=k(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,N=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(N,o(o({ref:t},d),{},{components:n})):a.createElement(N,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:r,o[1]=k;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>k,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const l={title:"token"},o="k3s token",k={unversionedId:"cli/token",id:"cli/token",title:"token",description:"K3s \u4f7f\u7528 Token \u6765\u4fdd\u62a4\u52a0\u5165\u8282\u70b9\u7684\u8fc7\u7a0b\u3002Token \u7528\u4e8e\u9a8c\u8bc1\u52a0\u5165\u7684\u8282\u70b9\u548c\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/token.md",sourceDirName:"cli",slug:"/cli/token",permalink:"/zh/cli/token",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/token.md",tags:[],version:"current",lastUpdatedAt:1691773630,formattedLastUpdatedAt:"2023\u5e748\u670811\u65e5",frontMatter:{title:"token"},sidebar:"mySidebar",previous:{title:"secrets-encrypt",permalink:"/zh/cli/secrets-encrypt"},next:{title:"\u53c2\u8003",permalink:"/zh/reference/"}},i={},p=[{value:"Token \u683c\u5f0f",id:"token-\u683c\u5f0f",level:2},{value:"Secure",id:"secure",level:3},{value:"TLS \u5f15\u5bfc",id:"tls-\u5f15\u5bfc",level:4},{value:"Short",id:"short",level:3},{value:"Token \u7c7b\u578b",id:"token-\u7c7b\u578b",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"k3s token",id:"k3s-token-1",level:2},{value:"<code>k3s token create [token]</code>",id:"k3s-token-create-token",level:4},{value:"<code>k3s token delete</code>",id:"k3s-token-delete",level:4},{value:"<code>k3s token generate</code>",id:"k3s-token-generate",level:4},{value:"<code>k3s token list</code>",id:"k3s-token-list",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k3s-token"},"k3s token"),(0,r.kt)("p",null,"K3s \u4f7f\u7528 Token \u6765\u4fdd\u62a4\u52a0\u5165\u8282\u70b9\u7684\u8fc7\u7a0b\u3002Token \u7528\u4e8e\u9a8c\u8bc1\u52a0\u5165\u7684\u8282\u70b9\u548c\u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"token-\u683c\u5f0f"},"Token \u683c\u5f0f"),(0,r.kt)("p",null,"K3s Token \u53ef\u4ee5\u4f7f\u7528\u5b89\u5168\uff08secure\uff09\u6216\u77ed\uff08short\uff09\u683c\u5f0f\u3002\u5b89\u5168\u683c\u5f0f\u80fd\u8ba9\u5ba2\u6237\u7aef\u5728\u53d1\u9001\u51ed\u8bc1\u4e4b\u524d\u9a8c\u8bc1\u52a0\u5165\u7684\u96c6\u7fa4\u7684\u8eab\u4efd\uff0c\u56e0\u6b64\u9996\u9009\u5b89\u5168\u683c\u5f0f\u3002"),(0,r.kt)("h3",{id:"secure"},"Secure"),(0,r.kt)("p",null,"\u5b89\u5168 Token \u683c\u5f0f\uff08\u6709\u65f6\u79f0\u4e3a\u201c\u5b8c\u6574\u201d Token \u683c\u5f0f\uff09\u5305\u542b\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<prefix><cluster CA hash>::<credentials>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix"),"\uff1a\u56fa\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"K10")," \u524d\u7f00\uff0c\u7528\u6765\u6807\u8bc6 token \u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster CA hash"),"\uff1a\u96c6\u7fa4\u7684 Server CA \u8bc1\u4e66\u7684\u54c8\u5e0c\uff0c\u7528\u4e8e\u4e3a\u52a0\u5165\u7684\u8282\u70b9\u9a8c\u8bc1 Server\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u81ea\u7b7e\u540d CA \u8bc1\u4e66\uff0c\u8fd9\u662f\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u7684 PEM \u683c\u5f0f\u8bc1\u4e66\u7684 SHA256 \u603b\u548c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u8fd9\u662f\u6839\u8bc1\u4e66\u7684 DER \u7f16\u7801\u7684 SHA256 \u603b\u548c\uff0c\u4e5f\u79f0\u4e3a\u8bc1\u4e66\u6307\u7eb9\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials"),"\uff1a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u6216\u6301\u6709\u8005 Token\uff0c\u7528\u4e8e\u9a8c\u8bc1\u52a0\u5165\u96c6\u7fa4\u7684\u8282\u70b9\u3002")),(0,r.kt)("h4",{id:"tls-\u5f15\u5bfc"},"TLS \u5f15\u5bfc"),(0,r.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86\u5b89\u5168 Token\uff0c\u5728\u4f20\u8f93\u51ed\u8bc1\u4e4b\u524d\uff0c\u52a0\u5165\u7684\u8282\u70b9\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8ba4\u8bc1\u8fde\u63a5\u7684 Server\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7981\u7528 TLS \u9a8c\u8bc1\u540e\uff0c\u4ece\u8981\u52a0\u5165\u7684 Server \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"/cacerts")," \u4e0b\u8f7d CA \u5305\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u4e0a\u6240\u8ff0\u8ba1\u7b97 CA \u8bc1\u4e66\u7684 SHA256 \u54c8\u5e0c\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6bd4\u8f83\u8ba1\u7b97\u51fa\u7684 SHA256 \u54c8\u5e0c\u503c\u4e0e Token \u4e2d\u7684\u54c8\u5e0c\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u54c8\u5e0c\u503c\u5339\u914d\uff0c\u5219\u9a8c\u8bc1 Server \u63d0\u4f9b\u7684\u8bc1\u4e66\u662f\u5426\u53ef\u4ee5\u7531 Server \u7684 CA \u5305\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c Server \u8bc1\u4e66\u6709\u6548\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u57fa\u7840\u6216\u6301\u6709\u8005 Token \u8ba4\u8bc1\uff08\u6839\u636e Token \u7684\u7c7b\u578b\uff09\u6765\u63d0\u4f9b\u52a0\u5165\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002")),(0,r.kt)("h3",{id:"short"},"Short"),(0,r.kt)("p",null,"\u77ed Token \u683c\u5f0f\u4ec5\u5305\u62ec\u7528\u4e8e\u9a8c\u8bc1\u52a0\u5165\u96c6\u7fa4\u7684\u8282\u70b9\u7684\u5bc6\u7801\u6216\u6301\u6709\u8005 Token\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u77ed Token\uff0c\u5219\u52a0\u5165\u7684\u8282\u70b9\u4f1a\u9690\u5f0f\u4fe1\u4efb Server \u63d0\u4f9b\u7684 CA \u5305\uff0c\u4ee5\u53ca\u8df3\u8fc7 TLS \u5f15\u5bfc\u8fc7\u7a0b\u4e2d\u7684\u6b65\u9aa4 2-4\u3002\u521d\u59cb\u8fde\u63a5\u53ef\u80fd\u5bb9\u6613\u53d7\u5230",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"\u4e2d\u95f4\u4eba"),"\u653b\u51fb\u3002"),(0,r.kt)("h2",{id:"token-\u7c7b\u578b"},"Token \u7c7b\u578b"),(0,r.kt)("p",null,"K3s \u652f\u6301\u4e09\u79cd\u7c7b\u578b\u7684 Token\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u6709 Server Token \u53ef\u7528\uff0c\u5176\u4ed6\u7c7b\u578b\u7684 Token \u5fc5\u987b\u7531\u7ba1\u7406\u5458\u914d\u7f6e\u6216\u521b\u5efa\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"CLI \u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--agent-token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"K3S_AGENT_TOKEN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n/a"))))),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u542f\u52a8\u96c6\u7fa4\u4e2d\u7684\u7b2c\u4e00\u4e2a Server \u65f6\u672a\u63d0\u4f9b Token\uff0c\u5219\u4f1a\u4f7f\u7528\u968f\u673a\u5bc6\u7801\u521b\u5efa\u3002Server Token \u59cb\u7ec8\u4ee5\u5b89\u5168\u683c\u5f0f\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),"\u3002"),(0,r.kt)("p",null,"Server Token \u53ef\u7528\u4e8e\u5c06 Server \u548c Agent \u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002\u4e00\u65e6\u521b\u5efa\u4e86\u96c6\u7fa4\uff0c\u5b83\u5c31\u65e0\u6cd5\u66f4\u6539\uff0c\u4efb\u4f55\u6709\u6743\u8bbf\u95ee Server Token \u7684\u7528\u6237\u57fa\u672c\u4e0a\u90fd\u62e5\u6709\u96c6\u7fa4\u7684\u5b8c\u5168\u7ba1\u7406\u5458\u8bbf\u95ee\u6743\u9650\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u5c0f\u5fc3\u4fdd\u7ba1 Token\u3002"),(0,r.kt)("p",null,"Server Token \u8fd8\u7528\u4f5c\u5bc6\u94a5\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," \u5bc6\u7801\uff0c\u8be5\u5bc6\u94a5\u7528\u4e8e\u52a0\u5bc6\u6301\u4e45\u4fdd\u5b58\u5230\u6570\u636e\u5b58\u50a8\u7684\u673a\u5bc6\u4fe1\u606f\uff0c\u4f8b\u5982 Secret \u52a0\u5bc6\u914d\u7f6e\u3001wireguard \u5bc6\u94a5\uff0c\u96c6\u7fa4 CA \u8bc1\u4e66\u7684\u79c1\u94a5\u4ee5\u53ca service-account Token\u3002\u56e0\u6b64\uff0cToken \u5fc5\u987b\u4e0e\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u4e00\u8d77\u5907\u4efd\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u975e\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u5426\u5219\u5728\u542f\u52a8\u96c6\u7fa4\u7684\u7b2c\u4e00\u4e2a Server \u65f6\u53ea\u80fd\u4f7f\u7528\u77ed Token \u683c\u5f0f\uff08\u4ec5\u5bc6\u7801\uff09\u3002\u8fd9\u662f\u56e0\u4e3a\u53ea\u6709\u5728 Server \u751f\u6210\u81ea\u7b7e\u540d\u96c6\u7fa4 CA \u8bc1\u4e66\u540e\u624d\u80fd\u77e5\u9053\u96c6\u7fa4 CA \u54c8\u5e0c\u503c\u3002")),(0,r.kt)("p",null,"\u6709\u5173\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/certificate#"},(0,r.kt)("inlineCode",{parentName:"a"},"k3s certificate")," \u6587\u6863"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6709\u5173\u5907\u4efd\u96c6\u7fa4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/datastore/backup-restore"},"\u5907\u4efd\u548c\u6062\u590d"),"\u6587\u6863\u3002"),(0,r.kt)("h3",{id:"agent"},"Agent"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAgent Token \u4e0e Server Token \u76f8\u540c\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u96c6\u7fa4\u4e2d\u6240\u6709 Server \u4e0a\u7684 CLI \u9009\u9879\u6216\u73af\u5883\u53d8\u91cf\uff0c\u5728\u96c6\u7fa4\u542f\u52a8\u4e4b\u524d\u6216\u4e4b\u540e\u8bbe\u7f6e Agent Token\u3002Agent Token \u7c7b\u4f3c\u4e8e Server Token\uff0c\u662f\u9759\u6001\u914d\u7f6e\u7684\u5e76\u4e14\u4e0d\u4f1a\u8fc7\u671f\u3002"),(0,r.kt)("p",null,"Agent Token \u4ee5\u5b89\u5168\u683c\u5f0f\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/agent-token"),"\u3002\u5982\u679c\u672a\u6307\u5b9a Agent Token\uff0c\u5219\u6b64\u6587\u4ef6\u662f\u6307\u5411 Server Token \u7684\u94fe\u63a5\u3002"),(0,r.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece 2023-02 \u7248\u672c\uff08v1.26.2+k3s1\u3001v1.25.7+k3s1\u3001v1.24.11+k3s1\u3001v1.23.17+k3s1\uff09\u5f00\u59cb\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token")," \u547d\u4ee4\u4ee5\u53ca\u4f7f\u7528 Bootstrap Token \u52a0\u5165\u8282\u70b9\u3002")),(0,r.kt)("p",null,"K3s \u652f\u6301\u52a8\u6001\u751f\u6210\u3001\u81ea\u52a8\u8fc7\u671f\u7684 agent bootstrap token\u3002Bootstrap Token \u53ea\u80fd\u7528\u4e8e\u52a0\u5165 Agent\u3002"),(0,r.kt)("h2",{id:"k3s-token-1"},"k3s token"),(0,r.kt)("p",null,"K3s Bootstrap Token \u4f7f\u7528\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm token")," Bootstrap Token \u76f8\u540c\u7684\u751f\u6210\u548c\u9a8c\u8bc1\u4ee3\u7801\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token")," CLI \u4e5f\u662f\u7c7b\u4f3c\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME:\n   k3s token - Manage bootstrap tokens\n\nUSAGE:\n   k3s token command [command options] [arguments...]\n\nCOMMANDS:\n   create    Create bootstrap tokens on the server\n   delete    Delete bootstrap tokens on the server\n   generate  Generate and print a bootstrap token, but do not create it on the server\n   list      List bootstrap tokens on the server\n\nOPTIONS:\n   --help, -h  show help\n")),(0,r.kt)("h4",{id:"k3s-token-create-token"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token create [token]")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0 Token\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"[token]")," \u662f\u8981\u5199\u5165\u7684\u5b9e\u9645 Token\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s token generate")," \u751f\u6210\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a Token\uff0c\u5c06\u751f\u6210\u4e00\u4e2a\u968f\u673a Token\u3002"),(0,r.kt)("p",null,"\u5b89\u5168\u683c\u5f0f\u7684 Token\uff08\u5305\u62ec\u96c6\u7fa4 CA \u54c8\u5e0c\uff09\u4f1a\u5199\u5165\u5230 stdout\u3002Token \u7684 secret \u90e8\u5206\u53ea\u663e\u793a\u4e00\u6b21\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4fdd\u5b58\u6b64\u547d\u4ee4\u7684\u8f93\u51fa\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\uff08\u6570\u636e\uff09\u6587\u4ef6\u5939\uff0c\u5982\u679c\u4e0d\u662f root\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/k3s \u6216 ${HOME}/.rancher/k3s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u5230 ","[$KUBECONFIG]"," \u7684\uff08\u96c6\u7fa4\uff09Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--description")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u5982\u4f55\u4f7f\u7528\u6b64 Token \u7684\u63cf\u8ff0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--groups")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5 Token \u7528\u4e8e\u8ba4\u8bc1\u7684\u5176\u4ed6\u7ec4\uff08\u9ed8\u8ba4\u503c\uff1a\u201csystem:bootstrappers:k3s:default-node-token\u201d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ttl")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5220\u9664 Token \u7684\u65f6\u95f4\uff08\u4f8b\u5982 1s\u30012m\u30013h\uff09\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff0cToken \u5c06\u6c38\u4e0d\u8fc7\u671f\uff08\u9ed8\u8ba4\u503c\uff1a24h0m0s\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--usages")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'\u63cf\u8ff0\u53ef\u4f7f\u7528\u6b64 Token \u7684\u65b9\u5f0f\u3002(\u9ed8\u8ba4\u503c\uff1a"signing,authentication")')))),(0,r.kt)("h4",{id:"k3s-token-delete"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token delete")),(0,r.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a Token\u3002\u4f60\u53ef\u4ee5\u63d0\u4f9b\u5b8c\u6574\u7684 Token\uff0c\u4e5f\u53ef\u4ee5\u4ec5\u63d0\u4f9b Token ID\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\uff08\u6570\u636e\uff09\u6587\u4ef6\u5939\uff0c\u5982\u679c\u4e0d\u662f root\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/k3s \u6216 ${HOME}/.rancher/k3s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u5230 ","[$KUBECONFIG]"," \u7684\uff08\u96c6\u7fa4\uff09Server")))),(0,r.kt)("h4",{id:"k3s-token-generate"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token generate")),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684 Bootstrap Token\u3002"),(0,r.kt)("p",null,'\u4f60\u4e0d\u9700\u8981\u4f7f\u7528\u6b64\u547d\u4ee4\u6765\u751f\u6210 Token\u3002\u53ea\u8981\u683c\u5f0f\u4e3a "',"[a-z0-9]","{6}.","[a-z0-9]",'{16}"\uff08\u5176\u4e2d\u7b2c\u4e00\u90e8\u5206\u662f Token ID\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f Secret\uff09\uff0c\u4f60\u5c31\u53ef\u4ee5\u81ea\u5df1\u8fdb\u884c\u64cd\u4f5c\u3002'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\uff08\u6570\u636e\uff09\u6587\u4ef6\u5939\uff0c\u5982\u679c\u4e0d\u662f root\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/k3s \u6216 ${HOME}/.rancher/k3s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u5230 ","[$KUBECONFIG]"," \u7684\uff08\u96c6\u7fa4\uff09Server")))),(0,r.kt)("h4",{id:"k3s-token-list"},(0,r.kt)("inlineCode",{parentName:"h4"},"k3s token list")),(0,r.kt)("p",null,"\u5217\u51fa Bootstrap Token\uff0c\u8fd9\u5c06\u663e\u793a Token \u7684 ID\u3001\u63cf\u8ff0\u548c\u5269\u4f59 TTL\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\uff08\u6570\u636e\uff09\u6587\u4ef6\u5939\uff0c\u5982\u679c\u4e0d\u662f root\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/k3s \u6216 ${HOME}/.rancher/k3s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kubeconfig")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u5230 ","[$KUBECONFIG]"," \u7684\uff08\u96c6\u7fa4\uff09Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u683c\u5f0f\u3002\u53ef\u9009\u503c\uff1atext\u3001json\uff08\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"text"),"\uff09")))))}u.isMDXComponent=!0}}]);