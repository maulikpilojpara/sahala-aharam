<template>
  <div class="inner-banner">
    <img :src="image" class="d-block w-100" />
  </div>
</template>

<script>
export default {
  name: "CategoryBanner",
  props: {
    currentCat: {
      type: String,
      default: () => ''
    },
    image: {
      type: String,
      default: () => ''
    },
  }
};
</script>
