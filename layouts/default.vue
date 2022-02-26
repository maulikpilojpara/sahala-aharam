<template>
  <div>
    <PageLoader />
    <HeaderInfo />
    <main class="site-main">
      <div class="wrapper">
        <NavSidebar />
        <div class="main-col">
          <Header/>
          <nuxt :key="$route.fullPath" />
          <Footer />
        </div>
      </div>
      <BackToTop />
    </main>
  </div>
</template>

<script>
import PageLoader from '~/components/PageLoader.vue'
import HeaderInfo from '~/components/header/HeaderInfo.vue'
import NavSidebar from '~/components/NavSidebar.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    PageLoader,
    HeaderInfo,
    NavSidebar,
    Header,
    Footer: () => import('~/components/Footer.vue'),
    BackToTop: () => import('~/components/BackToTop.vue')
  },
}
</script>
