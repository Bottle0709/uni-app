import $store from '@/store/index.js'
import $ from '@/common/lib/jquery.min.js'
export default {
	uploadFile(path, File) {
		var formdata = new FormData(); // 创建一个form类型的数据
		formdata.append("img", File);
		// 请求
		return new Promise((res, rej) => {
			$.ajax({
				url: "http://121.14.17.70:8080/jeecg-boot" + path,
				type: "POST",
				processData: false,
				contentType: false,
				headers: {
					"X-Access-Token": $store.state.user.token, //此处放置请求到的用户token
				},
				data: formdata,
				success: function(data) {
					//console.log(data)
					if (data.code == 200) {
						return res(data)
					} else if (data.code == 500) {
						uni.showToast({
							title: data.result,
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
					}
				},
				error: function(err) {
					uni.showToast({
						title: err.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			});
		});
	}

}
