<template>
	<div class="my-input-picker">
		<input class="px-input" type="text" :value="picker" :placeholder="placeholder" @click="showPicker" disabled />
		<picker v-if="!isTime" class="px-picker" @change="pickerChange($event)" :value="index" :ref="refName" :range="pickerlist" range-key="index">
		                       <view class="uni-input">{{pickerlist[index]}}</view>
		                   </picker>
		<picker v-else mode="date" class="px-picker" :value="picker" :start="startDate" :end="endDate" :ref="refName" @change="timeChange">
		                        <view class="uni-input">{{picker}}</view>
		                    </picker>
	</div>
</template>

<script>
	export default {
		props:{
			refName:{
				type:String,
				default:""
			},
			newpicker:{
				type:String,
				default:""
			},
			pickerlist:{
				type:Array,
				default:()=>[]
			},
			placeholder:{
				type:String,
				default:"请选择"
			},
			isTime:{
				type:Boolean,
				default:false
			},
			oldstartDate:{
				type:String,
				default:""
			},
			oldendDate:{
				type:String,
				default:""
			},
		},
		data() {
			return {
				index: 0,
				picker:"",
			}
		},
		created() {
		},
		computed: {
		        startDate() {
					return this.oldstartDate;
		        },
		        endDate() {
					return this.oldendDate;
		        }
		    },
		watch:{
			oldstartDate(val){
				console.log("开始时间",val);
			},
			oldendDate(val){
				console.log("结束时间",val);
			},
			newpicker(val){
				//console.log(val);
				this.picker = val;
			},
			picker(val){
				this.$emit("pickerInputChange",val);
			},
		},
		methods: {
			showPicker(){
				this.$refs[this.refName].$el.click();
			},
			pickerChange(e){
				this.picker=this.pickerlist[e.target.value];
			},
			timeChange(e){
				this.picker=e.target.value;;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.px-input{
		text-align: right;
		 color: #262626;
		 .input-placeholder{
			 &::after{
			 			 content:">";
						 display: inline-block;
						 padding: 0 20upx;
			 			 color: #8A8A8A;
			 			 font-size:34upx;
			 }
		 }
		 
	}
	.px-picker{display: none;}
</style>
