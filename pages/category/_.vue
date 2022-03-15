<template>
  <div class="category-page TESTinghre">
    <CategoryBanner :current-cat="catTitle" />
    <section class="mini-section pt-0">
      <div class="container">
        <ProductFilter :current-cat="catTitle" />
        <ProductList :products="products" />
        <!-- <Pagination /> -->
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
  },
  async asyncData({$axios, route}) {
    const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.APP_URL_PROD;
    // let products = ['TEST'];
    let currentSlug = route.params.pathMatch;
    let catTitle = (route.params.pathMatch).replace('-', ' ');
    const productResponse = await $axios.get(`${appURL}/api/getproducts/${currentSlug}`)
    // .then(res => {
    //   if (res && res.data && res.data.message) {
    //     this.products = res.data.message;
    //     console.log('res:::', res.data.message);
    //   }
    // })
    let products = productResponse?.data?.message || []
    console.log('productResponse products::: ', products);
    return {
      products,
      catTitle
    }
  },
}
</script>
