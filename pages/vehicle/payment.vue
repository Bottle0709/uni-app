<template>
	<view class="main-bg-color payment">
		<!--  <no-thing v-if="!token" msg="暂无数据"></no-thing>-->
		<uni-card v-if="">
			<view class="info-list">
				<view class="l-la">缴费方式</view>
				<view class="l-if">
					<radio-group @change="radioChange" class="lf-rd">
						<label class="rdlab" v-for="(item, index) in items" :key="item.value">
							<view><radio class="rdios" :value="item.value" :checked="item.value === payType" color="#de5f0e" /></view>
							<view>{{ item.name }}</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="info-list" v-if="payType == '1'">
				<view class="l-la">月份</view>
				<view class="l-if">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" fields="month" @change="bindDateChange">
						<view class="uni-input">{{ date }}</view>
					</picker>
				</view>
			</view>
			<view class="info-list last">
				<view class="l-la">应交费用(元)</view>
				<view class="l-if"><input class="uni-input ips" v-model="totalAmount" type="number" placeholder="请输入费用" /></view>
			</view>
		</uni-card>
	</view>
</template>

<script>
import noThing from '@/components/common/no-thing.vue';
import qs from 'qs';
export default {
	props: {},
	components: { noThing },
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			totalAmount: '',
			payType: '1',
			items: [
				{
					value: '1',
					name: '月保缴费',
					checked: 'true'
				},
				{
					value: '2',
					name: '临时缴费'
				}
			],
			date: currentDate
		};
	},
	computed: {
		token() {
			return this.$store.state.user.token;
		},
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		priceChange() {
			//先把非数字的都替换掉，除了数字和.
			var vv = this.totalAmount;
			if (vv.indexOf('.') == -1 && vv.length > 0) {
				return;
			}
			vv = vv.replace(/[^\d.]/g, '');
			//必须保证第一个为数字而不是.
			vv = vv.replace(/^\./g, '');
			//保证只有出现一个.而没有多个.
			vv = vv.replace(/\.{2,}/g, '.');
			//保证.只出现一次，而不能出现两次以上
			vv = vv
				.replace('.', '$#$')
				.replace(/\./g, '')
				.replace('$#$', '.');
			//小数点后保留两位
			var pos = vv.indexOf('.');
			console.log(pos);
			if (pos > -1) {
				var pos1 = vv.substring(pos);
				console.log(pos1);
				if (pos1.length > 3) {
					vv = vv.substring(0, pos + 3);
				}
			}
			console.log(vv);
			this.totalAmount = vv;
		},
		//导航栏按钮事件
		onNavigationBarButtonTap(e) {
			console.log(e);
			var priceReg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
			if (!priceReg.test(this.totalAmount)) {
				uni.showToast({ title: '请输入正确的费用:整数或者保留两位小数', icon: 'none' });
				return false;
			}
			uni.navigateTo({
			  url:"/pages/play/index"
			});
			/* let data = {
				type: this.payType,
				totalAmount: this.totalAmount
			};
			if (this.payType == '1') {
				data = {
					...data,
					count: this.date
				};
			}
			console.log(data);
			uni.showLoading({
				title: '请求中...',
				mask: true
			});
			this.$H.post('/api/app/park/add?' + qs.stringify(data)).then(res => {
				uni.hideLoading();
				if (res.code == 200) {
					uni.showToast({
						title: '缴纳成功',
						icon: 'none'
					});
					this.totalAmount = '';
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
				}
			}); */
		},
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.detail.value) {
					this.payType = evt.detail.value;
					break;
				}
			}
		},
		bindDateChange: function(e) {
			this.date = e.target.value;
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}`;
		}
	}
};
</script>

<style lang="scss" sccope>
.payment {
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
		.l-if {
			display: flex;
			align-items: center;
			.ips {
				text-align: right;
			}
			.uni-input {
				padding: 0;
			}
		}
		.lf-rd {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.rdlab {
				display: flex;
				align-items: center;
				justify-content: center;
				&:last-child {
					padding-right: 0;
				}
				/deep/.rdios .uni-radio-input {
					width: 28upx;
					height: 28upx;
					&.uni-radio-input-checked:before {
						font-size: 28upx;
					}
				}
			}
		}
	}
}
</style>
