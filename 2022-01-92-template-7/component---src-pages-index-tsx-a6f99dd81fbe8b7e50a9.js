(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("FdF9"),l=a("Wbzz"),c=a("IP2g"),r=a("wHSu"),s=a("VXBa"),i=a("H8eV"),u=(a("fMxN"),a("uP4m")),m="1872984473";t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,m=t.site.siteMetadata.title;return n.createElement(s.a,null,n.createElement(i.a,{title:m}),n.createElement("div",{className:"index-wrap"},n.createElement("div",{className:"index-post-list-wrap"},n.createElement("div",{className:"index-post-list-nav"},n.createElement("ul",null,n.createElement("li",null,n.createElement("div",{className:"tag-wrap"},n.createElement(l.Link,{to:"/tags","aria-label":"Tags"},n.createElement(c.a,{icon:r.j})))),n.createElement("li",null,n.createElement("div",{className:"search-wrap"},n.createElement(l.Link,{to:"/search",className:"search","aria-label":"Search"},n.createElement(c.a,{icon:r.h})))))),n.createElement(u.a,{posts:a}),a.length<100?null:n.createElement("div",{className:"show-more-posts"},n.createElement("div",{className:"show-more-btn"},n.createElement(l.Link,{to:"/search"},n.createElement(c.a,{icon:r.h}),n.createElement("span",null,"SHOW MORE POSTS")))))))}},fMxN:function(e,t,a){},"l/wD":function(e,t,a){},uP4m:function(e,t,a){"use strict";var n=a("KQm4"),l=a("DzJC"),c=a.n(l),r=a("FdF9"),s=a("Wbzz");a("l/wD");t.a=function(e){var t=e.posts,a=Object(r.useState)(10),l=a[0],i=a[1],u=Object(r.useState)([]),m=u[0],o=u[1],d=Object(r.useMemo)((function(){return t.sort((function(e,t){var a=e.node.frontmatter,n=t.node.frontmatter,l=new Date(a.update.includes("0001")?a.date:a.update),c=new Date(n.update.includes("0001")?n.date:n.update);return l<c?1:l>c?-1:0})),t}),[t]),E=Object(r.useCallback)(c()((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&i((function(e){return e>=d.length?e:e+10}))}),250),[d]),p=Object(r.useCallback)((function(e){var t=e.map((function(e){var t=e.node,a=t.excerpt,n=t.fields,l=t.frontmatter,c=n.slug,i=l.date,u=l.title,m=l.tags,o=l.update;1===Number(o.split(",")[1])&&(o=null);var d=m.map((function(e){if("undefined"!==e)return r.createElement("li",{key:c+"-"+e,className:"tag"},r.createElement("span",null,r.createElement(s.Link,{to:"/tags#"+e},"#"+e)))}));return r.createElement("li",{key:c,className:"post"},r.createElement("article",null,r.createElement("div",{className:"info-wrapper"},r.createElement("h2",{className:"title"},r.createElement(s.Link,{to:c},u)),r.createElement("div",{className:"info"},r.createElement("div",{className:"date-wrap"},r.createElement("span",{className:"date"},i)),r.createElement("ul",{className:"tag-list"},d))),r.createElement(s.Link,{to:c},r.createElement("span",{className:"excerpt"},a))))}));o((function(e){return[].concat(Object(n.a)(e),Object(n.a)(t))}))}),[]);return Object(r.useEffect)((function(){l>0&&10!==l&&p(d.slice(m.length,l))}),[l]),Object(r.useEffect)((function(){return m.length&&o([]),i((function(e){return 10===e&&p(d.slice(0,10)),10})),window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[d]),r.createElement("div",{className:"post-list"},r.createElement("ul",null,m))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a6f99dd81fbe8b7e50a9.js.map