webpackJsonp([67249200114255],{167:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data,a=t.allMarkdownRemark.edges;return f.default.createElement("div",{className:"preview-feed"},f.default.createElement("div",{className:"page-top-banner"},f.default.createElement("h2",{className:"page-heading",style:k}," Упражнения с собственным весом"),f.default.createElement(d.default,{to:"/",className:"page-btn-back"},f.default.createElement(p.default,{icon:y.default,className:"preview-btn-icon"})," Все упражнения")),a.filter(function(e){return"ownweight"===e.node.frontmatter.filterinventory}).map(function(e){var t=e.node;return f.default.createElement(o.default,{height:200},f.default.createElement(u.default,{title:"Инвентарь - "+t.frontmatter.inventory}),f.default.createElement("div",{className:"preview",key:t.id,style:{backgroundImage:"url("+t.frontmatter.image+")"}},f.default.createElement("div",{className:"preview-wrapper"},f.default.createElement("div",{className:"preview-containers"},f.default.createElement("div",{className:"preview-container-1"},f.default.createElement(d.default,{to:t.frontmatter.path,className:"preview-title"},t.frontmatter.title),f.default.createElement("div",null,f.default.createElement("span",{className:"preview-stats"},f.default.createElement(d.default,{to:"/bodypart/"+t.frontmatter.filterby,className:"tag tag-bodypart"},t.frontmatter.bodypart),f.default.createElement(d.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-type"},t.frontmatter.type),f.default.createElement(d.default,{to:"/type/"+t.frontmatter.filtertype,className:"tag tag-inventory"},t.frontmatter.inventory)),f.default.createElement("div",null,f.default.createElement(d.default,{to:"/stats/efficiency",className:"tag tag-efficiency"},f.default.createElement(p.default,{icon:h.default})," ",t.frontmatter.efficiency,"/10"),f.default.createElement(d.default,{to:"/stats/injury",className:"tag tag-injury"},f.default.createElement(p.default,{icon:w.default})," ",t.frontmatter.injury,"/10"))),f.default.createElement("p",{className:"preview-excerpt"},t.excerpt)),f.default.createElement("div",{className:"preview-container-2"},f.default.createElement(d.default,{to:t.frontmatter.path},f.default.createElement("img",{src:t.frontmatter.image,className:"preview-image"}))))),f.default.createElement(d.default,{to:t.frontmatter.path,className:"preview-btn"},"Подробнее ",f.default.createElement(p.default,{icon:v.default,className:"preview-btn-icon"}))))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=l;var n=a(2),f=r(n),c=a(3),d=r(c),m=a(5),u=r(m),i=a(10),o=r(i),s=a(6),p=r(s),g=a(7),v=r(g),E=a(11),y=r(E),N=a(9),w=r(N),b=a(8),h=r(b),k={backgroundImage:"url(http://bestbodyblog.com/wp-content/uploads/2018/01/9.jpg)",backgroundPosition:"center"};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-inventory-own-weight-jsx-484192306865ac8c9e3a.js.map