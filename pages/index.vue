<template>
  <div class="homepage">
    <MainBanner />
    <BestOffers />
    <Category />
    <ProductSlider title="Popular Products" />
    <ProductSlider title="Recent Products" />
    <Testimonials />
    <Certifications />
  </div>
</template>

<script>
import MainBanner from '~/components/home/MainBanner.vue'
import BestOffers from '~/components/home/BestOffers.vue'

export default {
  name: 'IndexPage',
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
