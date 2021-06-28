<template>
	<view class="main-bg-color mycart">
		<no-thing v-if="!cartInfo || !token" msg="暂无数据"></no-thing>
		<uni-card v-else>
			<view class="info-list">
				<view class="l-la">车牌号</view>
				<view class="l-if">{{ cartInfo.plateNumber }}</view>
			</view>
			<view class="info-list">
				<view class="l-la">是否月保</view>
				<view class="l-if">{{ cartInfo.isMonthly }}</view>
			</view>
			<view class="info-list last">
				<view class="l-la">剩余天数</view>
				<view class="l-if">{{ cartInfo.effectiveDay }}</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
import noThing from '@/components/common/no-thing.vue';
export default {
	components: { noThing },
	data() {
		return {
			cartInfo: null
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
		init() {
			/* if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			} */
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H
				.get('/api/app/park/queryByVehicleId', {}, { token: true })
				.then(res => {
					uni.hideLoading();
					this.cartInfo = res.result || null;
				})
				/* .catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err.result,
						icon: 'none'
					});
				}); */
		}
	}
};
</script>

<style lang="scss" sccope>
.mycart {
	width: 100%;
	height: 100%;
	padding-top: 24upx;
	.info-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40upx;
		&.last {
			margin-bottom: 0;
		}
	}
}
</style>
