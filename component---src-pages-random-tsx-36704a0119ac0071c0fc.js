(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fMxN:function(e,t,n){},"fhz+":function(e,t,n){},jGpZ:function(e,t,n){"use strict";var a=n("FdF9"),l=(n("qnFv"),n("4QKa")),c=n.n(l);t.a=function(){var e=c.a.comment;c.a.name,c.a.company,c.a.location,c.a.email,c.a.website,c.a.linkedin,c.a.facebook,c.a.instagram,c.a.github;return a.createElement("div",{className:"bio"},e?a.createElement("span",{className:"comment"},e):null)}},qnFv:function(e,t,n){},ybZI:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("FdF9"),l=n("Wbzz"),c=n("IP2g"),r=n("wHSu"),s=n("VXBa"),i=n("H8eV"),o=n("jGpZ"),u=(n("fMxN"),n("KQm4")),m=n("DzJC"),d=n.n(m),f=(n("fhz+"),function(e){var t=e.posts,n=Object(a.useState)(10),s=n[0],i=n[1],o=Object(a.useState)([]),m=o[0],f=o[1],p=Object(a.useMemo)((function(){return t.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))}),[t]),E=Object(a.useCallback)(d()((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&i((function(e){return e>=p.length?e:e+10}))}),250),[p]),v=Object(a.useCallback)((function(e){var t=e.map((function(e){var t=e.node,n=t.excerpt,c=t.fields,r=t.frontmatter,s=c.slug,i=r.date,o=r.title,u=r.tags,m=r.update;1===Number(m.split(",")[1])&&(m=null);var d=u.map((function(e){if("undefined"!==e)return a.createElement("div",{key:s+"-"+e,className:"tag"},a.createElement("span",null,a.createElement(l.Link,{to:"/tags#"+e},"#"+e)))}));return a.createElement("li",{key:s,className:"post"},a.createElement("article",null,a.createElement("h2",{className:"title"},a.createElement(l.Link,{to:s},o)),a.createElement("div",{className:"info"},a.createElement("div",{className:"date-wrap"},a.createElement("span",{className:"date"},i),m?a.createElement("span",{className:"update"}," ","(Updated: "+m+")"):null),u.length&&"undefined"!==u[0]?a.createElement("span",{className:"info-dot"},"·"):null,a.createElement("ul",{className:"tag-list"},d)),a.createElement(l.Link,{to:s},a.createElement("span",{className:"excerpt"},n))))}));f((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))}))}),[]);return Object(a.useEffect)((function(){s>0&&10!==s&&v(p.slice(m.length,s))}),[s]),Object(a.useEffect)((function(){return m.length&&f([]),i((function(e){return 10===e&&v(p.slice(0,10)),10})),window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[p]),a.createElement("div",{className:"post-list"},a.createElement("ul",null,a.createElement("li",{className:"post"},a.createElement("article",null,a.createElement("button",{onClick:function(){var e=t.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));f([]),v(e.slice(0,3))}},a.createElement(c.a,{icon:r.g})))),m))}),p="1872984473";t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges,u=t.site.siteMetadata.title;return a.createElement(s.a,null,a.createElement(i.a,{title:u}),a.createElement("div",{className:"index-wrap"},a.createElement(o.a,null),a.createElement("div",{className:"index-post-list-wrap"},a.createElement(f,{posts:n}),n.length<100?null:a.createElement("div",{className:"show-more-posts"},a.createElement("div",{className:"show-more-btn"},a.createElement(l.Link,{to:"/search"},a.createElement(c.a,{icon:r.h}),a.createElement("span",null,"SHOW MORE POSTS")))))))}}}]);
//# sourceMappingURL=component---src-pages-random-tsx-36704a0119ac0071c0fc.js.map