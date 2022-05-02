<template>
  <div class="container">
    <h1 class="mb-4">About Us</h1>
    <div v-if="AboutData && AboutData.image" class="text-center mb-4">
      <img class="img-fluid" :src="AboutData.image" :alt="AboutData.image_header" />
    </div>
    <div v-if="AboutData && AboutData.about_us_details" v-html="AboutData.about_us_details" />
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
