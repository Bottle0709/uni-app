<template>
	<view class="content">
		<view class="cosao">
			<button class="saosao" type="primary" @click="scanCode()">扫一扫</button>
		</view>
		<view class="sa-bottom">
			<button class="sa1" type="primary" @click="open()"><span class="m-icon so-s"></span>输入序列号</button>
			<button class="sa1" type="primary" @click="openSd()"><span class="m-icon so-d"></span>手电筒</button>
			<button class="sa1" type="primary" @click="goto('/pages/scan/record')"><span class="m-icon so-j"></span>充电记录</button>
		</view>
		
	<uni-popup ref="popup" type="dialog">
	      <uni-popup-dialog
	        type="input"
	        :mode="mode"
	        :title="title"
	        v-model="value"
	        :placeholder="placeholder"
	        :duration="2000"
	        @close="close"
	        @confirm="confirm"
	      ></uni-popup-dialog>
	    </uni-popup>
	
	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue'
	import uniPopupDialog from '@//uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue'

	export default {
		components: {
		    uniPopup,
		    uniPopupMessage,
		    uniPopupDialog,
		  },
		data() {
			return {
				 placeholder: '输入',
				      value:'',
				      mode: 'input',
				      title: '输入序列号'
			}
		},
		onLoad() {
			//this.scanCode()
		},
		methods: {
			goto(url) {
			                uni.navigateTo({
			                    url:url
			                })
			            },
			open() {
			      this.$refs.popup.open()
			    },
			scanCode() {
							 // 允许从相机和相册扫码
							 uni.scanCode({
							     success: function (res) {
							         console.log('条码类型：' + res.scanType);
							         console.log('条码内容：' + res.result);
							     }
							 });
						},
		    openSd(){
				
			},
			close(done){
			            // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
			          
			        },
			        /**
			         * 点击确认按钮触发
			         * @param {Object} done
			         * @param {Object} value
			         */
			        confirm(value){
						alert(value);
			            // 输入框的值
			            console.log(value)
			            // TODO 做一些其他的事情，手动执行 done 才会关闭对话框
			         
			        }
		}
	}
</script>

<style lang="scss" scoped>
.content {
        display: flex;
        flex-direction: column;
        background-color: rgba(200,199,204,0.3);
        width: 750upx;
        height: 100%;
		vertical-align: bottom;
		justify-items: center;
		.sa-bottom{
			position: absolute;
			bottom: 0;
			left: 0;
			//height: 50px;
			background-color: transparent;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		.sa1{
			width: calc(100% /3);
			height: 100%;
			background-color: transparent;
			display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color: #de5f0e;
font-size: 30upx;
			&::after{
				display: none;
			}
			.m-icon {
				display: inline-block;
				width: 50upx;
				height: 50upx;
				&.so-s{
					background-image: url(../../static/images/so-s.png);
					background-repeat: no-repeat;
					background-size: contain;
				}
				&.so-d{
					background-image: url(../../static/images/so-d.png);
					background-repeat: no-repeat;
					background-size: contain;
				}
				&.so-j{
					background-image: url(../../static/images/so-j.png);
					background-repeat: no-repeat;
					background-size: contain;
				}
			}
			
		}
	    }
		.a {
			height: 100%;
		   
			text-align: center;
		}
		.cosao{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		.saosao{
			width: 200upx;
			color: #fff;
			background-color:#de5f0e;
			&::after{
				border-color: #de5f0e;
			}
		}
    }
    
	
</style>
