(self.webpackChunkinstant_hie_docs=self.webpackChunkinstant_hie_docs||[]).push([[416],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=(0,r.Z)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,g=(0,a.useState)(u),k=g[0],y=g[1],b=a.Children.toArray(e.children),w=[];if(null!=d){var N=h[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;y(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,r,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case l:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6283:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),n(4996),{id:"elastic",title:"Elastic Packages",sidebar_label:"Elastic analytics",keywords:["Instant OpenHIE","Elastic","Package"],description:"The elastic packages for Instant OpenHIE"}),s={unversionedId:"packages/elastic",id:"packages/elastic",isDocsHomePage:!1,title:"Elastic Packages",description:"The elastic packages for Instant OpenHIE",source:"@site/docs/packages/elastic.mdx",sourceDirName:"packages",slug:"/packages/elastic",permalink:"/instant/docs/packages/elastic",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/packages/elastic.mdx",version:"current",sidebar_label:"Elastic analytics",frontMatter:{id:"elastic",title:"Elastic Packages",sidebar_label:"Elastic analytics",keywords:["Instant OpenHIE","Elastic","Package"],description:"The elastic packages for Instant OpenHIE"},sidebar:"docs",previous:{title:"Client-Registry",permalink:"/instant/docs/packages/client"},next:{title:"Architecture",permalink:"/instant/docs/more-info/architecture"}},c=[{value:"Package functionality",id:"package-functionality",children:[{value:"List of components",id:"list-of-components",children:[]},{value:"Accessing the components",id:"accessing-the-components",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),(0,i.kt)("h2",{id:"package-functionality"},"Package functionality"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"elastic-*")," package family are infrastructure packages that provide components for the elastic stack for data analytics and other useful tools. There are two packages, namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"elastic-analytics")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"elastic-pipeline"),". The pipeline packages provides the tools to get data from HAPI FHIR into elasticsearch in the analytics package. The analytics package provides the tools for data analytics, visualisation and report generation."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"elastic-pipeline")," package may be replaced by any other set pipeline tool if necessary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"elastic-analytics")," package has no dependency on it."),(0,i.kt)("h3",{id:"list-of-components"},"List of components"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"elastic-pipeline"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fhir-extractor - a simple node.js service that queries the _history endpoint of HAPI FHIR and forwards the bundle to Logstash."),(0,i.kt)("li",{parentName:"ul"},"logstash - processes the FHIR bundle and breaks it does into individual resources and stores the raw resources in elasticsearch. It can also be configured to pre-process, join, flatten and enrich resources using it's json manipulation DSL. This makes reports easier to run where the raw FHIR resources are highly nested and relational thus difficult to report on.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"elastic-analytics"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"elastic-search - acts as the data mart. All reporting data should go into it in a format favourable for reporting. aggregation queries to elasticsearch can be made to draw up reports."),(0,i.kt)("li",{parentName:"ul"},"kibana - a visualisation, data discovery and dashboarding tool that is part of the elastic stack"),(0,i.kt)("li",{parentName:"ul"},"jsReport - a tool separate from the elastic stack which is useful for creating pixel perfect reports that are exportable to PDF and excel using HTML and CSS. It can be scripted to query elasticsearch as it's data source.")),(0,i.kt)("h3",{id:"accessing-the-components"},"Accessing the components"),(0,i.kt)("p",null,"Only two of the components have accessible frontends. Security has been enabled by default on both of these with a default password:"),(0,i.kt)("p",null,"Kibana: ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5601/"},"http://localhost:5601/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Username: elastic"),(0,i.kt)("li",{parentName:"ul"},"Password: dev_password_only")),(0,i.kt)("p",null,"jsReport: ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5488/"},"http://localhost:5488/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Username: admin"),(0,i.kt)("li",{parentName:"ul"},"Password: dev_password_only")))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);