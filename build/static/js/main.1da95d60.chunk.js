(this["webpackJsonpmarketplace-app-template-ui"]=this["webpackJsonpmarketplace-app-template-ui"]||[]).push([[0],{263:function(e,t,n){},461:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){},464:function(e,t,n){},465:function(e,t,n){},467:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(24),l=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,477)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),c(e),l(e)}))},r=n(9),d=n(253),s=n(15),u=n(16),p=n(18),b=n(27),j=n(7),f=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){throw console.error("errorInfo ",t),new Error(t)}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.warn(e),{hasError:!0}}}]),n}(i.a.Component),v=n(21),h=n(11),O=n(73),x=n(23),m=n(3),g=n(26),y=n(69),F=n.n(y),w={mergeObjects:function e(t,n){var a;return null===(a=Object.keys(n))||void 0===a||a.forEach((function(a){n[a]instanceof Object&&a in t&&Object.assign(n[a],e(t[a],n[a]))})),Object.assign(t||{},n),t}},k=w,C=(n(193),n(263),n(146)),S=[{value:"add",label:"Add",id:"add"},{value:"update",label:"Update",id:"update"},{value:"delete",label:"Delete",id:"delete"}],N=function(e){var t=e.parentState,n=e.applicablePath,a=e.formik,i=e.path;return console.log(t.contenttypes.content_types,t.contentType),"add"===n.condition||"delete"===n.condition?Object(j.jsx)("div",{className:"ml-20",children:Object(j.jsx)(g.c,{selectLabel:"New Field",value:void 0,onChange:function(e){return a.setFieldValue(i+"newField",e.value)},options:I(t.contenttypes.content_types,n.contentType),width:"180px"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"ml-20",children:Object(j.jsx)(g.c,{selectLabel:"Current Field",value:void 0,onChange:function(e){return a.setFieldValue(i+"currentField",e.value)},options:I(t.contenttypes.content_types,n.contentType),width:"180px"})}),Object(j.jsx)("div",{className:"ml-20",children:Object(j.jsx)(g.c,{selectLabel:"New Field",value:void 0,onChange:function(e){return a.setFieldValue(i+"newField",e.value)},options:I(t.contenttypes.content_types,n.contentType),width:"180px"})})]})},T=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t,n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.contentstack.io/v3/content_types",{headers:{api_key:"blt24dcf2e98f671ca5",authorization:"csfa4b66976f8fc80c114c87cb"}});case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.abrupt("return",JSON.parse(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e,t){var n,a=null===(n=e.find((function(e){return e.uid===t})))||void 0===n?void 0:n.schema;return null===a||void 0===a?void 0:a.map((function(e){return{value:e.uid,label:e.display_name,id:e.uid}}))},A=function(e){return e.map((function(e){return{value:e.uid,label:e.title,id:e.uid}}))},z=function(){var e,t,n,i=Object(a.useState)({installationData:{configuration:{configField1:""},serverConfiguration:{}},setInstallationData:function(){},appSdkInitialized:!1}),c=Object(m.a)(i,2),l=c[0],o=c[1];Object(a.useEffect)((function(){F.a.init().then(function(){var e=Object(x.a)(Object(h.a)().mark((function e(t){var n,a,i,c,r,d;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=null===t||void 0===t||null===(n=t.location)||void 0===n||null===(a=n.AppConfigWidget)||void 0===a?void 0:a.installation)){e.next=10;break}return e.next=4,i.getInstallationData();case 4:return c=e.sent,r=i.setInstallationData,e.next=8,T();case 8:d=e.sent,o(Object(O.a)(Object(O.a)({},l),{},{installationData:k.mergeObjects(l.installationData,c),setInstallationData:r,appSdkInitialized:!0,contenttypes:d}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var r=Object(C.a)({initialValues:{data:[{name:"",stackApiKey:"blt24dcf2e98f671ca5",enabled:!1,pathApplicable:[{contentType:"",operation:"",fields:{currentField:"",newField:""}}]}]},onSubmit:function(e){console.log(JSON.stringify(e))}});return null!==l&&void 0!==l&&null!==(e=l.contenttypes)&&void 0!==e&&null!==(t=e.content_types)&&void 0!==t&&t.length?Object(j.jsxs)("div",{className:"layout-container",children:[Object(j.jsx)("div",{className:"page-wrapper",children:Object(j.jsx)("div",{className:"config-wrapper",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{width:"200px"},children:Object(j.jsx)(g.a,{type:"button",size:"large",onClick:function(){return r.setFieldValue("data",[].concat(Object(v.a)(r.values.data),[{name:"",stackApiKey:"blt24dcf2e98f671ca5",enabled:!1,pathApplicable:[{contentType:"",operation:"",fields:{currentField:"",newField:""}}]}]))},children:"+ Feature Toggle"})}),null===(n=r.values)||void 0===n?void 0:n.data.map((function(e,t){return Object(j.jsxs)("div",{style:{border:"2px solid #647696",padding:"10px",margin:"10px",borderRadius:"10px",width:"760px"},children:[Object(j.jsxs)("div",{style:{display:"flex",paddingRight:"50px",alignItems:"flex-start"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(g.b,{required:!0,htmlFor:"",children:"Toggle Key"}),Object(j.jsx)(g.d,{value:e.name,onChange:r.handleChange,name:"data.".concat(t,".name"),width:"medium"})]}),Object(j.jsx)("div",{style:{marginTop:"5px",marginLeft:"500px"},children:Object(j.jsx)(g.e,{onClick:function(){return r.setFieldValue("data[".concat(t,"].enabled"),!e.enabled)},checked:e.enabled})})]}),null===e||void 0===e?void 0:e.pathApplicable.map((function(e,n){var a;return Object(j.jsxs)("div",{style:{display:"flex",paddingTop:"10px"},children:[Object(j.jsx)(g.c,{selectLabel:"ContentType",value:null===(a=A(l.contenttypes.content_types))||void 0===a?void 0:a.find((function(t){return t.value===e.contentType})),onChange:function(e){return r.setFieldValue("data[".concat(t,"].pathApplicable[").concat(n,"].contentType"),e.value)},options:A(l.contenttypes.content_types),width:"180px"}),!!e.contentType&&Object(j.jsx)("div",{className:"ml-20",children:Object(j.jsx)(g.c,{selectLabel:"Condition",value:S.find((function(t){return t.value===e.condition})),onChange:function(e){return r.setFieldValue("data[".concat(t,"].pathApplicable[").concat(n,"].condition"),e.value)},options:S,width:"180px"})}),!!e.condition&&Object(j.jsx)(N,{parentState:l,applicablePath:e,path:"data[".concat(t,"].pathApplicable[").concat(n,"]."),formik:r})]})})),Object(j.jsx)(g.a,{className:"mt-10 mr-10",onClick:function(){r.setFieldValue("data[".concat(t,"].pathApplicable"),[].concat(Object(v.a)(null===e||void 0===e?void 0:e.pathApplicable),[{contentType:"",operation:"",fields:{currentField:"",newField:""}}]))},children:"Add new Entry"})]})}))]})})}),Object(j.jsx)("div",{style:{width:"100px",marginLeft:"auto",marginRight:"20px"},children:Object(j.jsx)(g.a,{icon:"save",onClick:r.submitForm,children:"Save Button "})})]}):Object(j.jsx)(j.Fragment,{})},D={configFields:{field1:{label:"Config Field 1",help:"Help text for field 1",placeholder:"Field 1",instruction:"Instruction for field 1"}},customField:{placeHolder:"Enter your name"},sidebarWidget:{titleCaption:"Title - "}},_=(n(461),function(){var e,t=Object(a.useState)({title:""}),n=Object(m.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)({config:{},location:{},appSdkInitialized:!1}),o=Object(m.a)(l,2),r=o[0],d=o[1];return Object(a.useEffect)((function(){F.a.init().then(function(){var e=Object(x.a)(Object(h.a)().mark((function e(t){var n,a,i,l,o;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===t||void 0===t?void 0:t.getConfig();case 2:l=e.sent,o=null===t||void 0===t||null===(n=t.location)||void 0===n||null===(a=n.SidebarWidget)||void 0===a||null===(i=a.entry)||void 0===i?void 0:i.getData(),c(o),d({config:l,location:t.location,appSdkInitialized:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(j.jsxs)("div",{className:"layout-container",children:["abcd",r.appSdkInitialized&&Object(j.jsxs)("div",{className:"sidebar-wrapper",children:[Object(j.jsx)(g.b,{htmlFor:null===r||void 0===r||null===(e=r.config)||void 0===e?void 0:e.configField1,className:"sidebar-field",children:r.config.configField1}),Object(j.jsxs)("div",{className:"entry-wrapper",children:[Object(j.jsx)(g.b,{htmlFor:"entry-title",className:"sidebar-field",children:D.sidebarWidget.titleCaption}),Object(j.jsx)(g.b,{htmlFor:null===i||void 0===i?void 0:i.title,className:"sidebar-field",children:null===i||void 0===i?void 0:i.title})]})]})]})}),E=(n(462),[{value:"add",label:"Add",id:"add"},{value:"update",label:"Update",id:"update"},{value:"delete",label:"Delete",id:"delete"}]),L=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t,n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.contentstack.io/v3/content_types",{headers:{api_key:"blt24dcf2e98f671ca5",authorization:"csfa4b66976f8fc80c114c87cb"}});case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.abrupt("return",JSON.parse(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){return e.map((function(e){return{value:e.uid,label:e.title,id:e.uid}}))},J=function(){var e,t=Object(a.useState)({config:{},location:{},appSdkInitialized:!1,contenttypes:void 0}),n=Object(m.a)(t,2),i=n[0],c=n[1];Object(a.useEffect)((function(){F.a.init().then(function(){var e=Object(x.a)(Object(h.a)().mark((function e(t){var n,a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:return n=e.sent,e.next=5,L();case 5:a=e.sent,c({config:n,location:t.location,appSdkInitialized:!0,contenttypes:a}),console.log(V(a.content_types));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var l=Object(C.a)({initialValues:{data:[]},onSubmit:function(e){console.log(e)}});return console.log(l.values),Object(j.jsx)("div",{className:"layout-container",children:i.appSdkInitialized&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{width:"200px",paddingLeft:"20px",paddingBottom:"20px"},children:Object(j.jsx)(g.a,{type:"button",size:"large",onClick:function(){return l.setFieldValue("data",[].concat(Object(v.a)(l.values.data),[{name:"",stackApiKey:"",enabled:!1,pathApplicable:[{contentType:"",operation:"",fields:{currentField:"",newField:""}}]}]))},children:"+ Feature Toggle"})}),null===(e=l.values)||void 0===e?void 0:e.data.map((function(e,t){var n;return Object(j.jsxs)("div",{style:{border:"4px solid #6c5ce7",padding:"10px",margin:"10px",borderRadius:"10px"},children:[Object(j.jsxs)("div",{style:{display:"flex",paddingRight:"50px",alignItems:"flex-start"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(g.b,{required:!0,htmlFor:"",children:"Toggle Key"}),Object(j.jsx)(g.d,{value:l.values.data[t].name,onChange:l.handleChange,name:"data.".concat(t,".name")})]}),Object(j.jsx)(g.e,{label:"Status",labelPosition:"left",onClick:function(){return l.setFieldValue("data[".concat(t,"].enabled"),!l.values.data[t].enabled)},checked:l.values.data[t].enabled})]}),null===(n=l.values.data[t])||void 0===n?void 0:n.pathApplicable.map((function(e,n){return Object(j.jsxs)("div",{style:{display:"flex",paddingTop:"10px"},children:[Object(j.jsx)(g.c,{selectLabel:"ContentType",value:l.values.data[t].pathApplicable[n].contentType,onChange:function(e){return l.setFieldValue("data[".concat(t,"].enabled.pathApplicable[").concat(n,"].contentType"),e)},options:V(i.contenttypes.content_types)}),"-",Object(j.jsx)(g.c,{selectLabel:"Condition",value:void 0,onChange:function(e){return l.setFieldValue("data[".concat(t,"].enabled.pathApplicable[").concat(n,"].contentType"),e)},options:E})," -",Object(j.jsx)(g.c,{selectLabel:"ContentType",value:void 0,onChange:function(e){return console.log(e)},options:V(i.contenttypes.content_types)})]})}))]})}))]})})},K=(n(463),function(){var e,t,n=Object(a.useState)({config:{},location:{},appSdkInitialized:!1}),i=Object(m.a)(n,2),c=i[0],l=i[1],o=Object(a.useState)(""),r=Object(m.a)(o,2),d=r[0],s=r[1];return Object(a.useEffect)((function(){F.a.init().then(function(){var e=Object(x.a)(Object(h.a)().mark((function e(t){var n,a,i,c,o;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===t||void 0===t?void 0:t.getConfig();case 2:c=e.sent,null!==(o=null===t||void 0===t||null===(n=t.location)||void 0===n||null===(a=n.CustomField)||void 0===a||null===(i=a.field)||void 0===i?void 0:i.getData())&&void 0!==o&&o.name&&0!==Object.keys(o.name).length&&s(null===o||void 0===o?void 0:o.name),l({config:c,location:t.location,appSdkInitialized:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.useEffect)((function(){var e,t,n;null===c||void 0===c||null===(e=c.location)||void 0===e||null===(t=e.CustomField)||void 0===t||null===(n=t.field)||void 0===n||n.setData({name:d})}),[d]),Object(j.jsx)("div",{className:"layout-container",children:c.appSdkInitialized&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g.b,{htmlFor:null===c||void 0===c||null===(e=c.config)||void 0===e?void 0:e.configField1,className:"field",children:c.config.configField1}),Object(j.jsxs)("div",{className:"field-wrapper",children:[Object(j.jsx)(g.b,{htmlFor:null===c||void 0===c||null===(t=c.config)||void 0===t?void 0:t.name,className:"field",children:"Name"}),Object(j.jsx)(g.d,{className:"field",maxLength:50,value:d,width:"large",placeholder:D.customField.placeHolder,onChange:function(e){var t;return s(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},name:"name"})]})]})})}),P=(n(464),function(){var e,t;return"/"!==(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.pathname)?Object(j.jsx)(r.a,{to:{pathname:window.location.pathname}}):null}),R=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(f,{children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(P,{})}),Object(j.jsx)(r.b,{path:"/config",element:Object(j.jsx)(z,{})}),Object(j.jsx)(r.b,{path:"/sidebar-widget",element:Object(j.jsx)(_,{})}),Object(j.jsx)(r.b,{path:"/dashboard-widget",element:Object(j.jsx)(J,{})}),Object(j.jsx)(r.b,{path:"/custom-field",element:Object(j.jsx)(K,{})})]})})})})};n(465);l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),o()}},[[467,1,2]]]);
//# sourceMappingURL=main.1da95d60.chunk.js.map