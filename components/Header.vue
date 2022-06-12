<template>
  <header>
    <div class="container">
      <div class="navbar">
        <div class="header-left">
          <nuxt-link to="/" class="logo d-xl-none">
            <img src="/sahaja-logo.png" />
            <h3>Organic Stores</h3>
          </nuxt-link>
          <h2 v-if="$route.name === 'category'">Health Care</h2>
          <Breadcrumb class="d-none d-xl-flex" :breadcrumb="breadcrumb" v-if="$route.name === 'product' || $route.name === 'cart'" />
        </div>
        <div class="header-right">
          <HeaderSearch />
          <MinProfile v-if="$device.isDesktop" />
          <!-- <MinWishlist v-if="$device.isDesktop" /> -->
          <MinCart />
          <!-- <button class="header-info-toggle" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearch from "~/components/header/Search.vue";
import MinCart from "~/components/header/Cart.vue";
import MinWishlist from "~/components/header/Wishlist.vue";
import MinProfile from "~/components/header/Profile.vue";
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
          name: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
          url: this.$route.path
        }
      ]
    }
  },
  components: {
    HeaderSearch,
    MinCart,
    Breadcrumb,
    MinWishlist,
    MinProfile
  }
};
</script>
