(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(164),i=a(163),o=a(182),c=a(183),l=[{original:"slideshow/slideshow.jpg",thumbnail:"slideshow/slideshow.jpg"},{original:"slideshow/slideshow0.jpg",thumbnail:"slideshow/slideshow0.jpg"},{original:"slideshow/slideshow2.jpg",thumbnail:"slideshow/slideshow2.jpg"},{original:"slideshow/slideshow3.jpg",thumbnail:"slideshow/slideshow3.jpg"}];t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Home",keywords:["fasteners","construction","tools"]}),r.a.createElement(c.a,{images:l}),r.a.createElement("h1",null,"Top Products"),r.a.createElement("div",{className:"page-content"},r.a.createElement(o.a,null)))}},162:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},163:function(e,t,a){"use strict";var n=a(168),r=a(0),s=a.n(r),i=a(1),o=a.n(i),c=a(171),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,c=n.data.site,u=t||c.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},164:function(e,t,a){"use strict";a(83),a(37),a(81),a(82);var n=a(165),r=a(0),s=a.n(r),i=a(1),o=a.n(i),c=a(36),l=a.n(c),u=(a(162),s.a.createContext({})),d=function(e){return s.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var g=a(59),p=(a(169),a(167)),m=a.n(p),h=function(e){var t=e.siteTitle,a=e.toggleLang,n=e.lang,r=function(e){return e[n]};return s.a.createElement("header",{className:"site-header"},s.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},s.a.createElement("h2",{style:{margin:0,padding:"1.45rem 1.0875rem"}},s.a.createElement(l.a,{to:"/",style:{color:"black",textDecoration:"none"}},s.a.createElement("img",{src:m.a,alt:t,className:"logo"}))),s.a.createElement("div",{style:{margin:0,padding:"1.45rem 1.0875rem"}},s.a.createElement("button",{id:"language-toggle-btn",onClick:a},"en"===n?"Español":"English"))),s.a.createElement("nav",{className:"main-navigation"},s.a.createElement("div",{className:"hamburger",onClick:function(e){var t,a;"main-navigation"===e.target.parentNode.className?(t=e.target.parentNode,a=e.target):(t=e.target.parentNode.parentNode,a=e.target.parentNode),t.className.includes("change")?(t.classList.remove("change"),a.classList.remove("change")):(t.classList.add("change"),a.classList.add("change"))}},s.a.createElement("div",{className:"bar1"}),s.a.createElement("div",{className:"bar2"}),s.a.createElement("div",{className:"bar3"})),s.a.createElement(l.a,{to:r({en:"/",es:"/es/"}),activeClassName:"active"},r({en:"Home",es:"Casa"})),s.a.createElement(l.a,{to:r({en:"products",es:"/es/productos"}),activeClassName:"active"},r({en:"Products",es:"Productos"})),s.a.createElement(l.a,{to:r({en:"about-us",es:"/es/perfil-de-empresa"}),activeClassName:"active"},r({en:"About Us",es:"Perfil de empresa"})),s.a.createElement(l.a,{to:r({en:"contact-us",es:"/es/contacto"}),activeClassName:"active"},r({en:"Contact Us",es:"Contacto"}))))};h.propTypes={siteTitle:o.a.string,toggleLang:o.a.func},h.defaultProps={siteTitle:""};var f=h,A=(a(170),"undefined"!=typeof window&&window),w=function(e){var t=e.children,a=e.location,r=e.lang,i=e.setLanguage;return s.a.createElement(d,{query:"2477275475",render:function(e){return s.a.createElement("div",{className:"page-wrap"},s.a.createElement(f,{siteTitle:e.site.siteMetadata.title,lang:r,toggleLang:function(){i("en"===r?"es":"en");var t=e.site.siteMetadata.urlTranslationsMap,a=A.location.pathname,n=a;a.includes(e.site.pathPrefix)&&(n=a.replace(e.site.pathPrefix,""));var s=t.find(function(e){return e.indexOf(n)>-1});if(console.log({isProduction:a.includes(e.site.pathPrefix),prefix:e.site.pathPrefix,urlTranslationsMap:t,currentPath:a,path:n,match:s}),s){var o=s.find(function(e){return e!==n});console.log("destionation: ",o),Object(c.navigateTo)(o)}},location:a}),s.a.createElement("main",null,t),s.a.createElement("footer",{className:"site-footer"},"© ",(new Date).getFullYear(),", Built by"," ",s.a.createElement("a",{href:"https://suurv.com  ",target:"_blank",rel:"noopener noreferrer nofollow"},"SUURV Technologies")))},data:n})};w.propTypes={children:o.a.node.isRequired};t.a=Object(g.b)(function(e){return{lang:e.lang}},function(e){return{setLanguage:function(t){return e(function(e){return{type:"SET_LANGUAGE",lang:e}}(t))}}})(w)},165:function(e){e.exports={data:{site:{pathPrefix:"/brannens-gatsby",siteMetadata:{title:"Brannen's, Inc.",urlTranslationsMap:[["/","/es/"],["/products","/es/productos"],["/about-us","/es/perfil-de-empresa"],["/contact-us","/es/contacto"]]}}}}},166:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),s=a(1),i=a.n(s),o=a(58),c=a(3),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,a){e.exports=a.p+"static/brannens-logo-2c8f3b5478d94fd31c33b19c572b2181.png"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Brannen's, Inc.",description:"Brannen's | Fasteners, Tools, and Construction Supplies",author:"@8ctopotamus"}}}}},172:function(e,t,a){e.exports=a.p+"static/louisville-ladder-logo-5671c2cb2758841889af5c7ddd5c5dec.jpg"},173:function(e,t){e.exports="data:image/png;base64,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"},174:function(e,t,a){e.exports=a.p+"static/metabo-logo-f6c0722fca5eeecb89a2c8ca181d12c0.jpg"},175:function(e,t,a){e.exports=a.p+"static/makita-logo-faa8c6a6d46ef18cee140faa1937d74a.jpg"},182:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=(a(185),a(172)),i=a.n(s),o=a(173),c=a.n(o),l=a(174),u=a.n(l),d=a(175),g=a.n(d);t.a=function(){return r.a.createElement("div",{className:"home-logos"},r.a.createElement("img",{src:i.a,alt:"Louisville ladder"}),r.a.createElement("img",{src:g.a,alt:"Mikata"}),r.a.createElement("img",{src:u.a,alt:"Metabo"}),r.a.createElement("img",{src:c.a,alt:"Dewalt"}))}},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(186),i=a.n(s);a(187),a(188);t.a=function(e){var t=e.images;return r.a.createElement(i.a,{items:t,autoPlay:!0,showPlayButton:!1,showThumbnails:!1,showFullscreenButton:!1})}}}]);
//# sourceMappingURL=component---src-pages-index-js-3afdf3aa0995441b8180.js.map