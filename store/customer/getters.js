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
}
export default getters