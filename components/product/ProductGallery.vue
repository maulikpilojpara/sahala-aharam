<template>
  <div v-if="productImages && productImages.length > 0" class="details-gallery-wrap">
    <div class="details-gallery-carousel owl-carousel owl-theme owl-loaded">
      <div class="owl-stage-outer">
        <div class="owl-stage">
          <div class="owl-item">
            <div class="item" v-for="(image, index) in productImages" :key="index">
              <div class="img">
                <nuxt-link event="" to="/" @click.native="openModal(image)">
                  <img :src="image" class="d-block" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="productImage" :adaptive="true" height="auto">
      <img :src="currentPopupImage" @click="closeModal" class="img-fluid" />
    </modal>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  data () {
    return{
      currentPopupImage: '',
    }
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
