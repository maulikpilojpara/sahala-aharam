const mutations = {
    UPDATE_ERP_ORDER_RESPONSE(state, message){   
        state.erpOrderResponse = message
    },
    UPDATE_RAZORPAY_INPUTS(state, message){   
        state.razorpayInputs = message
    },
    UPDATE_CART_QUOTATION(state, message){
        state.cartQuotation = message
    },
}
export default mutations
