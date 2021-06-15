<template>
	<view class="intercom">
		<view class="vtop">
			<view class="title">李易峰</view>
			<view class="tip">要求进行视频通话...</view>
		</view>
		<view class="vbottom">
			<view class="vbtn">
				<img class="simg" src="@/static/images/pz.png" @click="change(1)" v-if="currentIndx == 0"/>
				<img class="simg" src="@/static/images/gd.png" @click="change(1)" v-if="currentIndx == 0" />
				<img class="simg" src="@/static/images/jt.png" @click="change(0)" v-if="currentIndx == 1" />
				<img class="simg" src="@/static/images/jy.png" v-if="currentIndx == 1" />
			</view>
			<view class="vtitle">点击拍照，才能接通峰峰视频哦~</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {},
	components: {},
	data() {
		return {
			currentIndx:0
		};
	},
	methods: {
		change(index){
			this.currentIndx = index;
		}
	}
};
</script>

<style lang="scss" sccope>
.intercom {
	width: 100%;
	height: 100%;
	background: #0b1828;
	position: relative;
	.vtop {
		width: 100%;
		position: absolute;
		left: 0;
		top: 10%;
		color: #fff;
		text-align: center;
		.title {
			font-size: 32upx;
		}
		.tip {
			font-size: 28upx;
			margin-top: 40upx;
		}
	}
	.vbottom {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 15%;
		.vbtn {
			display: flex;
			align-items: center;
			justify-content: center;
			.simg {
				width: 100upx;
				height: 100upx;
				margin: 0 20upx;
			}
		}
		.vtitle {
			margin-top: 40upx;
			font-size: 24upx;
			color: #fff;
			text-align: center;
		}
	}
}
</style>
