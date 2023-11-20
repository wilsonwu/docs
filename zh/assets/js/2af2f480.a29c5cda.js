"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5292],{4701:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(5893),i=t(1151);const a={title:"\u5378\u8f7d K3s",weight:61},r=void 0,l={id:"installation/uninstall",title:"\u5378\u8f7d K3s",description:"\u5378\u8f7d K3s \u4f1a\u5220\u9664 local \u96c6\u7fa4\u6570\u636e\u3001\u914d\u7f6e\u4ee5\u53ca\u6240\u6709\u811a\u672c\u548c CLI \u5de5\u5177\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/zh/installation/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:1700509867,formattedLastUpdatedAt:"2023\u5e7411\u670820\u65e5",frontMatter:{title:"\u5378\u8f7d K3s",weight:61},sidebar:"mySidebar",previous:{title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",permalink:"/zh/installation/packaged-components"},next:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",permalink:"/zh/datastore/"}},o={},c=[{value:"\u5378\u8f7d Server",id:"\u5378\u8f7d-server",level:3},{value:"\u5378\u8f7d Agent",id:"\u5378\u8f7d-agent",level:3}];function d(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["\u5378\u8f7d K3s \u4f1a\u5220\u9664 local \u96c6\u7fa4\u6570\u636e\u3001\u914d\u7f6e\u4ee5\u53ca\u6240\u6709\u811a\u672c\u548c CLI \u5de5\u5177\u3002",(0,s.jsx)(e.br,{}),"\n","\u4e0d\u4f1a\u5220\u9664\u5916\u90e8\u6570\u636e\u5b58\u50a8\u4e2d\u7684\u4efb\u4f55\u6570\u636e\uff0c\u4e5f\u4e0d\u4f1a\u5220\u9664\u4f7f\u7528\u5916\u90e8 Kubernetes \u5b58\u50a8\u5377\u7684 Pod \u521b\u5efa\u7684\u6570\u636e\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\u4e86 K3s\uff0c\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f1a\u751f\u6210\u4e00\u4e2a\u5378\u8f7d K3s \u7684\u811a\u672c\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u60f3\u5728\u5378\u8f7d\u548c\u91cd\u65b0\u5b89\u88c5\u540e\u5c06\u8282\u70b9\u91cd\u65b0\u52a0\u5165\u73b0\u6709\u96c6\u7fa4\uff0c\u8bf7\u52a1\u5fc5\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u8282\u70b9\uff0c\u786e\u4fdd\u5220\u9664\u4e86\u8282\u70b9\u5bc6\u7801 Secret\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"/zh/architecture/#how-agent-node-registration-works",children:"\u8282\u70b9\u6ce8\u518c"}),"\u6587\u6863\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5378\u8f7d-server",children:"\u5378\u8f7d Server"}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u4ece Server \u8282\u70b9\u5378\u8f7d K3s\uff0c\u8bf7\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/usr/local/bin/k3s-uninstall.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5378\u8f7d-agent",children:"\u5378\u8f7d Agent"}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u4ece Agent \u8282\u70b9\u5378\u8f7d K3s\uff0c\u8bf7\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/usr/local/bin/k3s-agent-uninstall.sh\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);