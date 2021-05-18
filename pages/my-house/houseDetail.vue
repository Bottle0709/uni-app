<!-- 人脸采集 -->
<template>
	<view class="content">
		<view class="contlist">
			<view class="detailView">
				<view class="view1">仁安花园</view>
				<view class="view2">24栋902</view>
			</view>
			<view class="detailView2">房屋住户</view>
			<view class="userList">
				<view class="users" @click="goto('/pages/my-house/face')">
					<view class="u-cont">
						<view class="u-img">业主</view>
						<view class="u-name">钟XX</view>
					</view>
					<view class="u-phone">138****6719<span class="i-left"></span></view>
				</view>
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
			.contlist{
				margin-top:8upx;
				background-color: #fff;
				height: 100%;
				 .detailView{
				    margin:30upx;
				    background-color:#ed8949;
				    padding:30upx 20upx;
				    border-radius: 10upx;
				    display: flex;
				    flex-direction: column;
				    align-items: flex-start;
				    justify-content: flex-start;
				    color: #fff;
				      .view1{
					    font-size: 30upx;
				      }
				     .view2{
					font-size: 20upx;
				       }
			   }
			   .detailView2{
				   background-color: #FAFAFA;
				   padding:50upx 45upx;
				   font-size: 30upx;
				   text-align: left;
				   color: #727272;
			   }
			   .userList{
				   padding:0 45upx;
				   .users{
					   display: flex;
					   align-items: center;
					   justify-content: space-between;
					   padding:35upx 0;
					   border-bottom: 1px solid #EEEEEE;
					   .u-cont{
						   display: flex;
						   align-items: center;
						   justify-content:flex-start;
						   .u-img{
						   						   display: inline-block;
						   						   width: 60upx;
						   						   height: 60upx;
												   line-height: 60upx;
												   text-align: center;
												   border-radius: 50%;
						   						   background-color:#ed8949;
						   						   color: #fff;
						   						   font-size: 20upx;
						   } 
						   .u-name{
							   color: #222;
							   font-size: 30upx;
							   margin-left: 15upx;
						   } 
					   }
					   .u-phone{
						   color: #8E8E8E;
						   display: flex;
						   align-items: center;
						   .i-left{
							   margin-left: 20upx;
							   display: inline-block;
							   width: 45upx;
							   height: 45upx;
							   background-image: url("@/static/images/left.svg");
							   background-repeat: no-repeat;
							   background-size: contain;
							   background-position: center;
						   }
					   }
				   } 
			   } 
	     }
}
</style>
