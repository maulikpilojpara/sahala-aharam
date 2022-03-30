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
  components: {
    CartItems,
    CartTotal
  },
};
</script>

<style>
</style>
