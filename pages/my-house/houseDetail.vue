<!-- 人脸采集 -->
<template>
	<view class="content">
		<view class="contlist">
			<view class="detailView">
				<view class="view1">{{houseDetail.communityname}}</view>
				<view class="view2">{{houseDetail.housename}}</view>
			</view>
			<view class="detailView2">房屋住户</view>
			<view class="userList">
				<view class="users" @click="goto('/pages/my-house/face')">
					<view class="u-cont">
						<view class="u-img">{{houseDetail.type}}</view>
						<view class="u-name">{{houseDetail.name}}</view>
					</view>
					<view class="u-phone">
						{{houseDetail.phone}}
						<span class="i-left"></span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			id:"",
			houseDetail:""
		};
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		}
	},
	onLoad: function(option) {
		console.log(option.id); //打印出上页面传递的参数
		this.id = option.id;
		this.init();
	},
	watch: {
		token(newVal) {
			if (!!newVal && !!this.id) {
				this.init();
			}
		}
	},
	methods: {
		goto(url) {
			uni.navigateTo({
				url: url+ '?id=' + this.id
			});
		},
		init() {
			/* if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			} */
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H
				.get('/api/app/residentvo/houseDetail?residentid=' + this.id, {}, { token: true })
				.then(res => {
					//console.log(res);
					uni.hideLoading();
					this.houseDetail = res.result || {};
				})
				/* .catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err.result,
						icon: 'none'
					});
				}); */
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	background-color: #f9f9f9;
	width: 750upx;
	height: 100%;
	vertical-align: bottom;
	justify-items: center;
	.contlist {
		margin-top: 8upx;
		background-color: #fff;
		height: 100%;
		.detailView {
			margin: 30upx;
			background-color: #ed8949;
			padding: 30upx 20upx;
			border-radius: 10upx;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			color: #fff;
			.view1 {
				font-size: 30upx;
			}
			.view2 {
				font-size: 20upx;
			}
		}
		.detailView2 {
			background-color: #fafafa;
			padding: 50upx 45upx;
			font-size: 30upx;
			text-align: left;
			color: #727272;
		}
		.userList {
			padding: 0 45upx;
			.users {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 35upx 0;
				border-bottom: 1px solid #eeeeee;
				.u-cont {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					.u-img {
						display: inline-block;
						width: 60upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						border-radius: 50%;
						background-color: #ed8949;
						color: #fff;
						font-size: 20upx;
					}
					.u-name {
						color: #222;
						font-size: 30upx;
						margin-left: 15upx;
					}
				}
				.u-phone {
					color: #8e8e8e;
					display: flex;
					align-items: center;
					.i-left {
						margin-left: 20upx;
						display: inline-block;
						width: 45upx;
						height: 45upx;
						background-image: url('@/static/images/left.svg');
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center;
					}
				}
			}
		}
	}
}
</style>
