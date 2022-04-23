const actions = {
  async getCMSData (context, cmsPageSlug) {
    const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
    try {
      const res = await this.$axios.get(`${appURL}/api/get_cms_data/${cmsPageSlug}`);
      if (res && res.data && res.data.data)  {
        return res.data.data;
      }
    } catch (error) {
      console.log('getCMSData Error', error);
    }
  }
}
export default actions