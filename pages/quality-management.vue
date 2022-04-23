<template>
  <div class="container">
    {{pageData}}
  </div>
</template>

<script>
export default {
  name: 'Quality Management',
  async asyncData (context) {
    const pageData = await context.store.dispatch('global/getCMSData', 'get_quality_management');
    return {
      pageData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>