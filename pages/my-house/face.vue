<!-- 人脸采集 -->
<template>
	<view class="content main-bg-color">
		<view class="contlist">
			<view class="face" v-if="!houseDetail && !houseDetail.faceurl">
				<image class="faceimg" src="@/static/images/phone.svg"></image>
				<view class="face-text">暂无靓照</view>
				<button class="face-btn" type="default" @click="addFace">立即添加</button>
			</view>
			<view class="face" v-else>
				<image class="jimg" src="../../static/images/sucess.png"></image>
				<view class="jn">添加成功</view>
				<view class="jcom">当前小区：{{houseDetail.communityname}}</view>
				<image class="rimg" :src="houseDetail.faceurl"></image>
				<view class="abtn" @click="addFace">重新添加</view>
			</view>
		</view>
	</view>
</template>

<script>
import { compressImg } from '@/util/tool.js';
export default {
	components: {},
	data() {
		return {
			houseDetail:"",
			residentid: ""
		};
	},
	onLoad: function(option) {
		console.log(option.id); //打印出上页面传递的参数
		this.residentid = option.id;
		this.init();
	},
	methods: {
		async addFace() {
			// 隐式创建一个input控件，然后实现直接访问相册
			let inputUploadObj = '';
			inputUploadObj = document.createElement('input');
			inputUploadObj.setAttribute('id', 'input_upload_ID');
			inputUploadObj.setAttribute('type', 'file');
			// 添加这个属性，就可以唤起相机的功能
			inputUploadObj.setAttribute('capture', 'camera');
			// 这里如果不加属性 accept 是 "image/*" 或者 "video/*"，就默认打开摄像头，既可以拍照也可以录像
			inputUploadObj.setAttribute('accept', 'image/*');
			inputUploadObj.setAttribute('style', 'visibility:hidden');
			// 这里将创建的隐式input控件拼接到body的最后面，会增加页面的长度，所以要在适当的时候，移除掉这个隐式创建的input控件
			document.body.appendChild(inputUploadObj);
			// 这里是模拟点击了input控件
			inputUploadObj.click();
			inputUploadObj.onchange = async event => {
				let file = event.target.files[0];
				const currentFile = await compressImg(file); //这里是图片压缩
				console.log(currentFile);
				let url = '';
				if (window.createObjectURL != undefined) {
					// basic
					url = window.createObjectURL(currentFile);
				} else if (window.URL != undefined) {
					// mozilla(firefox)
					url = window.URL.createObjectURL(currentFile);
				} else if (window.webkitURL != undefined) {
					// webkit or chrome
					url = window.webkitURL.createObjectURL(currentFile);
				}
				this.uploadPath(currentFile);
			};
		},
		uploadPath(file) {
			uni.showLoading({
				title: '上传中...',
				mask: true
			});
			this.$UP.uploadFile('/file/img_upload', file).then(res => {
				console.log(res);
				let url = res.result.url;
				let obj = {
					faceurl: url,
					residentid: this.residentid
				};
				this.$H
					.post('/api/app/residentvo/updateResidentImg', obj, { token: true })
					.then(res => {
						console.log(res);
						uni.hideLoading();
						this.init();
						uni.showToast({
							title: '上传成功',
							icon: 'none'
						});
					})
					.catch(err => {
						uni.hideLoading();
						uni.showToast({
							title: err.result,
							icon: 'none'
						});
					});
			});
		},
		init() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.$H.get('/api/app/residentvo/houseDetail?residentid=' + this.residentid, {}, { token: true }).then(res => {
				uni.hideLoading();
				this.houseDetail = res.result || {};
			});
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
		height:100%;
		.face {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			.faceimg {
				width: 300upx;
				height: 300upx;
			}
			.face-text {
				width: 100%;
				padding: 45upx 0;
				text-align: center;
				font-size: 35upx;
				color: #9d9d9d;
			}
			.face-btn {
				background-color: #fff;
				border: 1px solid #de5f0e;
				border-radius: 300upx;
				color: #de5f0e;
				font-size: 30upx;
			}
			.jimg {
				width: 150upx;
				height: 150upx;
			}
			.jn {
				font-size: 36upx;
				color: #06bd01;
				margin-top: 20upx;
			}
			.jcom {
				font-size: 32upx;
				color: #aeaeae;
				margin-top: 20upx;
			}
			.rimg{
				width: 300upx;
				height: 500upx;
				margin-top: 40upx;
				border:1px solid #EEEEEE;
			}
			.abtn{
				width: 300upx;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
				background: #06bd01;
				cursor: pointer;
				margin-top: 60upx;
				border-radius: 10upx;
				color: #fff;
				font-size: 32upx;
			}
		}
	}
}
</style>
