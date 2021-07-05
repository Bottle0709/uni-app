<template>
	<view class="visitoro main-bg-color">
		<uni-card class="vcar">
			<view class="dotted">
				<view class="title">智慧社区</view>
				<view class="tz">访客证</view>
				<view class="gz">
					<view class="gg">
						<view class="g g1"><span>有效</span></view>
						<view class="g"><span>待登记</span></view>
					</view>
				</view>
			</view>
			<view class="vistit">
				<view class="vz">
					<view class="vz-l"></view>
					<view class="vz-r">
						<view class="t">张三</view>
						<view class="ph">
							<i class="phone"></i>
							123456789
						</view>
						<view class="sq">
							<span class="s">授权方式</span>
							<span>一进一出</span>
						</view>
						<view class="sq">
							<span class="s">到访方式</span>
							<span>2021-6-27</span>
						</view>
					</view>
				</view>
				<view class="vz-h">为了保证小区安全，请勿随意泄露二维码给无关人员！</view>
			</view>
			<view class="vistit-z">
				<view class="vzs">
					<span>受访人：</span>
					张三
				</view>
				<view class="vzs">
					<span>手机号码：</span>
					123456
				</view>
				<view class="vzs">
					<span>受访地址：</span>
					xxxxxxxxx
				</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
export default {
	props: {},
	components: {},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" sccope>
.visitoro {
	width: 100%;
	height: 100%;
	padding-top: 20upx;
	/deep/.vcar {
		.uni-card__content--pd {
			padding: 20upx !important;
		}
	}
	.dotted {
		position: relative;
		background: linear-gradient(to right, #ffe9dc, #ffe9dc);
		height: 150upx;
		border-top-left-radius: 40upx;
		border-top-right-radius: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		&::after {
			content: ' ';
			width: 100%;
			height: 0;
			position: absolute;
			border-bottom: 20upx dotted white;
			left: 0;
			bottom: -10upx;
		}
		.title {
			font-size: 24upx;
			color: #de5f0e;
		}
		.tz {
			font-size: 32upx;
			color: #de5f0e;
			font-weight: bold;
		}
		.gz {
			position: absolute;
			width: 150upx;
			height: 150upx;
			border-radius: 50%;
			border: 6upx solid #de5f0e;
			background: #fff;
			padding: 20upx;
			right: 40upx;
			bottom: -150upx;
			.gg {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 4upx solid #de5f0e;
				.g {
					text-align: center;
					color: #de5f0e;
					font-size: 28upx;
					transform: rotate(-45deg);
					&.g1 {
						border-bottom: 2upx solid #de5f0e;
						margin-bottom: 30upx;
					}
				}
			}
		}
	}
	.vistit {
		display: flex;
		flex-direction: column;
		.vz {
			margin: 60upx 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.vz-l {
				width: 190upx;
				height: 190upx;
			}
			.vz-r {
				margin-left: 30upx;
				.t {
					font-size: 28upx;
					color: #222;
					font-weight: bold;
				}
				.ph {
					color: #666;
					font-size: 24upx;
					margin-top: 20upx;
					margin-bottom: 40upx;
				}
				.sq {
					color: #de5f0e;
					font-size: 24upx;
					.s {
						color: #666;
						margin-right: 10upx;
					}
				}
			}
		}
		.vz-h {
			width: 100%;
			text-align: center;
			color: #de5f0e;
			font-size: 24upx;
		}
	}
	.vistit-z {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin: 0 20%;
		margin-top: 60upx;
		.vzs {
			color: #666;
			font-size: 28upx;
		}
	}
}
</style>
