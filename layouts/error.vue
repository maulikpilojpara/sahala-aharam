
<template>
  <div class="nuxt-error py-5">
    <div class="container">
      <component :is="errorPage" :error="error" />
    </div>
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue';
export default {
  name: 'nuxt-error',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error404;
    },
  }
}
</script>
