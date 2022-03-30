<template>
  <div class="cart-total-wrap">
    <div class="cart-box cart-total">
      <div class="table-responsive">
        <table class="table cart-total-table mb-0">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td align="right">$29.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td align="right">$2.00</td>
            </tr>
            <tr class="total-tr">
              <td>Total</td>
              <td align="right">$31.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="checkout-btn-wrap">
      <button class="btn btn-primary w-100">CHECK OUT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartTotal'
};
</script>

<style>
</style>
