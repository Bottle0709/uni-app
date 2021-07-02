<template>
	<view>
		<!-- 头部 -->
		<my-head></my-head>
		<!-- 我的订单 -->
		<view class="animated fadeIn faster">
			<!-- <card> -->
			<view class="row">
				<block v-for="(item, index) in nav" :key="index">
					<view class="span-6 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary" @tap="navigate(item)">
						<view class="icon iconfont line-h" :class="item.icon" style="font-size: 40upx"></view>
						<view>{{ item.name }}</view>
					</view>
				</block>
			</view>
			<!-- </card> -->
		</view>
		<divider></divider>

		<!-- 菜单 -->
		<uni-list-item showExtraIcon otherIconStyle="color:#FDBF2E;" otherIcon="icon-VIP" title="停车缴费" @click="goto('/pages/vehicle/payment')"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FCBE2D;" otherIcon="icon-huangguan" title="报修记录"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FA6C5E;" otherIcon="icon-service" title="充电记录"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FE8B42;" otherIcon="icon-home" title="关于我们"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#9ED45A;" otherIcon="icon-gengduo" title="推荐给好友"></uni-list-item>
		<view class="logout" v-if="loginStatus" @click="logoutEvent">
			<i class="icon-logout"></i>
			退出登录
		</view>
	</view>
</template>

<script>
/* import card from "@/components/common/card.vue"; */
import uniListItem from '@/components/uni-common/uni-list-item/uni-list-item.vue';
import myHead from '@/components/my/my-head.vue';
import { mapMutations, mapState } from 'vuex';
export default {
	components: {
		/* card, */
		uniListItem,
		myHead
	},
	data() {
		return {
			nav: [
				{ name: '我的房屋', icon: 'icon-wallet_icon', url: 'order' },
				{ name: '我的账单', icon: 'icon-daishouhuo', url: 'order' },
				{ name: '我的车辆', icon: 'icon-pinglun1', url: 'order' }
			]
		};
	},
	computed: {
		...mapState({
			loginStatus: state => state.user.loginStatus
		})
	},
	methods: {
		...mapMutations(['logout']),
		goto(url) {
			uni.navigateTo({
				url: url
			});
		},
		navigate(item) {
			/* iF (!str) return;
				uni.navigateTo({
					url: `/pages/${str}/${str}`,
				}); */
			if (item.name == '我的房屋') {
				uni.navigateTo({
					url: '../../pages/my-house/index'
				});
			} else if (item.name == '我的车辆') {
				uni.navigateTo({
					url: '../../pages/vehicle/mycart'
				});
			} else {
				uni.navigateTo({
					url: '../../pages/new-list/new-list'
				});
			}
		},
		// 退出登录
		logoutEvent() {
			this.$H
				.post(
					'/api/app/login/logout',
					{},
					{
						token: true
					}
				)
				.then(res => {
					// 退出登录
					this.logout();
					uni.showToast({
						title: '退出成功',
						icon: 'none'
					});
					//返回上一页
					/* uni.navigateBack({
						delta: 1
					}); */
					uni.navigateTo({
						url: '/pages/login/login',
					});
				});
		}
	}
};
</script>

<style lang="scss">
.logout {
	padding: 24upx 30upx;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 1px solid #f9f5f5;
	font-size: 32upx;
	color: #e80000;
	.icon-logout {
		display: inline-block;
		width: 32upx;
		height: 32upx;
		margin-right: 18upx;
		background-image: url('@/static/images/logout.png');
		background-repeat: no-repeat;
		background-size: contain;
	}
}
</style>
