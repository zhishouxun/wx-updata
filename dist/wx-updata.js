function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,e=!1,c=void 0;try{for(var u,i=t[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!r||n.length!==r);o=!0);}catch(t){e=!0,c=t}finally{try{o||null==i.return||i.return()}finally{if(e)throw c}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=t[n];return o}function o(t){return Array.isArray(t)}function e(r){return"object"===t(r)&&null!==r&&!o(r)}function c(r){return"object"===t(r)&&null!==r}var u=function t(n){for(var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=function(){var n=r(f[l],2),a=n[0],y=n[1],b=""===u?a:u.endsWith("]")?"".concat(u).concat(a):"".concat(u,"/").concat(a);e(y)?t(y,b,i):o(y)?y.forEach((function(r,n){var o="".concat(b,"[").concat(n,"]");c(r)?t(r,o,i):i[o]=r})):i[b]=y},l=0,f=Object.entries(n);l<f.length;l++)a();return i};console.log(u({a:1,b:{c:2},d:[{e:3},,{f:4,g:{h:5},i:[{j:"k"},"hello",[{l:6},,7,"world"]]}]}));export{u as objToPath};
//# sourceMappingURL=wx-updata.js.map
