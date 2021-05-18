<template>
	<view class="content">
		<view class="cont-list">
			<view class="tab-nav">
				<view class="tab" :class="{'active':current==item.id}" v-for="(item,idx) in tabName" :key="idx" @click="change(item.id)">{{item.name}}</view>
			</view>
			<view class="tab-cont" :class="{'tcenter':isNoData}">
				<!-- 无数据 -->
				<view class="nodata" v-if="isNoData">
					<img class="noimg" src="@/static/images/cd.png">
					<view class="tex">暂时没有充电记录</view>
				</view>
				<view class="tcont" v-if="current == 0">
					<view class="tcot">
						<view class="tleft">
							<view class="title">xxxxxxxxxxxxx充电站</view>
							<view class="tt">xxxxxxxx社区</view>
							<view class="status s1">充电中</view>
						</view>
						<view class="tright">
							<button class="sa1" type="primary" @click="goto('/pages/scan/recordDetail')">查看</button>
						</view>
					</view>
					<view class="tcot">
						<view class="tleft">
							<view class="title">xxxxxxxxxxxxxxx充电站</view>
							<view class="tt">xx社区</view>
							<view class="status s2">待付款</view>
						</view>
						<view class="tright">
							<button class="sa1" type="primary" @click="goto('/pages/scan/recordDetail')">查看</button>
						</view>
					</view>
					<view class="tcot">
						<view class="tleft">
							<view class="title">xxxxxxxxxxxx充电站</view>
							<view class="tt">xxxxx社区</view>
							<view class="status s3">已完成</view>
						</view>
						<view class="tright">
							<button class="sa1" type="primary" @click="goto('/pages/scan/recordDetail')">查看</button>
						</view>
					</view>
				</view>
				<view class="tcont1" v-if="current == 1">
					
				</view>
				<view class="tcont1" v-if="current == 2">
					
				</view>
				<view class="tcont1" v-if="current == 3">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				tabName:[
					{id:0,name:"全部"},
					{id:1,name:"充电中"},
					{id:2,name:"待付款"},
					{id:3,name:"已完成"}
					],
			    isNoData:false,
				record:[]
			}
		},
		onLoad() {
			//this.scanCode()
		},
		methods: {
			goto(url) {
			                uni.navigateTo({
			                    url:url
			                })
			            },
			change(id){
				this.current = id;
			}
			
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
				.tab-nav{
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 100upx;
					
					.tab{
						width: calc(100% / 4);
						text-align: center;
						height: 100%;
						line-height: 100upx;
						border-bottom: 1px solid transparent;
						position: relative;
						&.active{
							&::before{
								content:"";
								display: inline-block;
								width: 50%;
								height: 5upx;
								background-color:#de5f0e;
								position: absolute;
								left:0;
								transform: translate(50%,0);
								bottom: 0;
							}
						}
					}
				}
				}
				
				.tab-cont{
					height: calc(100% - 100upx);
					display: flex;
					align-items: flex-start;
					justify-content: center;
					.tcenter{
						align-items: center;
					}
					.nodata{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.noimg{
							width: 150upx;
							height: 150upx;
						}
						.tex{
							color: #222;
							font-size: 30upx;
							margin-top: 30upx;
						}
					}
					.tcont{
						width: 100%;
						.tcot{
							padding: 0 20upx;
							display: flex;
							align-items: stretch;
							justify-content: space-between;
							margin-top: 30upx;
							padding-bottom: 30upx;
							border-bottom: 1px solid #eee;
							.tleft{
								width: calc(100% - 200upx);
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								justify-content: space-between;
								.title{
									width: 100%;
									font-size: 35upx;
									color: #000;
									font-weight: bold;
								} 
								.tt{
									width: 100%;
									color: #B2B2B2;
									font-size: 30upx;
								} 
								.status{
									width: 100upx;
									height: 50upx;
									border-radius: 50upx;
									text-align: center;
									line-height: 50upx;
									color: #fff;
									&.s1{
										background-color:#f1b38b;
									} 
									&.s2{
										background-color:#f37e34 ;
									} 
									&.s3{
										background-color:#744324 ;
									}
								} 
							}  
							.tright{
								width: 200upx;
								display: flex;
								align-items: center;
								justify-content: center;
								.sa1{
									width: 150upx;
									height: 50upx;
									line-height: 50upx;
									font-size: 30upx;
									color:#de5f0e ;
									background-color:transparent;
									&::after{
										border-color: #de5f0e;
									}
									
								}
							} 
						}  
						
					}
					
				}
	}
</style>
