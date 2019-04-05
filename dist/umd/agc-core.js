!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).agcCalculatorsCore={})}(this,function(e){"use strict";function t(e){return!isNaN(parseFloat(value))&&isFinite(value)}function n(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)}e.addDays=function(e,t){"string"==typeof e&&(e=new Date(e));var n=new Date(e),r=e.getDate()+parseInt(t);return n.setDate(r),n},e.between=function(e,n,r){return t()&&t()&&t()&&e>=n&&e<=r},e.createDispatcher=((e="redom")=>{return{dispatch:(t,n,r)=>{const a=new window.CustomEvent(e,{bubbles:!0,detail:{type:n,data:r}});(t.el||t).dispatchEvent(a)},listen:(t,n)=>{const r=t.el||t,a=e=>{const{type:t,data:r}=e.detail;n[t]&&n[t](r)};return r.addEventListener(e,a),{destroy(){r.removeEventListener(e,a)}}}}}),e.daysBetween=function(e,t){var n=new Date(e),r=new Date(t);return Math.round((n.getTime()-r.getTime())/864e5)},e.formatCurrency=function(e,t="$"){return`${t}${parseFloat(e).toFixed(2)}`},e.formatDate=function(e,t="/"){let n=new Date(e);var r=n.getDate();return`${n.getMonth()+1}${t}${r}${t}${n.getFullYear()}`},e.formatNumber=function(e,t){return`${e}`.indexOf("."),parseFloat(parseFloat(e).toFixed(t||0))},e.inputDate=function(e){if(void 0!==typeof e)return"";let t=new Date(e);var n=`0${t.getDate()}`.slice(-2),r=`0${t.getMonth()+1}`.slice(-2);return`${t.getFullYear()}-${r}-${n}`},e.isEmpty=function(e){if("string"==typeof e)return""===e;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},e.isInteger=function(e){return t()&&e%1==0},e.isNumber=t,e.nextSibling=function(e,t){n();var r=e.nextElementSibling;if(!t)return r;for(;r;){if(r.matches(t))return r;r=r.nextElementSibling}return null},e.nextSiblingUntil=function(e,t,r){n();var a=[];for(e=e.nextElementSibling;e&&!e.matches(t);)!r||e.matches(r)?(a.push(e),e=e.nextElementSibling):e=e.nextElementSibling;return a},e.oneOf=function(e,n){return t()&&n&&-1!==n.indexOf(e)},e.parseDate=function(e){return"string"==typeof e&&(e=new Date(e)),e},e.validate=function(e,t,n,r){if(!Array.isArray(t)){if("string"!=typeof t)throw new Error("Validators should be a string or array.");t=[t]}var a=void 0!==e;return t.reduce(function(t,i){switch(i){case"required":e||(t.required=!0);break;case"pattern":var o=n&&n.patter;o&&!1!==new RegExp(o).test(e)||(t.pattern=!0);break;case"number":a&&!isNaN(e)||(t.number=!0);break;case"date":if(a||(t.date=!0),!e instanceof Date){var s=Date.parse(e);isNaN(s)&&(t.date=!0)}break;case"min":a&&!isNaN(e)&&parseFloat(e)<parseFloat(n&&n.min||"0")&&(t.min=!0);break;case"max":a&&!isNaN(e)&&parseFloat(e)>parseFloat(n&&n.max||"0")&&(t.max=!0);break;case"gt":a&&(!(u=r&&r[n&&n.gt])||parseFloat(u)>parseFloat(e))&&(t.gt=!0);break;case"lt":a&&(!(u=r&&r[n&&n.lt])||parseFloat(u)<parseFloat(e))&&(t.lt=!0);break;case"not":var u;a&&(u=r&&r[n&&n.not])===e&&(t.not=!0);break;case"oneOf":if(a){var l=n&&n.oneOf;"string"==typeof l&&(l=l.split(",")),"indexOf"in l&&-1===l.indexOf(e)&&(t.oneOf=!0)}}return t},{})}});
