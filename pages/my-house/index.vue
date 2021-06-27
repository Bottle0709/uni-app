<!-- 我的房屋 -->
<template>
	<view class="content">
		<no-thing v-if="!housInfo || !token" msg="暂无数据"></no-thing>
		<view class="cont-list" v-else>
			<view class="un-list">
				<view class="un-lable">小区</view>
				<view class="un-view un-disable">{{ housInfo.communityname }}</view>
			</view>
			<view class="un-list">
				<view class="un-lable">楼栋房号</view>
				<view class="un-view un-disable">{{ housInfo.housename }}</view>
			</view>
			<view class="un-list">
				<view class="un-lable">住户类型</view>
				<view class="un-view un-disable">{{ housInfo.type }}</view>
			</view>
			<view class="un-btn">
				<button class="set-btn" type="default" @click="goto('/pages/my-house/lodge')">出租房屋</button>
				<button class="set-btn" type="default" @click="goto('/pages/my-house/houseDetail', housInfo.residentid)">查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
import noThing from '@/components/common/no-thing.vue';
import { mapMutations } from 'vuex';
export default {
	components: { noThing },
	data() {
		return {
			housInfo: null
		};
	},
	created() {
		this.init();
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		}
	},
	watch: {
		token(newVal) {
			if (newVal) {
				this.init();
			}
		}
	},
	methods: {
		...mapMutations(['setHouseInfo']),
		goto(url, id) {
			if (!id) {
				uni.navigateTo({
					url: url
				});
			} else {
				uni.navigateTo({
					url: url + '?id=' + id
				});
			}
		},
		init() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H
				.get('/api/app/residentvo/queryHouse', {}, { token: true })
				.then(res => {
					uni.hideLoading();
					this.housInfo = res.result[0] || null;
					this.setHouseInfo(this.housInfo);
				})
				.catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err.result,
						icon: 'none'
					});
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	background-color: #f8f9fa;
	width: 750upx;
	height: 100%;
	vertical-align: bottom;
	justify-items: center;
	.cont-list {
		background-color: #fff;
		.un-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30upx;
			padding-top: 38upx;
			.un-lable {
				color: #5d5d5d;
				font-size: 30upx;
			}
			.un-view {
				color: #222;
				font-size: 30upx;
			}
		}
		.un-btn {
			margin-top: 38upx;
			border-top: 1px solid #e6e6e6;
			padding: 40upx 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.set-btn {
				padding: 0 20upx;
				margin: 0;
				background-color: #fff;
				font-size: 30upx;
				color: #de5f0e;
				margin-right: 30upx;
				&:after {
					border-radius: 100upx;
					border: 1px solid #de5f0e;
				}
			}
		}
	}
}
</style>
