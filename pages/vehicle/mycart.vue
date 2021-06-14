<template>
	<view class="main-bg-color mycart">
		<uni-card>
		    <view class="info-list">
				<view class="l-la">车牌号</view>
				<view class="l-if">{{cartInfo.plateNumber}}</view>
			</view>
			<view class="info-list">
				<view class="l-la">是否月保</view>
				<view class="l-if">{{cartInfo.isMonthly}}</view>
			</view>
			<view class="info-list last">
				<view class="l-la">剩余天数</view>
				<view class="l-if">{{cartInfo.effectiveDay}}</view>
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
				cartInfo:{}
			}
		},
		created(){
			this.init()
		},
		methods: {
		  init(){
			  this.$H.get('/park/queryByVehicleId',{},{token:true}).then(res=>{
				  //console.log(res);
				  this.cartInfo = res;
			  })
		  }
		}
	}
</script>

<style lang="scss" sccope>
	.mycart{
		width: 100%;
		height: 100%;
		padding-top: 24upx;
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
