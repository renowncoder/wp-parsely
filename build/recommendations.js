!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.regeneratorRuntime},,function(e,t){function r(e,t,r,n,o,u,c){try{var i=e[u](c),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var c=e.apply(t,n);function i(e){r(c,o,u,i,a,"next",e)}function a(e){r(c,o,u,i,a,"throw",e)}i(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(21),o=r(22),u=r(23),c=r(25);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},,,,,function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return y}));var n=r(7),o=r.n(n),u=r(3),c=r.n(u),i=r(1),a=r.n(i),s=r(14);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e,t){return Object(s.addQueryArgs)("".concat("https://api.parsely.com/v2/").concat(e),t)},d=function(){var t=c()(a.a.mark((function t(r){var n,o,u,c,i,s,l=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=l.length>1&&void 0!==l[1]?l[1]:{},u=l.length>2?l[2]:void 0,c=null===(n=e.wpParsely)||void 0===n?void 0:n.apikey,i=p(r,f(f({url:window.location.href},o),{},{apikey:c})),t.next=6,fetch(i,u);case 6:return s=t.sent,t.abrupt("return",s.json());case 8:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}(),y=function(){var e=c()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.abrupt("return",d("related",t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).call(this,r(5))},function(e,t){e.exports=window.wp.url},,,,,,function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),u=r(8),c=r.n(u),i=r(0),a=r(1),s=r.n(a),l=r(13);Object(i.render)(Object(i.createElement)((function(e){var t=e.attributes,r=Object(i.useState)(null),n=c()(r,2),u=n[0],a=n[1],f=Object(i.useState)(!1),p=c()(f,2),d=p[0],y=p[1],b=Object(i.useState)(null),v=c()(b,2),x=v[0],h=v[1];return Object(i.useEffect)((function(){function e(){return(e=o()(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,Object(l.a)();case 4:r=e.sent,t=null==r?void 0:r.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(e.t0);case 11:y(!0),h(t);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.createElement)("div",null,"ohai, hullo!",Object(i.createElement)("br",null),JSON.stringify({attributes:t,recommendations:x,isLoaded:d,error:u}))}),null),document.getElementById("wp-parsely-related-posts").querySelector(".related-posts__grid"))},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,u=[],_n=!0,c=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);_n=!0);}catch(e){c=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(c)throw o}}return u}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(24);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}]);