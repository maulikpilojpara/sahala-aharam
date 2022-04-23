const actions = {
	async updateLoginFlag ({ commit }, flag) {
	    await commit('UPDATE_IS_LOGGED_IN', flag)
	},
	async updateUserContext ({ commit }, data) {
	    await commit('UPDATE_CUSTOMER_CONTEXT', data)
	},
	async checkIfUserLoggedin ({ commit }, token) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		var data = JSON.stringify({
			token
		});
		const axiosOptions1 = {
			method: 'post',
			url: `${appURL}/api/check_loggedin_status`,
			data
		}
		const res = await this.$axios.post(`${appURL}/api/check_loggedin_status`, { token });
		if (res.data && res.data.success)  {
			if (res.data.response && res.data.response.message) {
				await commit('UPDATE_IS_LOGGED_IN', true)
			}
		} else {
			await commit('UPDATE_IS_LOGGED_IN', false)
		}
	},
	async getUserCartData ({ commit }, token) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const axiosOptions1 = {
			method: 'GET',
			url: `${appURL}/api/get_cart_data/${token}`
		}
		const userDataResponse = await this.$axios(axiosOptions1);
		const cartObj = userDataResponse?.data?.message?.doc || {}
		const cartItems = userDataResponse?.data?.message?.doc?.items || []
		await commit('UPDATE_CART_TOTALS', cartObj)
		await commit('UPDATE_CART_ITEMS', cartItems)
		await commit('UPDATE_CART_ITEMS_COUNT', cartItems.length)
		if (userDataResponse.data && userDataResponse.data.success)  {

		}
			
	},
	async updateUserCart ({ commit }, data) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const udpateCartResponse = await this.$axios.post(`${appURL}/api/update_cart`, data);
		const cartObj = udpateCartResponse?.data?.message?.doc || {}
		const cartItems = udpateCartResponse?.data?.message?.doc?.items || []
		await commit('UPDATE_CART_TOTALS', cartObj)
		await commit('UPDATE_CART_ITEMS', cartItems)
		await commit('UPDATE_CART_ITEMS_COUNT', cartItems.length)
	},
	async logOutUser ({ commit }, userToken) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const udpateCartResponse = await this.$axios.post(`${appURL}/api/user_logout`, {token: userToken});
		await commit('UPDATE_IS_LOGGED_IN', false)
		await commit('UPDATE_CART_TOTALS', {})
		await commit('UPDATE_CART_ITEMS', [])
		await commit('UPDATE_CART_ITEMS_COUNT', 0)
	}
}
export default actions