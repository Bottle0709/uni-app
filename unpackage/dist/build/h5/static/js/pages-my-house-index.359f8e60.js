(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-house-index"],{"098f":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("5530")),a=i(e("eb14")),s=e("2f62"),u={components:{noThing:a.default},data:function(){return{housInfo:null}},created:function(){this.init()},computed:{token:function(){return this.$store.state.user.token}},watch:{token:function(t){t&&this.init()}},methods:(0,o.default)((0,o.default)({},(0,s.mapMutations)(["setHouseInfo"])),{},{goto:function(t,n){n?uni.navigateTo({url:t+"?id="+n}):uni.navigateTo({url:t})},init:function(){var t=this;uni.showLoading({title:"加载中...",mask:!0}),this.$H.get("/api/app/residentvo/queryHouse",{},{token:!0}).then((function(n){uni.hideLoading(),t.housInfo=n.result[0]||null,t.setHouseInfo(t.housInfo)}))}})};n.default=u},"0c29":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[t.housInfo&&t.token?e("v-uni-view",{staticClass:"cont-list"},[e("v-uni-view",{staticClass:"un-list"},[e("v-uni-view",{staticClass:"un-lable"},[t._v("小区")]),e("v-uni-view",{staticClass:"un-view un-disable"},[t._v(t._s(t.housInfo.communityname))])],1),e("v-uni-view",{staticClass:"un-list"},[e("v-uni-view",{staticClass:"un-lable"},[t._v("楼栋房号")]),e("v-uni-view",{staticClass:"un-view un-disable"},[t._v(t._s(t.housInfo.housename))])],1),e("v-uni-view",{staticClass:"un-list"},[e("v-uni-view",{staticClass:"un-lable"},[t._v("住户类型")]),e("v-uni-view",{staticClass:"un-view un-disable"},[t._v(t._s(t.housInfo.type))])],1),e("v-uni-view",{staticClass:"un-btn"},[e("v-uni-button",{staticClass:"set-btn",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/my-house/lodge")}}},[t._v("出租房屋")]),e("v-uni-button",{staticClass:"set-btn",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/my-house/houseDetail",t.housInfo.residentid)}}},[t._v("查看详情")])],1)],1):e("no-thing",{attrs:{msg:"暂无数据"}})],1)},a=[]},"50ef":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{icon:{type:String,default:"no_comment"},msg:{type:String,default:"您还没有待付款订单"}},computed:{getIcon:function(){return"/static/images/nothing/".concat(this.icon,".png")}}};n.default=i},"598a":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-2ecf055f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#f8f9fa;width:%?750?%;height:100%;vertical-align:bottom;justify-items:center}.content .cont-list[data-v-2ecf055f]{background-color:#fff}.content .cont-list .un-list[data-v-2ecf055f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?30?%;padding-top:%?38?%}.content .cont-list .un-list .un-lable[data-v-2ecf055f]{color:#5d5d5d;font-size:%?30?%}.content .cont-list .un-list .un-view[data-v-2ecf055f]{color:#222;font-size:%?30?%}.content .cont-list .un-btn[data-v-2ecf055f]{margin-top:%?38?%;border-top:1px solid #e6e6e6;padding:%?40?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .cont-list .un-btn .set-btn[data-v-2ecf055f]{padding:0 %?20?%;margin:0;background-color:#fff;font-size:%?30?%;color:#de5f0e;margin-right:%?30?%}.content .cont-list .un-btn .set-btn[data-v-2ecf055f]:after{border-radius:%?100?%;border:1px solid #de5f0e}',""]),t.exports=n},6105:function(t,n,e){"use strict";e.r(n);var i=e("098f"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"6f48":function(t,n,e){"use strict";var i=e("7fd5"),o=e.n(i);o.a},"79a7":function(t,n,e){"use strict";e.r(n);var i=e("0c29"),o=e("6105");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("6f48");var s,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"2ecf055f",null,!1,i["a"],s);n["default"]=c.exports},"7fd5":function(t,n,e){var i=e("598a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("c711951a",i,!0,{sourceMap:!1,shadowMode:!1})},a479:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"position-absolute d-flex flex-column a-center j-center top-0 left-0 right-0 bottom-0",staticStyle:{"background-color":"#F5F5F5"}},[e("v-uni-image",{staticStyle:{width:"250rpx"},attrs:{src:t.getIcon,mode:"widthFix"}}),e("v-uni-view",{staticStyle:{color:"#B2B2B2"}},[t._v(t._s(t.msg))])],1)},a=[]},e430:function(t,n,e){"use strict";e.r(n);var i=e("50ef"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},eb14:function(t,n,e){"use strict";e.r(n);var i=e("a479"),o=e("e430");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);var s,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"61cef24e",null,!1,i["a"],s);n["default"]=c.exports}}]);