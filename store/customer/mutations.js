const mutations = {
  UPDATE_CUSTOMER_CONTEXT(state, message){   
      state.customerContext = message
  },
  UPDATE_IS_LOGGED_IN (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
  },
  UPDATE_CART_TOTALS (state, cartTotals) {
      state.cartTotals = cartTotals
  },
  UPDATE_CART_ITEMS (state, cartItems) {
      state.cartItems = cartItems
  },
  UPDATE_CART_ITEMS_COUNT (state, cartItemsCount) {
      state.cartItemsCount = cartItemsCount
  },
}
export default mutations
