<template>
	<view class="openDoor  main-bg-color">
		<uni-card>
			<view class="opens">
				<view class="title">欢迎回家</view>
				<view class="door-cont">
					<view class="door">
						<view class="label">小区</view>
						<view class="txt">{{opens.communityname}}</view>
					</view>
					<view class="door">
						<view class="label">位置</view>
						<view class="txt">{{opens.unitno}}{{opens.buildingname}}{{opens.floorno}}{{opens.houseno}}</view>
					</view>
				</view>
				<view class="shou">
					<img class="simg" src="@/static/images/shuo.png" />
					<button class="sbtn" type="primary" @click="open()">一键开门</button>
				</view>
				<xy-dialog ref="xyDialog">
					<view class="open">
						<view class="num">电子钥匙(0/17)</view>
						<img class="oimg" src="@/static/images/loading.gif" />
						<view class="tip">正在连接门禁...</view>
					</view>
				</xy-dialog>
			</view>
		</uni-card>
	</view>
</template>

<script>
import xyDialog from '@/components/xy-dialog/xy-dialog.vue';
export default {
	components: {
		xyDialog
	},
	data() {
		return {
			opens:""
		};
	},
	onLoad() {},
	created(){
		this.init();
	},
	methods: {
		init(){
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H.post('/api/app/work/residentInfo', {}, { token: true }).then(res => {
				console.log(res);
				this.opens = res.result;
				uni.hideLoading();
			});
		},
		open() {
			this.$refs.xyDialog.showDialog();
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H.get('/api/app/work/remoteDoor', {}, { token: false }).then(res => {
				console.log(res);
				uni.hideLoading();
				uni.showToast({
					title: res.result,
					icon: 'none'
				});
			});
			/* .catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err.result,
						icon: 'none'
					});
				});*/
		}
	}
};
</script>

<style lang="scss" scoped>
.openDoor {
	width: 750upx;
	height: calc(100% - 20upx);
    padding-top: 20upx;
	.opens {
		display: flex;
		flex-direction: column;
		vertical-align: bottom;
		justify-items: center;
	}
	.title {
		font-size: 70upx;
		color: #222;
		text-align: center;
		margin: 30upx 0;
	}
	.door-cont {
		width: 100%;
		.door {
			padding: 20upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.label {
				text-align: left;
			}
			.txt {
				text-align: right;
			}
		}
	}
	.shou {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 60upx;
		.simg {
		}
		.sbtn {
			margin-top: 50upx;
			width: 250upx;
			height: 80upx;
			line-height: 80upx;
			border-radius: 50upx;
			background-color: #f89150;
			color: #fff;
		}
	}
}
.open {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
	.num {
		position: absolute;
		right: 30upx;
		top: 0;
		font-size: 24upx;
	}
	.oimg {
		width: 320upx;
	}
	.tip {
		color: #222;
		font-size: 28upx;
	}
}
</style>
