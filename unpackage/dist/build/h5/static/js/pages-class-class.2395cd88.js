(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-class-class"],{"0205":function(e,t,a){"use strict";a.r(t);var n=a("c1b5"),i=a("7073");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("f1eb");var r,c=a("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"8956643a",null,!1,n["a"],r);t["default"]=d.exports},"5da6":function(e,t,a){var n=a("6cad");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("4b9b752b",n,!0,{sourceMap:!1,shadowMode:!1})},6800:function(e,t,a){"use strict";var n=a("4ea4");a("d3b7"),a("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("3e5d")),r=n(a("b708")),c=n(a("ef8e")),d=n(a("4b1d")),o=n(a("aa2d")),u=n(a("bda6")),l={components:{swiperImage:s.default,indexNav:r.default,threeAdverts:c.default,card:d.default,commonList:o.default,uniNavBar:u.default},data:function(){return{scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[],tabBars:[{name:"推荐",id:"index",template:"index"}]}},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search"})},onLoad:function(){this.newsitems=this.randomfn()},methods:{loadMore:function(e){var t=this;setTimeout((function(){t.addData(e)}),1200)},addData:function(e){this.newsitems[e].data.length>30?this.newsitems[e].loadingText="没有更多了":"index"===this.tabBars[e].template&&this.newsitems[e].data.list.push({type:"list",data:[]})},changeTab:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n,i,s,r,c,d,o,u,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.target.current,0===t.newsitems[n].data.length&&t.addData(n),!t.isClickChange){a.next=6;break}return t.tabIndex=n,t.isClickChange=!1,a.abrupt("return");case 6:return a.next=8,t.getElSize("tab-bar");case 8:i=a.sent,s=i.scrollLeft,r=0,c=0;case 12:if(!(c<n)){a.next=20;break}return a.next=15,t.getElSize(t.tabBars[c].id);case 15:d=a.sent,r+=d.width;case 17:c++,a.next=12;break;case 20:return o=uni.getSystemInfoSync().windowWidth,a.next=23,t.getElSize(t.tabBars[n].id);case 23:u=a.sent,l=u.width,r+l-s>o&&(t.scrollLeft=r+l-o),r<s&&(t.scrollLeft=r),t.isClickChange=!1,t.tabIndex=n;case 29:case"end":return a.stop()}}),a)})))()},getElSize:function(e){return new Promise((function(t,a){uni.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},(function(e){t(e)})).exec()}))},tapTab:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.target.dataset.current,0===t.newsitems[n].data.length&&t.addData(n),t.tabIndex!==n){a.next=6;break}return a.abrupt("return",!1);case 6:return a.next=8,t.getElSize("tab-bar");case 8:i=a.sent,s=i.scrollLeft,t.scrollLeft=s,t.isClickChange=!0,t.tabIndex=n;case 13:case"end":return a.stop()}}),a)})))()},randomfn:function(){for(var e=[],t=0,a=this.tabBars.length;t<a;t++){var n={refreshing:!1,refreshText:"下拉可以刷新",loadingText:"加载更多...",data:{list:[]}};"index"===this.tabBars[t].template&&(n.data.banners=[{src:"../../static/images/demo/demo4.jpg"},{src:"../../static/images/demo/demo8.jpg"}],n.data.indexNav=[{src:"../../static/indexnav/f.png",name:"我的房屋"},{src:"../../static/indexnav/zd.png",name:"我的账单"},{src:"../../static/indexnav/dc.png",name:"我的车位"},{src:"../../static/indexnav/rl.png",name:"人脸采集"},{src:"../../static/indexnav/yq.png",name:"仿客邀请"},{src:"../../static/indexnav/b.png",name:"在线报修"},{src:"../../static/indexnav/j.png",name:"停车缴费"},{src:"../../static/indexnav/l.png",name:"联系物业"},{src:"../../static/indexnav/ts.png",name:"投诉建议"},{src:"../../static/indexnav/sw.png",name:"失物招领"},{src:"../../static/indexnav/xw.png",name:"寻物启事"},{src:"../../static/indexnav/g.png",name:"更多"}],n.data.indexNav2=[{src:"../../static/indexnav/1.png",name:"人脸识别"},{src:"../../static/indexnav/2.gif",name:"我的车位"},{src:"../../static/indexnav/3.gif",name:"停车缴费"},{src:"../../static/indexnav/4.gif",name:"扫码充电"},{src:"../../static/indexnav/5.gif",name:"联系物业"},{src:"../../static/indexnav/6.gif",name:"在线报修"},{src:"../../static/indexnav/7.gif",name:"投诉建议"},{src:"../../static/indexnav/8.gif",name:"更多"}],n.data.list=[{type:"ThreeAdverts",data:[{src:"../../static/images/demo/demo1.jpg"},{src:"../../static/images/demo/demo2.jpg"},{src:"../../static/images/demo/demo2.jpg"}]},{type:"OneAdvert",data:{name:"每日精选",src:"../../static/images/demo/demo4.jpg"}},{type:"list",data:[]}]),"special"===this.tabBars[t].template&&(n.data.banners=[{src:"../../static/images/demo/demo4.jpg"},{src:"../../static/images/demo/demo8.jpg"}],n.data.indexNav=[{src:"../../static/indexnav/1.png",name:"新品分类"},{src:"../../static/indexnav/2.gif",name:"小米众筹"},{src:"../../static/indexnav/3.gif",name:"以旧换新"},{src:"../../static/indexnav/4.gif",name:"1分拼团"},{src:"../../static/indexnav/5.gif",name:"超值特卖"}],n.data.list=[{type:"list",data:[]}]),e.push(n)}return e}}};t.default=l},"6cad":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".uni-tab-bar-loading[data-v-8956643a]{text-align:center;font-size:%?28?%;color:#999}",""]),e.exports=t},7073:function(e,t,a){"use strict";a.r(t);var n=a("6800"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},c1b5:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-tab-bar"},[a("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:e.tabIndex,duration:300},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab.apply(void 0,arguments)}}},e._l(e.newsitems,(function(t,n){return a("v-uni-swiper-item",{key:n},[a("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":!0},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.loadMore(n)}}},["index"===e.tabBars[n].template?[a("swiper-image",{attrs:{banners:t.data.banners}}),a("index-nav",{attrs:{indexnav:t.data.indexNav}})]:e._e()],2)],1)})),1)],1)},s=[]},f1eb:function(e,t,a){"use strict";var n=a("5da6"),i=a.n(n);i.a}}]);