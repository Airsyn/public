webpackJsonp([0xe33488ee6d7],{175:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data,a=t.allMarkdownRemark.edges;return f.default.createElement("div",{className:"preview-feed"},f.default.createElement("div",{className:"page-top-banner"},f.default.createElement("h2",{className:"page-heading",style:k}," Изолирующие упражнения"),f.default.createElement(c.default,{to:"/",className:"page-btn-back"},f.default.createElement(p.default,{icon:y.default,className:"preview-btn-icon"})," Все упражнения")),a.filter(function(e){return"isolated"===e.node.frontmatter.filtertype}).map(function(e){var t=e.node;return f.default.createElement(s.default,{height:200},f.default.createElement(u.default,{title:"Изолирующие упражнения"}),f.default.createElement("div",{className:"preview",key:t.id,style:{backgroundImage:"url("+t.frontmatter.image+")"}},f.default.createElement("div",{className:"preview-wrapper"},f.default.createElement("div",{className:"preview-containers"},f.default.createElement("div",{className:"preview-container-1"},f.default.createElement(c.default,{to:t.frontmatter.path,className:"preview-title"},t.frontmatter.title),f.default.createElement("div",null,f.default.createElement("span",{className:"preview-stats"},f.default.createElement(c.default,{to:"/bodypart/"+t.frontmatter.filterby,className:"tag tag-bodypart"},t.frontmatter.bodypart),f.default.createElement(c.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-type"},t.frontmatter.type),f.default.createElement(c.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-inventory"},t.frontmatter.inventory)),f.default.createElement("div",null,f.default.createElement(c.default,{to:"/stats/efficiency",className:"tag tag-efficiency"},f.default.createElement(p.default,{icon:h.default})," ",t.frontmatter.efficiency,"/10"),f.default.createElement(c.default,{to:"/stats/injury",className:"tag tag-injury"},f.default.createElement(p.default,{icon:w.default})," ",t.frontmatter.injury,"/10"))),f.default.createElement("p",{className:"preview-excerpt"},t.excerpt)),f.default.createElement("div",{className:"preview-container-2"},f.default.createElement(c.default,{to:t.frontmatter.path},f.default.createElement("img",{src:t.frontmatter.image,className:"preview-image"}))))),f.default.createElement(c.default,{to:t.frontmatter.path,className:"preview-btn"},"Подробнее ",f.default.createElement(p.default,{icon:v.default,className:"preview-btn-icon"}))))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=r;var n=a(2),f=l(n),d=a(3),c=l(d),m=a(5),u=l(m),i=a(10),s=l(i),o=a(6),p=l(o),g=a(7),v=l(g),E=a(11),y=l(E),N=a(9),w=l(N),b=a(8),h=l(b),k={backgroundImage:"linear-gradient(to right top, #f046a6, #ff4683, #ff5461, #fe6a40, #ed811e)"};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-type-isolated-jsx-59c205b93851f004d386.js.map