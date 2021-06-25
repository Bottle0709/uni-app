<template>
	<view>
		<uni-status-bar />
		<view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack"></view>
			<view class="font-md" @click="forget">忘记密码</view>
		</view>

		<view class="p-5">
			<view class="font-big mb-5">账号登录</view>

			<input
				type="text"
				class="border-bottom mb-4 uni-input px-0"
				placeholder="请输入手机号"
				v-model="phone"
				placeholder-class="text-light-muted"
				@focus="focus('phone')"
				@blur="blur('phone')"
				:class="focusClass.phone ? 'input-border-color' : ''"
			/>

			<input
				type="text"
				class="border-bottom mb-4 uni-input px-0"
				placeholder="请输入验证码"
				v-model="code"
				placeholder-class="text-light-muted"
				@focus="focus('code')"
				@blur="blur('code')"
				:class="focusClass.code ? 'input-border-color' : ''"
			/>
			<view class="py-2 w-100 d-flex a-center j-center main-bg-hover-color text-white rounded font-md mb-4" hover-class="main-bg-hover-color" @click="submit">登录</view>
			<!-- <label class="checkbox d-flex a-center" @click="check = !check">
				<checkbox :checked="check"/>
				<text class="text-light-muted font">已阅读并同意XXXXX协议</text>
			</label> -->
		</view>
	</view>
</template>

<script>
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
import { mapMutations } from 'vuex';
import qs from 'qs';
export default {
	components: {
		uniStatusBar
	},
	data() {
		return {
			phone: '',
			code: '',
			check: true,

			// 验证规则
			rules: {
				phone: [
					{
						rule: /^[1][3,4,5,7,8][0-9]{9}$/,
						//msg:"账号必须字母开头，长度在6~18之间，只能包含字母、数字和下划线"
						msg: '请输入正确11位手机号'
					}
				],
				code: [
					// {
					// 	rule:/^.{5,20}$/,
					// 	msg:"密码长度必须为5-20个字符"
					// }
				]
			},

			focusClass: {
				phone: false,
				code: false
			}
		};
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		}
	},
	methods: {
		...mapMutations(['login']),
		goBack() {
			if (!this.token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			}
			uni.navigateBack({
				delta: 1
			});
		},
		// 表单验证
		validate(key) {
			var check = true;
			this.rules[key].forEach(v => {
				// 验证失败
				if (!v.rule.test(this[key])) {
					uni.showToast({ title: v.msg, icon: 'none' });
					check = false;
					return false;
				}
			});
			return check;
		},
		// 提交表单
		submit() {
			/* if (!this.check) {
					return uni.showToast({
						title: '请先同意XXXXX协议',
						icon: 'none'
					});
				} */
			// 验证用户名
			if (!this.validate('phone')) return;
			// 验证密码
			if (!this.validate('code')) return;

			console.log('提交成功');
			uni.showLoading({
				title: '登录中...',
				mask: true
			});
			let data = {
				code: this.code,
				phone: this.phone
			};
			this.$H.post('/login/login?' + qs.stringify(data)).then(res => {
				// 状态存储
				this.login(res.result);
				uni.hideLoading();
				uni.showToast({
					title: '登录成功',
					icon: 'none'
				});
				uni.navigateBack({
					delta: 1
				});
			});
		},
		forget() {},
		focus(key) {
			this.focusClass[key] = true;
		},
		blur(key) {
			this.focusClass[key] = false;
		}
	}
};
</script>

<style></style>
