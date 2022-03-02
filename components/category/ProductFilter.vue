<template>
  <div class="product-filter">
    <Breadcrumb :breadcrumb="breadcrumb" />
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
import Breadcrumb from '~/components/Breadcrumb.vue'
import CategorySearch from '~/components/category/CategorySearch.vue'
import CategorySortBy from '~/components/category/CategorySortBy.vue'

export default {
  name: 'ProductFilter',
  data() {
    return {
      breadcrumb: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Shop',
          url: '/shop'
        },
        {
          name: 'Health Care',
          url: '/shop/health-care'
        }
      ]
    }
  },
  components: {
    Breadcrumb,
    CategorySearch,
    CategorySortBy
  }
};
</script>
