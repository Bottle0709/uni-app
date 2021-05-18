<template>
	<view class="content">
		<view class="cont-list del">
			<view class="title">xxxxxxxxxxxx充电站</view>
			<myCircle class="circle" :size="200" :percent="60">
				<div slot="content" class="cc">
				   <span class="c1">{{60}}</span>
				   <span class="c2">充电量(度)</span>
				</div>
			</myCircle>
			<view class="list">
				<view class="ls lss">
					<view class="ls1">充电中</view>
					<view class="ls2">状态</view>
				</view>
				<view class="ls">
					<view class="ls1">6666</view>
					<view class="ls2">充电金额(元)</view>
				</view>
			</view>
			<view class="list-detail">
				<view class="lab-list">
					<view class="label">账单号</view>
					<view class="label2">xxxxxxxxxx</view>
				</view>
				<view class="lab-list">
					<view class="label">充电桩编号</view>
					<view class="label2">xxxxxxxxxx</view>
				</view>
				<view class="lab-list">
					<view class="label">车牌号</view>
					<view class="label2">xxxxxxxxxx</view>
				</view>
				<view class="lab-list">
					<view class="label">开始时间</view>
					<view class="label2">2020-5-6</view>
				</view>
				<view class="lab-list">
					<view class="label">结束时间</view>
					<view class="label2">2020-5-18</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myCircle from "@/components/my-Circle/my-Circle.vue"
	export default {
		components:{myCircle},
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			
		},
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
				margin-top:10upx;
				height: 100%;
				&.del{
					.title{
						width: 100%;
						text-align: center;
						color: #222;
						font-weight: bold;
						margin:20upx 0;
						font-size: 35upx;
					} 
					.circle{
						    display: flex;
						    align-items: center;
						    justify-content: center;
							.cc{
								display: flex;
								align-items: center;
								justify-content: center;
								flex-direction: column;
								.c1{
									font-size: 70upx;
									font-weight: bold;
									color: #32CDA5;
								}
								.c2{
									font-size: 30upx;
									color: #222;
								}
							}
					} 
					.list{
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 50upx 0;
						padding-bottom: 50upx;
						border-bottom: 1px solid #eee;
						.ls{
							width: calc(100% / 2);
							text-align: center;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;
							&.lss{
								border-right: 1px solid #eee;
							} 
							.ls1{
								font-size: 35upx;
								color: #222;
							} 
							.ls2{
								font-size: 30upx;
								color: #7B6D6C;
							}
						 }   
					} 
					 .list-detail{
						 padding: 0 30upx;
						 .lab-list{
							 border-bottom: 1px solid #eee;
							 margin-bottom: 20upx;
							 padding-bottom: 20upx;
							 display: flex;
							 align-items: center;
							 justify-content: space-between;
							 font-size: 30upx;
							 .label{
								 width: calc(100% /2);
								 text-align: left;
							 } 
							 .label2{
								 text-align: right;
							 }
						 } 
					 } 
				} 
			}
    }
</style>
