<!-- 我的房屋 -->
<template>
	<view class="content">
	  <view class="cont-list">
		  <view class="un-list">
			  <view class="un-lable">小区</view>
			  <view class="un-view un-disable">{{userObj.xiaoqu}}</view>
		  </view>
		  <view class="un-list">
		  			  <view class="un-lable">楼栋房号</view>
		  			  <view class="un-view un-disable">{{userObj.building}}</view>
		  </view>
		  <view class="un-list">
		  			  <view class="un-lable">住户类型</view>
		  			  <view class="un-view un-disable">{{userObj.houseType}}</view>
		  </view>
		  <view class="un-btn">
			  <button class="set-btn" type="default" @click="goto('/pages/my-house/lodge')">出租房屋</button>
			  <button class="set-btn" type="default" @click="goto('/pages/my-house/houseDetail')">查看详情</button>
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
				userObj:{
					xiaoqu:"仁安花园",
					building:"24栋902",
					houseType:"业主"
				}
			}
		},
		methods: {
			goto(url) {
			                uni.navigateTo({
			                    url:url
			                })
			            }
		}
	}
</script>

<style lang="scss" scoped>
.content {
        display: flex;
        flex-direction: column;
        background-color: #F9F9F9;
        width: 750upx;
        height: 100%;
		vertical-align: bottom;
		justify-items: center;
		.cont-list{
			background-color: #fff;
			margin-top:30upx;
			height: 100%;
			.un-list{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:0 30upx;
				padding-top:38upx;
				.un-lable{
					color: #5D5D5D;
					font-size: 30upx;
				}
				.un-view{
					color: #222;
					font-size: 30upx;
				}
			}
			.un-btn{
			  margin-top: 38upx;
			  border-top:1px solid #E6E6E6;
			  padding:40upx 0;
			  display: flex;
			  align-items: center;
			  justify-content: flex-end;
			  .set-btn{
				  padding:0 20upx;
				  margin:0;
				  background-color: #fff;
				  font-size: 30upx;
				  color:#de5f0e;
				  margin-right:30upx;
				  &:after{
					  border-radius: 100upx;
					  border:1px solid #de5f0e;
				  }
				  
			  }
			}
		}
    }
</style>
