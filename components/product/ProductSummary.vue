<template>
  <div class="summery">
    <!-- <div class="price-offer"><span>20% Off</span></div> -->
    <h2>{{getName}}</h2>
    <div class="price-rating-wrap">
      <!-- <div class="price">$7.25 <del>$8.50</del></div> -->
      <div class="price">&#8377;{{getprice}}</div>
      <!-- <div class="reting-wrap">
        <span style="width: 80%"></span>
      </div> -->
    </div>
    <p v-if="getProductDescription" v-html="getProductDescription"></p>
    <!-- <ul class="variation-point">
      <li><b>Type : </b>Organic</li>
      <li><b>MFG : </b>Jun 4,2021</li>
      <li><b>Life : </b>30 days</li>
    </ul> -->
    <div class="qty-submit-wrap" v-if="isInStock">
      <div class="product-qty">
        <div class="product-qty-field">
          <input type="text" v-model="qty" />
          <span class="qty-action qty-action-minus" @click="decreaseQty()"
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
          <span class="qty-action qty-action-plus" @click="increaseQty()"
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
      </div>
      <div class="add-to-cart">
        <button class="addtocart-btn" @click="addToCart">
          <img src="images/shopping-cart.svg" alt="" />
          <span v-if="loading">Adding.. </span>
          <span v-else>Add to Cart</span>
        </button>
      </div>
    </div>
    <div class="is-not-available" v-else>
      <h4>Out of stock!</h4>
    </div>
    <div class="alert" :class="`alert-${cartResponse.class}`" v-if="Object.keys(cartResponse).length > 0 &&  cartResponse.class !== 'load'" role="alert">
      {{ cartResponse.msg }}
    </div>
    <div class="product-meta">
      <div class="item" v-if="getCategory"><b>Category : </b>{{getCategory}}</div>
      <div class="item" v-if="getSku"><b>SKU : </b>{{getSku}}</div>
      <!-- <div class="item ms-lg-auto">
        <b>Tags : </b><a href="#">Chicken</a>, <a href="#">Natural</a>,
        <a href="#">Organic</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "ProductSummary",
  data() {
    return {
      qty: 1,
      loading: false,
      cartResponse: {}
    }
  },
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    increaseQty() {
      console.log('this.qty: ', this.qty);
      
      this.qty = this.qty + 1
    },
    decreaseQty() {
      if (this.qty > 1) {
        this.qty = this.qty - 1
      }
    },
    async addToCart () {
      console.log('addToCart in');
      
      if (this.getUserLoginStatus) {
        this.loading = true;
        const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD
        let payload = this.getCartItemsPayload;
        payload.push({
              item_code: this.getSku,
              qty: this.qty
            })
        const cartPayload = {
          items:payload,
          token: this.customerToken
        }

        const createCartResponse = await this.$axios.post(`${appURL}/api/create_cart`, cartPayload);
        const customerCartRes = await this.$axios.post(`${appURL}/api/get_cutomer_cart`, { token: this.customerToken });
        const getUserDataResponse = await this.$store.dispatch('customer/getUserCartData', this.customerToken);
        this.loading = false;
        this.cartResponse = {
          msg: 'Product added successfully! Redirect to cart page...',
          class: 'success'
        }
        // setTimeout(() => {
        //   this.$router.push('/cart')
        // }, 2000);

        console.log('createCartResponse::: ', createCartResponse);
        console.log('customerCartRes::: ', customerCartRes);
        console.log('getUserDataResponse::: ', getUserDataResponse);
      } else {
        this.cartResponse = {
          msg: 'Please login to continue',
          class: 'danger'
        }
        // this.$router.push('/cart')
      }
    }
  },
  computed: {
    ...mapGetters({
      getUserLoginStatus: 'customer/getUserLoginStatus',
      customerToken: 'customer/getCustomerToken',
      getCartItems: 'customer/getCartItems',
    }),
    getName () {
      return this.product?.[0]?.item_name || ''
    },
    getprice () {
      return this.product?.[0]?.rate || 0
    },
    getProductDescription () {
      return this.product?.[0]?.description || ''
    },
    isInStock () {
      if (this.product && this.product.length > 0) {
        const stock = this.product[0].stock;
        return stock > 0
      }
    },
    getSku () {
      return this.product?.[0]?.sku || ''
    },
    getCategory () {
      return this.product?.[0]?.item_group || ''
    },
    getCartItemsPayload () {
      let cartObj = []
      if (this.getCartItems && this.getCartItems.length > 0) {
        (this.getCartItems).map( c => {
          const data = {
            item_code: c.item_code,
            qty: c.qty
          }
          cartObj.push(data);
        })
      }
      return cartObj;
    },
  }
};
</script>
