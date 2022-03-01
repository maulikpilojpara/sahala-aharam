<template>
  <div class="product-filter">
    <Breadcrumb />
    <div class="product-filter-right">
      <div class="item">
        <CategorySearch />
      </div>
      <div class="item">
        <CategorySortBy />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/category/Breadcrumb.vue'
import CategorySearch from '~/components/category/CategorySearch.vue'
import CategorySortBy from '~/components/category/CategorySortBy.vue'

export default {
  name: 'ProductFilter',
  components: {
    Breadcrumb,
    CategorySearch,
    CategorySortBy
  }
};
</script>
