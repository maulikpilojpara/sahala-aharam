<template>
  <div>
    <PageLoader />
    <HeaderInfo />
    <main class="site-main">
      <nuxt :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
import PageLoader from '~/components/PageLoader.vue'
import HeaderInfo from '~/components/header/HeaderInfo.vue'

export default {
  components: {
    PageLoader,
    HeaderInfo
  },
}
</script>

<style>

</style>
