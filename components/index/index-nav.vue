<template>
	<view class="row j-center py-3">
		<block v-for="(item,idx) in indexnav" :key="idx">
			<view class="span-5 d-flex flex-column a-center py-1" 
			@tap="open(item)">
				<image style="width: 60upx;height: 60upx;" 
				:src="item.src"></image>
				<text class="font-sm text-muted">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			indexnav:Array
		},
		methods:{
			open(item){
				if(item.name=='扫码充电'){
					uni.navigateTo({
						url: '../../pages/scan/scan'
					});
				}else if(item.name=='注册'){
					uni.navigateTo({
						url:'../../pages/register/register'
					})
				}else{
					uni.navigateTo({
						url: '../../pages/new-list/new-list'
					});
				}
				
			}
		}
	}
</script>

<style>
</style>
