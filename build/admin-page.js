(window.webpackJsonp_=window.webpackJsonp_||[]).push([[3],{16:function(e,t,n){}}]),function(e){function t(t){for(var r,c,s=t[0],l=t[1],i=t[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp_=window.webpackJsonp_||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([18,3]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.domReady},,,function(e,t){e.exports=window.wp.i18n},function(e,t,n){var r=n(11),o=n(12),a=n(13),c=n(15);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},,,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){c=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(c)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(14);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),a=n.n(o),c=n(6),s=n(1),l=n.n(s),i=n(7),u=n.n(i),p=n(2),f=n.n(p),m=function(e){var t=e.type,n=e.name,o=e.checked,a=e.value,c=e.onChange,s=e.className;return Object(r.createElement)("input",{className:s,type:t,name:n,checked:o,value:a,onChange:c})},b=function(e){var t=e.option;return Object(r.createElement)("option",{value:t},t)},y=function(e){var t=e.values,n=e.name,o=e.onChange;return Object(r.createElement)("select",{value:t[0],name:n,onChange:o},t.map((function(e){return Object(r.createElement)(b,{option:e})})))},d=function(e){var t,n=e.note,o=e.setting,a=e.onChange;return"string"==typeof o[Object.keys(o)[0]]?t=Object(r.createElement)(m,{className:"text-input",type:"text",name:Object.keys(o),value:o[Object.keys(o)[0]],onChange:a}):"boolean"==typeof o[Object.keys(o)[0]]?t=Object(r.createElement)(m,{className:"checkbox-input",type:"checkbox",name:Object.keys(o),checked:o[Object.keys(o)[0]],onChange:a}):"object"===f()(o[Object.keys(o)[0]])&&(t=Object(r.createElement)(y,{values:o[Object.keys(o)[0]],name:Object.keys(o)[0],onChange:a})),Object(r.createElement)("div",{className:"setting-item--container"},Object(r.createElement)("div",{className:"setting-item"},Object(r.createElement)("div",{className:"setting-item--label"},Object(r.createElement)("label",null,Object.keys(o))),Object(r.createElement)("div",{className:"setting-item--control"},t,Object(r.createElement)("p",null,n))))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(){var e,t=Object(r.useState)(null),n=u()(t,2),o=n[0],a=n[1],c=Object(r.useState)("general"),s=u()(c,2),i=s[0],p=s[1];o||(e=a,fetch("/wp-json/wp-parsely/v1/settings").then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(t){return e(t)})));var f=function(e){var t=o[e.target.name],n="checkbox"===e.target.type?!t:e.target.value;a(O(O({},o),{},l()({},e.target.name,n)))},m=function(e,t){return e===t?"":"inactive"};return Object(r.createElement)("div",{className:"settings-container"},Object(r.createElement)("nav",{className:"controls"},Object(r.createElement)("div",{className:"nav-control",onClick:function(){return p("general")}},Object(r.createElement)("span",{className:"".concat("general"===i?"active":"")},"General")),Object(r.createElement)("div",{className:"nav-control",onClick:function(){return p("advanced")}},Object(r.createElement)("span",{className:"".concat("advanced"===i?"active":"")},"Advanced")),Object(r.createElement)("div",{className:"nav-control",onClick:function(){return p("debug")}},Object(r.createElement)("span",{className:"".concat("debug"===i?"active":"")},"Debug"))),Object(r.createElement)("form",{onSubmit:function(e){return function(e){e.preventDefault()}(e)}},o?Object(r.createElement)("div",{className:"settings-holder"},Object(r.createElement)("div",{className:"tab - body general ".concat(m("general",i))},Object(r.createElement)(d,{setting:{siteID:o.apikey},onChange:f,note:"Your SiteID is your own site domain"}),Object(r.createElement)(d,{setting:{apiSecret:"no secret given"},onChange:f,note:"Your API Secret is your secret code to access our API"}),Object(r.createElement)(d,{setting:{logo:o.logo},onChange:f,note:"You can pass a URL to set your site's logo"}),Object(r.createElement)(d,{setting:{trackPostTypes:o.track_post_types},onChange:f,note:"You can pass a URL to set your site's logo"}),Object(r.createElement)(d,{setting:{trackPageTypes:o.track_page_types},onChange:f,note:"You can pass a URL to set your site's logo"})),Object(r.createElement)("div",{className:"tab-body advanced ".concat(m("advanced",i))},Object(r.createElement)(d,{setting:{metaType:o.meta_type},onChange:f,note:"Choose the metadata format for us to track"}),Object(r.createElement)(d,{setting:{customTaxonomySection:o.custom_taxonomy_section},onChange:f,note:"Default: Category. Choose the default taxonomy to map to Parse.ly sections"}),Object(r.createElement)(d,{setting:{contentIDPrefix:o.content_id_prefix},onChange:f,note:"Choose a custom prefix for your content"}),Object(r.createElement)(d,{setting:{disableJavaScript:o.disable_javascript},onChange:f,note:"Default: On. Disable our javascript tracking if you use a separate system for JS tracking"}),Object(r.createElement)(d,{setting:{disableAMP:o.disable_amp},onChange:f,note:"Default: On. Disable our AMP tracking if you use a separate system to track AMP content"}),Object(r.createElement)(d,{setting:{useTopLevelCategories:o.use_top_level_cats},onChange:f,note:"Default: On. Choose if you want the first top-level category to be mapped to Parse.ly"}),Object(r.createElement)(d,{setting:{catsAsTags:o.cats_as_tags},onChange:f,note:"Default: On. Choose if you want your non-primary categories to appear as tags"}),Object(r.createElement)(d,{setting:{trackAuthenticatedUsers:o.track_authenticated_users},onChange:f,note:"Default: On."}),Object(r.createElement)(d,{setting:{lowercaseTags:o.lowercase_tags},onChange:f,note:"Default: On. Choose if you want your tags to be converted to lower case"}),Object(r.createElement)(d,{setting:{forceHTTPSCanonicals:o.force_https_canonicals},onChange:f,note:"Default: Off. Choose if you want your canonicals to use the HTTPS scheme"})),Object(r.createElement)("div",{className:"tab - body debug ".concat(m("debug",i))},Object(r.createElement)(d,{setting:{metadataSecret:o.metadata_secret},onChange:f,note:"The metadata secret provided to you by Parse.ly"}),Object(r.createElement)(d,{setting:{parselyWipeMetadataCache:o.parsely_wipe_metadata_cache},onChange:f,note:"This will wipe all of your site's metadata and resend all metadata to Parse.ly"}))):Object(r.createElement)("h1",null,"Loading Settings..."),Object(r.createElement)("input",{type:"submit",className:"button-primary",value:"do the thing!"})))};n(16),a()((function(){wp.element.render(Object(r.createElement)(h,null),document.getElementById("wp-parsely-react-entrypoint"));var e=document.querySelector("#apikey"),t=document.querySelectorAll('.parsely-form-controls[data-requires-recrawl="true"] .help-text');if(e&&t.length){var n=Object(c.sprintf)(
/* translators: %s: The API Key that will be used to request a recrawl */
Object(c.__)('<strong style="color:red;">Important:</strong> changing this value on a site currently tracked with Parse.ly will require reprocessing of your Parse.ly data. Once you have changed this value, please contact <a href="mailto:support@parsely.com?subject=Please reprocess %s">support@parsely.com</a>'),e.value,"wp-parsely");[].forEach.call(t,(function(e){var t=document.createElement("p");t.className="description",t.innerHTML=n,e.appendChild(t)}))}}))}]);