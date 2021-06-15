<template>
	<view class="payment">
		<uni-card>
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
			<view class="info-list" v-if="payType == '0'">
				<view class="l-la">月份</view>
				<view class="l-if">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{ date }}</view>
					</picker>
				</view>
			</view>
			<view class="info-list last">
				<view class="l-la">应交费用</view>
				<view class="l-if">100元</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
export default {
	props: {},
	components: {},
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			payType: "0",
			items: [
				{
					value: '0',
					name: '月保缴费',
					checked: 'true'
				},
				{
					value: '1',
					name: '临时缴费'
				}
			],
			date: currentDate
		};
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
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
			return `${year}-${month}-${day}`;
		}
	}
};
</script>

<style lang="scss" sccope>
.payment {
	width: 100%;
	height: 100%;
	.info-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40upx;
		&.last {
			margin-bottom: 0;
		}
		.lf-rd {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.rdlab {
				display: flex;
				align-items: center;
				justify-content: center;
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
