<template>
  <ul class="breadcrumb-list">
    <li v-for="(breadcrumbs, index) in breadcrumb" :key="index">
      <nuxt-link :to="breadcrumbs.url">{{ breadcrumbs.name }}</nuxt-link>
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
  }
}
</script>
