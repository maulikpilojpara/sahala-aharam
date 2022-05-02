<template>
  <div class="container">
    <h1 v-if="pageData && pageData.header" class="mb-4">{{ pageData.header }}</h1>
    <div v-if="pageData && pageData.details" v-html="pageData.details" />
  </div>
</template>

<script>
export default {
  name: 'QualityManagement',
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
