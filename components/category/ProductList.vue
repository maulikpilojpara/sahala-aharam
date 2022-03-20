<template>
  <div class="product-list" v-if="products && products.length > 0">
    <!-- <ProductCard v-for="index in 15" :key="index" /> -->
    <div class="item" v-for="(product, indx) in products" :key="indx">
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
            <nuxt-link :to="`/product/${product.name}`"
              ><svg
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
                /></svg
            ></nuxt-link>
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

export default {
  name: 'ProductList',
   props: {
    products: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getImageUrl (product) {
      return product?.image || 'logo.svg'
    }
  }
  // components: {
  //   ProductCard
  // }
}
</script>
