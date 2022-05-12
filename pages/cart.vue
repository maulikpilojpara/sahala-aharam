<template>
  <section class="mini-section pt-0">
    <div class="container">
      <div class="cart-details">
        <div class="row">
          <div class="col-md-8">
            <div class="cart-box cart-total">
              <h2>Cart</h2>
              <CartItems />
            </div>
          </div>
          <div class="col-md-4">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItems from '~/components/cart/CartItems.vue'
import CartTotal from '~/components/cart/CartTotal.vue'

export default {
  name: "Cart",
  // data() {
  //   return {
  //     checkotState: false
  //   }
  // },
  methods: {
    // changeCheckoutStatus (val) {
    //   console.log('changeIN');
    //   this.checkotState = val
    // }
  },
  // middleware: "authenticated",
  head () {
      return {
          script: [
              {
                  hid: 'Razorpay',
                  src: 'https://checkout.razorpay.com/v1/checkout.js',
                  body: true,
                  defer: true,
              }
          ],
      }
  },
  components: {
    CartItems,
    CartTotal
  },
};
</script>

<style>
</style>
