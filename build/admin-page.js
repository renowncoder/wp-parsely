(window.webpackJsonp_=window.webpackJsonp_||[]).push([[3],{18:function(e,t,a){}}]),function(e){function t(t){for(var n,c,s=t[0],l=t[1],i=t[2],p=0,m=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={0:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp_=window.webpackJsonp_||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([20,3]),a()}([function(e,t){e.exports=window.wp.element},function(e,t,a){var n=a(13),r=a(14),o=a(15),c=a(17);e.exports=function(e,t){return n(e)||r(e,t)||o(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.regeneratorRuntime},function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e,t){function a(e,t,a,n,r,o,c){try{var s=e[o](c),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(n,r)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function s(e){a(c,r,o,s,l,"next",e)}function l(e){a(c,r,o,s,l,"throw",e)}s(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.domReady},,function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.apiFetch},,,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,o=[],_n=!0,c=!1;try{for(a=a.call(e);!(_n=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);_n=!0);}catch(e){c=!0,r=e}finally{try{_n||null==a.return||a.return()}finally{if(c)throw r}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,a){var n=a(16);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(6),o=a.n(r),c=a(8),s=a(5),l=a.n(s),i=a(3),u=a.n(i),p=a(1),m=a.n(p),b=a(2),d=a.n(b),f=a(4),y=a(9),v=a.n(y),O=["disable_javascript","disable_amp","use_top_level_cats","cats_as_tags","track_authenticated_users","lowercase_tags","force_https_canonicals"];function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){var e=l()(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v()({path:"/wp-parsely/v1/settings"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=l()(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.reduce((function(e,a){return h(h({},e),{},u()({},a,t[a]?"true":"false"))}),{}),e.abrupt("return",v()({path:"/wp-parsely/v1/settings",method:"POST",data:{settings:h(h({},t),a)}}));case 2:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}(),w=function(e){var t,a=e.name,r=e.note,o=e.value,c=e.onChange,s=e.label,l=function(e){return c([a,e])};return t=O.includes(a)?Object(n.createElement)(f.ToggleControl,{name:a,label:s,onChange:l,checked:o}):["track_post_types","track_page_types"].includes(a)?Object(n.createElement)(f.SelectControl,{multiple:!0,label:s,options:[{value:o,label:o}],value:o,name:a,onChange:l}):Object(n.createElement)(f.TextControl,{className:"text-input",label:s,name:a,value:o,onChange:l}),Object(n.createElement)("div",{className:"setting-item--container"},Object(n.createElement)("div",{className:"setting-item"},Object(n.createElement)("div",{className:"setting-item--control"},t,Object(n.createElement)("p",{className:"subtext"},r))))},E=function(e){var t=e.apikey,a=e.postsToTrack,r=e.pagesToTrack,o=e.phpVersion,c=e.pluginVersion,s=Object(n.useState)(!1),l=m()(s,2),i=l[0],u=l[1];return Object(n.createElement)("div",{className:"site-details-container"},Object(n.createElement)("div",{className:"site-detail"},Object(n.createElement)("div",{className:"details-label"},Object(n.createElement)("span",null,"Site Details")),Object(n.createElement)("div",{className:"details-info"},Object(n.createElement)("span",{className:"details-info-item"},"Parsely Site ID: ",t),Object(n.createElement)("span",{className:"details-info-item"},"PHP Version: ",o),Object(n.createElement)("span",{className:"details-info-item"},"Post Types to Track: ",a),Object(n.createElement)("span",{className:"details-info-item"},"Page Types to Track: ",r),Object(n.createElement)("span",{className:"details-info-item"},"Plugin Version: ",c),i?Object(n.createElement)("p",null,"Copied!"):Object(n.createElement)("p",{onClick:function(){return(e=document.createElement("textarea")).value="Site ID: ".concat(t,", PHP Version: ").concat(o,", Post Types to track: ").concat(a,", Pages to Track: ").concat(r,", Plugin Version: ").concat(c),e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),void u(!0);var e},className:"copy-cta"},"Copy to Clipboard"))))},x=function(e){var t=e.setting,a=e.label,r=e.note,o=e.onClick;return Object(n.createElement)("div",{className:"container"},Object(n.createElement)("div",{className:"wipe-metadata-container"},Object(n.createElement)("label",{className:"wipe-metadata-label"},a),Object(n.createElement)("div",{className:"wipe-metadata-controls"},Object(n.createElement)("button",{type:"button",className:"wipe-metadata-button",onClick:function(){return o(!0)}},"Wipe your metadata?"),r,Object(n.createElement)("div",{className:"wipe-metadata-warning"},t.parsely_wipe_metadata_cache?Object(n.createElement)("h1",null,"DANGER: METADATA WILL BE WIPED UPON FORM SUBMISSION"):""))))},C=function(e){var t=e.setting,a=e.apikey,r=e.onConfirm,o=e.modalControl,c=Object(n.useState)(""),s=m()(c,2),l=s[0],i=s[1],u=Object(n.useState)(t.parsely_wipe_metadata_cache),p=m()(u,2),b=p[0],d=p[1],y=function(e){e||(i(""),d(!1),r(e)),e&&l===a&&r(e),o(!1)};return Object(n.createElement)("div",{className:"modal-container"},Object(n.createElement)("div",{onClick:function(){return y(!1)},className:"modal-background"}),Object(n.createElement)("div",{className:"modal"},Object(n.createElement)("strong",null,"Type ",Object(n.createElement)("span",{className:"code"},a)," below and then click Confirm if you really want to delete all stored metadata. This action cannot be undone"),Object(n.createElement)(f.TextControl,{className:"text-input",label:"Wipe Metadata Cache",onChange:i}),Object(n.createElement)("button",{className:"button-secondary",type:"button",onClick:function(){return y(!1)}},"Cancel"),Object(n.createElement)("button",{type:"button",className:"button-primary ".concat(l!==a?"disabled":""),onClick:function(){return y(!0)}},"Confirm"),b?Object(n.createElement)("button",{onClick:function(){return y(!1)}},"Undo"):""))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(){var e=Object(n.useState)(null),t=m()(e,2),a=t[0],r=t[1],o=Object(n.useState)("general"),c=m()(o,2),s=c[0],i=c[1],p=Object(n.useState)(!1),b=m()(p,2),y=b[0],v=b[1],O=Object(n.useState)(!1),g=m()(O,2),h=g[0],k=g[1],N=Object(n.useState)(!1),S=m()(N,2),T=S[0],D=S[1],M=Object(n.useState)(!1),A=m()(M,2),I=A[0],L=A[1];Object(n.useEffect)((function(){j().then((function(e){r(e),v(!0)}),(function(e){console.error(e),k({content:"Could not read settings from the site.",isDismissible:!1,status:"error"})}))}),[]);var U=function(){return k(!1)},V=function(e){var t=m()(e,2),n=t[0],o=t[1];U(),r(P(P({},a),{},u()({},n,o)))},R=function(e,t){return e===t?"":"inactive"},J=function(e){L(e)},H=function(){var e=l()(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),U(),e.prev=3,e.next=6,_(a);case 6:n=e.sent,r(n),k({content:"Settings Successfully Updated!"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),k({content:"Something went wrong! Please review your settings and try again.",status:"error"}),console.error(e.t0);case 15:D(!1);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(_x){return e.apply(this,arguments)}}(),W=function(e){U(),i(e)},q=Object(n.createElement)("nav",{className:"controls"},Object(n.createElement)("div",{className:"nav-control",onClick:function(){return W("general")}},Object(n.createElement)("span",{className:"".concat("general"===s?"active":"")},"General")),Object(n.createElement)("div",{className:"nav-control",onClick:function(){return W("advanced")}},Object(n.createElement)("span",{className:"".concat("advanced"===s?"active":"")},"Advanced")),Object(n.createElement)("div",{className:"nav-control",onClick:function(){return W("debug")}},Object(n.createElement)("span",{className:"".concat("debug"===s?"active":"")},"Debug"))),B=a&&Object(n.createElement)("form",{className:"settings-form",onSubmit:function(e){return H(e)}},Object(n.createElement)("div",{className:"settings-holder"},Object(n.createElement)("div",{className:"tab-body general ".concat(R("general",s))},Object(n.createElement)(w,{disabled:T,name:"apikey",value:a.apikey,label:"Site ID",onChange:V,note:"Your SiteID is your own site domain"}),Object(n.createElement)(w,{name:"apiSecret",value:"no secret given",label:"API Secret",onChange:V,note:"Your API Secret is your secret code to access our API"}),Object(n.createElement)(w,{name:"logo",value:a.logo,label:"Logo",onChange:V,note:"You can pass a URL to set your site's logo"}),Object(n.createElement)(w,{name:"track_post_types",value:a.track_post_types,label:"Track Post Types",onChange:V,note:"...."}),Object(n.createElement)(w,{name:"track_page_types",value:a.track_page_types,label:"Track Page Types",onChange:V,note:"...."})),Object(n.createElement)("div",{className:"tab-body advanced ".concat(R("advanced",s))},Object(n.createElement)(w,{name:"meta_type",value:a.meta_type,label:"Metadata Type",onChange:V,note:"Choose the metadata format for us to track"}),Object(n.createElement)(w,{name:"custom_taxonomy_section",value:a.custom_taxonomy_section,label:"Custom Taxonomy Section",onChange:V,note:"Default: Category. Choose the default taxonomy to map to Parse.ly sections"}),Object(n.createElement)(w,{name:"content_id_prefix",value:a.content_id_prefix,label:"Content ID Prefix",onChange:V,note:"Choose a custom prefix for your content"}),Object(n.createElement)(w,{name:"disable_javascript",value:a.disable_javascript,label:"Disable Javascript",onChange:V,note:"Default: Off. Disable our javascript tracking if you use a separate system for JS tracking"}),Object(n.createElement)(w,{name:"disable_amp",value:a.disable_amp,label:"Disable AMP",onChange:V,note:"Default: On. Disable our AMP tracking if you use a separate system to track AMP content"}),Object(n.createElement)(w,{name:"use_top_level_cats",value:a.use_top_level_cats,label:"Use Top-Level Categories",onChange:V,note:"Default: On. Choose if you want the first top-level category to be mapped to Parse.ly"}),Object(n.createElement)(w,{name:"cats_as_tags",value:a.cats_as_tags,label:"Categories as Tags",onChange:V,note:"Default: On. Choose if you want your non-primary categories to appear as tags"}),Object(n.createElement)(w,{name:"track_authenticated_users",value:a.track_authenticated_users,label:"Track Authenticated Users",onChange:V,note:"Default: On."}),Object(n.createElement)(w,{name:"lowercase_tags",value:a.lowercase_tags,label:"Lowercase Tags",onChange:V,note:"Default: On. Choose if you want your tags to be converted to lower case"}),Object(n.createElement)(w,{name:"force_https_canonicals",value:a.force_https_canonicals,label:"Force HTTPS Canonical URLs",onChange:V,note:"Default: Off. Choose if you want your canonicals to use the HTTPS scheme"})),Object(n.createElement)("div",{className:"tab-body debug ".concat(R("debug",s))},I?Object(n.createElement)(C,{onConfirm:function(e){return r(P(P({},a),{},{parsely_wipe_metadata_cache:e}))},apikey:a.apikey,modalControl:J,setting:{parsely_wipe_metadata_cache:a.parsely_wipe_metadata_cache}}):"",Object(n.createElement)(w,{name:"metadata_secret",value:a.metadata_secret,label:"Metadata Secret",onChange:V,note:"The metadata secret provided to you by Parse.ly"}),Object(n.createElement)(x,{setting:{parsely_wipe_metadata_cache:a.parsely_wipe_metadata_cache},label:"Wipe Metadata Cache",onClick:J,note:"This will wipe all of your site's metadata and resend all metadata to Parse.ly"}),Object(n.createElement)(E,{apikey:a.apikey,postsToTrack:a.track_post_types,pagesToTrack:a.track_page_types,pluginVersion:"2.5",phpVersion:"7.4.1"}))),Object(n.createElement)("input",{disabled:T,type:"submit",className:"button-primary",value:"do the thing!"})),F="error"===(null==h?void 0:h.status);return Object(n.createElement)("div",{className:"settings-container"},!y&&F&&!h.isDismissible&&Object(n.createElement)(f.Notice,{status:"error",isDismissible:!1},h.content),!y&&!F&&Object(n.createElement)("h2",null,"Loading..."),y&&h&&Object(n.createElement)(f.SnackbarList,{onRemove:U,notices:[{content:h.content,className:F&&"settings-error"}]}),y&&q,y&&B)};a(18),o()((function(){wp.element.render(Object(n.createElement)(N,null),document.getElementById("wp-parsely-react-entrypoint"));var e=document.querySelector("#apikey"),t=document.querySelectorAll('.parsely-form-controls[data-requires-recrawl="true"] .help-text');if(e&&t.length){var a=Object(c.sprintf)(
/* translators: %s: The API Key that will be used to request a recrawl */
Object(c.__)('<strong style="color:red;">Important:</strong> changing this value on a site currently tracked with Parse.ly will require reprocessing of your Parse.ly data. Once you have changed this value, please contact <a href="mailto:support@parsely.com?subject=Please reprocess %s">support@parsely.com</a>'),e.value,"wp-parsely");[].forEach.call(t,(function(e){var t=document.createElement("p");t.className="description",t.innerHTML=a,e.appendChild(t)}))}}))}]);