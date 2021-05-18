<!-- 人脸采集 -->
<template>
	<view class="content">
		<view class="contlist">
			<view class="face">
				 <image class="faceimg" src="@/static/images/phone.svg"></image>
				 <view class="face-text">暂无靓照</view>
				 <button class="face-btn" type="default">立即添加</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		  },
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
	.content {
	        display: flex;
	        flex-direction: column;
	        background-color: #F9F9F9;
	        width: 750upx;
	        height: 100%;
			vertical-align: bottom;
			justify-items: center;
			.contlist{
				margin-top:8upx;
				background-color: #fff;
				height: 100%;
				.face{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100%;
					.faceimg{
						width: 300upx;
						height: 300upx;
					}
					.face-text{
						width: 100%;
						padding:45upx 0;
						text-align: center;
						font-size: 35upx;
						color: #9D9D9D;
					}
					.face-btn{
						background-color: #fff;
						border:1px solid #de5f0e;
						border-radius: 300upx;
						color:#de5f0e;
						font-size: 30upx;
					}
				}
			}
			}
</style>
