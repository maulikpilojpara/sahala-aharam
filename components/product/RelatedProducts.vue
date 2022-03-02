<template>
  <div class="related-products">
    <div class="sub-title-wrap sub-title-with-nav">
      <h2 class="sub-title">Related Products</h2>
    </div>
    <div class="product-carousel owl-carousel owl-theme title-nav">
      <ProductCard v-for="index in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/category/ProductCard.vue'

export default {
  name: 'RelatedProducts',
  components: {
    ProductCard
  }
};
</script>
