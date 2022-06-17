<template>
  <div class="homepage">
    <MainBanner />
    <BestOffers />
    <Category />
    <ProductSlider v-if="popularProducts && popularProducts.length > 0" title="Popular Products" :products="popularProducts" />
    <ProductSlider v-if="recentProducts && recentProducts.length > 0" title="Recent Products" :products="recentProducts" />
    <Testimonials />
    <Certifications />
  </div>
</template>

<script>
import MainBanner from '~/components/home/MainBanner.vue'
import BestOffers from '~/components/home/BestOffers.vue'
import { mapGetters  } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      popularProducts: 'global/getHomePopularProducts',
      recentProducts: 'global/getHomeRecentProducts'
    })
  },
  // async fetch (context) {
  //   await context.store.dispatch('getWebsiteMainContent');
  // },
  components: {
    MainBanner,
    BestOffers,
    Category: () => import('~/components/home/Category.vue'),
    ProductSlider: () => import('~/components/home/ProductSlider.vue'),
    Testimonials: () => import('~/components/home/Testimonials.vue'),
    Certifications: () => import('~/components/home/Certifications.vue')
  },
  // async asyncData({$axios}) {
  //   const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
  //   const healthySnacks = await $axios.get(`${appURL}/api/getproducts/healthy-snacks`);
  //   console.log('healthySnacks::: ', healthySnacks);
  //   return {
  //     healthySnacks
  //   }
  // },
  // async mounted () {
  //   const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
  //   const healthySnacks = await this.$axios.get(`${appURL}/api/getproducts/healthy-snacks`);
  //   console.log('healthySnacks::: ', healthySnacks);
  // }
}
</script>
