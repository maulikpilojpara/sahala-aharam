<template>
  <div class="nav-sidebar" data-scrollbar>
    <div class="header-info-close d-block d-xl-none">
      <span></span>
      <span></span>
    </div>
    <div class="sidebar-top-wrap">
      <div class="sidebar-logo">
        <nuxt-link to="/" class="logo">
          <img src="/logo.svg" />
          <h3>Organic Stores</h3>
        </nuxt-link>
      </div>
      <nav>
        <h5>Shop</h5>
        <ul class="nav-menu" v-if="firstHalfCat && firstHalfCat.length > 0 && toggleCat === 'show_half'">
          <li v-for="(cat, indx) in firstHalfCat" :key="indx">
            <nuxt-link :to="`/category/${cat.route}`">
              <span class="icon">
                <img :src="cat.icon ? cat.icon : '/logo.svg'" class="d-block" />
                </span>
                {{cat.name}}
            </nuxt-link>
          </li>
          <!-- <li class="active">
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Pulses.svg" alt="" /></span
              >Pulses
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Cereals.svg" alt="" /></span
              >Cereals
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Millets.svg" alt="" /></span
              >Millets
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Oil-Seeds.svg" alt="" /></span
              >Oil Seeds
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Sweetners.svg" alt="" /></span
              >Sweetners
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Flours-Suji.svg" alt="" /></span
              >Flours & Suji
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Health-Care.svg" alt="" /></span
              >Health Care
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Processed-Foods.svg" alt="" /></span
              >Processed Foods
            </a>
          </li> -->
        </ul>
        <ul class="nav-menu" v-if="categories && categories.length > 0 && toggleCat === 'show_all'">
          <li v-for="(cat, indx) in categories" :key="indx">
            <nuxt-link :to="`category/${cat.route}`">
              <span class="icon">
                <img :src="cat.icon ? cat.icon : '/logo.svg'" class="d-block" />
                </span>
                {{cat.name}}
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-view-all">
          <a href="javascript:void(0)" @click.prevent="toggleCat === 'show_all' ? toggleCat = 'show_half' : toggleCat = 'show_all'">
            <u v-show="toggleCat === 'show_all'">View Less -</u>
            <u v-show="toggleCat === 'show_half'">View All +</u>
          </a>
        </div>
      </nav>
    </div>
    <div class="sidebar-bottom-wrap" v-if="$device.isMobileOrTablet">
      <nav>
        <h5>ACCOUNT</h5>
        <ul class="nav-menu">
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Profile.svg" alt="" /></span
              >Profile
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Wishlist.svg" alt="" /></span
              >Wishlist
              <span class="nav-budge">0</span>
            </a>
          </li>
        </ul>
        <div class="nav-btn">
          <nuxt-link to="login">
            <span class="icon"
              ><img src="/nav-icons/nav-login.svg" alt=""
            /></span>
            Login / Sign Up
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'NavSidebar',
  data () {
    return {
      toggleCat: 'show_half'
    }
  },
  computed: {
    ...mapGetters({
      categories: 'global/getMainCategories'
    }),
    firstHalfCat () {
      return this.categories && this.categories.length > 0 ? this.categories.slice(0, 6) : [];
    }
  }
  
};
</script>
