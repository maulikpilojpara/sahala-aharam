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
        console.log('loggedinUserData::', loggedinUserData);
        
        if (loggedinUserData) {
        
        await context.store.dispatch('customer/updateUserContext', loggedinUserData);
        const cusToken = await context.store.getters['customer/getCustomerToken'];
        
        await context.store.dispatch('customer/checkIfUserLoggedin', cusToken);
        await context.store.dispatch('customer/getUserCartData', cusToken);
       
      }
    } catch (error) {
      /* eslint-disable no-console */
      console.error('nuxtServerInit:: ', error)
    }
  }
}
