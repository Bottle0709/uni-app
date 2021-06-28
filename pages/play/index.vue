<template>
	<view class="play main-bg-color">
		<uni-card>
			<view class="p-price">
				<view class="pr">
					<span>¥</span>
					{{price}}
				</view>
				<view class="pr-t">待支付金额</view>
			</view>
		</uni-card>
		<uni-card>
			<view class="p-type">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view class="rl">
							<image class="rimg" :src="item.url"></image>
							<view class="rn">{{ item.name }}</view>
						</view>
						<view><radio :value="item.value" :checked="index === current" color="#de5f0e" /></view>
					</label>
				</radio-group>
			</view>
		</uni-card>
		<view class="pbtn" @tap="toOpen('two', 'two', 'one')">确认支付</view>
		<jp-pwd
			ref="jpPwds"
			class="jpwd"
			@completed="completed"
			@inputPwd="inputPwd"
			@forget="forget"
			:money="pwd.money"
			:payType="pwd.payType"
			:keyType="pwd.keyType"
			:pawType="pwd.pawType"
			:tite="pwd.tite"
			:contents="pwd.contents"
			:cancelType="pwd.cancelType"
			:keep="pwd.keep"
			:msg="pwd.msg"
			:places="pwd.places"
			contentsColor="#555"
			:isPwy="pwd.isPwy"
			titeColor="#333"
		></jp-pwd>
	</view>
</template>

<script>
import jpPwd from '@/components/jp-pwd/jp-pwd.vue';
export default {
	components: { jpPwd },
	data() {
		return {
			items: [
				{
					value: 'zhifubao',
					name: '支付宝快捷支付',
					url: '../../static/images/zfb.png',
					checked: 'true'
				},
				{
					value: 'weixin',
					name: '微信支付',
					url: '../../static/images/wx.png'
				},
				{
					value: 'yinlian',
					name: '银联支付',
					url: '../../static/images/yinl.png'
				}
			],
			current: 0,
			pwd: {
				money: 50, //支付金额
				payType: 'one', //支付样式  one two
				keyType: 'one', //键盘样式  one two
				pawType: 'one', //输入框样式  one two
				tite: '请输入支付密码', //标题
				contents: '确认付款后，就不能退换退款', //提示
				cancelType: false, //是否输入完密码后消失
				keep: false, //点击遮挡是否关闭
				msg: '', // 密码错误提示语
				places: 6,
				isPwy: true
			}
		};
	},
	computed: {
		price() {
			return this.$store.state.user.price;
		},
	},
	methods: {
		toOpen(payType, keyType, pawType, img1, img2) {
			this.pwd.isPwy = true;
			this.topImg = img1 || '';
			this.keyImg = img2 || '';
			this.pwd.payType = payType;
			this.pwd.keyType = keyType;
			this.pwd.pawType = pawType;
			this.pwd.places = 6;
			this.pwd.money = this.price
			this.$refs.jpPwds.toOpen();
		},
		completed(e) {
			if (e == '123456') {
				console.log("支付成功")
				this.$refs.jpPwds.toCancel();
				uni.navigateTo({
				  url:"/pages/play/success"
				});
			} else {
				this.pwd.msg = '密码错误';
				this.$refs.jpPwds.backs();
			}
		},
		inputPwd(e) {
			console.log(e);
			this.pwd.msg = '';
		},
		forget() {
			uni.showToast({
				title: '忘记密码!',
				icon: 'none'
			});
		},
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.detail.value) {
					this.current = i;
					break;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.play {
	width: 100%;
	height: calc(100% - 24upx);
	padding-top: 24upx;
	position: relative;
	.p-price {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #fff;
		padding: 60upx 0;
		.pr {
			font-size: 60upx;
			color: #222;
			span {
				margin-right: 20upx;
			}
		}
		.pr-t {
			color: #aeaeae;
			font-size: 32upx;
			margin-top: 10upx;
		}
	}
	.p-type {
		.uni-list-cell {
			&.uni-list-cell-pd {
				padding: 40upx 0;
			}
			.rl {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				.rimg {
					width: 60upx;
					height: 60upx;
				}
				.rn {
					color: #222;
					font-size: 28upx;
					margin-left: 20upx;
				}
			}
		}
	}
	.pbtn {
		height: 100upx;
		line-height: 100upx;
		margin: 0 40upx;
		text-align: center;
		color: #fff;
		font-size: 28upx;
		background: #de5f0e;
		width: calc(100% - 80upx);
		position: absolute;
		bottom: 0;
		cursor: pointer;
	}
}
</style>
