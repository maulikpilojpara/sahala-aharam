<template>
  <div class="cart-total-wrap" v-if="cartItems && cartItems.length > 0 && cartTotals && Object.keys(cartTotals).length > 0">
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
      <button class="btn btn-primary w-100" :disabled="disableCheckout ? true : false" @click="goTocheckout()">CHECK OUT</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartTotal',
  computed: {
    ...mapGetters({
      cartItems: 'customer/getCartItems',
      cartTotals: 'customer/getCartTotals',
      customerToken: 'customer/getCustomerToken',
      CartQuotationDoc: 'customer/cart/getCartQuotationDoc'
    }),
    disableCheckout () {
      const cartItems = this.CartQuotationDoc.items;
      const currentItem = cartItems && cartItems.length > 0 ? cartItems.find(c => c.actual_qty === 0) : {};
      if (currentItem && Object.keys(currentItem).length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    goTocheckout () {
      this.$router.push({
        path: '/checkout'
      })
    }
  }
};
</script>

<style>
</style>
