(self.webpackChunkinstant_hie_docs=self.webpackChunkinstant_hie_docs||[]).push([[624],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6432:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"creating-packages",title:"How to create an Instant OpenHIE package",sidebar_label:"Create packages",keywords:["Instant OpenHIE","How to","Creating packages"],description:"How to create an Instant OpenHIE package"},l={unversionedId:"how-to/creating-packages",id:"how-to/creating-packages",isDocsHomePage:!1,title:"How to create an Instant OpenHIE package",description:"How to create an Instant OpenHIE package",source:"@site/docs/how-to/creating-packages.mdx",sourceDirName:"how-to",slug:"/how-to/creating-packages",permalink:"/instant/docs/how-to/creating-packages",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/how-to/creating-packages.mdx",version:"current",sidebar_label:"Create packages",frontMatter:{id:"creating-packages",title:"How to create an Instant OpenHIE package",sidebar_label:"Create packages",keywords:["Instant OpenHIE","How to","Creating packages"],description:"How to create an Instant OpenHIE package"},sidebar:"docs",previous:{title:"Packages",permalink:"/instant/docs/concepts/package-arch"},next:{title:"How to setup managed Kubernetes in the cloud",permalink:"/instant/docs/how-to/setup-kubernetes-in-cloud"}},s=[{value:"Docker Compose files",id:"docker-compose-files",children:[]},{value:"Kubernetes resources",id:"kubernetes-resources",children:[]},{value:"instant.json",id:"instantjson",children:[]},{value:"Bash scripts",id:"bash-scripts",children:[]},{value:"How to execute your new package",id:"how-to-execute-your-new-package",children:[{value:"Yarn (Dev)",id:"yarn-dev",children:[]},{value:"Docker or Kubernetes without the Instant OpenHIE repo",id:"docker-or-kubernetes-without-the-instant-openhie-repo",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),(0,r.kt)("p",null,"Packages are a way of allowing a group of applications to be setup and configured to enable a particular set of functionality. Each package ",(0,r.kt)("strong",{parentName:"p"},"MUST")," include a the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.*.yml")," files to setup and configure the necessary applications in Docker Compose"),(0,r.kt)("li",{parentName:"ol"},"Deployment and service resource files (and any other necessary resource files) to setup and configure the necessary applications in Kubernetes"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"instant.json")," file that holds metadata about the package"),(0,r.kt)("li",{parentName:"ol"},"Bash scripts that accept a particular set of commands (init, up, down, and destroy) and execute these Docker Compose and Kubernetes infrastructure files and any other necessary processing and configuration to perform the required command.")),(0,r.kt)("h2",{id:"docker-compose-files"},"Docker Compose files"),(0,r.kt)("p",null,"All Docker Compose files should by convention be contained in a ",(0,r.kt)("inlineCode",{parentName:"p"},"./docker")," directory in the root of the package directory. It is often useful to split up Docker Compose files into separate files with different purposes. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," for the main application setup and orchestration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.config.yml")," for starting short lived containers that configure the applications or add any test data that is necessary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.dev.yml")," for over-ridding options in the main compose file to allow for easier development. For example, to expose all ports to the host even those that should be protected")),(0,r.kt)("h2",{id:"kubernetes-resources"},"Kubernetes resources"),(0,r.kt)("p",null,"All Kubernetes files should by convention be contained in a ",(0,r.kt)("inlineCode",{parentName:"p"},"./kubernetes")," directory in the root of the package directory. It is recommended to use the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/"},"declarative form")," of Kubernetes resources. The key resources to define are deployments and services for each component."),(0,r.kt)("p",null,"Config containers can be executed as job resources with an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container"),". These temporary containers only configure the main application once the service has started up."),(0,r.kt)("h2",{id:"instantjson"},"instant.json"),(0,r.kt)("p",null,"This file should be in the root directory of the package and provide metadata about the package itself along with any dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "abc",\n  "name": "XYZ",\n  "description": "...",\n  "type": "use-case", // options: infrastructure | use-case\n  "version": "v0.0.1",\n  "dependencies": ["core", "healthworkforce"] // list of package ids\n}\n')),(0,r.kt)("h2",{id:"bash-scripts"},"Bash scripts"),(0,r.kt)("p",null,"Two bash scripts are required in each package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./docker/compose.sh")," - to configure, start and stop the applications using Docker Compose"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./kubernetes/main/k8s.sh")," - to configure, start and stop the applications using Kubernetes")),(0,r.kt)("p",null,"Each of these scripts should accept one of the following commands (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"./compose.sh <command>"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init")," - start all the applications in this package and performs any necessary pre-processing of the infrastructure files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"up")," - start all the applications in this package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"down")," - stop all the applications in this package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destroy")," - delete all the application containers in this package and all their stored data")),(0,r.kt)("p",null,"For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"compose.sh")," script could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'composeFilePath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )\n\nif [ "$1" == "init" ]; then\n    # execute other setup scripts or commands here\n    # ...\n\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml up -d\nelif [ "$1" == "up" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml up -d\nelif [ "$1" == "down" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml stop\nelif [ "$1" == "destroy" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml  -f "$composeFilePath"/importer/docker-compose.config.yml down -v\nelse\n    echo "Valid options are: init, up, down, or destroy"\nfi\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.sh")," script could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\n\nk8sMainRootFilePath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )\n\nif [ "$1" == "init" ]; then\n    # execute other setup scripts or commands here\n    # ...\n\n    # Create the namespace\n    kubectl apply -f $k8sMainRootFilePath/healthworkforce-namespace.yaml\n    kubectl apply -k $k8sMainRootFilePath\nelif [ "$1" == "up" ]; then\n    # Create the namespace\n    kubectl apply -f $k8sMainRootFilePath/healthworkforce-namespace.yaml\n    kubectl apply -k $k8sMainRootFilePath\nelif [ "$1" == "down" ]; then\n    kubectl delete deployment mapper-deployment\nelif [ "$1" == "destroy" ]; then\n    kubectl delete namespaces hwf-package\nelse\n    echo "Valid options are: up, down, or destroy"\nfi\n')),(0,r.kt)("p",null,"The Instant OpenHIE executable will look for these scripts and ensure that they are executed to start-up a package. Packages will be started in their dependency order beginning with the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," package."),(0,r.kt)("h2",{id:"how-to-execute-your-new-package"},"How to execute your new package"),(0,r.kt)("p",null,"The following mechanism for adding a package is useful for package development."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The preferred method for adding custom packages to your Instant instance will be to add the package repo GitHub url to the config - however this ",(0,r.kt)("strong",{parentName:"p"},"feature is still in development"),".")),(0,r.kt)("h3",{id:"yarn-dev"},"Yarn (Dev)"),(0,r.kt)("p",null,"Copy your package into the root directory of this Instant OpenHIE project."),(0,r.kt)("p",null,"Run as normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn docker:instant init <your_package_name>\n")),(0,r.kt)("h3",{id:"docker-or-kubernetes-without-the-instant-openhie-repo"},"Docker or Kubernetes without the Instant OpenHIE repo"),(0,r.kt)("p",null,"The Instant OpenHIE project is available as a Docker image therefore we do not need the whole GitHub repository to run the containers."),(0,r.kt)("p",null,"For a minimum Instant OpenHIE set up, download ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openhie/instant/master/deploy.sh"},"this deploy script from GitHub"),".\nOnce downloaded make sure it's executable: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod +x deploy.sh")),(0,r.kt)("p",null,"Then, run the following command to add your custom package and initialise the system in docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'./deploy init -t docker core <your_package_ids> -c="../path/to/your/package"\n')),(0,r.kt)("p",null,"To remove the instant project, run the following:"),(0,r.kt)("p",null,"./deploy destroy -t docker core covid19surveillance"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The custom package location is not needed for ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"down"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," commands on an existing system.")),(0,r.kt)("p",null,"To initialise kubernetes, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'./deploy init -t k8s core <your_package_ids> -c="../path/to/your/package"\n')),(0,r.kt)("p",null,"Multiple custom packages can be chained together as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'./deploy init test1 test2 test3 -c="../test1" -c="../test2" -c="../test3"\n')),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"To add a custom package to your instant instance, use the following flag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--custom-package"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We hope to support package url references soon")),(0,r.kt)("p",null,"To add multiple custom packages, list each package location with the flag."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'-c="/path/to/package_1" -c="/path/to/package_2"')),(0,r.kt)("p",null,"Below is an example of an entire ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command.\nIf you had downloaded the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jembi/who-covid19-surveillance-package"},"who-covid19-surveillance-package")," repository onto your machine you could reference it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'yarn docker:instant init core covid19surveillance -c="../who-covid19-surveillance-package"\n')),(0,r.kt)("p",null,"Once a custom package has been added to the project, it does not need to be references in future commands as the data has been persisted in the shared volume.\nThe examples below continue on from the previous covid19 package initialisation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant down core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant up core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant test core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant destroy core covid19surveillance"))),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"To add a custom package to your instant instance, use the following flag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--custom-package"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We hope to support package url references soon")),(0,r.kt)("p",null,"To add multiple custom packages, list each package location with the flag."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'-c="/path/to/package_1" -c="/path/to/package_2"')),(0,r.kt)("p",null,"Docker is the default deploy environment. To use Kubernetes, add the target flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),". For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t k8s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t kubernetes"))),(0,r.kt)("p",null,"Below is an example of an entire ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command.\nIf you had downloaded the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jembi/who-covid19-surveillance-package"},"who-covid19-surveillance-package")," repository onto your machine you could reference it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'yarn docker:instant init -t k8s core covid19surveillance -c="../who-covid19-surveillance-package"\n')),(0,r.kt)("p",null,"Once a custom package has been added to the project, it does not need to be references in future commands as the data has been persisted in the shared volume.\nThe examples below continue on from the previous covid19 package initialisation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant down -t k8s core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant up -t k8s core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant test -t k8s core covid19surveillance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn docker:instant destroy -t k8s core covid19surveillance"))))}p.isMDXComponent=!0}}]);