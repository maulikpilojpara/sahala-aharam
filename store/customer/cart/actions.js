const actions = {
	async getCurrentCartQuotation ({ commit }, token) {
        
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const res = await this.$axios.post(`${appURL}/api/get_cart_quotation`, { token });
        
		if (res.data && res.data.message)  {
			await commit('UPDATE_CART_QUOTATION', res.data.message)
		}
	},
	async addNewAddress ({ commit }, payload) {
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const res = await this.$axios.post(`${appURL}/api/add_cutomer_address`, payload);
        return res?.data?.message?.address || [];
		// if (res.data && res.data.message && res.data.message.address)  {
        //     this.$store.dispatch('customer/cart/getCurrentCartQuotation', payload.token)
		// }
	},
	
    async deleteAddress ({ commit }, payload) {
        console.log('deleteAddress payload:: ', payload);
        
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const res = await this.$axios.post(`${appURL}/api/delete_address`, payload);
        console.log('res?.data::', res.data);
        
        return res?.data?.message || '';
	},
	async createErpOrder ({ commit }, token) {
        console.log('createErpOrder token:: ', token);
        
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
		const res = await this.$axios.post(`${appURL}/api/create_order`, { token });
        console.log('createErpOrder res:: ', res);
        if (res.data && res.data.message) {
            await commit('UPDATE_ERP_ORDER_RESPONSE', res.data.message)
        }
        
		// if (res.data && res.data.success)  {
		// 	if (res.data && res.data.message) {
		// 		await commit('UPDATE_ERP_ORDER_RESPONSE', res.data.response.message)
		// 	}
		// } else {
		// 	await commit('UPDATE_ERP_ORDER_RESPONSE', res.data.response.message)
		// }
	},
	async _createRazorpayOrder (_context, data) {
        // const url = await this.$getApiEndpoint('createRazorpayOrder')
        const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
        const url = `${appURL}/razorpay/payment/order`
        const bodyFormData = new FormData()
        bodyFormData.append('email', data.email)
        bodyFormData.append('quoteId', data.quoteId)
        bodyFormData.append('payment_method', data.paymentMethod)
        if (data.billingAddressObject) {
            bodyFormData.append('billing_address', data.billingAddressObject)
        }
        if (data.order_check) {
            bodyFormData.append('order_check', data.orderCheck)
        }
        const axiosOptions = {
            method: 'POST',
            url,
            data: bodyFormData
        }
        try {
            const responseData = this.$axios(axiosOptions).then((res) => {
                return res.data
            })
            console.log('responseData:: ', responseData);
        } catch (error) {
            /* eslint-disable no-console */
            console.error('error while setting shipping information: ', error)
            return false
        }
    },
    async _createOrder (_context, data) {
        const url = await this.$getApiEndpoint('createOrder')
        const headers = {
            Authorization: 'Bearer ' + this.getters['customer/login/getCustomerToken']
        }
        const axiosOptions = {
            method: 'POST',
            url,
            headers,
            data
        }
        try {
            return await this.$makeHttpRequest(axiosOptions)
        } catch (error) {
            /* eslint-disable no-console */
            console.error('error while setting shipping information: ', error)
            return false
        }
    }
}
export default actions