/*! For license information please see 675bdb9f.e1d28010.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(160)),i=n(185),c=n(182),s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",keywords:["Instant OpenHIE","Running Instant OpenHIE"],description:"How to run Instant OpenHIE"},l={id:"introduction/getting-started",title:"Getting started",description:"How to run Instant OpenHIE",source:"@site/docs/introduction/getting-started.mdx",permalink:"/instant/docs/introduction/getting-started",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/introduction/getting-started.mdx",sidebar_label:"Getting started",sidebar:"docs",previous:{title:"Vision",permalink:"/instant/docs/introduction/vision"},next:{title:"Community",permalink:"/instant/docs/introduction/community"}},p=[{value:"Use the Interactive App (recommended)",id:"use-the-interactive-app-recommended",children:[]},{value:"Run the Bash Scripts Directly (for automation and development)",id:"run-the-bash-scripts-directly-for-automation-and-development",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisites")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker engine")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker compose"))),Object(o.b)("p",null,"Instant OpenHIE is, by design, easily downloaded and run by anyone on any platform."),Object(o.b)("p",null,"To get started, install Docker and Docker Compose. Instant OpenHIE uses Docker Compose to manage all the necessary services and applications. The links above will help guide the set up on your platform."),Object(o.b)("h2",{id:"use-the-interactive-app-recommended"},"Use the Interactive App (recommended)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the latest Instant OpenHIE executable from our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/openhie/instant/releases"}),"GitHub releases page"),". Find the executable in the assets section of the latest release for your platform.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Move the Instant OpenHIE download somewhere memorable. Run the executable while in its containing directory to get the command-line interface:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./goinstant-linux\n\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Choose Start Instant OpenHIE if this is your first time:\n  \u25b8 Start Instant OpenHIE\n    Stop Instant OpenHIE\n    Debug\n    Help\n    Quit\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the arrow keys to navigate the interface and choose '",Object(o.b)("strong",{parentName:"p"},"Start Instant OpenHIE"),"'."),Object(o.b)("p",{parentName:"li"},"This will start a download that may take some time. After the download, the script will start up the default packages. The script will then open a web page with links to the started services/application as well as their corresponding documentation."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"All available packages are listed here in the sidebar under ",Object(o.b)("strong",{parentName:"p"},"Existing Packages"),". Each package includes several services/applications."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Congratulations, you have successfully started up Instant OpenHIE. Follow the instructions on the web page to stop the services when you are done."))),Object(o.b)("h2",{id:"run-the-bash-scripts-directly-for-automation-and-development"},"Run the Bash Scripts Directly (for automation and development)"),Object(o.b)("p",null,"To start all the default Instant OpenHIE packages, select a deployment platform below."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Have a look at the existing packages on the sidebar to see what is currently available.")),Object(o.b)(i.a,{defaultValue:"dockerCompose",values:[{label:"Docker Compose",value:"dockerCompose"},{label:"Kubernetes",value:"kubernetes"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"dockerCompose",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before proceeding"),", make sure you are in the main ",Object(o.b)("inlineCode",{parentName:"p"},"/instant")," directory. This directory contains the ",Object(o.b)("inlineCode",{parentName:"p"},"instant.sh")," script."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To start up the system, execute the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh up docker\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To stop the running containers, execute the following:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh down docker\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Remove the containers with the command below. However, make sure you ",Object(o.b)("strong",{parentName:"p"},"stop all the containers before trying to delete")," them."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"This action will also delete all volumes")," created by the containers.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh destroy docker\n"))))),Object(o.b)(c.a,{value:"kubernetes",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before proceeding"),", make sure you are in the main ",Object(o.b)("inlineCode",{parentName:"p"},"/instant")," directory. This directory contains the ",Object(o.b)("inlineCode",{parentName:"p"},"instant.sh")," script."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To start up the system, execute the following command:"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"This command will output urls from which you can access your Instant OpenHIE instance.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh up k8s\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To delete all the deployment related pods, run the command below."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"This command will leave services, and volumes intact.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh down k8s\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To purge the entire Instant OpenHIE system, run the command below."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh destroy k8s\n")))))))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},161:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},172:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";n(27),n(19),n(20);var a=n(0),r=n.n(a),o=n(172);var i=function(){return Object(a.useContext)(o.a)},c=n(161),s=n.n(c),l=n(131),p=n.n(l),b=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,l=e.groupId,m=i(),d=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(o),f=O[0],j=O[1];if(null!=l){var g=d[l];null!=g&&g!==f&&j(g)}var v=function(e){j(e),null!=l&&h(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:s()("tab-item",p.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}}}]);