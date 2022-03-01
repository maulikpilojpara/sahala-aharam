<template>
  <div class="item">
    <div class="product-box">
      <div class="img">
        <a href="#">
          <img src="/products/3.jpg" class="d-block" />
        </a>
        <div class="offer-label">20% Off</div>
        <div class="product-whishlist">
          <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
        </div>
      </div>
      <div class="text">
        <h3><a href="#">Sahaja Jaggery Blocks</a></h3>
        <div class="price">
          <span>$7.25</span>
          <del>$8.50</del>
        </div>
        <div class="reting-wrap">
          <span style="width: 80%"></span>
        </div>
        <div class="more-link">
          <a href="#"
            ><svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.63867 9.3999H17.8053"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.72266 1.31665L9.72266 17.4833"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
};
</script>
