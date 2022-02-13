<template>
  <div class="wrapper">
    <NavSidebar />
    <div class="main-col">
      <Header/>
    </div>
  </div>
</template>

<script>
import NavSidebar from '~/components/NavSidebar.vue'
import Header from '~/components/Header.vue'

export default {
  name: 'IndexPage',
  components: {
    NavSidebar,
    Header
  }
}
</script>
