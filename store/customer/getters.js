const getters = {
  getUserLoginStatus (state) {
      return state.isLoggedIn
  },
  getCustomerContext (state) {
      return state.customerContext
  },
  getCustomerName (state) {
      return state?.customerContext?.full_name || ''
  },
  getCustomerToken (state) {
      let token = '';
      console.log('state.customerContext:: ', state);
      
      if (state.customerContext && state.customerContext.message) {
        console.log('state.customerContext.messageapi_key:: ', state.customerContext.message.api_key);
        console.log('state.customerContext.api_secret:: ', state.customerContext.message.api_secret);
        token = `token ${state.customerContext.message.api_key}:${state.customerContext.message.api_secret}`
      }
      return token;
  },
}
export default getters