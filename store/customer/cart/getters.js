const getters = {
  getErpOrderResponse (state) {
      return state.erpOrderResponse
  },
  getRazorpayInputs (state) {
      return state.razorpayInputs
  },
  getCartQuotationDoc (state) {
      return state?.cartQuotation?.doc || {}
  },
  getUserShippingAddresses (state) {
      return state?.cartQuotation?.shipping_addresses || []
  },
  getUserBillingAddresses (state) {
      return state?.cartQuotation?.billing_addresses || []
  },
}
export default getters