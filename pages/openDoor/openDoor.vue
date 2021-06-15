<template>
	<view class="openDoor">
		<view class="title">欢迎回家</view>
		<view class="door-cont">
			<view class="door">
				<view class="label">小区</view>
				<view class="txt">xxxx栋</view>
			</view>
			<view class="door">
				<view class="label">位置</view>
				<view class="txt">顶顶顶顶</view>
			</view>
		</view>
		<view class="shou">
			<img class="simg" src="@/static/images/shuo.png">
			<button class="sbtn" type="primary" @click="open()">一键开门</button>
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
		onLoad() {
		},
		methods: {
			open(){
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.openDoor{
		display: flex;
		flex-direction: column;
		background-color: #f8f9fa;
		width: 750upx;
		height: 100%;
		vertical-align: bottom;
		justify-items: center;
		.title{
			font-size: 70upx;
			color: #222;
			text-align: center;
			margin: 30upx 0;
		}
		.door-cont{
			width: 100%;
			.door{
				padding: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.label{
					text-align: left;
				}
				.txt{
					text-align: right;
				}
			}
		}
		.shou{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 60upx;
			.simg{
				
			}
			.sbtn{
				margin-top: 50upx;
				width: 250upx;
				height: 80upx;
				line-height: 80upx;
				border-radius: 50upx;
				background-color: #f89150;
				color:#fff ;
			}
		}
	}
</style>
