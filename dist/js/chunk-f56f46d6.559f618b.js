(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f56f46d6"],{"0bc8":function(a,n,t){},4448:function(a,n,t){"use strict";var e=t("0bc8"),i=t.n(e);i.a},af3e:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{attrs:{id:"app"}},[t("PSNavbar"),t("PSParking"),t("PSFooter")],1)},i=[],s=t("63ec"),c=t("f979"),r=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"title mt-5"},[a._v("List of Parking Spot available in Bengaluru!!")]),t("div",{staticClass:"card-content subtitle"},a._l(a.pageOfItems,(function(n){return t("a",{key:n.id,staticClass:"has-text-link",on:{click:function(t){return a.onClick(n.name)}}},[a._v(a._s(n.name))])})),0),t("div",{staticClass:"card-footer pb-0 pt-3"},[t("jw-pagination",{staticClass:"pagination-link mb-5",attrs:{items:a.listOfPlaces},on:{changePage:a.onChangePage}})],1)])},l=[],o=[{id:1,name:"Jayanagar"},{id:2,name:"Vijaynagar"},{id:3,name:"Banashankari"},{id:4,name:"Marathahalli"},{id:5,name:"BTM Layout"}],u={name:"PSParking",data:function(){return{listOfPlaces:o,pageOfItems:[]}},methods:{onChangePage:function(a){this.pageOfItems=a},onClick:function(a){console.log(a),this.$router.push({name:"PSTemplate",params:{id:a,places:a}})}}},f=u,d=(t("4448"),t("2877")),m=Object(d["a"])(f,r,l,!1,null,"71aefc14",null),p=m.exports,g={name:"Parking",components:{PSNavbar:c["a"],PSFooter:s["default"],PSParking:p}},P=g,h=Object(d["a"])(P,e,i,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-f56f46d6.559f618b.js.map