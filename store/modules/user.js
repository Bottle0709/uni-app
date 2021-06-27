export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{},
		//房屋信息
		houseInfo:{}
	},
	mutations:{
		// 初始化登录状态
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				
				state.userInfo = userInfo
				//state.token = userInfo.token
				state.token = userInfo
				state.loginStatus = true
			}
		},
		// 登录
		login(state,userinfo){
			console.log(userinfo)
			state.userInfo = userinfo
			state.loginStatus = true
			//state.token = userinfo.token
			state.token = userinfo
			// 持久化存储
			uni.setStorageSync('userInfo',JSON.stringify(userinfo))
		},
		// 退出登录
		logout(state){
			state.userInfo = {}
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('userInfo')
		},
		//房屋信息
		setHouseInfo(state,info){
			state.houseInfo = info
		}
	}
}