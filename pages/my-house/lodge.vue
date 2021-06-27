<!-- 人脸采集 -->
<template>
	<view class="content main-bg-color">
		<view class="contlist">
			<!-- <uni-card> -->
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					房屋
				</view>
				<view class="f-view f-disable">{{ houseAdress }}</view>
			</view>
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					装修情况
				</view>
				<view class="f-view">
					<picker-input refName="fitType" placeholder="请选择" :newpicker="fitType" :pickerlist="fitTypeList" @pickerInputChange="fitTypeChange"></picker-input>
				</view>
			</view>
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					期望租金
				</view>
				<view class="f-view"><input v-model="rent" class="f-input" type="number" placeholder-style="color: #8A8A8A" placeholder="请输入期望租金" /></view>
			</view>
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					押金
				</view>
				<view class="f-view"><input v-model="deposit" class="f-input" type="number" placeholder-style="color: #8A8A8A" placeholder="请输入押金" /></view>
			</view>
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					出租开始时间
				</view>
				<view class="f-view">
					<picker-input
						refName="starTime"
						placeholder="请选择"
						:newpicker="starTime"
						:oldendDate="endTime"
						:isTime="true"
						@pickerInputChange="starTimeChange"
					></picker-input>
				</view>
			</view>
			<view class="from-list">
				<view class="f-lable">
					<span>*</span>
					出租结束时间
				</view>
				<view class="f-view">
					<picker-input
						refName="endTime"
						placeholder="请选择"
						:newpicker="endTime"
						:oldstartDate="starTime"
						:isTime="true"
						@pickerInputChange="endTimeChange"
					></picker-input>
				</view>
			</view>
			<view class="from-list f-100">
				<view class="f-lable">
					<span>*</span>
					房屋图片
					<span class="tip">（最多可提交9张图片）</span>
				</view>
				<view class="f-view">
					<uni-file-picker
						v-model="imageValue"
						file-mediatype="image"
						mode="grid"
						file-extname="png,jpg"
						:limit="9"
						@progress="progress"
						@success="success"
						@fail="fail"
						@select="select"
						ref="files"
						:auto-upload="false"
					/>
				</view>
			</view>
			<view class="from-list f-100">
				<view class="f-lable">备注</view>
				<view class="f-view"><textarea v-model="remarks" class="f-textare" placeholder-style="color: #8A8A8A" placeholder="请输入需要说明的其它事项" /></view>
			</view>
			<!-- </uni-card> -->

			<!-- <view class="cbtn" @click="submitec">提交</view> -->
		</view>
	</view>
</template>

<script>
import pickerInput from '@/components/picker-input/index.vue';
import uniFilePicker from '@/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue';
import { mapMutations } from 'vuex';
export default {
	components: {
		pickerInput,
		uniFilePicker
	},
	data() {
		return {
			fitType: '', //装修情况
			fitTypeList: ['毛胚', '简装', '精装', '豪装'],
			starTime: '',
			endTime: '',
			rent: '', //租金
			deposit: '', //押金
			imageValue: [],
			imageFile: [],
			imageUrl: [],
			remarks: '' //备注
		};
	},
	created() {
		this.init();
	},
	watch: {
		imageValue(newVal) {
			console.log(newVal);
		},
		imageUrl(newVal) {
			if (this.imageFile.length > 0 && newVal.length == this.imageFile.length) {
				console.log(newVal, newVal.length, this.imageFile.length);
				this.addRenting();
			}
		}
	},
	computed: {
		houseInfo() {
			return this.$store.state.user.houseInfo;
		},
		houseAdress() {
			let adress = this.houseInfo.communityname + this.houseInfo.housename;
			return adress || '';
		}
	},
	methods: {
		...mapMutations(['setHouseInfo']),
		init() {
			this.$H.get('/api/app/residentvo/queryHouse', {}, { token: true }).then(res => {
				let housInfo = res.result[0] || null;
				this.setHouseInfo(housInfo);
			});
		},
		isPirce(val) {
			var priceReg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
			if (!priceReg.test(val)) {
				return true;
			} else {
				return false;
			}
		},
		//导航栏按钮事件
		onNavigationBarButtonTap(e) {
			let str = '';
			str = !this.fitType
				? '请选择装修情况！'
				: this.isPirce(this.rent)
				? '请输入正确的期望租金:整数或者保留两位小数！'
				: this.isPirce(this.deposit)
				? '请输入正确的押金:整数或者保留两位小数！'
				: !this.starTime
				? '请选择出租开始时间！'
				: !this.endTime
				? '请选择出租结束时间！'
				: '';
			if (str) {
				uni.showToast({ title: str, icon: 'none' });
				return;
			}
			this.uploadFile();
		},
		submitec() {
			//console.log(e);
			let str = '';
			str = !this.fitType
				? '请选择装修情况！'
				: this.isPirce(this.rent)
				? '请输入正确的期望租金:整数或者保留两位小数！'
				: this.isPirce(this.deposit)
				? '请输入正确的押金:整数或者保留两位小数！'
				: !this.starTime
				? '请选择出租开始时间！'
				: !this.endTime
				? '请选择出租结束时间！'
				: '';
			if (str) {
				uni.showToast({ title: str, icon: 'none' });
				return;
			}
			this.uploadFile();
		},
		//九宫格上传图片
		select(e) {
			console.log('选择文件：', e);
			this.imageUrl = [];
			let files = e.tempFiles.map(item => {
				return item.files;
			});
			this.imageFile = files;
			console.log(this.imageFile);
		},
		fitTypeChange(val) {
			this.fitType = val;
		},
		starTimeChange(val) {
			this.starTime = val;
		},
		endTimeChange(val) {
			this.endTime = val;
		},
		//上传图片
		uploadFile() {
			let that = this;
			this.imageFile.map(item => {
				this.$UP.uploadFile('/file/img_upload', item).then(res => {
					console.log(res);
					let url = [res.result.url];
					that.imageUrl = that.imageUrl.concat(url);
				});
			});
		},
		//增加出租房屋
		addRenting() {
			let obj = {
				communityid: this.houseInfo.residentid,
				czendtime: this.endTime,
				czstarttime: this.starTime,
				fwzp: this.imageUrl.join(','),
				qwzj: this.rent,
				yjjg: this.deposit,
				zxqk: this.fitType,
				remark: this.remarks
			};
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H
				.post('/api/app/residentvo/addRenting', obj, { token: true })
				.then(res => {
					console.log(res);
					uni.hideLoading();
					uni.showToast({
						title: '提交成功',
						icon: 'none'
					});
					this.clearVal();
				})
				.catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err.result,
						icon: 'none'
					});
				});
		},
		clearVal() {
			this.fitType = ''; //装修情况
			this.starTime = '';
			this.endTime = '';
			this.rent = ''; //租金
			this.deposit = ''; //押金
			this.imageValue = [];
			this.imageFile = [];
			this.imageUrl = [];
			this.remarks = '';
		}
	}
};
</script>

<style scoped lang="scss">
.content {
	display: flex;
	flex-direction: column;
	background-color: #f9f9f9;
	width: 750upx;
	height: 100%;
	vertical-align: bottom;
	justify-items: center;
	.contlist {
		margin-top: 8upx;
		height: 100%;
		padding: 0 40upx;
		overflow-y: auto;
		.from-list {
			padding: 30upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #e5e5e5;
			.f-lable {
				font-size: 30upx;
				color: #262626;
				span {
					color: red;
					margin-right: 5px;
				}
			}
			.f-view {
				color: #8a8a8a;
				font-size: 30upx;
				&.f-disable {
					color: #262626;
				}
				.f-input {
					text-align: right;
					color: #262626;
				}
			}
			&.f-100 {
				flex-wrap: wrap;
				border-bottom: none;
				.f-view {
					width: 100%;
					margin-top: 30upx;
					.f-textare {
						width: auto;
						height: 200upx;
						padding: 20upx;
						border: 1px solid #e5e5e5;
						color: #262626;
					}
				}
				.tip {
					color: #8a8a8a;
				}
			}
		}
		.cbtn {
			height: 80upx;
			line-height: 80upx;
			background: #de5f0e;
			color: #fff;
			font-size: 28upx;
			text-align: center;
			cursor: pointer;
			margin: 40upx;
		}
	}
}
</style>
