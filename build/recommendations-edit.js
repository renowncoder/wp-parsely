!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.regeneratorRuntime},function(e,t){function r(e,t,r,n,a,l,o){try{var c=e[l](o),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var o=e.apply(t,n);function c(e){r(o,a,l,c,i,"next",e)}function i(e){r(o,a,l,c,i,"throw",e)}c(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.url},function(e,t,r){var n=r(16),a=r(17),l=r(18),o=r(20);e.exports=function(e,t){return n(e)||a(e,t)||l(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},,function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),a=r.n(n),l=r(6),o=r.n(l),c=r(0),i=r(2),s=r.n(i),u=r(11),p=r(12),b=r.n(p),f=r(5),_=r(13);function w(e){var t=e.boost,r=e.displaydirection,n=e.limit,l=e.personalized,i=e.pubstart,p=e.sortrecs,w=e.title,d=Object(c.useState)(null),v=o()(d,2),y=v[0],O=v[1],j=Object(c.useState)(!1),m=o()(j,2),g=m[0],x=m[1],h=Object(c.useState)([]),E=o()(h,2),P=E[0],R=E[1],S=window.location.href,k={boost:t,displaydirection:r,limit:n,pub_start_date:i,sort:p,url:S};function M(){return C.apply(this,arguments)}function C(){return(C=a()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b()({path:Object(f.addQueryArgs)("/wp-parsely/v1/recommendations",k)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return L.apply(this,arguments)}function L(){return(L=a()(s.a.mark((function e(){var t,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.a)(k);case 3:r=e.sent,e.next=17;break;case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,e.next=11,M();case 11:r=e.sent,e.next=17;break;case 14:e.prev=14,e.t1=e.catch(8),O(e.t1);case 17:n=(null===(t=r)||void 0===t?void 0:t.data)||[],x(!0),R(n);case 20:case"end":return e.stop()}}),e,null,[[0,6],[8,14]])})))).apply(this,arguments)}Object(c.useEffect)(A,[]);var T=Object(u.useDebounce)(a()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(!1);case 2:return e.next=4,A();case 4:case"end":return e.stop()}}),e)}))),250);return Object(c.useEffect)((function(){g&&T()}),[t,r,n,l,i,p,S]),g?y?Object(c.createElement)(c.Fragment,null,y):P.length?Object(c.createElement)(c.Fragment,null,w&&Object(c.createElement)("p",{className:"parsely-recommendations__list-title"},w),Object(c.createElement)("ul",{className:"parsely-recommendations__linklist"},P.map((function(e,t){var r=e.title,n=e.url;return Object(c.createElement)("li",{key:t},Object(c.createElement)("a",{href:n},r))})))):Object(c.createElement)(c.Fragment,null,"No recommendations :("):Object(c.createElement)(c.Fragment,null,"Loading...")}},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.apiFetch},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return _}));var n=r(7),a=r.n(n),l=r(3),o=r.n(l),c=r(2),i=r.n(c),s=r(5);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e,t){return Object(s.addQueryArgs)("".concat("https://api.parsely.com/v2/").concat(e),t)},f=function(){var t=o()(i.a.mark((function t(r){var n,a,l,o,c,s,u=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:{},l=u.length>2?u[2]:void 0,o=null===(n=e.wpParsely)||void 0===n?void 0:n.apikey,c=b(r,p({apikey:o},a)),t.next=6,fetch(c,l);case 6:return s=t.sent,t.abrupt("return",s.json());case 8:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}(),_=function(){var e=o()(i.a.mark((function e(){var t,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.abrupt("return",f("related",p({url:window.location.href},t)));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).call(this,r(8))},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,l=[],_n=!0,o=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);_n=!0);}catch(e){o=!0,a=e}finally{try{_n||null==r.return||r.return()}finally{if(o)throw a}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(19);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){e.exports=window.wp.blocks},,,,,,function(e,t,r){"use strict";r.r(t);var n,a,l=r(0),o=r(1),c=r(22),i=r(15),s=r(14);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=r(10),b=r(4),f=function(e){var t=e.attributes,r=t.boost,n=t.displaydirection,a=t.limit,c=t.personalized,s=t.pubstart,u=t.sortrecs,p=t.tag,f=t.title,_=e.setAttributes;return Object(l.createElement)(i.InspectorControls,null,Object(l.createElement)(b.PanelBody,{title:"Settings",initialOpen:!0},Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.TextControl,{label:Object(o.__)("Title"),value:f,onChange:function(e){return _({title:e})}})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.ToggleControl,{label:Object(o.__)("Personalize to Visitor","wp-parsely"),help:c?Object(o.__)("Personalized","wp-parsely"):Object(o.__)("Not Personalized","wp-parsely"),checked:c,onChange:function(){return _({personalized:!c})}})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.RadioControl,{label:Object(o.__)("Display Direction","wp-parsely"),help:Object(o.__)("Show the list of recommended content horizontally or vertically","wp-parsely"),selected:n,options:[{label:Object(o.__)("Horizontal","wp-parsely"),value:"horizontal"},{label:Object(o.__)("Vertical","wp-parsely"),value:"vertical"}],onChange:function(e){return _({displaydirection:"vertical"===e?"vertical":"horizontal"})}})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.TextControl,{label:Object(o.__)("Tag"),value:p,onChange:function(e){return _({tag:e})}})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.RangeControl,{label:Object(o.__)("Maximum Results","wp-parsely"),min:"1",max:"99",onChange:function(e){return _({limit:e})},value:a})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.SelectControl,{label:Object(o.__)("Sort Recommendations","wp-parsely"),value:u,options:[{label:"Score",value:"score"},{label:Object(o.__)("Publication Date","wp-parsely"),value:"pub_date"}],onChange:function(e){return _({sortrecs:e})}})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.RangeControl,{label:Object(o.__)("Publication Start","wp-parsely"),min:"7",max:"365",onChange:function(e){return _({pubstart:e})},value:s})),Object(l.createElement)(b.PanelRow,null,Object(l.createElement)(b.SelectControl,{label:Object(o.__)("Boost"),value:r,options:[{label:Object(o.__)("Views"),value:"views"},{label:Object(o.__)("Mobile Views","wp-parsely"),value:"mobile_views"},{label:Object(o.__)("Tablet Views","wp-parsely"),value:"tablet_views"},{label:Object(o.__)("Desktop Views","wp-parsely"),value:"desktop_views"},{label:Object(o.__)("Tablet Views","wp-parsely"),value:"tablet_views"},{label:Object(o.__)("Visitors","wp-parsely"),value:"visitors"},{label:Object(o.__)("Visitors New","wp-parsely"),value:"visitors_new"},{label:Object(o.__)("Visitors Returning","wp-parsely"),value:"visitors_returning"},{label:Object(o.__)("Engaged Minutes","wp-parsely"),value:"engaged_minutes"},{label:Object(o.__)("Avergae Engaged","wp-parsely"),value:"avg_engaged"},{label:Object(o.__)("Avergae Engaged New","wp-parsely"),value:"avg_engaged_new"},{label:Object(o.__)("Avergae Engaged Returning","wp-parsely"),value:"avg_engaged_returning"},{label:Object(o.__)("Social Interactions","wp-parsely"),value:"social_interactions"},{label:Object(o.__)("Facebook Interactions","wp-parsely"),value:"fb_interactions"},{label:Object(o.__)("Twitter Interactions","wp-parsely"),value:"tw_interactions"},{label:Object(o.__)("LinkedIn Interactions","wp-parsely"),value:"li_interactions"},{label:Object(o.__)("Pinterest Interactions","wp-parsely"),value:"pi_interactions"},{label:Object(o.__)("Facebook Referrals","wp-parsely"),value:"fb_referrals"},{label:Object(o.__)("Twitter Referrals","wp-parsely"),value:"tw_referrals"},{label:Object(o.__)("LinkedIn Referrals","wp-parsely"),value:"li_referrals"},{label:Object(o.__)("Pinterest Referrals","wp-parsely"),value:"pi_referrals"}],onChange:function(e){return _({boost:e})}}))))};Object(c.registerBlockType)("wp-parsely/recommendations",{apiVersion:2,title:Object(o.__)("Parse.ly Related","wp-parsely"),icon:function(e){return s.createElement("svg",u({id:"Parsely-Logo-sRGB-Leaf-Green_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 65"},e),n||(n=s.createElement("defs",null,s.createElement("style",null,".Parsely-Logo-sRGB-Leaf-Green_svg__cls-1{fill:#5ba745}"))),a||(a=s.createElement("path",{className:"Parsely-Logo-sRGB-Leaf-Green_svg__cls-1",d:"M23.72 51.53c0-.18 0-.34-.06-.52a13.11 13.11 0 00-2.1-5.53A14.74 14.74 0 0019.12 43c-.27-.21-.5-.11-.51.22l-.24 3.42c0 .33-.38.35-.49 0l-1.5-4.8a1.4 1.4 0 00-.77-.78 23.91 23.91 0 00-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34 0-.45.21-.25.49l2.06 3.76c.2.27 0 .54-.29.33l-4.51-3.6a3.68 3.68 0 00-2.86-.48c-1 .16-2.44.46-2.44.46a.68.68 0 00-.39.25.73.73 0 00-.14.45S.41 43 .54 44a3.63 3.63 0 001.25 2.62L6.48 50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5 0-.4.37 0 0 .69 1.89 1.31 3.16a24 24 0 001.66 2.74 1.34 1.34 0 001 .52l5 .13c.33 0 .41.38.1.48L7.51 58c-.31.1-.34.35-.07.55a14.29 14.29 0 003.05 1.66 13.09 13.09 0 005.9.5 25.13 25.13 0 004.34-1 9.55 9.55 0 01-.08-1.2 9.32 9.32 0 013.07-6.91M59.7 41.53a.73.73 0 00-.14-.45.68.68 0 00-.39-.25s-1.43-.3-2.44-.46a3.64 3.64 0 00-2.86.48l-4.51 3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49 0 0-2 .15-3.39.39a23.91 23.91 0 00-3.1.84 1.4 1.4 0 00-.77.78l-1.5 4.8c-.11.32-.48.3-.49 0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74 14.74 0 00-2.44 2.47 13.11 13.11 0 00-2.1 5.49c0 .18 0 .34-.06.52a9.26 9.26 0 013 8.1 24.1 24.1 0 004.34 1 13.09 13.09 0 005.9-.5 14.29 14.29 0 003.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38 1.38 0 001-.52A24.6 24.6 0 0057 52.92c.61-1.27 1.31-3.16 1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63 3.63 0 0059.46 44c.13-1 .24-2.47.24-2.47M46.5 25.61c0-.53-.35-.72-.8-.43l-4.86 2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2 2 0 00.28-1.68 36.51 36.51 0 00-2.19-4.89 34 34 0 00-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28 5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54 2.54 0 00-.66-1.64S35 4.27 33.88 3.27 30.78.69 30.78.69a1.29 1.29 0 00-1.54 0s-1.88 1.49-3.12 2.59-2.48 2.35-2.48 2.35A2.5 2.5 0 0023 7.27l.27 8.93c0 .53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77 35.77 0 00-3 4.2 35.55 35.55 0 00-2 4.62 2 2 0 00.27 1.67l4.67 6.24c.33.42.23 1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6 18.6 0 00.83 5.07 20.16 20.16 0 005.37 7.77c3.19 3 5.93 7.8 7.45 11.08a9.6 9.6 0 012.83-.44 9.31 9.31 0 012.86.45c1.52-3.28 4.26-8.11 7.44-11.09a20.46 20.46 0 005.09-7 19 19 0 001.11-5.82M36.12 58.44A6.12 6.12 0 1130 52.32a6.11 6.11 0 016.12 6.12"})))},category:"widgets",edit:function(e){return Object(l.createElement)("div",Object(i.useBlockProps)(),Object(l.createElement)(f,e),Object(l.createElement)(p.a,e.attributes))}})}]);