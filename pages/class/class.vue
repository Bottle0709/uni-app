<template>
	<view class="uni-tab-bar">
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					
					<template v-if="tabBars[index1].template === 'index'">
						<!-- 轮播图 -->
						<swiper-image :banners="tab.data.banners"></swiper-image>
					
						
						<!-- 图标分类 -->
						<index-nav :indexnav="tab.data.indexNav"></index-nav>
						
					</template>
					
					

					
					
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import swiperImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdverts from "@/components/index/three-adverts.vue";
	import card from "@/components/common/card.vue";
	import commonList from "@/components/common/common-list.vue";
	import uniNavBar from "@/components/uni-common/uni-nav-bar/uni-nav-bar.vue";
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdverts,
			card,
			commonList,
			uniNavBar
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '推荐',
					id: 'index',
					template:"index"
				}]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		onLoad() {
			this.newsitems = this.randomfn()
		},
		methods: {
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				if (this.tabBars[e].template === 'index') {
					this.newsitems[e].data.list.push({   
						type:"list",// 通用列表
						data:[
							
						]
					})
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						refreshing: false,
						refreshText: "下拉可以刷新",
						loadingText: "加载更多...",
						data: {
							list:[]
						}
					};
					if (this.tabBars[i].template === 'index') {
						aryItem.data.banners = [
							{ src: '../../static/images/demo/demo4.jpg'},
							{ src: '../../static/images/demo/demo8.jpg'}
						];
						aryItem.data.indexNav = [
							{ src:"../../static/indexnav/f.png", name:"我的房屋" },
							{ src:"../../static/indexnav/zd.png", name:"我的账单" },
							{ src:"../../static/indexnav/cart.png", name:"停车场" },
							{ src:"../../static/indexnav/dc.png", name:"我的车辆" },
							{ src:"../../static/indexnav/j.png", name:"停车缴费" },
							{ src:"../../static/indexnav/rl.png", name:"人脸采集" },
							{ src:"../../static/indexnav/yq.png", name:"仿客邀请" },
							{ src:"../../static/indexnav/b.png", name:"在线报修" },
							
							{ src:"../../static/indexnav/l.png", name:"联系物业" },
							{ src:"../../static/indexnav/ts.png", name:"投诉建议" },
							{ src:"../../static/indexnav/sw.png", name:"失物招领" },
							{ src:"../../static/indexnav/xw.png", name:"寻物启事" },
							{ src:"../../static/indexnav/g.png", name:"更多" },
					
							
						];
						aryItem.data.indexNav2 = [
							{ src:"../../static/indexnav/1.png", name:"人脸识别" },
							{ src:"../../static/indexnav/2.gif", name:"我的车辆" },
							{ src:"../../static/indexnav/3.gif", name:"停车缴费" },
							{ src:"../../static/indexnav/4.gif", name:"扫码充电" },
							{ src:"../../static/indexnav/5.gif", name:"联系物业" },
							{ src:"../../static/indexnav/6.gif", name:"在线报修" },
							{ src:"../../static/indexnav/7.gif", name:"投诉建议" },
							{ src:"../../static/indexnav/8.gif", name:"更多" },
							
						];
						aryItem.data.list = [
							{
								// 三屏广告
								type:"ThreeAdverts",
								data:[
									{ src:"../../static/images/demo/demo1.jpg" },
									{ src:"../../static/images/demo/demo2.jpg" },
									{ src:"../../static/images/demo/demo2.jpg" },
								]
							},
							{
								// 大图广告
								type:"OneAdvert",
								data:{
									name:"每日精选",
									src:"../../static/images/demo/demo4.jpg"
								}
							},
							{   
								type:"list",// 通用列表
								data:[
									
								]
							}
						];
					}
					if (this.tabBars[i].template === 'special') {
						aryItem.data.banners = [
							{ src: '../../static/images/demo/demo4.jpg'},
							{ src: '../../static/images/demo/demo8.jpg'}
						];
						aryItem.data.indexNav = [
							{ src:"../../static/indexnav/1.png", name:"新品分类" },
							{ src:"../../static/indexnav/2.gif", name:"小米众筹" },
							{ src:"../../static/indexnav/3.gif", name:"以旧换新" },
							{ src:"../../static/indexnav/4.gif", name:"1分拼团" },
							{ src:"../../static/indexnav/5.gif", name:"超值特卖" },
						];
						aryItem.data.list = [
							{   
								type:"list",// 通用列表
								data:[
									
								]
							}
						];
					}
					ary.push(aryItem);
				}
				return ary;
			},
		}
	}
</script>

<style>
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
</style>
