<template>
  <div class="product-filter">
    <Breadcrumb :breadcrumb="breadcrumb" />
    <div class="product-filter-right">
      <div class="item">
        <!-- <CategorySearch /> -->
      </div>
      <div class="item">
        <form>
          <div class="filter-short">
            <select v-model="sort" @change="changeSort">
              <option value="">Sort By</option>
              <option value="popular">Popular</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import CategorySearch from '~/components/category/CategorySearch.vue'
// import CategorySortBy from '~/components/category/CategorySortBy.vue'

export default {
  name: 'ProductFilter',
  props: {
    currentCat: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sort: 'popular',
      breadcrumb: [
        {
          name: 'Home',
          url: '/'
        },
        // {
        //   name: 'Shop',
        //   url: '/shop'
        // },
        {
          name: this.currentCat
        }
      ]
    }
  },
  methods:{
    changeSort () {
      this.$emit('changeSort', this.sort)
    }
  },
  components: {
    Breadcrumb,
    CategorySearch,
    // CategorySortBy
  }
};
</script>
<style scoped>
.filter-short select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: 8px;
}
</style>
