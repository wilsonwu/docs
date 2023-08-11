"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(r),u=a,m=k["".concat(l,".").concat(u)]||k[u]||d[u]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var n=r(3117),a=(r(7294),r(3905));const c={title:"certificate"},i="k3s certificate",s={unversionedId:"cli/certificate",id:"cli/certificate",title:"certificate",description:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/certificate.md",sourceDirName:"cli",slug:"/cli/certificate",permalink:"/zh/cli/certificate",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/certificate.md",tags:[],version:"current",lastUpdatedAt:1691773630,formattedLastUpdatedAt:"2023\u5e748\u670811\u65e5",frontMatter:{title:"certificate"},sidebar:"mySidebar",previous:{title:"agent",permalink:"/zh/cli/agent"},next:{title:"etcd-snapshot",permalink:"/zh/cli/etcd-snapshot"}},l={},o=[{value:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66",id:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66",level:2},{value:"\u8f6e\u6362\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66",id:"\u8f6e\u6362\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66",level:3},{value:"CA \u8bc1\u4e66",id:"ca-\u8bc1\u4e66",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66",level:3},{value:"\u81ea\u5b9a\u4e49 CA \u62d3\u6251",id:"\u81ea\u5b9a\u4e49-ca-\u62d3\u6251",level:4},{value:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c",id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c",level:4},{value:"\u8f6e\u6362\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66",id:"\u8f6e\u6362\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c",id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c-1",level:4},{value:"\u8f6e\u6362\u81ea\u7b7e\u540d CA \u8bc1\u4e66",id:"\u8f6e\u6362\u81ea\u7b7e\u540d-ca-\u8bc1\u4e66",level:3},{value:"\u9ed8\u8ba4 CA \u62d3\u6251",id:"\u9ed8\u8ba4-ca-\u62d3\u6251",level:4},{value:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c",id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c-2",level:4},{value:"ServiceAccount Issuer \u5bc6\u94a5\u8f6e\u6362",id:"serviceaccount-issuer-\u5bc6\u94a5\u8f6e\u6362",level:2}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k3s-certificate"},"k3s certificate"),(0,a.kt)("h2",{id:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66"),(0,a.kt)("p",null,"K3s \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66\u81ea\u9881\u53d1\u65e5\u8d77 365 \u5929\u5185\u6709\u6548\u3002\u6bcf\u6b21\u542f\u52a8 K3s \u65f6\uff0c\u5df2\u8fc7\u671f\u6216 90 \u5929\u5185\u8fc7\u671f\u7684\u8bc1\u4e66\u90fd\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,a.kt)("h3",{id:"\u8f6e\u6362\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66"},"\u8f6e\u6362\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66"),(0,a.kt)("p",null,"\u8981\u624b\u52a8\u8f6e\u6362\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate")," \u5b50\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62 K3s\nsystemctl stop k3s\n\n# \u8f6e\u6362\u8bc1\u4e66\nk3s certificate rotate\n\n# \u542f\u52a8 K3s\nsystemctl start k3s\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u8bc1\u4e66\u540d\u79f0\u6765\u8f6e\u6362\u5355\u4e2a\u6216\u591a\u4e2a\u8bc1\u4e66\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s certificate rotate --service <SERVICE>,<SERVICE>\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u8f6e\u6362\u7684\u8bc1\u4e66\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"api-server"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"controller-manager"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"scheduler"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"auth-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy"),"\u3002"),(0,a.kt)("h2",{id:"ca-\u8bc1\u4e66"},"CA \u8bc1\u4e66"),(0,a.kt)("p",null,"Kubernetes \u9700\u8981\u5927\u91cf CA \u8bc1\u4e66\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u6709\u5173 Kubernetes \u5982\u4f55\u4f7f\u7528 CA \u8bc1\u4e66\uff0c\u8bf7\u53c2\u9605 Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/certificates/#all-certificates"},"PKI \u8bc1\u4e66\u548c\u8981\u6c42"),"\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cK3s \u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u542f\u52a8\u65f6\u751f\u6210\u81ea\u7b7e\u540d CA \u8bc1\u4e66\u3002\u8fd9\u4e9b CA \u8bc1\u4e66\u81ea\u9881\u53d1\u65e5\u8d77 10 \u5e74\u5185\u6709\u6548\uff0c\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u6743\u5a01 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u5b58\u50a8\u5728\u6570\u636e\u5b58\u50a8\u533a\u7684\u5f15\u5bfc\u7a0b\u5e8f\u5bc6\u94a5\u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/token#server"},"server token")," \u4f5c\u4e3a PBKDF2 \u5bc6\u7801\u548c AES256-GCM \u548c HMAC-SHA1 \u8fdb\u884c\u52a0\u5bc6\u3002\n\u5728 K3s Server \u542f\u52a8\u671f\u95f4\uff0cCA \u8bc1\u4e66\u548c\u5bc6\u94a5\u7684\u526f\u672c\u4f1a\u88ab\u63d0\u53d6\u5230\u78c1\u76d8\u3002\n\u4efb\u4f55 Server \u90fd\u53ef\u4ee5\u5728\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u65f6\u4e3a\u8282\u70b9\u751f\u6210\u53f6\u8bc1\u4e66\uff0c\u800c Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/"},"Certificates API")," \u63a7\u5236\u5668\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u9881\u53d1\u5176\u4ed6\u8bc1\u4e66\u3002"),(0,a.kt)("p",null,"\u8981\u8f6e\u6362 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca")," \u547d\u4ee4\u3002\n\u8be5\u547d\u4ee4\u4f1a\u6267\u884c\u5b8c\u6574\u6027\u68c0\u67e5\uff0c\u4ece\u800c\u786e\u8ba4\u66f4\u65b0\u7684\u8bc1\u4e66\u548c\u5bc6\u94a5\u53ef\u7528\u3002\n\u5982\u679c\u66f4\u65b0\u540e\u7684\u6570\u636e\u6ca1\u6709\u95ee\u9898\uff0c\u5219\u4f1a\u66f4\u65b0\u6570\u636e\u5b58\u50a8\u7684\u52a0\u5bc6\u5f15\u5bfc\u7a0b\u5e8f\u5bc6\u94a5\uff0c\u5e76\u5728\u4e0b\u6b21 K3s \u542f\u52a8\u65f6\u4f7f\u7528\u65b0\u7684\u8bc1\u4e66\u548c\u5bc6\u94a5\u3002\n\u5982\u679c\u5728\u9a8c\u8bc1\u8bc1\u4e66\u548c\u5bc6\u94a5\u65f6\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u5219\u4f1a\u5411\u7cfb\u7edf\u65e5\u5fd7\u62a5\u544a\u9519\u8bef\uff0c\u5e76\u53d6\u6d88\u64cd\u4f5c\u4e14\u4e0d\u505a\u4efb\u4f55\u66f4\u6539\u3002"),(0,a.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece 2023-02 \u7248\u672c\uff08v1.26.2+k3s1\u3001v1.25.7+k3s1\u3001v1.24.11+k3s1\u3001v1.23.17+k3s1\uff09\u5f00\u59cb\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca")," \u547d\u4ee4\u4ee5\u53ca\u4f7f\u7528\u7531\u5916\u90e8 CA \u7b7e\u53d1\u7684 CA \u8bc1\u4e66\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),(0,a.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u7684\u7b2c\u4e00\u53f0 Server \u521d\u59cb\u542f\u52a8\u671f\u95f4\uff0c\u5982\u679c\u627e\u5230\u4e86\u653e\u7f6e\u5728\u6b63\u786e\u4f4d\u7f6e\u7684 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u5c06\u4e0d\u4f1a\u81ea\u52a8\u751f\u6210 CA \u8bc1\u4e66\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/contrib/util/generate-custom-ca-certs.sh"},"K3s \u4ed3\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"contrib/util/generate-custom-ca-certs.sh"))," \u793a\u4f8b\u811a\u672c\u7528\u4e8e\u9884\u5148\u521b\u5efa\u8bc1\u4e66\u548c\u5bc6\u94a5\u3002\n\u8be5\u811a\u672c\u5e94\u5728\u9996\u6b21\u542f\u52a8 K3s \u4e4b\u524d\u8fd0\u884c\uff0c\u80fd\u521b\u5efa\u4e00\u6574\u5957\u7531\u901a\u7528\u6839\u8bc1\u4e66\u548c\u4e2d\u95f4 CA \u8bc1\u4e66\u7b7e\u540d\u7684\u53f6 CA \u8bc1\u4e66\u3002\n\u5982\u679c\u4f60\u5df2\u6709\u6839\u8bc1\u4e66\u6216\u4e2d\u95f4 CA \u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u811a\u672c\uff08\u6216\u7528\u4f5c\u8d77\u70b9\uff09\u521b\u5efa CA \u8bc1\u4e66\uff0c\u4ece\u800c\u4f7f\u7528\u73b0\u6709\u673a\u6784\u4e2d\u7684 PKI \u6765\u914d\u7f6e K3s \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u6587\u4ef6\u5fc5\u987b\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/tls")," \u4e2d\u3002\u9700\u8981\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request-header-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request-header-ca.key"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"// \u6ce8\u610f\uff1a\u5373\u4f7f\u672a\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\uff0c\u4e5f\u9700\u8981 etcd \u6587\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/peer-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/peer-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/server-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/server-ca.key"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"// \u6ce8\u610f\uff1a\u8fd9\u662f\u7528\u4e8e\u7b7e\u7f72 ServiceAccount Token \u7684\u79c1\u94a5\u3002\u5b83\u6ca1\u6709\u5bf9\u5e94\u7684\u8bc1\u4e66\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"service.key"))),(0,a.kt)("h4",{id:"\u81ea\u5b9a\u4e49-ca-\u62d3\u6251"},"\u81ea\u5b9a\u4e49 CA \u62d3\u6251"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u5e94\u9075\u5faa\u4ee5\u4e0b\u62d3\u6251\u7ed3\u6784\uff1a"),(0,a.kt)("mermaid",{value:'graph TD\n  root("Root CA")\n  intermediate("Intermediate CA")\n  server-ca("Server CA")\n  client-ca("Client CA")\n  request-header-ca("API Aggregation CA")\n  etcd-peer-ca("etcd Peer CA")\n  etcd-server-ca("etcd Server CA")\n\n  root-hash>"Join token CA hash"]\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  root -.-|SHA256| root-hash\n  root ---\x3e intermediate\n  intermediate --\x3e server-ca ==> kube-server-certs\n  intermediate --\x3e client-ca ==> kube-client-certs\n  intermediate --\x3e request-header-ca ==> request-header-certs\n  intermediate --\x3e etcd-peer-ca ==> etcd-peer-certs\n  intermediate --\x3e etcd-server-ca ==> etcd-server-certs'}),(0,a.kt)("h4",{id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c"},"\u4f7f\u7528\u793a\u4f8b\u811a\u672c"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u4f7f\u7528\u793a\u4f8b\u811a\u672c\u901a\u8fc7\u73b0\u6709\u6839 CA \u6765\u7b7e\u53d1\u96c6\u7fa4 CA \u8bc1\u4e66\uff0c\u5219\u5fc5\u987b\u5728\u8fd0\u884c\u811a\u672c\u4e4b\u524d\u5c06\u6839\u6587\u4ef6\u548c\u4e2d\u95f4\u6587\u4ef6\u653e\u5728\u76ee\u6807\u76ee\u5f55\u4e2d\u3002\n\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u811a\u672c\u5c06\u521b\u5efa\u65b0\u7684\u6839 CA \u8bc1\u4e66\u548c\u4e2d\u95f4 CA \u8bc1\u4e66\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u4f7f\u7528\u73b0\u6709\u7684\u6839 CA \u8bc1\u4e66\uff0c\u8bf7\u63d0\u4f9b\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.key"))),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u73b0\u6709\u7684\u6839 CA \u8bc1\u4e66\u548c\u4e2d\u95f4 CA \u8bc1\u4e66\uff0c\u8bf7\u63d0\u4f9b\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intermediate-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intermediate-ca.key"))),(0,a.kt)("p",null,"\u8981\u5728\u542f\u52a8 K3s \u4e4b\u524d\u4f7f\u7528\u793a\u4f8b\u811a\u672c\u751f\u6210\u81ea\u5b9a\u4e49\u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u7528\u4e8e\u751f\u6210\u8bc1\u4e66\u7684\u76ee\u6807\u76ee\u5f55\u3002\nmkdir -p /var/lib/rancher/k3s/server/tls\n\n# \u5c06\u6839 CA \u8bc1\u4e66\u548c\u4e2d\u95f4 CA \u8bc1\u4e66 + \u5bc6\u94a5\u590d\u5236\u5230\u811a\u672c\u7684\u6b63\u786e\u4f4d\u7f6e\u3002\n# \u672c\u793a\u4f8b\u5047\u8bbe\u4f60\u5728 /etc/ssl \u4e2d\u653e\u7f6e\u4e86\u73b0\u6709\u7684\u6839 CA \u6587\u4ef6\u548c\u4e2d\u95f4 CA \u6587\u4ef6\u3002\n# \u5982\u679c\u4f60\u6ca1\u6709\u73b0\u6709\u7684\u6839\u8bc1\u4e66\u6216\u4e2d\u95f4 CA \u8bc1\u4e66\uff0c\u811a\u672c\u5c06\u4e3a\u4f60\u751f\u6210\u3002\ncp /etc/ssl/certs/root-ca.pem /etc/ssl/certs/intermediate-ca.pem /etc/ssl/private/intermediate-ca.key /var/lib/rancher/k3s/server/tls\n\n# \u751f\u6210\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u3002\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/generate-custom-ca-certs.sh | bash -\n")),(0,a.kt)("p",null,"\u5982\u679c\u547d\u4ee4\u6210\u529f\u5b8c\u6210\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c K3s \u7684\u9996\u6b21\u5b89\u88c5\u548c\u542f\u52a8\u3002\n\u5982\u679c\u811a\u672c\u751f\u6210\u4e86\u6839 CA \u6587\u4ef6\u6216\u4e2d\u95f4 CA \u6587\u4ef6\uff0c\u4f60\u5e94\u8be5\u5907\u4efd\u8fd9\u4e9b\u6587\u4ef6\uff0c\u8fd9\u6837\uff0c\u4f60\u5c31\u80fd\u5728\u9700\u8981\u8f6e\u6362 CA \u8bc1\u4e66\u65f6\u91cd\u65b0\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u8f6e\u6362\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66"},"\u8f6e\u6362\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),(0,a.kt)("p",null,"\u8981\u8f6e\u6362\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca")," \u5b50\u547d\u4ee4\u3002\n\u66f4\u65b0\u540e\u7684\u6587\u4ef6\u5fc5\u987b\u6682\u5b58\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\u4e2d\uff0c\u52a0\u8f7d\u5230\u6570\u636e\u5b58\u50a8\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u5728\u6240\u6709\u8282\u70b9\u4e0a\u91cd\u542f K3s \u624d\u80fd\u4f7f\u7528\u66f4\u65b0\u540e\u7684\u8bc1\u4e66\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/tls")," \u4e2d\u6b63\u5728\u4f7f\u7528\u7684\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5c06\u66f4\u65b0\u7684\u8bc1\u4e66\u548c\u5bc6\u94a5\u6682\u5b58\u5230\u5355\u72ec\u7684\u76ee\u5f55\u4e2d\u3002")),(0,a.kt)("p",null,"\u53ea\u8981\u662f\u4f7f\u7528\u76f8\u540c\u7684\u6839 CA\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u542f\u52a8\u7684\u96c6\u7fa4\u80fd\u65e0\u4e2d\u65ad\u5730\u66f4\u65b0\u6216\u8f6e\u6362 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u65b0\u7684\u6839 CA\uff0c\u5219\u9700\u8981\u4e2d\u65ad\u624d\u80fd\u8fdb\u884c\u8f6e\u6362\u3002\u5fc5\u987b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca --force")," \u9009\u9879\uff0c\u6240\u6709\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/token#secure"},"secure token")," \u52a0\u5165\u7684\u8282\u70b9\uff08\u5305\u62ec server\uff09\u90fd\u9700\u8981\u91cd\u65b0\u914d\u7f6e\u624d\u80fd\u4f7f\u7528\u65b0\u7684 Token \u503c\uff0c\u5e76\u4e14 Pod \u9700\u8981\u91cd\u542f\u624d\u80fd\u4fe1\u4efb\u65b0\u7684\u6839 CA\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c-1"},"\u4f7f\u7528\u793a\u4f8b\u811a\u672c"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-custom-ca-certs.sh")," \u811a\u672c\u4e5f\u53ef\u7528\u4e8e\u5728\u65b0\u7684\u4e34\u65f6\u76ee\u5f55\u4e2d\u751f\u6210\u66f4\u65b0\u7684\u8bc1\u4e66\uff0c\u8fd9\u662f\u901a\u8fc7\u5c06\u6587\u4ef6\u590d\u5236\u5230\u6b63\u786e\u7684\u4f4d\u7f6e\u5e76\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"DATA_DIR")," \u73af\u5883\u53d8\u91cf\u5b9e\u73b0\u7684\u3002\n\u8981\u4f7f\u7528\u793a\u4f8b\u811a\u672c\u751f\u6210\u66f4\u65b0\u7684\u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u7528\u4e8e\u751f\u6210\u8bc1\u4e66\u7684\u4e34\u65f6\u76ee\u5f55\u3002\nmkdir -p /opt/k3s/server/tls\n\n# \u5c06\u6839 CA \u8bc1\u4e66\u548c\u4e2d\u95f4 CA \u8bc1\u4e66 + \u5bc6\u94a5\u590d\u5236\u5230\u811a\u672c\u7684\u6b63\u786e\u4f4d\u7f6e\u3002\n# \u5982\u679c\u662f\u975e\u4e2d\u65ad\u8f6e\u6362\uff0c\u5219\u9700\u8981\u7528\u4e8e\u751f\u6210\u539f\u59cb\u8bc1\u4e66\u7684\u540c\u4e00\u4e2a\u6839 CA\u3002\n# \u5982\u679c\u539f\u59cb\u6587\u4ef6\u4ecd\u5728\u6570\u636e\u76ee\u5f55\u4e2d\uff0c\u5219\u53ef\u4ee5\u8fd0\u884c\uff1a\ncp /var/lib/rancher/k3s/server/tls/root-ca.* /var/lib/rancher/k3s/server/tls/intermediate-ca.* /opt/k3s/server/tls\n\n# \u590d\u5236\u5f53\u524d\u7684 service-account \u7b7e\u540d\u5bc6\u94a5\uff0c\u8fd9\u6837\uff0c\u73b0\u6709\u7684 service-account token \u5c31\u4e0d\u4f1a\u5931\u6548\u3002\ncp /var/lib/rancher/k3s/server/tls/service.key /opt/k3s/server/tls\n\n# \u751f\u6210\u66f4\u65b0\u7684\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u3002\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/generate-custom-ca-certs.sh | DATA_DIR=/opt/k3s bash -\n\n# \u5c06\u66f4\u65b0\u540e\u7684 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u52a0\u8f7d\u5230\u6570\u636e\u5b58\u50a8\u4e2d\u3002\nk3s certificate rotate-ca --path=/opt/k3s/server\n")),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," \u547d\u4ee4\u8fd4\u56de\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u65e5\u5fd7\u4e2d\u7684\u9519\u8bef\u3002\n\u547d\u4ee4\u6210\u529f\u5b8c\u6210\uff0c\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u4e0a\u91cd\u542f K3s\uff0c\u4f60\u9700\u8981\u5148\u91cd\u542f Server\uff0c\u7136\u540e\u518d\u91cd\u542f Agent\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," \u9009\u9879\u6216\u66f4\u6539\u4e86\u6839 CA\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/token#secure"},"secure token")," \u52a0\u5165\u7684\u8282\u70b9\u5728\u91cd\u542f\u524d\u90fd\u91cd\u65b0\u914d\u7f6e\u4e3a\u4f7f\u7528\u65b0\u7684 Token \u503c\u3002\nToken \u53ef\u80fd\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u3001systemd \u5355\u5143\u6216 config.yaml \u4e2d\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8282\u70b9\u521d\u59cb\u5b89\u88c5\u65f6\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u8f6e\u6362\u81ea\u7b7e\u540d-ca-\u8bc1\u4e66"},"\u8f6e\u6362\u81ea\u7b7e\u540d CA \u8bc1\u4e66"),(0,a.kt)("p",null,"\u8981\u8f6e\u6362 K3s \u751f\u6210\u7684\u81ea\u7b7e\u540d CA \u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca")," \u5b50\u547d\u4ee4\u3002\n\u66f4\u65b0\u540e\u7684\u6587\u4ef6\u5fc5\u987b\u6682\u5b58\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\u4e2d\uff0c\u52a0\u8f7d\u5230\u6570\u636e\u5b58\u50a8\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u5728\u6240\u6709\u8282\u70b9\u4e0a\u91cd\u542f K3s \u624d\u80fd\u4f7f\u7528\u66f4\u65b0\u540e\u7684\u8bc1\u4e66\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/tls")," \u4e2d\u6b63\u5728\u4f7f\u7528\u7684\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5c06\u66f4\u65b0\u7684\u8bc1\u4e66\u548c\u5bc6\u94a5\u6682\u5b58\u5230\u5355\u72ec\u7684\u76ee\u5f55\u4e2d\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u5df2\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d CA \u8bc1\u4e66\u542f\u52a8\uff0c\u8f6e\u6362\u5c06\u662f\u4e2d\u65ad\u7684\u3002\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/token#secure"},"secure token")," \u52a0\u5165\u7684\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u91cd\u65b0\u914d\u7f6e\u624d\u80fd\u4fe1\u4efb\u65b0\u7684 CA \u54c8\u5e0c\u3002\n\u5982\u679c\u65e7 CA \u8bc1\u4e66\u6ca1\u6709\u4ea4\u53c9\u7b7e\u540d\u65b0\u7684 CA \u8bc1\u4e66\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," \u9009\u9879\u6765\u7ed5\u8fc7\u5b8c\u6574\u6027\u68c0\u67e5\uff0c\u5e76\u4e14\u9700\u8981\u91cd\u542f Pod \u624d\u80fd\u4fe1\u4efb\u65b0\u7684\u6839 CA\u3002"),(0,a.kt)("h4",{id:"\u9ed8\u8ba4-ca-\u62d3\u6251"},"\u9ed8\u8ba4 CA \u62d3\u6251"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d CA \u8bc1\u4e66\u62d3\u6251\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("mermaid",{value:'graph TD\n  server-ca("Server CA")\n  client-ca("Client CA")\n  request-header-ca("API Aggregation CA")\n  etcd-peer-ca("etcd Peer CA")\n  etcd-server-ca("etcd Server CA")\n\n  root-hash>"Join token CA hash"]\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  server-ca -.-|SHA256| root-hash\n  server-ca ===> kube-server-certs\n  client-ca ===> kube-client-certs\n  request-header-ca ===> request-header-certs\n  etcd-peer-ca ===> etcd-peer-certs\n  etcd-server-ca ===> etcd-server-certs'}),(0,a.kt)("p",null,"\u8f6e\u6362\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d CA \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u4e2d\u95f4 CA \u7684\u4fee\u6539\u540e\u8bc1\u4e66\u62d3\u6251\u548c\u7531\u65e7 CA \u4ea4\u53c9\u7b7e\u540d\u7684\u65b0\u6839 CA\uff0c\u4ee5\u4fbf\u5728\u65b0\u65e7 CA \u4e4b\u95f4\u4fdd\u7559\u8fde\u7eed\u7684\u4fe1\u4efb\u94fe\uff1a"),(0,a.kt)("mermaid",{value:'graph TD\n  server-ca-old("Server CA<br/>(old)")\n  client-ca-old("Client CA<br/>(old)")\n  request-header-ca-old("API Aggregation CA<br/>(old)")\n  etcd-peer-ca-old("etcd Peer CA<br/>(old)")\n  etcd-server-ca-old("etcd Server CA<br/>(old)")\n\n  root-hash>"Join token CA hash"]\n\n  server-ca-xsigned("Server CA<br/>(cross-signed)")\n  client-ca-xsigned("Client CA<br/>(cross-signed)")\n  request-header-ca-xsigned("API Aggregation CA<br/>(cross-signed)")\n  etcd-peer-ca-xsigned("etcd Peer CA<br/>(cross-signed)")\n  etcd-server-ca-xsigned("etcd Server CA<br/>(cross-signed)")\n\n  server-ca-ssigned("Server CA<br/>(self-signed)")\n  client-ca-ssigned("Client CA<br/>(self-signed)")\n  request-header-ca-ssigned("API Aggregation CA<br/>(self-signed)")\n  etcd-peer-ca-ssigned("etcd Peer CA<br/>(self-signed)")\n  etcd-server-ca-ssigned("etcd Server CA<br/>(self-signed)")\n\n  server-ca("Intermediate<br/>Server CA")\n  client-ca("Intermediate<br/>Client CA")\n  request-header-ca("Intermediate<br/>API Aggregation CA")\n  etcd-peer-ca("Intermediate<br/>etcd Peer CA")\n  etcd-server-ca("Intermediate<br>etcd Server CA")\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  server-ca-ssigned -.-|SHA256| root-hash\n  server-ca-ssigned --\x3e server-ca ==> kube-server-certs\n  server-ca-old --\x3e server-ca-xsigned --\x3e server-ca\n  client-ca-ssigned --\x3e client-ca ==> kube-client-certs\n  client-ca-old --\x3e client-ca-xsigned --\x3e client-ca\n  request-header-ca-ssigned --\x3e request-header-ca ==> request-header-certs\n  request-header-ca-old --\x3e request-header-ca-xsigned --\x3e request-header-ca\n  etcd-peer-ca-ssigned --\x3e etcd-peer-ca ==> etcd-peer-certs\n  etcd-peer-ca-old --\x3e etcd-peer-ca-xsigned --\x3e etcd-peer-ca\n  etcd-server-ca-ssigned --\x3e etcd-server-ca ==> etcd-server-certs\n  etcd-server-ca-old --\x3e etcd-server-ca-xsigned --\x3e etcd-server-ca'}),(0,a.kt)("h4",{id:"\u4f7f\u7528\u793a\u4f8b\u811a\u672c-2"},"\u4f7f\u7528\u793a\u4f8b\u811a\u672c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/contrib/util/rotate-default-ca-certs.sh"},"K3s \u4ed3\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"contrib/util/rotate-default-ca-certs.sh"))," \u793a\u4f8b\u811a\u672c\u7528\u4e8e\u521b\u5efa\u7531\u73b0\u6709 CA \u4ea4\u53c9\u7b7e\u540d\u7684\u66f4\u65b0 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u793a\u4f8b\u811a\u672c\u751f\u6210\u7531\u73b0\u6709 CA \u4ea4\u53c9\u7b7e\u540d\u7684\u66f4\u65b0\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u66f4\u65b0\u7684 CA \u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u7531\u5f53\u524d CA \u4ea4\u53c9\u7b7e\u540d\u3002\n# \u8be5\u811a\u672c\u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u66f4\u65b0\u8bc1\u4e66\u7684\u65b0\u4e34\u65f6\u76ee\u5f55\uff0c\u5e76\u8f93\u51fa\u65b0\u7684 Token \u503c\u3002\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/rotate-default-ca-certs.sh | bash -\n\n# \u5c06\u66f4\u65b0\u540e\u7684\u8bc1\u4e66\u52a0\u8f7d\u5230\u6570\u636e\u5b58\u50a8\u4e2d\u3002\u5728\u811a\u672c\u7684\u8f93\u51fa\u4e2d\u67e5\u770b\u66f4\u65b0\u540e\u7684 Token \u503c\u3002\nk3s certificate rotate-ca --path=/var/lib/rancher/k3s/server/rotate-ca\n")),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," \u547d\u4ee4\u8fd4\u56de\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u65e5\u5fd7\u4e2d\u7684\u9519\u8bef\u3002\n\u547d\u4ee4\u6210\u529f\u5b8c\u6210\uff0c\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u4e0a\u91cd\u542f K3s\uff0c\u4f60\u9700\u8981\u5148\u91cd\u542f Server\uff0c\u7136\u540e\u518d\u91cd\u542f Agent\u3002"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/cli/token#secure"},"secure token")," \u52a0\u5165\u7684\u8282\u70b9\uff08\u5305\u62ec server \u8282\u70b9\uff09\u5728\u91cd\u542f\u524d\u90fd\u91cd\u65b0\u914d\u7f6e\u4e3a\u4f7f\u7528\u65b0\u7684 Token \u503c\u3002\nToken \u53ef\u80fd\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u3001systemd \u5355\u5143\u6216 config.yaml \u4e2d\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8282\u70b9\u5728\u521d\u59cb\u5b89\u88c5\u65f6\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"serviceaccount-issuer-\u5bc6\u94a5\u8f6e\u6362"},"ServiceAccount Issuer \u5bc6\u94a5\u8f6e\u6362"),(0,a.kt)("p",null,"service-account Issuer \u5bc6\u94a5\u662f\u7528\u4e8e\u7b7e\u53d1 service-account Token \u7684 RSA \u79c1\u94a5\u3002\n\u8f6e\u6362 service-account Issuer \u5bc6\u94a5\u65f6\uff0c\u6587\u4ef6\u4e2d\u81f3\u5c11\u5e94\u4fdd\u7559\u4e00\u4e2a\u65e7\u5bc6\u94a5\uff0c\u4ee5\u514d\u73b0\u6709 service-account Token \u5931\u6548\u3002\n\u5b83\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s certificate rotate-ca")," \u72ec\u7acb\u4e8e\u96c6\u7fa4 CA \u8fdb\u884c\u8f6e\u6362\uff0c\u8fd9\u6837\u80fd\u4ec5\u5b89\u88c5\u5305\u542b\u65b0\u65e7\u5bc6\u94a5\u7684\u66f4\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"service.key")," \u6587\u4ef6\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/tls")," \u4e2d\u6b63\u5728\u4f7f\u7528\u7684\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5c06\u66f4\u65b0\u7684\u5bc6\u94a5\u6682\u5b58\u5230\u5355\u72ec\u7684\u76ee\u5f55\u4e2d\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u4ec5\u8f6e\u6362 service-account Issuer \u5bc6\u94a5\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u7528\u4e8e\u751f\u6210\u8bc1\u4e66\u7684\u4e34\u65f6\u76ee\u5f55\nmkdir -p /opt/k3s/server/tls\n\n# \u68c0\u67e5 OpenSSL \u7248\u672c\nopenssl version | grep -qF 'OpenSSL 3' && OPENSSL_GENRSA_FLAGS=-traditional\n\n# \u751f\u6210\u65b0\u7684\u5bc6\u94a5\nopenssl genrsa ${OPENSSL_GENRSA_FLAGS:-} -out /opt/k3s/server/tls/service.key 2048\n\n# \u8ffd\u52a0\u73b0\u6709\u5bc6\u94a5\uff0c\u907f\u514d\u5f53\u524d token \u5931\u6548\ncat /var/lib/rancher/k3s/server/tls/service.key >> /opt/k3s/server/tls/service.key\n\n# \u5c06\u66f4\u65b0\u540e\u7684\u5bc6\u94a5\u52a0\u8f7d\u5230\u6570\u636e\u5b58\u50a8\u4e2d\nk3s certificate rotate-ca --path=/opt/k3s/server\n")),(0,a.kt)("p",null,"\u51fa\u73b0\u6587\u4ef6\u672a\u66f4\u65b0\u7684\u8b66\u544a\u662f\u6b63\u5e38\u7684\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," \u547d\u4ee4\u8fd4\u56de\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u65e5\u5fd7\u4e2d\u7684\u9519\u8bef\u3002\n\u547d\u4ee4\u6210\u529f\u5b8c\u6210\u540e\uff0c\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Server \u4e0a\u91cd\u542f K3s\u3002\u65e0\u9700\u91cd\u542f Agent \u6216\u4efb\u4f55 Pod\u3002"))}d.isMDXComponent=!0}}]);