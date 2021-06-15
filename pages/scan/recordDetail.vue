<template>
	<view class="main-bg-color content">
		<view class="cont-list del">
			<uni-card>
				<view class="title">{{ info.cdzname }}</view>
				<!-- <myCircle class="circle" :size="200" :percent="60">
				<div slot="content" class="cc">
				   <span class="c1">{{60}}</span>
				   <span class="c2">充电量(度)</span>
				</div>
			</myCircle> -->
			</uni-card>
			<uni-card>
				<view class="list">
					<view class="ls lss">
						<view class="ls11" :class="'st_' + info.status">{{ statusName }}</view>
						<view class="ls2">状态</view>
					</view>
					<view class="ls">
						<view class="ls1">{{ info.price }}</view>
						<view class="ls2">充电金额(元)</view>
					</view>
				</view>
			</uni-card>
			<uni-card v-if="info.status == '1' || info.status == '6' || info.status == '7'">
				<view class="list-detail">
					<view class="lab-list">
						<view class="label">充电桩编号</view>
						<view class="label2">{{ info.chargingpileNo }}</view>
					</view>
					<view class="lab-list">
						<view class="label">账单号</view>
						<view class="label2">{{ info.billno }}</view>
					</view>
					<view class="lab-list">
						<view class="label">车牌号</view>
						<view class="label2">{{ info.carnum }}</view>
					</view>
					<view class="lab-list">
						<view class="label">开始时间</view>
						<view class="label2">{{ info.starttime }}</view>
					</view>
					<view class="lab-list">
						<view class="label">结束时间</view>
						<view class="label2">{{ info.endtime }}</view>
					</view>
				</view>
			</uni-card>
			<!-- <view class="detail" v-if="info.status == '3'"><button class="sa sa1" type="primary">预约</button></view> -->
			<view class="detail" v-if="info.status == '6'"><button class="sa sa2" type="primary">缴费</button></view>
		</view>
	</view>
</template>

<script>
import myCircle from '@/components/my-Circle/my-Circle.vue';
export default {
	components: { myCircle },
	data() {
		return {
			Id: '',
			statuslist: [
				{ id: '1', name: '充电中' },
				{ id: '2', name: '故障' },
				{ id: '3', name: '空闲' },
				{ id: '4', name: '插枪空闲' },
				{ id: '5', name: '离线' },
				{ id: '6', name: '待缴费' },
				{ id: '7', name: '已完成' }
			],
			info: {}
		};
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		},
		statusName() {
			let status = '';
			let index = this.statuslist.findIndex(a => a.id == this.info.status);
			if (index !== -1) {
				status = this.statuslist[index].name;
			}
			return status;
		}
	},
	onLoad: function(option) {
		console.log(option.id); //打印出上页面传递的参数
		this.init(option.id);
	},
	methods: {
		init(id) {
			if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			}
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H.get('/cdz/queryByCommunityid?chargingpileno=' + id, {}, { token: true }).then(res => {
				//console.log(res);
				uni.hideLoading();
				if (res.code == 200) {
					this.info = res.result;
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	width: 750upx;
	height: 100%;
	vertical-align: bottom;
	justify-items: center;
	.cont-list {
		background-color: transparent;
		margin-top: 10upx;
		height: 100%;
		&.del {
			.title {
				width: 100%;
				text-align: center;
				color: #222;
				font-weight: bold;
				//margin: 20upx 0;
				font-size: 35upx;
			}
			.circle {
				display: flex;
				align-items: center;
				justify-content: center;
				.cc {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					.c1 {
						font-size: 70upx;
						font-weight: bold;
						color: #32cda5;
					}
					.c2 {
						font-size: 30upx;
						color: #222;
					}
				}
			}
			.list {
				display: flex;
				align-items: center;
				justify-content: center;
				/* margin: 50upx 0;
				padding-bottom: 50upx;
				border-bottom: 1px solid #eee; */
				.ls {
					width: calc(100% / 2);
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					&.lss {
						border-right: 1px solid #eee;
					}
					.ls11 {
						font-size: 35upx;
						color: #222;
						&.st_1 {
							color: #f37e34;
						}
						&.st_2 {
							color: #de5f0e;
						}
						&.st_3 {
							color: #ff0000;
						}
						&.st_4 {
							color: #007aff;
						}
					}
					.ls2 {
						font-size: 30upx;
						color: #7b6d6c;
					}
				}
			}
			.list-detail {
				//padding: 0 30upx;
				.lab-list {
					border-bottom: 1px solid #eee;
					margin-bottom: 20upx;
					padding-bottom: 20upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 30upx;
					.label {
						width: calc(100% / 2);
						text-align: left;
					}
					.label2 {
						text-align: right;
					}
				}
			}
			.detail {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 60upx;
				.sa {
					padding: 0;
					width: 100upx;
					height: 60upx;
					line-height: 60upx;
					color: #222;
					background: transparent;
					border-color: transparent;
					font-size: 28upx;
					&.sa1 {
						background: #f37e34;
						color: #fff;
						&:after {
							border-color: #f37e34;
						}
					}
					&.sa2 {
						background: #ff0000;
						color: #fff;
						&:after {
							border-color: #ff0000;
						}
					}
				}
			}
		}
	}
}
</style>
