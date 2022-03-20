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
  }
}
</script>
