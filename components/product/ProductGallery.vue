<template>
  <div v-if="productImages && productImages.length > 0" class="details-gallery-wrap">
    <div v-if="productImages.length === 1" class="details-gallery-carousel hooper h-auto">
      <div class="hooper-list">
        <div class="hooper-track d-block">
          <div class="item hooper-slide is-active is-current" v-for="(image, index) in productImages" :key="index">
            <div class="img">
              <nuxt-link event="" to="/" @click.native="openModal(image)">
                <img :src="image" class="d-block" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hooper v-else class="details-gallery-carousel" :settings="productGallerySetting">
        <template  v-for="(image, index) in productImages">
          <slide class="item" v-if="image" :key="index">
            <div class="img">
              <nuxt-link event="" to="/" @click.native="openModal(image)">
                <img :src="image" class="d-block" />
              </nuxt-link>
            </div>
          </slide>
        </template>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <modal name="productImage" :adaptive="true" height="auto" class="text-center">
      <img :src="currentPopupImage" @click="closeModal" class="img-fluid" />
    </modal>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'

export default {
  name: "ProductGallery",
  data () {
    return{
      currentPopupImage: '',
      productGallerySetting: {
        infiniteScroll: true,
        wheelControl: false,
        keysControl: false,
        autoPlay: true,
        hoverPause: false,
        playSpeed: 5000,
        transition: 600
      }
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    productImages () {
      if (this.product && this.product.length > 0 && this.product[0].slideshow) {
        return Object.values(this.product[0].slideshow);
      } else {
        return [this.product[0].image]
      }
      return [];
    },
      getProductImage () {
        if (this.product && this.product.length > 0) {
          return process.env.ERP_DOMAIN + this.product[0].image
        } else {
          return '/logo.svg'
        }
      },
  },
  methods: {
    openModal (image) {
      // e.preventDefault();
      this.currentPopupImage = image;
      this.$modal.show('productImage')
    },
    closeModal (e) {
      e.preventDefault()
      this.$modal.hide('productImage')
    }
  }
};
</script>
