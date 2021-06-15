<template>
	<view class="main-bg-color engine">
		<no-thing v-if="!info.id || !token" msg="暂无数据"></no-thing>
		<view v-else>
			<uni-card class="engte">
				<view class="info-list">
					<view class="title">{{ info.id }}</view>
					<view class="head">
						<view class="cont">类别：{{ info.serviceProject }}</view>
						<view class="status">{{ info.statusDesc }}</view>
					</view>
				</view>
			</uni-card>
			<uni-card class="engte">
				<view class="info-list info-list2">
					<view class="l-la">描述内容</view>
					<view class="l-if text-box" scroll-y="true">
						<text>{{ info.remark }}</text>
					</view>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
import noThing from '@/components/common/no-thing.vue';
export default {
	props: {},
	components: { noThing },
	data() {
		return {
			info: {
				id: '撒旦发射点',
				statusDesc: '抵挡但',
				serviceProject: '抵挡但',
				remark: '抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但抵挡但'
			}
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
	methods: {
		init() {
			if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			}
			this.$H.get('/work/list', {}, { token: true }).then(res => {
				//console.log(res);
				this.info = res;
			}).catch(err=>{
				uni.showToast({
					title: err,
					icon: 'none'
				});
			});;
		}
	}
};
</script>

<style lang="scss" sccope>
.engine {
	width: 100%;
	height: calc(100% - 24upx);
	padding-top: 24upx;
	.engte {
		margin-top: 0;
	}
	.info-list {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		.title {
			font-size: 32upx;
		}
		.head {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 40upx;
			.cont {
				font-size: 24upx;
			}
			.status {
				font-size: 24upx;
				color: #de5f0e;
			}
		}

		&.info-list2 {
			flex-wrap: wrap;
			.l-la {
				width: 100%;
				font-size: 24upx;
				font-weight: bold;
			}
			.l-if {
				width: 100%;
				margin-top: 20upx;
				text-indent: 1em;
				color: #a9a4a4;
			}
		}
	}
	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40upx 0;
		.detail {
			.sa {
				padding: 0;
				width: 100upx;
				height: 60upx;
				line-height: 60upx;
				color: #222;
				background: transparent;
				border-color: transparent;
				font-size: 28upx;
				&.sa1 {
					background: #f37e34;
					color: #fff;
					&:after {
						border-color: #f37e34;
					}
				}
				&.sa2 {
					background: #ff0000;
					color: #fff;
					&:after {
						border-color: #ff0000;
					}
				}
			}
		}
	}
}
</style>
