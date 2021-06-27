<template>
	<view class="sucess main-bg-color">
		<view class="jiguo">
			<image class="jimg" src="../../static/images/sucess.png"></image>
			<view class="jn">支付成功</view>
			<view class="jcom">xxxx确认收款</view>
			<view class="jprice">¥50</view>
		</view>
		<view class="jcomfriem">完成</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.sucess {
	width: 100%;
	height: calc(100% - 24upx);
	padding-top: 24upx;
	position: relative;
	.jiguo {
		width: 100%;
		height: 500upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #fff;
		.jimg {
			width: 100upx;
			height: 100upx;
		}
		.jn {
			font-size: 28upx;
			color: #06bd01;
			margin-top: 10upx;
		}
		.jcom {
			font-size: 24upx;
			color: #aeaeae;
			margin-top: 10upx;
		}
		.jprice {
			font-size: 60upx;
			color: #222;
		}
	}
	.jcomfriem{
		margin: 0 20upx;
		height: 80upx;
		line-height: 80upx;
		margin: 0 40upx;
		text-align: center;
		color: #fff;
		font-size: 32upx;
		background: #06bd01;
		cursor: pointer;
		margin-top: 60upx;
		border-radius: 10upx;
	}
}
</style>
