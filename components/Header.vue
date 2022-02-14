<template>
  <header>
    <div class="container">
      <div class="navbar">
        <div class="header-left">
          <a href="index.html" class="logo d-xl-none">
            <img src="/logo.svg" />
            <h3>Organic Stores</h3>
          </a>
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

<style scoped>
.header-info-toggle {
  width: 44px;
  height: 44px;
  display: block;
  position: relative;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.header-info-toggle span {
  width: 18px;
  height: 2px;
  display: block;
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  background: var(--dark);
  border-radius: 5px;
  margin: auto;
  transition: all 0.4s;
  transform-origin: left center;
}

.header-info-toggle span:nth-child(1) {
  top: -13px;
  width: 22px;
}

.header-info-toggle span:nth-child(3) {
  top: 13px;
  width: 26px;
}

.header-info-toggle:hover span {
  width: 30px;
}

.header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

header .navbar {
  padding: 22px 0;
  transition: all 0.5s;
}
</style>
