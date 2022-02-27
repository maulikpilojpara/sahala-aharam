<template>
  <header>
    <div class="container">
      <div class="navbar">
        <div class="header-left">
          <nuxt-link to="/" class="logo d-xl-none">
            <img src="/logo.svg" />
            <h3>Organic Stores</h3>
          </nuxt-link>
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
import HeaderSearch from '~/components/header/Search.vue'
import MinCart from '~/components/header/Cart.vue'

export default {
  name: 'Header',
  components: {
    HeaderSearch,
    MinCart
  }
};
</script>
