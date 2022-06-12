<template>
  <ul class="breadcrumb-list">
    <li v-for="(breadcrumbs, index) in breadcrumb" :key="index">
      <nuxt-link :to="breadcrumbs && breadcrumbs.url ? breadcrumbs.url : ''">{{ capitalizeFirstLetter(breadcrumbs.name) }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>
