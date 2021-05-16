<template>
	<view class="content">
		<view class="a"></view>
		<view class="a" style="display: flex;flex-direction: column;">
			<view class="a"></view>
			<view class="a">
				<button style="margin-top:20upx;height: 100upx;width: 200upx;border-radius: 100upx;"
				type="primary" @click="scanCode()">扫一扫</button>
			</view>
			<view class="a"></view>
		</view>
		<view class="a" >
			<button style="margin-left:250upx;margin-bottom:20px;width: 250upx;border-radius: 100upx;position: absolute;bottom: 0upx;"
			type="primary" @click="open()">输入序列号</button>
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

<style>
.content {
        display: flex;
        flex-direction: column;
        background-color: #C8C7CC;
        width: 750upx;
        height: 100%;
		vertical-align: bottom;
		justify-items: center;
    }
    .a {
		height: 100%;
       
		text-align: center;
    }
</style>
