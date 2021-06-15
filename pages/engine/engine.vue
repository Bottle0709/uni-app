<template>
	<view class="engine">
		<uni-card class="engte">
		    <view class="info-list">
				<view class="l-la">工单编号</view>
				<view class="l-if">xxxxxxxxxxxx</view>
			</view>
			<view class="info-list">
				<view class="l-la">工单类别</view>
				<view class="l-if">否</view>
			</view>
			<view class="info-list info-list2">
				<view class="l-la">工单内容</view>
				<view class="l-if text-box" scroll-y="true">
				                <text>工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单工单</text>
				            </view>
			</view>
			<view class="foot">
				<view class="detail" ><button class="sa sa1" type="primary">接收</button></view>
				<view class="detail"><button class="sa" type="primary">完成</button></view>
				<view class="detail"><button class="sa sa2" type="primary" @click="open">未完成</button></view>
			</view>
		</uni-card>
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog type="warn" mode="input" message="成功消息" title="未完成原因" placeholder="请输入原因" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	export default {
	    props:{},
		components: {
		},
		data() {
			return {
				
			}
		},
		methods: {
			open() {
			            this.$refs.popup.open()
			        },
			        /**
			         * 点击取消按钮触发
			         * @param {Object} done
			         */
			        close() {
			            // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
			            // ...
			            this.$refs.popup.close()
			        },
			        /**
			         * 点击确认按钮触发
			         * @param {Object} done
			         * @param {Object} value
			         */
			        confirm(value) {
			            // 输入框的值
			            console.log(value)
			            // TODO 做一些其他的事情，手动执行 close 才会关闭对话框
			            // ...
			            this.$refs.popup.close()
			        }
		}
	}
</script>

<style lang="scss" sccope>
	.engine{
		width: 100%;
		height: calc(100% - 24upx);
		background: #f8f9fa;
		padding-top: 24upx;
		.engte{
			margin-top: 0;
		}
		.info-list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 40upx;
			&.last{
				margin-bottom: 0;
			}
			&.info-list2{
				flex-wrap: wrap;
				.l-la{
					width: 100%;
				}
				.l-if{
					width: 100%;
					margin-top: 40upx;
				}
			}
		}
		.foot {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 40upx 0;
			.detail {
				.sa {
					padding:0;
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
						&:after{
							border-color: #f37e34;
						}
					}
					&.sa2 {
						background: #ff0000;
						color: #fff;
						&:after{
							border-color: #ff0000;
						}
						
					}
				}
			}
		}
	}
</style>
