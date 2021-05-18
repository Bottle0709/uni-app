<!-- 人脸采集 -->
<template>
	<view class="content">
		<view class="contlist">
			<view class="from-list">
				<view class="f-lable">房屋</view>
				<view class="f-view f-disable">仁安花园24栋902</view>
			</view>
			<view class="from-list">
				<view class="f-lable">装修情况</view>
				<view class="f-view">
					<picker-input 
					refName="fitType"
					placeholder="请选择"
					:newpicker="fitType" 
					:pickerlist="fitTypeList" 
					@pickerInputChange="fitTypeChange"
					></picker-input>
				</view>
			</view>
			<view class="from-list">
				<view class="f-lable">期望租金</view>
				<view class="f-view"> 
					<input v-model="rent" class="f-input" type="number" placeholder-style="color: #8A8A8A" placeholder="请输入期望租金" />
				</view>
			</view>
			<view class="from-list">
				<view class="f-lable">押金</view>
				<view class="f-view">
					<input v-model="deposit" class="f-input" type="number" placeholder-style="color: #8A8A8A" placeholder="请输入押金" />
				</view>
			</view>
			<view class="from-list">
				<view class="f-lable">出租开始时间</view>
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
				<view class="f-lable">出租结束时间</view>
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
				<view class="f-lable">房屋图片<span class="tip">（最多可提交9张图片）</span></view>
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
					/>
				</view>
			</view>
			<view class="from-list f-100">
				<view class="f-lable">备注</view>
				<view class="f-view">
					<textarea v-model="remarks" class="f-textare" placeholder-style="color: #8A8A8A" placeholder="请输入需要说明的其它事项"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pickerInput from "@/components/picker-input/index.vue"
	import uniFilePicker from "@/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"
	export default {
		components: {
			pickerInput,
			uniFilePicker
		  },
		data() {
			return {
				fitType:"",//装修情况
				fitTypeList:["毛胚","简装","精装","豪装"],
				starTime:"",   
				endTime:"", 
				rent:"",//租金
				deposit:"",//押金
				imageValue:[],
				remarks:""//备注
			}
		},
		methods: {
			//导航栏按钮事件
			onNavigationBarButtonTap(e) {
				console.log(e);
			    },
			//九宫格上传图片
			// 获取上传状态
			select(e){
			    console.log('选择文件：',e)
			    },
			// 获取上传进度
			progress(e){
			   console.log('上传进度：',e)
			},
			// 上传成功
			success(e){
			   console.log('上传成功')
			},
			// 上传失败
			fail(e){
			   console.log('上传失败：',e)
			},
			fitTypeChange(val){
				this.fitType =val;
			},
			starTimeChange(val){
				this.starTime =val;
			},
			endTimeChange(val){
				this.endTime =val;
			},
		}
	}
</script>

<style scoped lang="scss">
	.content {
	        display: flex;
	        flex-direction: column;
	        background-color: #F9F9F9;
	        width: 750upx;
	        height: 100%;
			vertical-align: bottom;
			justify-items: center;
			.contlist{
				margin-top:8upx;
				background-color: #fff;
				height: 100%;
				padding:0 30upx;
				.from-list{
				  padding:30upx 0;
				  display: flex;
				  align-items: center;
				  justify-content: space-between;
				  border-bottom: 1px solid #E5E5E5;
				  .f-lable{
					  font-size: 30upx;
					  color: #262626;
				  }
				  .f-view{
					  color: #8A8A8A;
					  font-size: 30upx;
					  &.f-disable{
						  color: #262626;
					  }
					  .f-input{
						  text-align: right;
						  color: #262626;
					  }
				  }
				  &.f-100{
					  flex-wrap: wrap;
					  border-bottom: none;
					  .f-view{
						  width: 100%;
						  margin-top: 30upx;
						  .f-textare{
							  width: auto;
							  height: 200upx;
							  padding:20upx;
							  border: 1px solid #E5E5E5;
							  color: #262626;
						  }
					  }
					  .tip{
						  color: #8A8A8A;
					  }
				  }
				}
			}
			}
</style>
