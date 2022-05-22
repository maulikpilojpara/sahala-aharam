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
  getUserOrders (state) {
      return state?.ordersList || []
  },
  getCustomerToken (state) {
      let token = '';
      if (state.customerContext && state.customerContext.message) {
        token = `token ${state.customerContext.message.api_key}:${state.customerContext.message.api_secret}`
      }
      console.log('token check:: ', token);
      return token;
  },
  getCartTotals (state) {
    return state.cartTotals;
  },
  getCartItems (state) {
    return state.cartItems;
  },
  getCartItemsCount (state) {
    return state.cartItemsCount;
  }
}
export default getters