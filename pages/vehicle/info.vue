<template>
	<view class="carinfo">
		<view class="carlist" v-for="(item, idx) in cartInfo" :key="idx">
			<uni-card :title="item.title">
				<view class="info-img"><image class="iimg" mode="aspectFit" :src="item.url" @error="imageError"></image></view>
				<view class="info-list">
					<view class="l-la">开放时间</view>
					<view class="l-if">{{ item.time }}</view>
				</view>
				<view class="info-list">
					<view class="l-la">停车价格</view>
					<view class="l-if">{{ item.price }}元</view>
				</view>
				<view class="info-list">
					<view class="l-la">空闲车位数量</view>
					<view class="l-if">{{ item.number }}俩</view>
				</view>
				<view class="info-list info-btn last">
					<button class="inbtn" type="default">导航</button>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			cartInfo: [
				{
					id: 1,
					title: '华康小区',
					time: '2021-6-3',
					price: 36,
					number: 10,
					url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
				},
				{
					id: 2,
					title: '华南小区',
					time: '2021-6-4',
					price: 36,
					number: 10,
					url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
				},
				{
					id: 3,
					title: '华西小区',
					time: '2021-6-6',
					price: 36,
					number: 7,
					url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
				},
				{
					id: 4,
					title: '华北小区',
					time: '2021-6-7',
					price: 36,
					number: 5,
					url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
				},
				{
					id: 5,
					title: '华康小区',
					time: '2021-6-9',
					price: 36,
					number: 6,
					url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" sccope>
.carinfo {
	width: 100%;
	height: 100%;
	.carlist {
		/deep/.uni-card__header {
			padding: 10upx 24upx;
		}
		.info-img {
			margin-bottom: 24upx;
			.iimg {
				height: 200upx;
			}
		}
		.info-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 20upx;
			margin-bottom:20upx;
			border-bottom: 1px solid #EEEEEE;
			&.last {
				margin-bottom: 0;
				padding-bottom: 0;
				border-bottom:none;
			}
			.l-la{
				font-size: 18upx;
				color: #222222;
				font-weight: bold;
			}
			&.info-btn{
				justify-content: center;
				.inbtn{
					padding: 0;
					width: 100upx;
					height: 60upx;
					line-height:60upx;
					text-align: center;
					color: #fff;
					background: #de5f0e;
					font-size: 14upx;
					
					&:after{
						border-color:#de5f0e ;
					}
				}
			}
		}
	}
}
</style>
