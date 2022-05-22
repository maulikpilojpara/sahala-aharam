<template>
  <div class="payment-wrap">
    <div class="check-wrap">
      <img height="50" width="50" src="/success-green-check-mark.svg">
      <h3>Thank You</h3>
      <p>Your order has been placed!</p>
    </div>
    <div v-if="ErpOrderResponse" class="order-detail-wrap">
      <ul class="t-center order-detail">
        <li>Order ID: <strong>{{ErpOrderResponse}}</strong></li>
        <li>Order Amount: <strong>&#8377;{{razorpayInputs.amount}}</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created() {
      if (this.razorpayInputs === null) {
        this.$router.push({
          path: '/'
        })
      }
      console.log('this.$route.params.slug', this.$route);
  } ,
  computed: {
    ...mapGetters({
      razorpayInputs: 'customer/cart/getRazorpayInputs',
      CartQuotationDoc: 'customer/cart/getCartQuotationDoc',
      ErpOrderResponse: 'customer/cart/getErpOrderResponse',
    })
  },
  async mounted() {
    console.log('this.$razorpayInputs', this.razorpayInputs);
    console.log('this.CartQuotationDoc', this.CartQuotationDoc);
    console.log('ErpOrderResponse:: ', this.ErpOrderResponse);
    const cusToken = await this.$store.getters['customer/getCustomerToken'];
    await this.$store.dispatch('customer/getUserCartData', cusToken);
  }
}
</script>

<style scoped>
.check-wrap img {
  max-width: 50px;
}
.check-wrap {
  margin-top:30px;
  text-align: center;
}
.payment-wrap p {
    font-size: 20px;
}
.payment-wrap h3 {
    font-size: 32px;
    margin: 10px 0 0 0;
}
.t-center {
  text-align: center;
}

ul.order-detail {
    list-style-type: none;
    margin-top: 30px;
}
</style>