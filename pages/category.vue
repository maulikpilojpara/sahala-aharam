<template>
  <div class="category-page">
    <CategoryBanner />
    <section class="mini-section pt-0">
      <div class="container">
        <ProductFilter />
        <ProductList />
        <Pagination />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryBanner from '~/components/category/CategoryBanner.vue'
import ProductFilter from '~/components/category/ProductFilter.vue'
import ProductList from '~/components/category/ProductList.vue'
import Pagination from '~/components/category/Pagination.vue'

export default {
  name: "Category",
  components: {
    CategoryBanner,
    ProductFilter,
    ProductList,
    Pagination
  }
}
</script>
