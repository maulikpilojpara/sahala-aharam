<template>
  <div class="wrapper">
    <NavSidebar />
    <div class="main-col">
      <Header/>
      <MainBanner />
      <BestOffers />
      <Category />
    </div>
  </div>
</template>

<script>
import NavSidebar from '~/components/NavSidebar.vue'
import Header from '~/components/Header.vue'
import MainBanner from '~/components/home/MainBanner.vue'
import BestOffers from '~/components/home/BestOffers.vue'

export default {
  name: 'IndexPage',
  components: {
    NavSidebar,
    Header,
    MainBanner,
    BestOffers,
    Category: () => import('~/components/home/Category.vue'),
  }
}
</script>
