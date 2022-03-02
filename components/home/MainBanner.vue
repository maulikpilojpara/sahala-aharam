<template>
  <section class="mini-section pt-md-0" v-if="homeBanners && homeBanners.length > 0">
    <div class="container">
      <div class="main-slider owl-carousel owl-theme">
        <template v-for="(banner, indx) in homeBanners">
        <div class="item" v-if="banner && banner.banner_image" :key="indx">
          <div class="banner-box">
            <div class="banner-img">
              <img :src="banner.banner_image" class="d-block w-100" />
            </div>
            <!-- <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div> -->
          </div>
        </div>
        </template>
        <!-- <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'MainBanner',
  computed: {
    ...mapGetters({
      homeBanners: 'global/getHomeBanners'
    })
  }
  
};
</script>
