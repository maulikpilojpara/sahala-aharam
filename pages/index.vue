<template>
  <div class="homepage">
    <MainBanner />
    <BestOffers />
    <Category />
    <ProductSlider title="Popular Products" :products="popularProducts" />
    <ProductSlider title="Recent Products" :products="recentProducts" />
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
