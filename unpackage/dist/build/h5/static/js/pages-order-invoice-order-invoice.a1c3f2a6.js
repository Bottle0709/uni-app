(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-invoice-order-invoice"],{"0db9":function(t,e,a){"use strict";var n=a("f5aa"),r=a.n(n);r.a},4245:function(t,e,a){"use strict";a.r(e);var n=a("5500"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"492c":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("divider"),a("card",{attrs:{headTitle:"发票类型",bodyPadding:!0,cardStyle:"background:#ffffff;"}},[a("zcm-radio-group",{attrs:{label:t.label1,selected:t.label1.selected},on:{"update:selected":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.label1,"selected",e)}}}),a("v-uni-view",{staticClass:"text-light-muted line-h-md"},[t._v("电子发票与纸质发票具有相同的法律效力，可作为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。")])],1),a("divider"),a("card",{attrs:{headTitle:"发票抬头",bodyPadding:!0,cardStyle:"background:#ffffff;"}},[a("zcm-radio-group",{attrs:{label:t.label2,selected:t.label2.selected},on:{"update:selected":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.label2,"selected",e)}}})],1),a("divider"),a("v-uni-view",{staticClass:"p-2 border-bottom d-flex a-center bg-white"},[a("v-uni-text",{staticClass:"font-md"},[t._v("个人姓名：")]),a("v-uni-text",{staticClass:"font-md ml-2"},[t._v("个人")])],1),a("v-uni-view",{staticClass:"p-2 border-bottom d-flex a-center bg-white"},[a("v-uni-text",{staticClass:"font-md"},[t._v("发票内容：")]),a("v-uni-text",{staticClass:"font-md ml-2"},[t._v("商品明细")])],1),a("divider"),a("v-uni-view",{staticClass:"p-2 border-bottom d-flex a-center bg-white"},[a("v-uni-text",{staticClass:"font-md"},[t._v("收票人手机：")]),a("v-uni-text",{staticClass:"font-md ml-2"},[t._v("158****123")])],1),a("v-uni-view",{staticClass:"p-2 text-light-muted d-flex flex-column"},[a("v-uni-text",[t._v("发票须知：")]),a("v-uni-text",[t._v("1.发票为实际支付金额，不包括优惠券等；")]),a("v-uni-text",[t._v("2.电子发票可在订单完成后，在订单详情中查看；")])],1)],1)},i=[]},"4b1d":function(t,e,a){"use strict";a.r(e);var n=a("e64f"),r=a("4245");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var d,o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"0f672f55",null,!1,n["a"],d);e["default"]=c.exports},5500:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{bodyStyle:String,headTitle:String,bodyCover:String,showhead:{type:Boolean,default:!0},headBorderBottom:{type:Boolean,default:!0},headTitleWeight:{type:Boolean,default:!0},bodyPadding:{type:Boolean,default:!1},cardStyle:{type:String,default:""}},computed:{getHeadClass:function(){var t=this.headBorderBottom?"border-bottom":"";return"".concat(t)},getBodyClass:function(){var t=this.bodyPadding?"p-2":"";return"".concat(t)}}};e.default=n},6673:function(t,e,a){"use strict";a.r(e);var n=a("a367"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"776b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".radio-active[data-v-7f9a1616]{background:#fce0d5!important;color:#eb7320!important;border-color:#eb7320!important}",""]),t.exports=e},8113:function(t,e,a){"use strict";a.r(e);var n=a("d61a"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"989e":function(t,e,a){"use strict";a.r(e);var n=a("492c"),r=a("8113");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("0db9");var d,o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3943ed8c",null,!1,n["a"],d);e["default"]=c.exports},a367:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{label:Object},methods:{changeRadio:function(t){this.$emit("update:selected",t)}}};e.default=n},adcb:function(t,e,a){var n=a("776b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("29356e55",n,!0,{sourceMap:!1,shadowMode:!1})},b9d5:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"row"},t._l(t.label.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"span24-8 px-2 mb-2"},[a("v-uni-view",{staticClass:"rounded px-2 py-1 bg-light-secondary font-md text-center border",class:t.label.selected===n?"radio-active":"border-light-secondary",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeRadio(n)}}},[t._v(t._s(e.name))])],1)})),1)},i=[]},ba64:function(t,e,a){"use strict";var n=a("adcb"),r=a.n(n);r.a},cbe0:function(t,e,a){"use strict";a.r(e);var n=a("b9d5"),r=a("6673");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("ba64");var d,o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"7f9a1616",null,!1,n["a"],d);e["default"]=c.exports},d61a:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("4b1d")),i=n(a("cbe0")),d={components:{card:r.default,zcmRadioGroup:i.default},data:function(){return{label1:{selected:0,list:[{name:"电子发票"}]},label2:{selected:0,list:[{name:"个人"},{name:"单位"}]}}},methods:{}};e.default=d},e64f:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"card",style:t.cardStyle},[t.showhead?a("v-uni-view",{staticClass:"p-2 main-border-color d-flex a-center j-sb",class:t.getHeadClass},[t._t("title",[t.headTitle?a("v-uni-text",{staticClass:"font-md",class:t.headTitleWeight?"font-weight":""},[t._v(t._s(t.headTitle))]):t._e()]),t._t("right")],2):t._e(),a("v-uni-view",{class:t.getBodyClass,style:t.bodyStyle},[t.bodyCover?a("v-uni-image",{attrs:{src:t.bodyCover,mode:"widthFix"}}):t._e(),t._t("default")],2)],1)},i=[]},ec4a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-3943ed8c]{background-color:#eee}body.?%PAGE?%[data-v-3943ed8c]{background-color:#eee}",""]),t.exports=e},f5aa:function(t,e,a){var n=a("ec4a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("8ed7393c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);