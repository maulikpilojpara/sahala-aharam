<template>
  <div class="category-page TESTinghre">
    <CategoryBanner v-if="bannerImageURL" :current-cat="catTitle" :image="bannerImageURL" />
    <section class="mini-section pt-0">
      <div class="container">
        <ProductFilter @changeSort="sortingProducts" :current-cat="catTitle" />
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
    // console.log('productResponse.data::', productResponse.data);
    let products = productResponse?.data?.message?.items || [];
    let bannerImageURL = productResponse?.data?.message?.banner || '';
    // let products = [];
    return {
      products,
      catTitle,
      bannerImageURL
    }
  },
  methods:{
    sortingProducts (sort) {
      console.log('sortingProductssort:: ', sort);
      if (sort === 'name-asc') {
        this.products.sort(function(a, b){
            if(a.item_name < b.item_name) { return -1; }
            if(a.item_name > b.item_name) { return 1; }
            return 0;
        })
      } else if (sort === 'name-desc') {
        this.products.sort(function(a, b){
            if(b.item_name < a.item_name) { return -1; }
            if(b.item_name > a.item_name) { return 1; }
            return 0;
        })
      } else if (sort === 'price-asc') {
        this.products.sort(function(a, b) {
            return parseFloat(a.rate) - parseFloat(b.rate);
        });
      } else if (sort === 'price-desc') {
        this.products.sort(function(a, b) {
            return parseFloat(b.rate) - parseFloat(a.rate);
        });
      } else {
        this.products = this.shuffle(this.products)
      }

    },
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      console.log('array::  ', array);

      return array;
    }
  }
}
</script>
