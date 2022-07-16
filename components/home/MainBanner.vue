<template>
  <section class="mini-section pt-md-0" v-if="items && items.length > 0">
    <div class="container">
      <hooper class="main-slider" :settings="mainBannerSetting">
        <template v-for="(banner, indx) in items">
          <slide class="item" v-if="banner && (banner.banner_image || banner.image)" :key="indx">
            <div class="banner-box">
              <div class="banner-img">
                <img :src="banner.banner_image ? banner.banner_image : banner.image" class="d-block w-100" />
              </div>
            </div>
          </slide>
        </template>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'
import { mapGetters  } from 'vuex'

export default {
  name: 'MainBanner',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mainBannerSetting: {
        infiniteScroll: true,
        wheelControl: false,
        keysControl: false,
        autoPlay: true,
        hoverPause: false,
        playSpeed: 3000,
        transition: 600
      }
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  // computed: {
  //   ...mapGetters({
  //     homeBanners: 'global/getHomeBanners'
  //   })
  // }
};
</script>

<style lang="scss">
html .main-slider {
  .hooper-navigation {
    .hooper-prev,
    .hooper-next {
      position: absolute !important;
      top: 50% !important;
      left: 10px;
      transform: translateY(-50%) !important;
      margin: 0 !important;
    }
    .hooper-next {
      left: auto;
      right: 10px;
      transform: translateY(-50%) rotate(180deg) !important;
    }
  }
}
</style>
