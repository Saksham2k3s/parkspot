(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdb713ee"],{4895:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"div"},[e._v(e._s(e.count))]),n("m-loading-page")],1)])},i=[],s=n("c551"),a={components:{mLoadingPage:s["a"]},name:"temp",computed:{count:function(){return this.$store.getters["device/getFlavour"]}}},o=a,u=n("2877"),l=Object(u["a"])(o,r,i,!1,null,null,null);t["default"]=l.exports},"5b7e":function(e,t,n){
/*!
 * vue-simple-spinner v1.2.10 (https://github.com/dzwillia/vue-simple-spinner)
 * (c) 2018 David Z. Williams
 * Released under the MIT License.
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VueSimpleSpinner=void 0;var r=n(1),i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}"undefined"!==typeof window&&window.Vue&&Vue.component("vue-simple-spinner",i.default),t.VueSimpleSpinner=i.default,t.default=i.default},function(e,t,n){n(2);var r=n(7)(n(8),n(9),null,null);e.exports=r.exports},function(e,t,n){var r=n(3);"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(5)("d89557e4",r,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".vue-simple-spinner{transition:all .3s linear}@keyframes vue-simple-spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"===typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(6),s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,u=0,l=!1,c=function(){},p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(h(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:a}}}}function d(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var i=u++;r=o||(o=d()),t=g.bind(null,r,i,!1),n=g.bind(null,r,i,!0)}else r=d(),t=v.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n){l=n;var r=i(e,t);return f(r),function(t){for(var n=[],a=0;a<r.length;a++){var o=r[a],u=s[o.id];u.refs--,n.push(u)}t?(r=i(e,t),f(r)):r=[];for(a=0;a<n.length;a++){u=n[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete s[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function v(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],a=s[0],o=s[1],u=s[2],l=s[3],c={id:e+":"+i,css:o,media:u,sourceMap:l};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var o="function"===typeof s?s.options:s;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),r){var u=Object.create(o.computed||null);Object.keys(r).forEach((function(e){var t=r[e];u[e]=function(){return t}})),o.computed=u}return{esModule:i,exports:s,options:o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.default={props:{size:{default:32},"line-size":{type:Number,default:3},"line-bg-color":{type:String,default:"#eee"},"line-fg-color":{type:String,default:"#2196f3"},speed:{type:Number,default:.8},spacing:{type:Number,default:4},message:{type:String,default:""},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#555"}},computed:{size_px:function(){switch(this.size){case"tiny":return 12;case"small":return 16;case"medium":return 32;case"large":return 48;case"big":return 64;case"huge":return 96;case"massive":return 128}return r(this.size)?this.size:32},line_size_px:function(){switch(this.size){case"tiny":return 1;case"small":return 2;case"medium":return 3;case"large":return 3;case"big":return 4;case"huge":return 4;case"massive":return 5}return r(this.lineSize)?this.lineSize:4},text_margin_top:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return r(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(.4*this.size_px),11),32)}return r(this.fontSize)?this.fontSize:13},spinner_style:function(){return{margin:"0 auto","border-radius":"100%",border:this.line_size_px+"px solid "+this.lineBgColor,"border-top":this.line_size_px+"px solid "+this.lineFgColor,width:this.size_px+"px",height:this.size_px+"px",animation:"vue-simple-spinner-spin "+this.speed+"s linear infinite"}},text_style:function(){return{"margin-top":this.text_margin_top+"px",color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":"center"}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"vue-simple-spinner",style:e.spinner_style}),e._v(" "),e.message.length>0?n("div",{staticClass:"vue-simple-spinner-text",style:e.text_style},[e._v(e._s(e.message))]):e._e()])},staticRenderFns:[]}}])["default"]}))},c551:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-simple-spinner",{staticStyle:{margin:"0px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},attrs:{size:"large","line-bg-color":"#0085AD","line-fg-color":"#ffdd57",message:"Loading..."}})],1)},i=[],s=n("5b7e"),a=n.n(s),o={components:{VueSimpleSpinner:a.a},name:"m-loading-page"},u=o,l=n("2877"),c=Object(l["a"])(u,r,i,!1,null,null,null);t["a"]=c.exports}}]);