const actions = {
  async saveProductData ({commit}, skuName) {
    try {
      const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.APP_URL_PROD
      const productRes = await this.$axios.post(`${appURL}/api/getProductDetails/`, {id: skuName})
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
      const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.APP_URL_PROD
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