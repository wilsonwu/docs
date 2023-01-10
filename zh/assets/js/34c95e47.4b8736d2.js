"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"\u5df2\u77e5\u95ee\u9898",weight:70},c=void 0,u={unversionedId:"known-issues/known-issues",id:"known-issues/known-issues",title:"\u5df2\u77e5\u95ee\u9898",description:"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/known-issues/known-issues.md",sourceDirName:"known-issues",slug:"/known-issues/",permalink:"/zh/known-issues/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues/known-issues.md",tags:[],version:"current",lastUpdatedAt:1673388488,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{title:"\u5df2\u77e5\u95ee\u9898",weight:70},sidebar:"mySidebar",previous:{title:"K3s \u8d44\u6e90\u5206\u6790",permalink:"/zh/reference/resource-profiling"},next:{title:"\u5b89\u5168",permalink:"/zh/security/"}},l={},p=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"\u65e0\u6839\u6a21\u5f0f",id:"\u65e0\u6839\u6a21\u5f0f",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"snap-docker"},"Snap Docker"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8ba1\u5212\u540c\u65f6\u4f7f\u7528 K3s \u4e0e Docker\uff0c\u5219\u4e0d\u5efa\u8bae\u901a\u8fc7 snap \u5305\u5b89\u88c5 Docker\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5bfc\u81f4\u8fd0\u884c K3s \u65f6\u51fa\u73b0\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"iptables"},"Iptables"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 nftables \u6a21\u5f0f\u800c\u4e0d\u662f\u4f20\u7edf\u6a21\u5f0f\u6765\u8fd0\u884c iptables\uff0c\u5219\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8f83\u65b0\u7684 iptables\uff08\u4f8b\u5982 1.6.1+\uff09\u6765\u907f\u514d\u51fa\u73b0\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u7248\u672c 1.8.0-1.8.4 \u5b58\u5728\u53ef\u80fd\u5bfc\u81f4 K3s \u5931\u8d25\u7684\u95ee\u9898\u3002\u6709\u5173\u89e3\u51b3\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/advanced/#%E5%9F%BA%E4%BA%8E-debian-buster-%E7%9A%84%E5%8F%91%E8%A1%8C%E7%89%88%E7%9A%84%E9%A2%9D%E5%A4%96%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u51c6\u5907"),"\u3002"),(0,i.kt)("h3",{id:"\u65e0\u6839\u6a21\u5f0f"},"\u65e0\u6839\u6a21\u5f0f"),(0,i.kt)("p",null,"\u4f7f\u7528\u65e0\u6839\u6a21\u5f0f\u8fd0\u884c K3s \u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u5b58\u5728\u51e0\u4e2a",(0,i.kt)("a",{parentName:"p",href:"/zh/advanced/#%E6%97%A0%E6%A0%B9%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"},"\u5df2\u77e5\u95ee\u9898"),"\u3002"))}d.isMDXComponent=!0}}]);