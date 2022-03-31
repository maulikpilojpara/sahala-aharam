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
      if (state.customerContext && state.customerContext.message) {
        token = `token ${state.customerContext.message.api_key}:${state.customerContext.message.api_secret}`
      }
      return token;
  },
  getCartItems (state) {
    return state.cartItems;
  },
  getCartItemsCount (state) {
    return state.cartItemsCount;
  }
}
export default getters