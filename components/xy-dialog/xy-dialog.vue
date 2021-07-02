<template>
	<view class="xy-dialog" :class="{ 'xy-dialog__show': isShow }">
		<view class="xy-dialog__mask" @click="closeDialog"></view>
		<view class="xy-dialog__container" :class="otherClassName"><slot /></view>
	</view>
</template>

<script>
export default {
	props: {
		otherClassName: {
			type: String,
			default: ''
		},
		// 是否显示弹出框
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isShow: false
		};
	},
	watch: {
		show(val) {
			this.isShow = val;
		}
	},
	methods: {
		// 禁止穿透
		bindTouchmove() {},
		showDialog() {
			this.isShow = true;
		},
		// 关闭弹窗
		closeDialog() {
			this.isShow = false;
			//this.$emit('close')
		}
	}
};
</script>

<style lang="scss">
.xy-dialog {
	position: fixed;
	visibility: hidden;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1500;
	transition: visibility 200ms ease-in;
	&.xy-dialog__show {
		visibility: visible;
	}
	&__mask {
		display: block;
		position: absolute;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		opacity: 0;
		transition: opacity 200ms ease-in;
	}
	&__container {
		position: absolute;
		z-index: 1010;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 0.3s;
		width: 540upx;
		border-radius: 30upx;
		background-color: #fff;
		overflow: hidden;
		opacity: 0;
		transition: opacity 200ms ease-in;
		padding: 30upx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__show {
		.xy-dialog__container,
		.xy-dialog__mask {
			opacity: 1;
		}
	}
}
</style>
