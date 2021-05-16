<template>
	<view style="background-color: white;">
		<view>
			<image class="shancs" src="../../static/images/yl.png" mode="" ></image>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			头像：
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			
			<imgUpload  :count="count" @obtain_img="obtain_img" :name="name" :header="header" :url="url"></imgUpload>
		</view>
		
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" hover-class="main-bg-hover-color" @click="submitform()">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import imgUpload from '@/components/linzq-imgUpload/linzq-imgUpload.vue'
	export default {
		components: {
			imgUpload
		},
		data() {
			return {
				imgList: [],
				imgMaxNum: 4,
				count: 9,
				name: 'pic',
				url: 'http://81.71.126.130:8080/jeecg-boot/sys/upload/img',
				header: {},
				isedit:false,
				themeColor: '#007AFF',
				pickerValue: [0, 0, 1],
				index:-1,
				array: ['中国', '美国', '巴西', '日本'],
				xiaoqu:[],
				xiaoquobj:[],
				building:[],
				buildingobj:[],
				house:[],
				houseobj:[],
				xioquid:0,
				avatar:''
			}
		},
		methods: {
			obtain_img(data) {
							console.log(data, "获取到的图片组" + data.length + "张")
							console.log("---------"+data[0]);
							this.avatar=data[0];
			},
			
			submitform(){
				var form=localStorage.getItem("form");
				 var formobj=JSON.parse(form);
				 formobj.avatar=this.avatar;
				 console.log(JSON.stringify(formobj))
			}
		}
	}
</script>

<style>
.uni-page-body{
	padding-top: 0px;
	background-color:white;
}
</style>
