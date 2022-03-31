const actions = {
	async updateLoginFlag ({ commit }, flag) {
	    await commit('UPDATE_IS_LOGGED_IN', flag)
	},
	async updateUserContext ({ commit }, data) {
	    await commit('UPDATE_CUSTOMER_CONTEXT', data)
	},
	async checkIfUserLoggedin ({ commit }, token) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const axiosOptions1 = {
			method: 'GET',
			url: `${appURL}/api/check_loggedin_status/${token}`
		}
		const res = await this.$axios(axiosOptions1);
		// console.log('checkIfUserLoggedin loginRes.data::; ', loginRes.data);
		if (res.data && res.data.success)  {
			if (res.data.response && res.data.response.message) {
				await this.$store.dispatch('customer/updateLoginFlag', true);
				// await commit('UPDATE_IS_LOGGED_IN', true)
			}
		} else {
			await this.$store.dispatch('customer/updateLoginFlag', false);
			// await commit('UPDATE_IS_LOGGED_IN', false)
		}
	},
	async getUserCartData ({ commit }, token) {
		const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const axiosOptions1 = {
			method: 'GET',
			url: `${appURL}/api/get_cart_data/${token}`
		}
		const userDataResponse = await this.$axios(axiosOptions1);
		console.log('getUserCartData userDataResponse.data::; ', userDataResponse.data.message.doc.items);
		const cartObj = userDataResponse?.data?.message?.doc || {}
		const cartItems = userDataResponse?.data?.message?.doc?.items || []
		await commit('UPDATE_CART_TOTALS', cartObj)
		await commit('UPDATE_CART_ITEMS', cartItems)
		await commit('UPDATE_CART_ITEMS_COUNT', cartItems.length)
		if (userDataResponse.data && userDataResponse.data.success)  {

		}
			
	},
}
export default actions