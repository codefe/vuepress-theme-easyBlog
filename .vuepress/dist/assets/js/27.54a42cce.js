(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{336:function(t,a,s){"use strict";s.r(a);var r=s(5),n=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"学习nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 学习nginx")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5bacbd395188255c8d0fd4b2?utm_medium=fe&utm_source=weixinqun",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么要学习Nginx"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\nbrew install nginx\n\nnginx\n \nlocalhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//能访问则启动成功")]),t._v("\n\npkill "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" nginx "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭nginx")]),t._v("\n\nnginx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s reload "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重启")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置目录")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"配置日志目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置日志目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置日志目录")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\ncd  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx\nmkdir log \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//然后在nginx.conf中配置日志路径")]),t._v("\n\nerror_log  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\naccess_log  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"路由配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由配置")]),t._v(" "),s("p",[t._v("以下是一个SPA项目重构的配置，新版与老版兼容共存，使用同一个域名访问，nginx根据路径响应不同的SPA应用主页面")]),t._v(" "),s("p",[t._v("当用户访问 http://localhost:8080 时，访问 crm-web/dist 下的 index.html")]),t._v(" "),s("p",[t._v("当用户访问 http://localhost:8080/v2 时，访问 crm-web-v2/dist 下的 index.html")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\nlisten       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  alias  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("crm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  alias "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("crm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("crm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  index  index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])},[],!1,null,null,null);n.options.__file="20180902_nginxNote.md";a.default=n.exports}}]);