(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734d670b"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a630"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"0d03":function(t,e,a){var r=a("6eeb"),i=Date.prototype,n="Invalid Date",o="toString",s=i[o],c=i.getTime;new Date(NaN)+""!=n&&r(i,o,(function(){var t=c.call(this);return t===t?s.call(this):n}))},"14f8":function(t,e,a){t.exports=a.p+"img/features-tick.396ee303.svg"},"25f0":function(t,e,a){"use strict";var r=a("6eeb"),i=a("825a"),n=a("d039"),o=a("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=s;(u||f)&&r(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?o.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},"277d":function(t,e,a){var r=a("23e7"),i=a("e8b5");r({target:"Array",stat:!0},{isArray:i})},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"82d9":function(t,e,a){},"9cc8":function(t,e,a){"use strict";var r=a("eca6"),i=a.n(r);i.a},"9da2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("t-features-page")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("m-features-main-heading"),a("div",{staticClass:"columns is-flex-wrap-wrap is-3"},t._l(t.featuresData,(function(e){return a("div",{key:e.id,staticClass:"features-card column is-half"},[a("transition",{attrs:{name:"expand"}},[e.textLimit?a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{featuresTitle:e.title,featuresText:e.text.substring(0,300)+"..."}}):t._e(),e.textLimit?t._e():a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{featuresTitle:e.title,featuresText:e.text}})],1),e.textLimit?a("p",{staticClass:"feature-card__show",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show more ")]):t._e(),e.textLimit?t._e():a("p",{staticClass:"feature-card__hide",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show Less ")])],1)})),0)],1)},o=[],s=a("5530"),c=(a("a4d3"),a("e01a"),a("d28b"),a("277d"),a("d3b7"),a("3ca3"),a("ddb0"),a("06c5"));function l(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(c["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(s)throw n}}}}var u=a("3093"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-features-details"},[a("atom-img",{staticClass:"m-features-details__img",attrs:{src:t.src}}),a("atom-b-subtitle",{staticClass:"m-features-details__title",attrs:{text:t.featuresTitle}}),a("br"),a("p",{staticClass:"m-features-details__text",domProps:{innerHTML:t._s(t.featuresText)}})],1)},d=[],p=a("6cb1"),h=a("89fb"),g=a("abde"),v={components:{atomBSubtitle:h["a"],AtomText:g["a"],AtomImg:p["a"]},name:"m-features-details",props:{featuresTitle:String,featuresText:String},data:function(){return{src:a("14f8")}}},b=v,m=(a("eac4"),a("2877")),y=Object(m["a"])(b,f,d,!1,null,"aa2cf052",null),k=y.exports,w=a("5991"),x={components:{MFeaturesDetails:k,MFeaturesMainHeading:w["a"],AtomButton:u["a"]},name:"t-features-page",data:function(){return{featuresData:[{id:1,title:"Navigation",text:"It is very difficult to go to an unknown place. \n          People usually search on Google Maps to reach a particular          location but sometimes it happens that people don’t get          the exact address from the map.It is easy to find places          like malls, hospitals, and much more popular sites, but           when it comes to finding a specific location like a house,           it’s really hard.<br> <br> ParkSpot helps in this situation.           ParkSpot stores the exact location of the parking location           and gives a navigation feature that will direct the ParkSpot           user to navigate to the desired parking space.This easy-finding           feature helps let users experience a hassle-free parking experience.",textLimit:!0},{id:2,title:"Booking",text:"Who doesn’t want to reserve a spot? It is easy to park           vehicles beside the roadside but everyone knows what might be           the consequences.The usual consequences will be that the user’s           vehicle might get towed away. Just like people going to Movie           Theatres after booking a ticket so that they don’t need to worry           about the availability of tickets after going to the Theatre, users           can also book their car parking space by using our platform and           will be assured that there will be a parking space reserved for           their vehicles. <br> <br> ParkSpot helps in this situation. Our platform           provides short term booking as well as long term rental booking.           So if people want to go out of the station for a few days and people           who do not have a parking area in their apartment and do not have           a parking spot to keep their vehicle, they may not be able to           afford airport parking rates and malls do not allow longtime booking.           ParkSpot can be of help in this situation. ParkSpot helps users to book           the best, cheap and secure parking space for the long term at a very reasonable price.",textLimit:!0},{id:3,title:"Searching",text:"People love their cars and hence they would want to keep their           vehicles in a safe and secure parking area. They would want a parking           area where there will be security guards, CCTV cameras, etc. ParkSpot           provides a genuine and authentic parking space for its users so that           no mishappening will be done to the user’s property. ParkSpot provides           security to private property as well so that users don’t need to worry           about the place where they are keeping their vehicles.",textLimit:!0},{id:4,title:"Safety & Security",text:"People go to places like shopping malls, hospitals, and many local           areas with their cars, without thinking that there may not be available car           parking spaces. Maps can help you search popular sites but ParkSpot along           with search provides additional information like current availability,           rates, distance, etc. ParkSpot also helps users to search apartment parking areas.",textLimit:!0}]}},methods:{expand:function(t){var e,a=[],r=l(this.featuresData);try{for(r.s();!(e=r.n()).done;){var i=e.value;i.id===t?(i=Object(s["a"])(Object(s["a"])({},i),{},{textLimit:!i.textLimit}),a.push(i)):a.push(i)}}catch(n){r.e(n)}finally{r.f()}this.featuresData=a}}},S=x,_=(a("9cc8"),Object(m["a"])(S,n,o,!1,null,"7384e2ce",null)),A=_.exports,T={components:{tFeaturesPage:A},name:"features"},C=T,P=Object(m["a"])(C,r,i,!1,null,"09c0142a",null);e["default"]=P.exports},d28b:function(t,e,a){var r=a("746f");r("iterator")},ddb0:function(t,e,a){var r=a("da84"),i=a("fdbc"),n=a("e260"),o=a("9112"),s=a("b622"),c=s("iterator"),l=s("toStringTag"),u=n.values;for(var f in i){var d=r[f],p=d&&d.prototype;if(p){if(p[c]!==u)try{o(p,c,u)}catch(g){p[c]=u}if(p[l]||o(p,l,f),i[f])for(var h in n)if(p[h]!==n[h])try{o(p,h,n[h])}catch(g){p[h]=n[h]}}}},e01a:function(t,e,a){"use strict";var r=a("23e7"),i=a("83ab"),n=a("da84"),o=a("5135"),s=a("861d"),c=a("9bf2").f,l=a("e893"),u=n.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var h=p.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(o(f,t))return"";var a=g?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:d})}},e260:function(t,e,a){"use strict";var r=a("fc6a"),i=a("44d2"),n=a("3f8c"),o=a("69f3"),s=a("7dd0"),c="Array Iterator",l=o.set,u=o.getterFor(c);t.exports=s(Array,"Array",(function(t,e){l(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,a=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==a?{value:r,done:!1}:"values"==a?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),n.Arguments=n.Array,i("keys"),i("values"),i("entries")},eac4:function(t,e,a){"use strict";var r=a("82d9"),i=a.n(r);i.a},eca6:function(t,e,a){},fb6a:function(t,e,a){"use strict";var r=a("23e7"),i=a("861d"),n=a("e8b5"),o=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("b622"),f=a("1dde"),d=a("ae40"),p=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),v=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var a,r,u,f=c(this),d=s(f.length),p=o(t,d),h=o(void 0===e?d:e,d);if(n(f)&&(a=f.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[g],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(f,p,h);for(r=new(void 0===a?Array:a)(b(h-p,0)),u=0;p<h;p++,u++)p in f&&l(r,u,f[p]);return r.length=u,r}})}}]);