const mutations = {
  UPDATE_CUSTOMER_CONTEXT(state, message){   
      state.customerContext = message
  },
  UPDATE_IS_LOGGED_IN (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
  },
}
export default mutations
