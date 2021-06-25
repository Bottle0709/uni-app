<template>
	<view class="">
		<scroll-view class="list" scroll-y>
			<!-- 轮播图 -->
			<swiper-image :banners="banners"></swiper-image>
			<view class="gg">
				<view class="lab">
					物业
					<span class="lat">公告</span>
				</view>
				<view class="latitil">您好，欢迎来到智慧社区</view>
			</view>
			<divider></divider>
			<view class="indexnav">
				<view class="navtitle">主要功能</view>
				<view class="navtcont">
					<view class="nva" :class="'nva' + (idx + 1)" v-for="(item, idx) in indexNav1" key="idx" @tap="open(item)">
						<view class="nval">{{ item.name }}</view>
						<image style="width: 80upx; height: 80upx" :src="item.src"></image>
					</view>
				</view>
			</view>
			<divider></divider>
			<!-- 图标分类 -->
			<view class="indexnav">
				<view class="navtitle">智慧社区</view>
				<view class="navtcont"><index-nav :indexnav="indexNav2"></index-nav></view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import divider from '@/components/common/divider.nvue';
export default {
	components: {
		swiperImage,
		indexNav,
		divider
	},
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			banners: [{ src: '../../static/images/1.jpg' }, { src: '../../static/images/2.jpg' }],
			indexNav1: [
				{ src: '../../static/indexnav/f.png', name: '我的房屋', url: '../../pages/my-house/index' },
				{ src: '../../static/indexnav/yq.png', name: '访客邀请', url: '' },
				{ src: '../../static/indexnav/yc.png', name: '远程开门', url: '../../pages/openDoor/openDoor' },
				{ src: '../../static/indexnav/zd.png', name: '我的账单', url: '' }
			],
			indexNav2: [
				{ src: '../../static/indexnav/rl.png', name: '人脸识别', url: '' },
				{ src: '../../static/indexnav/cart.png', name: '停车场', url: '../../pages/vehicle/info' },
				{ src: '../../static/indexnav/dc.png', name: '我的车辆', url: '../../pages/vehicle/mycart' },
				{ src: '../../static/indexnav/j.png', name: '停车缴费', url: '../../pages/vehicle/payment' },
				{ src: '../../static/indexnav/eng.png', name: '服务工单', url: '../../pages/engine/engine' },
				{ src: '../../static/indexnav/video.png', name: '视频对讲', url: '../../pages/vIntercom/index' },
				{ src: '../../static/indexnav/cartd.png', name: '车辆充电', url: '../../pages/scan/record' },
				{ src: '../../static/indexnav/c.png', name: '扫码充电', url: '../../pages/scan/scan' },
				{ src: '../../static/indexnav/l.png', name: '联系物业', url: '' },
				{ src: '../../static/indexnav/b.png', name: '在线报修', url: '' },
				{ src: '../../static/indexnav/ts.png', name: '投诉建议', url: '' },
				{ src: '../../static/indexnav/g.png', name: '注册', url: '../../pages/register/register' }
			]
		};
	},
	onLoad() {},
	methods: {
		upper: function(e) {
			console.log(e);
		},
		lower: function(e) {
			console.log(e);
		},
		scroll: function(e) {
			console.log(e);
			this.old.scrollTop = e.detail.scrollTop;
		},
		open(item) {
			uni.navigateTo({
				url: item.url
			});
		}
	}
};
</script>

<style lang="scss">
.uni-tab-bar-loading {
	text-align: center;
	font-size: 28upx;
	color: #999;
}
.gg {
	height: 100upx;
	background: #fff;
	padding: 0 40upx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	.lab {
		font-size: 32upx;
		color: #17adff;
		font-weight: bold;
		margin-right: 40upx;
		display: flex;
		align-items: center;
		letter-spacing: 4upx;
		font-family: 'Times New Roman', Georgia, Serif;
		.lat {
			font-size: 1em;
			color: #f8a720;
		}
	}
	.latitil {
		font-size: 28upx;
		color: #090909;
	}
}
.indexnav {
	padding: 20px;
	background-color: #fff;
	.navtitle {
		border-left: 6upx solid #15acf3;
		font-size: 26upx;
		color: #2a2a2a;
		font-weight: bold;
		padding-left: 20upx;
	}
	.navtcont {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
		.nva {
			width: calc((100% - 200upx) / 2);
			height: 164upx;
			border-radius: 8upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40upx;
			margin-top: 40upx;
			.nval {
				color: #22150f;
				font-size: 32upx;
			}
			&:nth-child(old) {
				margin-right: 40upx;
			}
			&.nva1 {
				background-image: radial-gradient(top left, #feeee1 70px, #fde8e3);
			}
			&.nva2 {
				background-image: radial-gradient(top left, #ece9fc 70px, #e4edfc);
			}
			&.nva3 {
				background-image: radial-gradient(top left, #edffe7 70px, #e4f9e6);
			}
			&.nva4 {
				background-image: radial-gradient(top left, #e4f4ff 70px, #e2f2ff);
			}
		}
	}
}
</style>
