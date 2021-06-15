<template>
	<view class="main-bg-color content">
		<view class="cont-list">
			<view class="tab-nav">
				<view class="tab" :class="{ active: current == item.id }" v-for="(item, idx) in tabName" :key="idx" @click="change(item.id)">{{ item.name }}</view>
			</view>
			<view class="tab-cont" :class="{ tcenter: isNoData }">
				<view class="tcont" v-if="current == 0 || current == 1">
					<z-paging ref="paging" v-model="recordlist" fixed @query="queryList">
						<view>
							<view v-for="(item, idx) in recordlist" :key="idx">
								<uni-card>
									<view class="recodlist">
										<view class="head">
											<view class="title">{{ item.cdzname }}</view>
											<view class="status" :class="'st_' + item.status">{{ item.statusName }}</view>
										</view>
										<view class="cont">{{ item.communityname }} - {{ item.position }}</view>
										<view class="foot" :class="'jsc' + item.status">
											<view class="detail" v-if="item.status == '3' || item.status == '4'"><button class="sa sa1" type="primary">预约</button></view>
											<view class="detail" v-if="item.status == '3'"><button class="sa sa2" type="primary">缴费</button></view>
											<view class="detail"><button class="sa" type="primary" @click="goto('/pages/scan/recordDetail')">详情</button></view>
										</view>
									</view>
								</uni-card>
							</view>
						</view>
					</z-paging>
					<!-- 无数据 -->
					<no-thing v-if="!recordlist.length || !token" msg="暂无数据"></no-thing>
				</view>
				<view class="tcont1" v-if="current == 2 || current == 3">
					<!-- 无数据 -->
					<no-thing v-if="!recordlist2.length || !token" msg="暂无数据"></no-thing>
					<z-paging ref="paging2" v-model="recordlist2" fixed @query="queryList2">
						<view>
							<view v-for="(item, idx) in recordlist2" :key="idx">
								<uni-card>
									<view class="recodlist">
										<view class="head">
											<view class="title">{{ item.cdzname }}</view>
											<view class="status" :class="'st_' + item.status">{{ item.statusName }}</view>
										</view>
										<view class="cont">{{ item.communityname }} - {{ item.position }}</view>
										<view class="foot" :class="'jsc' + item.status">
											<view class="detail" v-if="current == 2"><button class="sa sa2" type="primary">缴费</button></view>
											<view class="detail"><button class="sa" type="primary" @click="goto('/pages/scan/recordDetail', item.chargingpileno)">详情</button></view>
										</view>
									</view>
								</uni-card>
							</view>
						</view>
					</z-paging>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import noThing from '@/components/common/no-thing.vue';
export default {
	components: { noThing },
	data() {
		return {
			current: 0,
			tabName: [{ id: 0, name: '全部' }, { id: 1, name: '充电中' }, { id: 2, name: '待付款' }, { id: 3, name: '已完成' }],
			statuslist: [{ id: '1', name: '充电中' }, { id: '2', name: '故障' }, { id: '3', name: '空闲' }, { id: '4', name: '插枪空闲' }, { id: '5', name: '离线' }],
			isNoData: false,
			recordlist: [],
			recordlist2: []
		};
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		}
	},
	methods: {
		goto(url, id) {
			uni.navigateTo({
				url: url + '?id=' + id
			});
		},
		change(id) {
			this.current = id;
			if (this.current == 0 || this.current == 1) {
				this.queryList(0, 10);
			} else {
				this.queryList2(0, 10);
			}
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
			this.$H.get('/cdz/queryCdzPage', { pageNo: pageNo, pageSize: pageSize }, { token: true }).then(res => {
				console.log(res);
				let data = res.records;
				if (data.length) {
					data = data.map(item => {
						let index = this.statuslist.findIndex(a => a.id == item.status);
						return {
							...item,
							statusName: index == -1 ? '' : this.statuslist[index].name
						};
					});
				}
				this.$refs.paging.complete(data);
			});
		},
		queryList2(pageNo, pageSize) {
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
			this.$H.get('/cdz/finishCd', { pageNo: pageNo, pageSize: pageSize }, { token: true }).then(res => {
				console.log(res);
				let data = res.records;
				if (data.length) {
					data = data.map(item => {
						return {
							...item,
							statusName: this.current == 2 ? '待支付' : '已完成'
						};
					});
				}
				this.$refs.paging2.complete(data);
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
	overflow: hidden;
	.cont-list {
		background-color: transparent;
		padding-top: 10upx;
		height: 100%;
		.tab-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100upx;

			.tab {
				width: calc(100% / 4);
				text-align: center;
				height: 100%;
				line-height: 100upx;
				border-bottom: 1px solid transparent;
				position: relative;
				&.active {
					&::before {
						content: '';
						display: inline-block;
						width: 50%;
						height: 5upx;
						background-color: #de5f0e;
						position: absolute;
						left: 0;
						transform: translate(50%, 0);
						bottom: 0;
					}
				}
			}
		}
	}

	.tab-cont {
		height: calc(100% - 100upx);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		.tcenter {
			align-items: center;
		}
		.nodata {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.noimg {
				width: 150upx;
				height: 150upx;
			}
			.tex {
				color: #222;
				font-size: 30upx;
				margin-top: 30upx;
			}
		}
		.tcont {
			width: 100%;
			height: 100%;
			overflow-y: auto;
			.recodlist {
				.head {
					display: flex;
					align-items: center;
					height: 60upx;
					justify-content: space-between;
					.title {
						font-size: 32upx;
						color: #222;
						text-align: left;
						width: 80%;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						font-weight: bold;
					}
					.status {
						color: #222;
						font-size: 24upx;
						&.st_0 {
							color: #222;
						}
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
				}
				.cont {
					margin: 20upx 0;
				}
				.foot {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					&.jsc0,
					&.jsc3 {
						justify-content: space-between;
					}
					.detail {
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
	}
}
</style>
