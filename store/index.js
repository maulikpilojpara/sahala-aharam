export const actions = {
  async nuxtServerInit({ commit }, context) {
    const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD
    const axiosOptions = {
      method: 'GET',
      url: `${appURL}/api/getGlobalContent`
    }
    await context.$axios(axiosOptions)
      .then(res => {
        commit('global/SET_COMMONELEMENTS', res.data);
      })
      .catch(error => console.log(error));
  }
}
