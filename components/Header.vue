<template>
  <header>
    <div class="container">
      <div class="navbar">
        <div class="header-left">
          <nuxt-link to="/" class="logo d-xl-none">
            <img src="/logo.svg" />
            <h3>Organic Stores</h3>
          </nuxt-link>
          <h2 v-if="$route.name === 'category'">Health Care</h2>
          <Breadcrumb class="d-none d-xl-flex" :breadcrumb="breadcrumb" v-if="$route.name === 'product'" />
        </div>
        <div class="header-right">
          <HeaderSearch />
          <MinCart />
          <button class="header-info-toggle" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearch from "~/components/header/Search.vue";
import MinCart from "~/components/header/Cart.vue";
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  name: "Header",
  data() {
    return {
      breadcrumb: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Shop',
          url: '/category'
        },
        {
          name: 'All Natural Italian-Style Chicken Meatballs',
          url: '/product/health-care'
        }
      ]
    }
  },
  components: {
    HeaderSearch,
    MinCart,
    Breadcrumb
  },
};
</script>
