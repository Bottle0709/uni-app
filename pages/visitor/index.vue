<template>
	<view class="visitor main-bg-color">
		<view class="tip"><span class="ic"></span>授权只在到访当天有效，过期无效。</view>
		<uni-card>
			<view class="info-list">
				<view class="l-la">受访地址</view>
				<view class="l-if"><input class="uni-input ips" v-model="address" type="number" placeholder="请输入受访地址" /></view>
			</view>
			<view class="info-list">
				<view class="l-la">我的姓名</view>
				<view class="l-if"><input class="uni-input ips" v-model="username" type="number" placeholder="请输入我的姓名" /></view>
			</view>
			<view class="info-list">
				<view class="l-la">访客手机号</view>
				<view class="l-if"><input class="uni-input ips" v-model="phone" type="number" placeholder="请输入访客手机号" /></view>
			</view>
			<view class="info-list">
				<view class="l-la">访客姓名</view>
				<view class="l-if"><input class="uni-input ips" v-model="visitorname" type="number" placeholder="请输入访客姓名" /></view>
			</view>
			<view class="info-list">
				<view class="l-la">授权方式</view>
				<view class="l-if"><label class="radio"><radio value="r1" checked="true" color="#de5f0e"/>一进一出</label></view>
			</view>
			<view class="info-list">
				<view class="l-la">到访时间</view>
				<view class="l-if">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{ date }}</view>
					</picker>
				</view>
			</view>
		</uni-card>
	    <view class="vbtn" @click="goto">生成通行证</view>
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
			address:"",
			username:"",
			phone:"",
			visitorname:"",
			type:"",
			date:currentDate
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
		goto() {
			uni.navigateTo({
				url: '/pages/visitor/open'
			});
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
.visitor {
	width: 100%;
	height: 100%;
	.tip {
		width: 100%;
		padding: 0 20upx;
		height: 70upx;
		background-color: #ffe9dc;
		color: #de5f0e;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 20upx;
		.ic{
			display: inline-block;
			width: 36upx;
			height: 36upx;
			background-image: url("@/static/images/tip.png");
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 10upx;
		}
	}
	.info-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40upx;
		&.last {
			margin-bottom: 0;
		}
		.l-la{
			font-weight: bold;
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
			/deep/.radio{
				display: flex;
				align-items: center;
				.uni-radio-input {
					width: 28upx;
					height: 28upx;
					&.uni-radio-input-checked:before {
						font-size: 28upx;
					}
				}
			} 
		}
	}
	.vbtn{
		margin: 0 40upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		background: #de5f0e;
		color: #fff;
		font-size: 28upx;
		border-radius: 50upx;
		margin-top: 80upx;
	}
}
</style>
