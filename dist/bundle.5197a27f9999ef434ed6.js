!function(c){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],l=0,i=[];l<n.length;l++)a=n[l],u[a]&&i.push(u[a][0]),u[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(c[t]=r[t]);for(f&&f(e);i.length;)i.shift()();return m.push.apply(m,o||[]),s()}function s(){for(var e,t=0;t<m.length;t++){for(var a=m[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==u[o]&&(n=!1)}n&&(m.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},u={0:0},m=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=c,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=n;m.push([12,1]),s()}({12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),i=(a(14),a(3)),c=a.n(i),s=a(5),u=a(6),m=a(1),f=a.n(m),d=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),d(t,[{key:"uniqueKey",value:function(){return Math.random().toString(36).substring(2,15)}},{key:"render",value:function(){var a=this,e=this.props.errors;return r.a.createElement("ul",{className:"errors"},e.map(function(t){return t.messages.map(function(e){return r.a.createElement("li",{key:a.uniqueKey()},r.a.createElement("strong",null,"Error:"),r.a.createElement("i",{className:"field"},t.field.split(/(?![a-z])(?=[A-Z])/g).join("-").toLowerCase()),r.a.createElement("span",null,e))})}))}}]),t}(),h={firstName:{rules:{required:!0,minlength:4,letter:!0},messages:{required:"First Name is required"}},lastName:{rules:["required","minlength:3"]},email:"email",country:{rules:{required:!0,valueNotEquals:"BR"}},file:{rules:{required:!0,extension:["png","jpg"],maxsize:5e5}},resume:"required",gender:"required",checkbox:{rules:{required:!0,minchecked:2}}},g=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();var b=function(e){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={hasErrors:[]},f.a.validator.add(c.a),t.onSubmit=t.onSubmit.bind(t),t.onChange=t.onChange.bind(t),t.hasFieldError=t.hasFieldError.bind(t),t.validate=t.validate.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n["Component"]),g(a,[{key:"onSubmit",value:function(e){e.preventDefault(),this.validate()}},{key:"onChange",value:function(){this.validate()}},{key:"validate",value:function(){var e=this,t=f.a.validateAll(h);console.log("Validation::",t),this.setState({hasErrors:t},function(){return e.hasFieldError(t)})}},{key:"hasFieldError",value:function(e){var a=this,n="invalid";document.querySelectorAll("."+n).forEach(function(e){e.classList.remove(n)}),e.forEach(function(e){var t=document.getElementsByName(a[e.field].name);1<t.length?t.forEach(function(e){return e.classList.add(n)}):a[e.field].classList.add(n)})}},{key:"render",value:function(){var t=this,e=this.state.hasErrors;return r.a.createElement("div",null,r.a.createElement("form",{className:"container",onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{className:"container__title"},"Octaform Validate - Demo"),r.a.createElement("div",{className:"container__links"},r.a.createElement("a",{href:"https://github.com/octaform/octaform",rel:"noopener noreferrer",target:"_blank",className:"github-link"},r.a.createElement("img",{src:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",alt:"Octaform - Github"}),r.a.createElement("span",null,"Github")))),!!e.length&&r.a.createElement("div",{className:"col-12"},r.a.createElement(p,{errors:e})),r.a.createElement("label",{className:"col-6"},r.a.createElement("strong",null,"First name:"),r.a.createElement("input",{type:"text",name:"firstName",autoComplete:"given-name",ref:function(e){return t.firstName=e},onChange:this.onChange})),r.a.createElement("label",{className:"col-6"},r.a.createElement("strong",null,"Last name:"),r.a.createElement("input",{type:"text",name:"lastName",autoComplete:"family-name",ref:function(e){return t.lastName=e},onChange:this.onChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-7"},r.a.createElement("strong",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",autoComplete:"email",ref:function(e){return t.email=e},onChange:this.onChange})),r.a.createElement("label",{className:"col-5"},r.a.createElement("strong",null,"Country:"),r.a.createElement("select",{name:"country",autoComplete:"country-name",ref:function(e){return t.country=e},onChange:this.onChange},r.a.createElement("option",{value:""},"Select a country"),r.a.createElement("option",{value:"BR"},"Brazil"),r.a.createElement("option",{value:"UA"},"Ukraine"),r.a.createElement("option",{value:"US"},"United States"))),r.a.createElement("label",{className:"col-12"},r.a.createElement("strong",null,"Upload a file:"),r.a.createElement("input",{name:"file",type:"file",ref:function(e){return t.file=e},onChange:this.onChange})),r.a.createElement("div",{className:"col-6"},r.a.createElement("strong",null,"Gender:"),r.a.createElement("input",{type:"radio",name:"gender",value:"male",id:"genderMale",ref:function(e){return t.gender=e},onChange:this.onChange})," ",r.a.createElement("label",{htmlFor:"genderMale"},"Male"),r.a.createElement("input",{type:"radio",name:"gender",value:"female",id:"genderFemale",ref:function(e){return t.gender=e},onChange:this.onChange})," ",r.a.createElement("label",{htmlFor:"genderFemale"},"Female")),r.a.createElement("div",{className:"col-6"},r.a.createElement("strong",null,"Do you have a portfolio:"),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{name:"checkbox",type:"checkbox",value:"yes",ref:function(e){return t.checkbox=e},onChange:this.onChange}),r.a.createElement("span",null,"Yes")),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{name:"checkbox",type:"checkbox",value:"no",ref:function(e){return t.checkbox=e},onChange:this.onChange}),r.a.createElement("span",null,"No")),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{name:"checkbox",type:"checkbox",value:"maybe",ref:function(e){return t.checkbox=e},onChange:this.onChange}),r.a.createElement("span",null,"Maybe")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("label",null,r.a.createElement("strong",null,"Resume:"),r.a.createElement("textarea",{name:"resume",ref:function(e){return t.resume=e},onChange:this.onChange})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-version"},r.a.createElement("ul",{className:"package-version"},r.a.createElement("li",null,"Octaform v"+u.version),r.a.createElement("li",null,"Octaform Additional v"+s.version))),r.a.createElement("div",{className:"col-6 col-button"},r.a.createElement("button",{className:"button-primary",type:"submit"},"Validate")))))}}]),a}();l.a.render(r.a.createElement(b,null),document.getElementById("root"))},14:function(e,t){},5:function(e){e.exports={_from:"octaform-additional",_id:"octaform-additional@1.0.13",_inBundle:!1,_integrity:"sha512-/9S7OTSD0vhxwy6XbySYtP9SeUyD0cE9YJ0AHEBNibVg+TVi9HWQBAMy18n1ryETsqzRXo6X1FE18yl6x57TXg==",_location:"/octaform-additional",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"octaform-additional",name:"octaform-additional",escapedName:"octaform-additional",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/octaform-additional/-/octaform-additional-1.0.13.tgz",_shasum:"cd39a4beeacecd8ba18d1236afd181569c188e40",_spec:"octaform-additional",_where:"/Users/admin/Documents/Projects/octaform-demo",author:{name:"Christian Fortes"},bugs:{url:"https://github.com/octaform/octaform-additional/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Octaform Additional Validation - Presets validation to use with Octaform validate, this package contains validations such as email, extension, minlength, and others",engines:{node:">=4.0.0"},homepage:"https://github.com/octaform/octaform#readme",keywords:["form","forms","formjs","form validation","validation","validations","react","angular","vue","javascript","vanilla","additional","additional validations"],license:"MIT",main:"index.js",name:"octaform-additional",repository:{type:"git",url:"git+https://github.com/octaform/octaform-additional.git"},version:"1.0.13"}},6:function(e){e.exports={_from:"octaform",_id:"octaform@1.2.0",_inBundle:!1,_integrity:"sha512-HfwDbwqaOUWpqONkXkhHvrIzPsRRSb5g9dz+QYDLx1ILA3mmLVqoc7tek/eaevm/bdaz5voMLbBlNJHnDJDq9Q==",_location:"/octaform",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"octaform",name:"octaform",escapedName:"octaform",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/octaform/-/octaform-1.2.0.tgz",_shasum:"dfeb38c955c0d1597fc1ee7446e6d7041f62a849",_spec:"octaform",_where:"/Users/admin/Documents/Projects/octaform-demo",author:{name:"Christian Fortes"},bugs:{url:"https://github.com/octaform/octaform/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Octaform helps developers validate forms in an easy way, being completely agnostic to framework.",engines:{node:">=4.0.0"},homepage:"https://github.com/octaform/octaform#readme",keywords:["form","forms","formjs","form validation","validation","react","angular","vue","javascript","vanilla"],license:"MIT",main:"index.js",name:"octaform",repository:{type:"git",url:"git+https://github.com/octaform/octaform.git"},version:"1.2.0"}}});