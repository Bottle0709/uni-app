<template>
	<view style="background-color:white;">
		
	
		
		<!-- <view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				所在地区：</view>
			<input class="px-1 font-md flex-1" type="text" disabled 
			@click="showMulLinkageThreePicker" placeholder="请选择所在地区"
			:value="form.path"/>
			
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="pickerValue" @onConfirm="onConfirm"></mpvue-city-picker>
			
		</view> -->
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				小区：</view>
				<input class="px-1 font-md flex-1" type="text" disabled
				@click="showXiaoquPicker" placeholder="请选择所在小区"
				:value="form.xiaoqu"/>
			  <picker v-if="xiaoqu.length>0" @change="xiaoquChange($event)" :value="index" :range="xiaoqu" ref="xqpicker">
			                         <view class="uni-input">{{xiaoqu[index]}}</view>
			                     </picker>
		</view>
		
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				楼栋：</view>
				<input class="px-1 font-md flex-1" type="text" disabled
				@click="showbuildingPicker" placeholder="请选择所在楼栋"
				:value="form.building"/>
			  <picker @change="bindingChange($event)" :value="index" :range="building" ref="buildingpicker">
			                         <view class="uni-input">{{building[index]}}</view>
			                     </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				房屋：</view>
				<input class="px-1 font-md flex-1" type="text" disabled
				 placeholder="请选择所在房屋" @click="showhousePicker"
				:value="form.house"/>
			  <picker @change="housepickerChange($event)" :value="index" ref="housepicker" :range="house">
			                         <view class="uni-input">{{house[index]}}</view>
			                     </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>所属小区ID：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入所属小区ID"
						v-model="form.villageId" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>姓名：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入姓名"
						v-model="form.name" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>手机号：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入手机号"
						v-model="form.phone" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				电话号码：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入电话号码"
						v-model="form.phonecall" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				邮箱：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入邮箱"
						v-model="form.email" />
		</view>
		<!-- <view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				身份证头像：
		    </view>
			<input class="px-1 font-md flex-1" type="text" 
						v-model="form.cardsAvatar" />
		</view> -->
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>证件类型：</view>
				<input class="px-1 font-md flex-1" type="text" disabled
				 placeholder="请选择证件类型" @click="showcardsType"
				:value="form.cardsType"/>
			  <picker @change="cardsTypeChange($event)" :value="index" ref="cardsType" :range="cardsTypeList">
			                         <view class="uni-input">{{cardsTypeList[index]}}</view>
			                     </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>证件号码：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入证件号码"
						v-model="form.shengfenzheng" />
		</view>
		<!-- <view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				证件正面照：
		    </view>
			
			<input class="px-1 font-md flex-1" type="text" 
						v-model="form.frontalPhoto" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				证件反面照：
		    </view>
			
			<input class="px-1 font-md flex-1" typre="text" 
						v-model="form.reversePhoto" />
		</view> -->
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				<span class="p-tip">*</span>性别：
		    </view>
		    <input class="px-1 font-md flex-1" type="text" disabled
		    				 placeholder="请选择性别" @click="showSex"
		    				:value="form.sex"/>
		    <picker @change="sexsChange($event)" :value="index" ref="sexs" :range="sexs">
		                           <view class="uni-input">{{sexs[index]}}</view>
		                       </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				生日：
		    </view>
			<input class="px-1 font-md flex-1" type="text" 
			placeholder="请选择生日"
			@click="showBirthday"
						v-model="form.birthday" />
			<picker mode="date" ref="dates" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
			                        <view class="uni-input">{{birthday}}</view>
			                    </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				民族：
		    </view>
			<input class="px-1 font-md flex-1" type="text" 
			placeholder="请选择民族"
			@click="showNation"
						v-model="form.mz" />
						<picker @change="nationChange($event)" :value="index" ref="nationns" :range="nationns">
						                       <view class="uni-input">{{nationns[index]}}</view>
						                   </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				教育程度：
		    </view>
			<input class="px-1 font-md flex-1" type="text" 
			placeholder="请选择教育程度"
			@click="showeducationLevel"
						v-model="form.jycd" />
						<picker @change="educationLevelsChange($event)" :value="index" ref="educationLevels" :range="educationLevels">
						                       <view class="uni-input">{{educationLevels[index]}}</view>
						                   </picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				国籍：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入国籍"
						v-model="form.gj" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				籍贯省：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入籍贯省"
						v-model="form.province" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				籍贯市：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入籍贯市"
						v-model="form.city" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				婚姻状况：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请选择婚姻状况"
			@click="showmaritalStatus"
						v-model="form.hy" />
			<picker @change="maritalStatusChange($event)" :value="index" ref="maritalStatus" :range="maritalStatus">
					<view class="uni-input">{{maritalStatus[index]}}</view>
				</picker>
		</view> 
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				政治面貌：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请选择政治面貌"
			@click="showpoliticStatus"
						v-model="form.zzmm" />
						<picker @change="politicStatusChange($event)" :value="index" ref="politicStatus" :range="politicStatus">
								<view class="uni-input">{{politicStatus[index]}}</view>
							</picker>
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				工作单位：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入工作单位"
						v-model="form.company" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				工作单位地址：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入工作单位地址"
						v-model="form.companyAddress" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				工作职务：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入工作职务"
						v-model="form.companyName" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				紧急联系人姓名：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入紧急联系人姓名"
						v-model="form.contactName" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				紧急联系人电话：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入紧急联系人电话"
						v-model="form.contactPhone" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				紧急联系人地址：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入紧急联系人地址"
						v-model="form.contactAddress" />
		</view>
		<view class="p-2 d-flex a-center bg-white border-bottom">
			<view class="font-md text-secondary mr-1 flex-shrink">
				备注：
		    </view>
			<input class="px-1 font-md flex-1" type="text" placeholder="请输入备注"
						v-model="form.remarks" />
		</view>
		
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" hover-class="main-bg-hover-color" @click="nextTick()">
				下一步
			</view>
		</view>

	</view>
</template>

<script>
	import imgUpload from '@/components/linzq-imgUpload/linzq-imgUpload.vue'
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue"
	import {mapMutations} from "vuex"
	
var _this = this;
	export default {
		components: {
			mpvueCityPicker,
			imgUpload
		},
		data() {
			return {
				tip:"",
				imgList: [],
				imgMaxNum: 4,
				count: 9,
				name: 'pic',
				url: 'http://localhost:8088/jeecg-boot/sys/upload/img',
				header: {},
				isedit:false,
				themeColor: '#007AFF',
				pickerValue: [0, 0, 1],
				index:-1,
				array: ['中国', '美国', '巴西', '日本'],
				sexs:['男','女'],
				xiaoqu:[],
				xiaoqu_id:0,
				xiaoquobj:[],
				building:[],
				building_id:0,
				buildingobj:[],
				house:[],
				house_id:0,
				houseobj:[],
				xioquid:0,
				birthday:"",
				cardsTypeList:["身份证","护照","台胞证"],
				nationns:["汉",],
				educationLevels:["初中", "中专", "高中","大专","本科","硕士","博士"],
				maritalStatus:["未婚","已婚"],
				politicStatus:["团员","党员","未知"],
				form:{
					villageId:"",
					name:"",
					phone:"",
					phonecall:"",
					email:"",
					cardsAvatar:"",//身份证头像
					shengfenzheng:"",
					cardsType:"",
					frontalPhoto:"",//证件正面照
					reversePhoto:"",//证件反面照
					sex:"",
					birthday:"",
					mz:"",
					jycd:"",
					gj:"",
					province:"",
					city:"",
					hy:"",
					zzmm:"",
					company:"",  
					companyAddress:"", 
					companyName:"", 
					contactName:"", 
					contactPhone:"", 
					contactAddress:"", 
					remarks:"",
					path:'',
					avatar:"",
					detailPath:"",
					isdefault:false,
					xiaoquid:0,
					xiaoqu:"",
					building:"",
					buildingid:0,
					house:"",
					houseid:0,
				}
			}
		},
		onLoad(e) {
			//this.getXiaoQu();
			if (e.data) {
				let result = JSON.parse(e.data)
				this.form = result.item
				this.index = result.index
				this.isedit = true
			}
			this.getXiaoQu("广东省","广州市","增城区");
		},
		// 监听返回
		onBackPress() {
		  if (this.$refs.mpvueCityPicker.showPicker) {
		  	this.$refs.mpvueCityPicker.pickerCancel();
		    return true;
		  }
		},
		// 页面卸载
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		},
		computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods: {
			...mapMutations(['createPath','updatePath']),
			// 提交
			submit(){
				// 验证表单
				
				
			},
			nextTick(){
				
				this.form.xiaoquid=this.xiaoqu_id;
				
				this.form.buildingid=this.building_id;
				
				this.form.houseid=this.house_id
				this.form.villageId=this.xiaoqu_id;
				
				/* if(!this.form.xiaoquid){
					uni.showToast({
						title: '请选择小区',
						icon: 'none'
					});
				}else if(!this.form.buildingid){
					uni.showToast({
						title: '请选择楼栋',
						icon: 'none'
					});
				}else if(!this.form.houseid){
					uni.showToast({
						title: '请选择房屋',
						icon: 'none'
					});
				} */
				if(!this.form.villageId){
					uni.showToast({
						title: '请输入所属小区ID',
						icon: 'none'
					});
				}
				else if(!this.form.name){
					uni.showToast({
						title: '请输入姓名',
						icon: 'none'
					});
				}else if(!this.form.phone){
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
				}else if(!(/^1[34578]\d{9}$/.test(this.form.phone))){
					uni.showToast({
						title: '手机号码有误，请重填!',
						icon: 'none'
					});
				}else if(!this.form.cardsType){
					uni.showToast({
						title: '请选择证件类型',
						icon: 'none'
					});
				}else if(!this.form.shengfenzheng){
					uni.showToast({
						title: '请输入证件号码',
						icon: 'none'
					});
				}else if(!this.IdentityCodeValid(this.form.shengfenzheng)){
					uni.showToast({
						title: this.tip+'，请重填!',
						icon: 'none'
					});
				}else if(!this.form.sex){
					uni.showToast({
						title: '请选择性别',
						icon: 'none'
					});
				}
				else{
					localStorage.setItem('form',JSON.stringify(this.form));
					//console.log(JSON.stringify(this.form));
					
					uni.navigateTo({
						url: '../register-next/register-next',
					}); 
				}
				 
			},
			getXiaoQu(province,city,region){
				this.xiaoqu=[];
				this.xiaoquobj=[];
				this.$H.get('sys/countryb/getxiaoqu?province='+province+'&city='+city+'&region='+region,{},{}).then(res=>{
					
					if(res.length>0){
						for(var i=0;i<res.length;i++){
							let xiqo={};
							xiqo.name=res[i].communityname;
							xiqo.id=res[i].communityid;
							this.xiaoqu.push(xiqo.name);
							this.xiaoquobj.push(xiqo);
						}
					}
					//console.log(JSON.stringify(this.xiaoqu))
				})
			},
			getbuilding(ccid){
				this.building=[];
				this.buildingobj=[];
				this.$H.get('sys/countryb/getBuilding?xiaoquid='+ccid,{},{}).then(res=>{
					
					if(res.length>0){
						for(var i=0;i<res.length;i++){
							let xiqo={};
							xiqo.no=res[i].buildingNo;
							xiqo.name=res[i].buildingName;
							xiqo.id=res[i].id;
							this.building.push(xiqo.name);
							this.buildingobj.push(xiqo);
						}
					}
				})
			
			},
			getHouse(ccid,buildingid){
				this.house=[];
				this.houseobj=[];
				this.$H.get('sys/countryb/getHouse?communityid='+ccid+'&buildingid='+buildingid,{},{}).then(res=>{
					
					if(res.length>0){
						for(var i=0;i<res.length;i++){
							let xiqo={};
							 xiqo.id=res[i].id;
							 xiqo.name=res[i].unitNo;
							 this.house.push(xiqo.name);
							 this.houseobj.push(xiqo);
						}
					}
					console.log(JSON.stringify(this.house))
				})
			
			},
			// 三级联动确定
			onConfirm(e) {
				this.form.path = e.label
				this.pickerValue = e.value
				console.log(e.dd.p)
				//this.getXiaoQu(e.dd.p,e.dd.c,e.dd.r);
			},
			// 显示三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			showXiaoquPicker(){
				this.$refs.xqpicker.$el.click();
			},
			showbuildingPicker(){
				this.$refs.buildingpicker.$el.click();
			},
			showcardsType(){
				this.$refs.cardsType.$el.click();
			},
			showSex(){
				this.$refs.sexs.$el.click();
			},
			xiaoquChange(e){
				this.form.xiaoqu=this.xiaoqu[e.target.value];
				//console.log(this.xiaoquobj[e.target.value].id)
				this.xiaoqu_id=this.xiaoquobj[e.target.value].id;
				this.getbuilding(this.xiaoquobj[e.target.value].id);
				
			},
			bindingChange(e){
				this.form.building=this.building[e.target.value];
				this.building_id=this.buildingobj[e.target.value].id;
				//this.getHouse(this.xioquid,this.buildingobj[e.target.value].id)
				this.getHouse(2,86);
			},
			showhousePicker(){
				this.$refs.housepicker.$el.click();
			},
			housepickerChange(e){
				this.form.house=this.house[e.target.value];
				this.house_id=this.houseobj[e.target.value].id;
			},
			cardsTypeChange(e){
				this.form.cardsType=this.cardsTypeList[e.target.value];
				this.form.shengfenzheng = "";
			},
			sexsChange(e){
				this.form.sex=this.sexs[e.target.value];
			},
			obtain_img(data) {
							console.log(data, "获取到的图片组" + data.length + "张")
							console.log("---------"+data[0]);
			},
			showNation(){
				this.$refs.nationns.$el.click();
			},  
			nationChange(e){
				this.form.mz=this.nationns[e.target.value];
			},  
			showeducationLevel(){
				this.$refs.educationLevels.$el.click();
			},   
			educationLevelsChange(e){
				this.form.jycd=this.educationLevels[e.target.value];
			},
			showmaritalStatus(){
				this.$refs.maritalStatus.$el.click();
			}, 
			maritalStatusChange(e){
				this.form.hy=this.maritalStatus[e.target.value];
			},
			showpoliticStatus(){
				this.$refs.politicStatus.$el.click();
			}, 
			politicStatusChange(e){
				this.form.zzmm=this.politicStatus[e.target.value];
			},   
			showBirthday(){
				this.$refs.dates.$el.click();
			},
			bindDateChange(e){
				this.form.birthday=e.target.value;
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
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			},
			//身份证号、护照号、台胞号格式验证
			IdentityCodeValid(code) {
				var tip = "";
				var pass= true;
				if(this.form.cardsType =="护照"){
					if(!/^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/.test(code)){
					      tip = "护照号码格式错误";
					    pass = false;
				  }
				}else if(this.form.cardsType=="台胞证"){//新版和旧版台胞号都可以验证
				  if(!/^(?:(830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX])|\d{10}[DAB])$/.test(code)){
										      tip = "台胞证号码格式错误";
										    pass = false;
					}
				}else{
			      //身份证
					var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
			
					 if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
					     tip = "身份证号格式错误";
					     pass = false;
					 }
								
					else if(!city[code.substr(0,2)]){
					     tip = "身份证号地址编码错误";
					     pass = false;
					 }
					 else{
					     //18位身份证需要验证最后一位校验位
					     if(code.length == 18){
					         code = code.split('');
					         //∑(ai×Wi)(mod 11)
					         //加权因子
					         var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
					         //校验位
					         var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
					         var sum = 0;
					         var ai = 0;
					         var wi = 0;
					         for (var i = 0; i < 17; i++)
					         {
					             ai = code[i];
					             wi = factor[i];
					             sum += ai * wi;
					         }
					         var last = parity[sum % 11];
					         if(parity[sum % 11] != code[17]){
					             tip = "身份证号校验位错误";
					             pass =false;
					         }
					     }
					 }
					 //if(!pass) alert(tip);
											
				}
				console.log(tip);
				this.tip = tip;
				return pass;
			        }
		
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
.p-tip{
	color: red;
}
</style>
