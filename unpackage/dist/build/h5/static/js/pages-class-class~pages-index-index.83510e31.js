(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-class-class~pages-index-index"],{1311:function(t,e,n){"use strict";n.r(e);var r=n("fb32"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function u(t){r(o,i,a,u,c,"next",t)}function c(t){r(o,i,a,u,c,"throw",t)}u(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2467:function(t,e,n){"use strict";n.r(e);var r=n("bf80"),i=n("27b0");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("baec");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"96878b48",null,!1,r["a"],o);e["default"]=c.exports},"25e3":function(t,e,n){"use strict";var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("3e3e")),a={components:{price:i.default},props:{item:Object,index:[Number,String],type:{type:String,default:"navigateTo"}},methods:{openDetail:function(){uni[this.type]({url:"/pages/detail/detail?detail="+JSON.stringify(this.item)})}}};e.default=a},"27b0":function(t,e,n){"use strict";n.r(e);var r=n("567b"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},3764:function(t,e,n){var r=n("6bf4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("1c238cb2",r,!0,{sourceMap:!1,shadowMode:!1})},"3d6f":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"d-flex line-h",class:t.priceSize+" "+t.color},[n("v-uni-text",{staticClass:"a-self-start",class:t.unitSize},[t._v("￥")]),t._t("default")],2)},a=[]},"3e3e":function(t,e,n){"use strict";n.r(e);var r=n("3d6f"),i=n("1311");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"1f77dc6e",null,!1,r["a"],o);e["default"]=c.exports},"3e5d":function(t,e,n){"use strict";n.r(e);var r=n("b3b5"),i=n("6f5b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"5a5eba2e",null,!1,r["a"],o);e["default"]=c.exports},"4c39":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{banners:Array,height:String,preview:{type:Boolean,default:!1}},computed:{getStyle:function(){if(this.height){var t=uni.upx2px(this.height);return"height:".concat(t,"px;")}}},methods:{tapEvent:function(t,e){if(this.preview){for(var n=[],r=0;r<this.banners.length;r++)n.push(this.banners[r].src);uni.previewImage({urls:n,current:e,loop:!0,indicator:"default"})}}}};e.default=r},"567b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:r}}};e.default=i},"59c8":function(t,e,n){var r=n("ed52");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("70b554f8",r,!0,{sourceMap:!1,shadowMode:!1})},"5c65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{resdata:Array}};e.default=r},"6bf4":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.uni-navbar__content[data-v-cf382d08]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden}.uni-navbar__content uni-view[data-v-cf382d08]{line-height:44px}.uni-navbar__header[data-v-cf382d08]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-cf382d08]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;flex-shrink:0;width:%?120?%;padding:0 %?12?%}.uni-navbar__header-btns[data-v-cf382d08]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-cf382d08]:last-child{width:%?60?%}.uni-navbar__header-container[data-v-cf382d08]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-cf382d08]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-cf382d08]{height:44px}.uni-navbar--fixed[data-v-cf382d08]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-cf382d08]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-cf382d08]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""]),t.exports=e},"6f5b":function(t,e,n){"use strict";n.r(e);var r=n("4c39"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"7ef1":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("2467")),a=r(n("31ce")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcon:a.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=o},"8e82":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"row j-center py-3"},[t._l(t.indexnav,(function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"span-5 d-flex flex-column a-center py-1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(e)}}},[n("v-uni-image",{staticStyle:{width:"60upx",height:"60upx"},attrs:{src:e.src}}),n("v-uni-text",{staticClass:"font-sm text-muted"},[t._v(t._s(e.name))])],1)]}))],2)},a=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=x;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",p={},b={};b[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==r&&i.call(y,o)&&(b=y);var w=S.prototype=_.prototype=Object.create(b);k.prototype=w.constructor=S,S.constructor=k,S[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(C.prototype),C.prototype[u]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,n,r){var i=new C(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function x(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),o=new F(r||[]);return a._invoke=j(t,n,o),a}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function k(){}function S(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(n,r,a,o){var u=m(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(s).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(u.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=f;return function(i,a){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return I()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var u=L(o,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=m(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=m(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9fee":function(t,e,n){"use strict";n.r(e);var r=n("25e3"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},a996:function(t,e,n){"use strict";var r=n("3764"),i=n.n(r);i.a},aa2d:function(t,e,n){"use strict";n.r(e);var r=n("f521"),i=n("9fee");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"d452a2a4",null,!1,r["a"],o);e["default"]=c.exports},aaec:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"row",staticStyle:{"box-sizing":"border-box!important"}},[n("v-uni-view",{staticClass:"col-6 d-flex a-stretch"},[n("v-uni-image",{staticStyle:{height:"530upx",width:"373upx"},attrs:{src:t.resdata[0].src}})],1),n("v-uni-view",{staticClass:"col-6 d-flex flex-column j-sb"},[n("v-uni-image",{staticStyle:{height:"260upx"},attrs:{src:t.resdata[1].src,mode:"widthFix"}}),n("v-uni-image",{staticStyle:{height:"260upx"},attrs:{src:t.resdata[2].src,mode:"widthFix"}})],1)],1)},a=[]},b3b5:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-swiper",{style:t.getStyle,attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,interval:3e3,duration:1e3}},[t._l(t.banners,(function(e,r){return[n("v-uni-swiper-item",{key:r+"_0",staticStyle:{height:"825upx"}},[n("v-uni-view",{staticClass:"swiper-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tapEvent(e,r)}}},[n("v-uni-image",{staticStyle:{height:"100%"},attrs:{src:e.src,mode:"widthFix"}})],1)],1)]}))],2)],1)},a=[]},b708:function(t,e,n){"use strict";n.r(e);var r=n("8e82"),i=n("cfb3");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"65642f2f",null,!1,r["a"],o);e["default"]=c.exports},baec:function(t,e,n){"use strict";var r=n("59c8"),i=n.n(r);i.a},bc02:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[]},bda6:function(t,e,n){"use strict";n.r(e);var r=n("bc02"),i=n("cc05");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a996");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"cf382d08",null,!1,r["a"],o);e["default"]=c.exports},bf80:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[]},c3b6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{indexnav:Array},methods:{open:function(t){"扫码充电"==t.name?uni.navigateTo({url:"../../pages/scan/scan"}):"注册"==t.name?uni.navigateTo({url:"../../pages/register/register"}):uni.navigateTo({url:"../../pages/new-list/new-list"})}}};e.default=r},cc05:function(t,e,n){"use strict";n.r(e);var r=n("7ef1"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},cfb3:function(t,e,n){"use strict";n.r(e);var r=n("c3b6"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},d770:function(t,e,n){"use strict";n.r(e);var r=n("5c65"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},ed52:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".uni-status-bar[data-v-96878b48]{display:block;width:100%;height:20px;height:0}",""]),t.exports=e},ef8e:function(t,e,n){"use strict";n.r(e);var r=n("aaec"),i=n("d770");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"62e046b7",null,!1,r["a"],o);e["default"]=c.exports},f521:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{width:"372.5upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDetail.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.item.cover,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",{staticClass:"p-2 pt-1"},[n("v-uni-view",{staticClass:"font-md"},[t._v(t._s(t.item.title))]),n("v-uni-text",{staticClass:"d-block font text-light-muted"},[t._v(t._s(t.item.desc))]),n("v-uni-view",{staticClass:"d-flex my-1"},[n("price",[t._v(t._s(t.item.pprice))]),n("v-uni-view",{staticClass:"font-sm text-light-muted line-through ml-1 a-self-end line-h"},[t._v("￥"+t._s(t.item.oprice))])],1)],1)],1)},a=[]},fb32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{priceSize:{type:String,default:"font-md"},unitSize:{type:String,default:"font-sm"},color:{type:String,default:"main-text-color"}}};e.default=r}}]);