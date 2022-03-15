<template>
  <div class="product-page">
    <section class="mini-section pt-0">
      <div class="product-details">
        <div class="row">
          <div class="col-md-5">
            <ProductGallery :product="currentProduct" />
          </div>
          <div class="col-md-7">
            <ProductSummary :product="currentProduct" />
          </div>
        </div>
      </div>
    </section>

    <section class="mini-section pt-0">
      <div class="container">
        <ProductTabs />
      </div>
    </section>

    <section class="mini-section pt-0">
      <div class="container">
        <ProductSlider title="Related Products" :products="relatedProductData" :seeAllButton="false" />
      </div>
    </section>
  </div>
</template>

<script>
import ProductGallery from '~/components/product/ProductGallery.vue'
import ProductSummary from '~/components/product/ProductSummary.vue'
import { mapGetters } from 'vuex'

export default {
  name: "Product",
  data() {
    return {
      relatedProductData: []
    }
  },
  async fetch (context) {
    // const currentRouteWithoutTrailingForwardSlash = context.route.path.replace(/\/$/, '');
    const currentSlug = context.route.params.pathMatch;
    await context.store.dispatch('product/saveProductData', currentSlug);
    // await context.store.dispatch('product/getRelatedProducts', currentSlug);
    // await context.store.dispatch('global/saveDataFunc', currentSlug);
  },
  async mounted()  {
    if (this.currentProduct && this.currentProduct.hasOwnProperty('product')) {
      return this.$nuxt.error({ statusCode: 404, message: 'err message' })
    }
    this.relatedProductData = await this.$store.dispatch('product/getRelatedProducts', this.$route.params.pathMatch);
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      currentProduct: 'product/getCurrentProduct'
    })
  },
  components: {
    ProductGallery,
    ProductSummary,
    ProductTabs: () => import('~/components/product/ProductTabs.vue'),
    ProductSlider: () => import('~/components/home/ProductSlider.vue')
  }
};
</script>
