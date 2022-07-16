<template>
  <div class="homepage">
    <MainBanner :items="homeBanners" />
    <BestOffers />
    <Category />
    <ProductSlider v-if="popularProducts && popularProducts.length > 0" title="Popular Products" :products="popularProducts" />
    <ProductSlider v-if="recentProducts && recentProducts.length > 0" title="Recent Products" :products="recentProducts" />
    <MainBanner :items="comboBundleBanner" />
    <ProductSlider v-if="seasonItemArray && seasonItemArray.length > 0" title="Seasonal Products" :products="seasonItemArray" />
    <MainBanner :items="whySahajaBanner" />
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
      homeBanners: 'global/getHomeBanners',
      popularProducts: 'global/getHomePopularProducts',
      recentProducts: 'global/getHomeRecentProducts',
      comboBundleBanner: 'global/getHomeComboBundle',
      whySahajaBanner: 'global/getHomeWhySahaja',
    })
  },
  // async fetch (context) {
  //   const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
  //   const healthySnacks = await context.app.$axios.get(`${appURL}/api/getproducts/dairy-eggs`);
  //   console.log('healthySnacks::: ', healthySnacks.data);
  //   // await context.store.dispatch('getWebsiteMainContent');
  // },
  components: {
    MainBanner,
    BestOffers,
    Category: () => import('~/components/home/Category.vue'),
    ProductSlider: () => import('~/components/home/ProductSlider.vue'),
    Testimonials: () => import('~/components/home/Testimonials.vue'),
    Certifications: () => import('~/components/home/Certifications.vue')
  },
  async asyncData({$axios}) {
    console.log('asyncData');
    const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
    const seasonItem = await $axios.get(`${appURL}/api/get_season_item`);
    const seasonItemArray = seasonItem?.data?.message
    console.log('seasonItem::: ', seasonItem);
    return {
      seasonItemArray
    }
  },
  // async mounted () {
  //   const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD;
  //   console.log('mountedin', appURL);
  //   const healthySnacks = await this.$axios.get(`${appURL}/api/getproducts/healthy-snacks`);
  //   console.log('healthySnacks::: ', healthySnacks);
  // }
}
</script>
