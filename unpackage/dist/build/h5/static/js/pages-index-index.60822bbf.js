(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0ffc":function(t,n,e){"use strict";e.r(n);var a=e("125d"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"125d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={};n.default=a},"1cbe":function(t,n,e){"use strict";e.r(n);var a=e("a39b"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"1fa5":function(t,n,e){"use strict";e.r(n);var a=e("de2a"),i=e("0ffc");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);var c,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"9c3d3e24",null,!1,a["a"],c);n["default"]=o.exports},"31b0":function(t,n,e){"use strict";e.r(n);var a=e("bff5"),i=e("4c8c");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("7860");var c,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1f034dd4",null,!1,a["a"],c);n["default"]=o.exports},4768:function(t,n,e){var a=e("d9ad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("08797d98",a,!0,{sourceMap:!1,shadowMode:!1})},"4c8c":function(t,n,e){"use strict";e.r(n);var a=e("e87c"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"577c":function(t,n,e){var a=e("bf26");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("f7261ac8",a,!0,{sourceMap:!1,shadowMode:!1})},"5f2c":function(t,n,e){"use strict";e.r(n);var a=e("7592"),i=e("d712");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("a624");var c,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"cb508488",null,!1,a["a"],c);n["default"]=o.exports},7592:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"row j-start py-3"},[t._l(t.indexnav,(function(n,a){return[e("v-uni-view",{key:a+"_0",staticClass:"notp span-5 d-flex flex-column a-center py-6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open(n)}}},[e("v-uni-image",{staticStyle:{width:"60upx",height:"60upx"},attrs:{src:n.src}}),e("v-uni-text",{staticClass:"font-sm text-muted"},[t._v(t._s(n.name))])],1)]}))],2)},r=[]},7653:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-swiper",{style:t.getStyle,attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,interval:3e3,duration:1e3}},[t._l(t.banners,(function(n,a){return[e("v-uni-swiper-item",{key:a+"_0",staticStyle:{height:"825upx"}},[e("v-uni-view",{staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapEvent(n,a)}}},[e("v-uni-image",{staticStyle:{height:"100%"},attrs:{src:n.src,mode:"widthFix"}})],1)],1)]}))],2)],1)},r=[]},7860:function(t,n,e){"use strict";var a=e("577c"),i=e.n(a);i.a},a39b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{banners:Array,height:String,preview:{type:Boolean,default:!1}},computed:{getStyle:function(){if(this.height){var t=uni.upx2px(this.height);return"height:".concat(t,"px;")}}},methods:{tapEvent:function(t,n){if(this.preview){for(var e=[],a=0;a<this.banners.length;a++)e.push(this.banners[a].src);uni.previewImage({urls:e,current:n,loop:!0,indicator:"default"})}}}};n.default=a},a624:function(t,n,e){"use strict";var a=e("4768"),i=e.n(a);i.a},b77f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{indexnav:Array},methods:{open:function(t){uni.navigateTo({url:t.url})}}};n.default=a},bf26:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tab-bar-loading[data-v-1f034dd4]{text-align:center;font-size:%?28?%;color:#999}.home[data-v-1f034dd4]{height:100%;overflow-y:auto\r\n  /* 隐藏滚动条，但依旧具备可以滚动的功能 */}.home[data-v-1f034dd4]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.home .gg[data-v-1f034dd4]{height:%?100?%;background:#fff;padding:0 %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.home .gg .lab[data-v-1f034dd4]{font-size:%?32?%;color:#17adff;font-weight:700;margin-right:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;letter-spacing:%?4?%;font-family:Times New Roman,Georgia,Serif}.home .gg .lab .lat[data-v-1f034dd4]{font-size:1em;color:#f8a720}.home .gg .latitil[data-v-1f034dd4]{font-size:%?28?%;color:#090909}.home .indexnav[data-v-1f034dd4]{padding:20px;background-color:#fff}.home .indexnav .navtitle[data-v-1f034dd4]{border-left:%?6?% solid #15acf3;font-size:%?26?%;color:#2a2a2a;font-weight:700;padding-left:%?20?%}.home .indexnav .navtcont[data-v-1f034dd4]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.home .indexnav .navtcont .nva[data-v-1f034dd4]{width:calc((100% - %?200?%) / 2);height:%?164?%;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%;margin-top:%?40?%}.home .indexnav .navtcont .nva .nval[data-v-1f034dd4]{color:#22150f;font-size:%?32?%}.home .indexnav .navtcont .nva[data-v-1f034dd4]:nth-child(old){margin-right:%?40?%}.home .indexnav .navtcont .nva.nva1[data-v-1f034dd4]{background-image:-webkit-radial-gradient(top left,#feeee1 70px,#fde8e3);background-image:radial-gradient(top left,#feeee1 70px,#fde8e3)}.home .indexnav .navtcont .nva.nva2[data-v-1f034dd4]{background-image:-webkit-radial-gradient(top left,#ece9fc 70px,#e4edfc);background-image:radial-gradient(top left,#ece9fc 70px,#e4edfc)}.home .indexnav .navtcont .nva.nva3[data-v-1f034dd4]{background-image:-webkit-radial-gradient(top left,#edffe7 70px,#e4f9e6);background-image:radial-gradient(top left,#edffe7 70px,#e4f9e6)}.home .indexnav .navtcont .nva.nva4[data-v-1f034dd4]{background-image:-webkit-radial-gradient(top left,#e4f4ff 70px,#e2f2ff);background-image:radial-gradient(top left,#e4f4ff 70px,#e2f2ff)}',""]),t.exports=n},bff5:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"home"},[e("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},[e("swiper-image",{attrs:{banners:t.banners}}),e("v-uni-view",{staticClass:"gg"},[e("v-uni-view",{staticClass:"lab"},[t._v("物业"),e("span",{staticClass:"lat"},[t._v("公告")])]),e("v-uni-view",{staticClass:"latitil"},[t._v("您好，欢迎来到智慧社区")])],1),e("divider"),e("v-uni-view",{staticClass:"indexnav"},[e("v-uni-view",{staticClass:"navtitle"},[t._v("主要功能")]),e("v-uni-view",{staticClass:"navtcont"},t._l(t.indexNav1,(function(n,a){return e("v-uni-view",{key:a,staticClass:"nva",class:"nva"+(a+1),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open(n)}}},[e("v-uni-view",{staticClass:"nval"},[t._v(t._s(n.name))]),e("v-uni-image",{staticStyle:{width:"80upx",height:"80upx"},attrs:{src:n.src}})],1)})),1)],1),e("divider"),e("v-uni-view",{staticClass:"indexnav"},[e("v-uni-view",{staticClass:"navtitle"},[t._v("智慧社区")]),e("v-uni-view",{staticClass:"navtcont"},[e("index-nav",{attrs:{indexnav:t.indexNav2}})],1)],1)],1)],1)},r=[]},d712:function(t,n,e){"use strict";e.r(n);var a=e("b77f"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},d9ad:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.notp[data-v-cb508488]:nth-child(1), .notp[data-v-cb508488]:nth-child(2), .notp[data-v-cb508488]:nth-child(3), .notp[data-v-cb508488]:nth-child(4){margin-top:0}',""]),t.exports=n},de2a:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-100",staticStyle:{height:"12px","background-color":"#F5F5F5"}})])}]},e87c:function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("feea")),r=a(e("5f2c")),c=a(e("1fa5")),s={components:{swiperImage:i.default,indexNav:r.default,divider:c.default},data:function(){return{scrollTop:0,old:{scrollTop:0},banners:[{src:"../../static/images/1.jpg"},{src:"../../static/images/2.jpg"}],indexNav1:[{src:"../../static/indexnav/f.png",name:"我的房屋",url:"../../pages/my-house/index"},{src:"../../static/indexnav/yq.png",name:"访客邀请",url:""},{src:"../../static/indexnav/yc.png",name:"远程开门",url:"../../pages/openDoor/openDoor"},{src:"../../static/indexnav/zd.png",name:"我的账单",url:""}],indexNav2:[{src:"../../static/indexnav/rl.png",name:"人脸识别",url:""},{src:"../../static/indexnav/cart.png",name:"停车场",url:"../../pages/vehicle/info"},{src:"../../static/indexnav/dc.png",name:"我的车辆",url:"../../pages/vehicle/mycart"},{src:"../../static/indexnav/j.png",name:"停车缴费",url:"../../pages/vehicle/payment"},{src:"../../static/indexnav/eng.png",name:"服务工单",url:"../../pages/engine/engine"},{src:"../../static/indexnav/video.png",name:"视频对讲",url:"../../pages/vIntercom/index"},{src:"../../static/indexnav/cartd.png",name:"车辆充电",url:"../../pages/scan/record"},{src:"../../static/indexnav/c.png",name:"扫码充电",url:"../../pages/scan/scan"},{src:"../../static/indexnav/l.png",name:"联系物业",url:""},{src:"../../static/indexnav/b.png",name:"在线报修",url:""},{src:"../../static/indexnav/ts.png",name:"投诉建议",url:""},{src:"../../static/indexnav/g.png",name:"注册",url:"../../pages/register/register"}]}},onLoad:function(){},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},open:function(t){uni.navigateTo({url:t.url})}}};n.default=s},feea:function(t,n,e){"use strict";e.r(n);var a=e("7653"),i=e("1cbe");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);var c,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5a5eba2e",null,!1,a["a"],c);n["default"]=o.exports}}]);