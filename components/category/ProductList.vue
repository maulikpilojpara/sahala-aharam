<template>
  <div class="product-list" v-if="products && products.length > 0">
    <!-- <ProductCard v-for="index in 15" :key="index" /> -->
    <div class="item" v-for="(product, indx) in products" :key="indx" :class="{'overlay': activeIndex === indx && showLoader}">
      <div class="product-box">
        <div class="img">
          <nuxt-link :to="`/product/${product.name}`">
            <img :src="getImageUrl(product)" class="d-block" />
          </nuxt-link>
          <!-- <div class="offer-label">20% Off</div> -->
          <!-- <div class="product-whishlist">
            <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
          </div> -->
        </div>
        <div class="text">
          <h3><nuxt-link :to="`/product/${product.name}`">{{product.item_name}}</nuxt-link></h3>
          <div class="price">
            <span>&#8377;{{product.rate}}</span>
            <!-- <del>$8.50</del> -->
          </div>
          <!-- <div class="reting-wrap">
            <span style="width: 80%"></span>
          </div> -->
          <div class="more-link">
            <nuxt-link event="" to="#" @click.native="addToCart(product, indx)">
              <svg v-if="activeIndex === indx && cartResponse && !showLoader" width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
              <svg
                v-else
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.63867 9.3999H17.8053"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.72266 1.31665L9.72266 17.4833"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No Products Found!</h3>
  </div>
</template>

<script>
// import ProductCard from '~/components/category/ProductCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductList',
  data () {
    return {
      activeIndex: '',
      showLoader: false,
      cartResponse: false
    }
  },
   props: {
    products: {
      type: Array,
      default: [],
    },
  },
  computed: {
    ...mapGetters({
      getUserLoginStatus: 'customer/getUserLoginStatus',
      customerToken: 'customer/getCustomerToken',
    }),
  },
  methods: {
    getImageUrl (product) {
      return product?.image || 'logo.svg'
    },
    async addToCart(product, indx) {
      if (this.activeIndex === indx) {
        return;
      }
      if (this.getUserLoginStatus) {
        this.activeIndex = indx;
        this.showLoader = true;
        const payload = {
          item_code: product.name,
          qty: 1
        }
        const cartPayload = {
          items:payload,
          token: this.customerToken
        }
        console.log('product:: ',product);
        await this.$store.dispatch('customer/updateUserCart', cartPayload);
        this.showLoader = false;
        this.cartResponse = true;
      } else {
        this.cartResponse = false;
      }
    }
  }
  // components: {
  //   ProductCard
  // }
}
</script>

<style scoped>
.item.overlay {
  opacity: 0.6;
}
</style>
