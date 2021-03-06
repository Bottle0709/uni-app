import $store from '@/store/index.js'
export default {
	// 全局配置
	common: {
		baseUrl: "http://121.14.17.70:8080/jeecg-boot",
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	// 请求 返回promise
	request(options = {}) {
		// 组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		//console.log(options)
		// token
		if (options.token) {
			options.header["X-Access-Token"] = $store.state.user.token
			// 二次验证---options.checkToken && !options.header["X-Access-Token"]
			if (!options.header["X-Access-Token"]) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return uni.navigateTo({
					url: '/pages/login/login',
				});
			}
		}

		// 请求
		return new Promise((res, rej) => {
			// 请求之前... todo
			// 请求中...
				uni.request({
					url: this.common.baseUrl + options.url,
					...options,
					success: (result) => {
						// 返回原始数据
						if (options.native) {
							return res(result)
						}
						// 服务端失败
						if (result.statusCode !== 200) {
							if (options.toast !== false) {
								uni.showToast({
									title: result.data.msg || '服务端失败',
									icon: 'none'
								});
							}
							return rej(result.data)
						}
						console.log(result)
						// 请求成功-但接口不通
						let data = result.data;
						if (data.code == 200) {
							return res(data)
						} else if (data.code == 500) {
							uni.showToast({
								title: data.message,
								icon: 'none'
							});
						} else if (data.code == 501) {
							$store.commit('logout')
							uni.showToast({
								title: "登录失效，请重新登录！",
								icon: 'none'
							});
							return uni.navigateTo({
								url: '/pages/login/login',
							});
						} else {
							return rej(data)
						}
					},
					fail: (error) => {
						console.log(error)
						uni.showToast({
							title: error.errMsg || '请求失败',
							icon: 'none'
						});
						return rej()
					}
				});
			


		})
	},
	// get请求
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post请求
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		//console.log(options)
		return this.request(options)
	},
	// delete请求
	del(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},

}
