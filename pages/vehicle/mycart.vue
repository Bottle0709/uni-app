<template>
	<view class="mycart">
		<uni-card>
		    <view class="info-list">
				<view class="l-la">车牌号</view>
				<view class="l-if">xxxxxxxxxxxx</view>
			</view>
			<view class="info-list">
				<view class="l-la">是否月保</view>
				<view class="l-if">否</view>
			</view>
			<view class="info-list last">
				<view class="l-la">剩余天数</view>
				<view class="l-if">0天</view>
			</view>
		</uni-card>
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

<style lang="scss" sccope>
	.mycart{
		width: 100%;
		height: 100%;
		.info-list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 40upx;
			&.last{
				margin-bottom: 0;
			}
		}
	}
</style>
