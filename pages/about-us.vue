<template>
  <div class="container">
    <pre>
      {{AboutData}}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'About',
  async asyncData (context) {
    const AboutData = await context.store.dispatch('global/getCMSData', 'get_about_us');
    return {
      AboutData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>