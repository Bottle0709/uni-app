<template>
	<view>
		<!-- 头部 -->
		<my-head></my-head>
		<!-- 我的订单 -->
		<view class="animated fadeIn faster">
			<card   
			 >
				<view class="row">
					<block v-for="(item,index) in nav" :key="index">
						<view class="span-6 d-flex flex-column j-center a-center py-3"
						hover-class="bg-light-secondary"
						@tap="navigate(item.url)">
							<view class="icon iconfont line-h" :class="item.icon"
							style="font-size: 40upx;"></view>
							<view>{{item.name}}</view>
						</view>
					</block>
					
				</view>
			</card>
		</view>
		<divider></divider>
		
		<!-- 菜单 -->
		<uni-list-item showExtraIcon otherIconStyle="color:#FDBF2E;"
		otherIcon="icon-VIP" title="停车缴费"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FCBE2D;"
		otherIcon="icon-huangguan" title="报修记录"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FA6C5E;"
		otherIcon="icon-service" title="充电记录"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FE8B42;"
		otherIcon="icon-home" title="关于我们"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#9ED45A;"
		otherIcon="icon-gengduo" title="推荐给好友"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#9ED45A;"
		otherIcon="icon-gengduo" title="给我们评分"></uni-list-item>
		
	</view>
</template>

<script>
	import card from '@/components/common/card.vue';
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	import myHead from "@/components/my/my-head.vue";
	export default {
		components:{
			card,
			uniListItem,
			myHead
		},
		data() {
			return {
				nav:[
					{ name:"我的房屋",icon:"icon-wallet_icon",url:"order" },
					{ name:"我的账单",icon:"icon-daishouhuo",url:"order" },
					{ name:"我的车位",icon:"icon-pinglun1",url:"order" }
				]
			}
		},
		methods: {
			navigate(str){
				if (!str) return;
				uni.navigateTo({
					url: `/pages/${str}/${str}`,
				});
			}
		}
	}
</script>

<style>

</style>
