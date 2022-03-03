<template>
  <div class="product-page">
    <section class="mini-section pt-0">
      <div class="product-details">
        <div class="row">
          <div class="col-md-5">
            <ProductGallery />
          </div>
          <div class="col-md-7">
            <ProductSummary />
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
        <RelatedProducts />
      </div>
    </section>
  </div>
</template>

<script>
import ProductGallery from '~/components/product/ProductGallery.vue'
import ProductSummary from '~/components/product/ProductSummary.vue'

export default {
  name: "Product",
  components: {
    ProductGallery,
    ProductSummary,
    ProductTabs: () => import('~/components/product/ProductTabs.vue'),
    RelatedProducts: () => import('~/components/product/RelatedProducts.vue')
  }
};
</script>
