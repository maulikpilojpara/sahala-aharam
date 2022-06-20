<template>
  <div class="table-responsive">
    <table class="table cart-main-table" :class="{ 'loading' : loading}" v-if="cartItems && cartItems.length > 0">
      <thead>
        <tr>
          <th width="40%">Product</th>
          <th class="text-end">Price</th>
          <th class="text-center">Quantity</th>
          <th class="text-end">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indx) in cartItems" :key="indx">
          <td width="40%">
            <div class="cart-product-name">
              <div class="img">
                <nuxt-link :to="`/product/${item.item_code}`"><img :src="getProductImage(item.image)" /></nuxt-link>
              </div>
              <h3>
                <nuxt-link :to="`/product/${item.item_code}`">{{item.item_name}}</nuxt-link>
              </h3>
            </div>
            <div v-show="isInStock(item) === 0" class="error-msg-wrap">
                <div class="alert alert-danger" role="alert">
                  This product is currently not available.
                </div>
            </div>
          </td>
          <td align="right">&#8377;{{item.rate}}</td>
          <td align="center">
            <div class="product-qty-field" :class="{'disable-btn' : isInStock(item) === 0}">
              <input type="text" :value="item.qty" readonly />
              <span class="qty-action qty-action-minus" @click="updateQty(item, 'decrease')"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus" @click="updateQty(item, 'increase')"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right" style="white-space:nowrap;">&#8377; {{item.amount.toLocaleString('en-IN')}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <h3>No products found!</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartItems',
  computed: {
    ...mapGetters({
      cartItems: 'customer/getCartItems',
      customerToken: 'customer/getCustomerToken',
      CartQuotationDoc: 'customer/cart/getCartQuotationDoc',
    }),
  },
  data () {
    return {
      loading: false,
      disableCheckout: false,
    }
  },
  async fetch () {
    await this.$store.dispatch('customer/cart/getCurrentCartQuotation', this.customerToken)
  },
  methods: {
    isInStock (item) {
      const cartItems = this.CartQuotationDoc.items;
      const currentItem = cartItems && cartItems.length > 0 ? cartItems.find(c => c.item_code === item.item_code) : {};
      
      if (currentItem && Object.keys(currentItem).length > 0) {
        return currentItem.actual_qty;
      }
    },
    async updateQty (item, operation) {
      this.loading = true;
      let payload = await this.getCartItemsPayload();
      const foundIndex = payload.findIndex(x => x.item_code == item.item_code);
      let newQty;
      if (operation === 'increase') {
        newQty = payload[foundIndex].qty + 1
      }
      if (operation === 'decrease') {
        newQty = payload[foundIndex].qty - 1
      }
      const updatedProduct = {
        item_code: payload[foundIndex].item_code,
        qty: newQty
      }
      const cartPayload = {
        items:updatedProduct,
        token: this.customerToken
      }
      await this.$store.dispatch('customer/updateUserCart', cartPayload);
      this.loading = false;
    },
    getProductImage (imgPath) {
      if (imgPath) {
        return process.env.ERP_DOMAIN + imgPath
      } else {
        return '/logo.svg'
      }
    },
    getCartItemsPayload () {
      let cartObj = []
      if (this.cartItems && this.cartItems.length > 0) {
        (this.cartItems).map( c => {
          const data = {
            item_code: c.item_code,
            qty: c.qty
          }
          cartObj.push(data);
        })
      }
      return cartObj;
    },
  },
};
</script>

<style scoped>
.table.cart-main-table.loading {
    opacity: 0.5;
    pointer-events: none;
}
.error-msg-wrap {
  text-align: center;
  margin-top: 10px;
}
/* .product-qty-field.disable-btn .qty-action {
    pointer-events: none;
    opacity: 0.5;
}
.product-qty-field.disable-btn {
    opacity: 0.5;
} */
</style>
