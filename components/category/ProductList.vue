<template>
  <div class="product-list">
    <ProductCard v-for="index in 15" :key="index" />
  </div>
</template>

<script>
import ProductCard from '~/components/category/ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  }
}
</script>
