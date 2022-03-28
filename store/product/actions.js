const actions = {
  async saveProductData ({commit}, skuName) {
    try {
      const cookieData = this.$cookies.get('login_token')
      const api_key = cookieData?.api_key || ''
      const api_secret = cookieData?.api_secret || ''
      const payload = {
        id: skuName,
        api_key,
        api_secret
      }
      // console.log('payload:', payload);
      // return;
      const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD
      const productRes = await this.$axios.post(`${appURL}/api/getProductDetails/`, payload)
      if (productRes.data && productRes.data.message) {
        commit('SAVE_CURRENT_PRODUCT', productRes.data.message)
      }

    } catch (error) {
      /* eslint-disable no-console */
      console.error(error)
    }

  },
  async getRelatedProducts ({commit}, skuName) {
    try {
      const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD
      const productRes = await this.$axios.get(`${appURL}/api/getRelatedProducts/${skuName}`)

      if (productRes.data && productRes.data.message) {
        return productRes.data.message;
      //   console.log('productResDATA message::: ', typeof productRes.data.message);
      //   commit('SAVE_CURRENT_PRODUCT', productRes.data.message)
      }

    } catch (error) {
      /* eslint-disable no-console */
      console.error(error)
    }
  }
}
export default actions