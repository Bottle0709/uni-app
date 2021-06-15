<template>
	<view class="carinfo main-bg-color">
		<z-paging ref="paging" v-model="cartInfo" fixed @query="queryList">
			<view>
				<view class="carlist" v-for="(item, idx) in cartInfo" :key="idx">
					<uni-card :title="item.title">
						<view class="info-img"><image class="iimg" mode="aspectFit" :src="!item.img ? noimg : item.img" @error="imageError"></image></view>
						<view class="info-list">
							<view class="l-la">停车场名称</view>
							<view class="l-if">{{ item.parkname }}</view>
						</view>
						<view class="info-list">
							<view class="l-la">开放时间</view>
							<view class="l-if">{{ item.opentime }}</view>
						</view>
						<view class="info-list">
							<view class="l-la">停车价格</view>
							<view class="l-if">{{ item.parkingprice }}元/小时</view>
						</view>
						<view class="info-list">
							<view class="l-la">空闲车位数量</view>
							<view class="l-if">{{ item.kxcount }} 俩</view>
						</view>
						<view class="info-list info-btn last"><button class="inbtn" type="default" @click="openLocation(item.lng, item.lat)">导航</button></view>
					</uni-card>
				</view>
			</view>
		</z-paging>
		<no-thing v-if="cartInfo.length == 0 || !token" msg="暂无数据"></no-thing>
	</view>
</template>

<script>
import noimg from '@/static/images/noimg.png';
import noThing from '@/components/common/no-thing.vue';
export default {
	components: { noThing },
	data() {
		return {
			noimg: noimg,
			cartInfo: []
		};
	},
	created() {},
	computed: {
		token() {
			return this.$store.state.user.token;
		}
	},
	methods: {
		openLocation(longitude, latitude) {
			const lat = 116.39747;
			const long = 39.9085;
			uni.openLocation({
				latitude: lat,
				longitude: long,
				success: function() {
					console.log('success');
				}
			});
		},
		imageError: function(e) {
			console.error('image发生error事件，携带值为' + e.detail.errMsg);
		},
		queryList(pageNo, pageSize) {
			if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			}
			//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
			//这里的请求只是演示，请替换成自己的项目的网络请求，请在网络请求回调中
			//通过this.$refs.paging.complete(请求回来的数组);将请求结果传给z-paging
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H.get('/park/queryByCommunityid', { pageNo: pageNo, pageSize: pageSize }, { token: true }).then(res => {
				console.log(res);
				uni.hideLoading();
				let data = res.result.records;
				this.$refs.paging.complete(data);
			});
		}
	}
};
</script>

<style lang="scss" sccope>
.carinfo {
	width: 100%;
	height: 100%;
	//overflow-y: auto;
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
			margin-bottom: 20upx;
			border-bottom: 1px solid #eeeeee;
			&.last {
				margin-bottom: 0;
				padding-bottom: 0;
				border-bottom: none;
			}
			.l-la {
				font-size: 24upx;
				color: #222222;
				font-weight: bold;
			}
			.l-if {
				font-size: 24upx;
			}
			&.info-btn {
				justify-content: center;
				.inbtn {
					padding: 0;
					width: 100upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					color: #fff;
					background: #de5f0e;
					font-size: 14upx;

					&:after {
						border-color: #de5f0e;
					}
				}
			}
		}
	}
}
</style>
