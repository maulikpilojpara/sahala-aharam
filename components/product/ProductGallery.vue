<template>
  <div class="details-gallery-wrap">
    <div class="details-gallery-carousel owl-carousel owl-theme owl-loaded">
      <div class="owl-stage-outer">
        <div class="owl-stage">
          <div class="owl-item">
            <div class="item" v-for="index in 1" :key="index">
              <div class="img">
                <a href="#" @click="openModal">
                  <img :src="getProductImage" class="d-block" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="productImage" :adaptive="true" height="auto">
      <img :src="getProductImage" @click="closeModal" class="img-fluid" />
    </modal>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  computed: {
      getProductImage () {
        if (this.product && this.product.length > 0) {
          return process.env.ERP_DOMAIN + this.product[0].image
        } else {
          return '/logo.svg'
        }
      },
  },
  methods: {
    openModal (e) {
      e.preventDefault()
      this.$modal.show('productImage')
    },
    closeModal (e) {
      e.preventDefault()
      this.$modal.hide('productImage')
    }
  }
};
</script>
