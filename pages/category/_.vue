<template>
  <div class="category-page TESTinghre">
    <CategoryBanner v-if="bannerImageURL" :current-cat="catTitle" :image="bannerImageURL" />
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
    const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
    let currentSlug = route.params.pathMatch;
    let catTitle = (route.params.pathMatch).replace('-', ' ');
    const productResponse = await $axios.get(`${appURL}/api/getproducts/${currentSlug}`);
    console.log('productResponse.data::', productResponse.data);
    let products = productResponse?.data?.message?.items || [];
    let bannerImageURL = productResponse?.data?.message?.banner || '';
    // let products = [];
    return {
      products,
      catTitle,
      bannerImageURL
    }
  },
}
</script>
