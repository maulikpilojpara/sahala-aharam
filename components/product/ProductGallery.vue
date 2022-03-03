<template>
  <div class="details-gallery-wrap">
    <div class="details-gallery-carousel owl-carousel owl-theme">
      <div class="item" v-for="index in 3" :key="index">
        <div class="img">
          <a href="/image-details.jpg" data-fancybox="product">
            <img src="/image-details.jpg" class="d-block" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
};
</script>
