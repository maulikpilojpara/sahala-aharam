<template>
  <div class="details-gallery-wrap">
    <div class="details-gallery-carousel owl-carousel owl-theme">
      <div class="item" v-for="index in 1" :key="index">
        <div class="img">
          <a :href="getProductImage" data-fancybox="product">
            <img :src="getProductImage" class="d-block" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  computed: {
      getProductImage () {
        if (this.product && this.product.length > 0) {
          return process.env.ERP_DOMAIN + this.product[0].image
        } else {
          return '/logo.svg'
        }
      },
  }
};
</script>
