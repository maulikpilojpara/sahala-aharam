export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
      const loggedinUserData = context.$cookies.get('login_token');
      
      const axiosOptions = {
        method: 'GET',
        url: `${appURL}/api/getGlobalContent`
      }
      await context.$axios(axiosOptions)
        .then(res => {
          commit('global/SET_COMMONELEMENTS', res.data);
        })
        .catch(error => console.log(error));
      if (loggedinUserData) {
        await context.store.dispatch('customer/updateLoginFlag', true);
        await context.store.dispatch('customer/updateUserContext', loggedinUserData);
      }
    } catch (error) {
      /* eslint-disable no-console */
      console.error('nuxtServerInit:: ', error)
    }
  }
}
