<template>
  <div class="cart-total-wrap" v-if="cartTotals && Object.keys(cartTotals).length > 0">
    <div class="cart-box cart-total">
      <div class="table-responsive">
        <table class="table cart-total-table mb-0">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td align="right">&#8377; {{cartTotals.grand_total.toLocaleString('en-IN')}}</td>
            </tr>
            <!-- <tr>
              <td>Tax</td>
              <td align="right">&#8377; 2.00</td>
            </tr> -->
            <tr class="total-tr">
              <td>Total</td>
              <td align="right">&#8377; {{cartTotals.total.toLocaleString('en-IN')}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="checkout-btn-wrap">
      <button class="btn btn-primary w-100" @click="goTocheckout()">CHECK OUT</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartTotal',
  computed: {
    ...mapGetters({
      cartTotals: 'customer/getCartTotals',
      customerToken: 'customer/getCustomerToken',
    }),
  },
  methods: {
    goTocheckout () {
      this.$router.push({
        path: '/checkout'
      })
    },
    async checkout() {
      console.log('checkoutIN');
      await this.$store.dispatch('customer/cart/createErpOrder', this.customerToken)

      return;
      const createOrderObject = {
          "paymentMethod": {
              "method": "razorpay"
          },
          "billing_address": {
              "region": "Gujarat",
              "region_id": 496,
              "region_code": "GJ",
              "country_id": "IN",
              "street": [
                  "plot no 5, Tirupati Nagar ",
                  "Navagam Dindoli"
              ],
              "postcode": "396450",
              "city": "Surat",
              "firstname": "Maulik pilojpura",
              "lastname": "",
              "email": "maulikpilojpara@gmail.com",
              "telephone": "9033346057",
              "company": "Office"
          }
      }
      this.razorpayCheckoutFlow(createOrderObject)
      
    },
    async razorpayCheckoutFlow (createOrderObject) {
            // showLoadingScreen();
            // const customerContext = this.$store.getters['customer/login/getCustomerContext']
            const createRazorpayOrderData = {
                email: 'maulikpilojpara@gmail.com',
                billingAddressObject: createOrderObject.billing_address,
                quoteId: 123,
                paymentMethod: 'razorpay'
            }
            await this.$store.dispatch('customer/cart/_createRazorpayOrder', createRazorpayOrderData)
            // call set payment info ?
            // call fetch cart totals?
            await this.$store.dispatch('customer/cart/_createOrder', createOrderObject)
            const confirmRazorpayOrderData = {
                email: 'maulikpilojpara@gmail.com',
                orderCheck: '1',
                quoteId: 123,
                paymentMethod: 'razorpay'
            }
            const confirmRazorpayOrderResponse = await this.$store.dispatch('customer/cart/_createRazorpayOrder', confirmRazorpayOrderData)
            const razorpayModalOptions = this.prepareRazorpayCheckoutModalOptions(confirmRazorpayOrderResponse.reserved_order_id, confirmRazorpayOrderResponse.amount, confirmRazorpayOrderResponse.rzp_order)
            // eslint-disable-next-line no-undef
            const razorpayCheckoutFlow = new Razorpay(razorpayModalOptions)
            razorpayCheckoutFlow.open()
            this.updateLatestOrderContext()
            // hideLoadingScreen()
        },
  }
};
</script>

<style>
</style>
