<template>
  <div>
    <PageLoader />
    <main class="site-main">
      <div>
        <nuxt :key="$route.fullPath" />
      </div>
      <BackToTop />
    </main>
  </div>
</template>

<script>
import PageLoader from '~/components/PageLoader.vue'

export default {
  components: {
    PageLoader,
    BackToTop: () => import('~/components/BackToTop.vue')
  }
}
</script>
