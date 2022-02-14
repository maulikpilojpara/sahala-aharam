<template>
  <section class="mini-section pt-0">
    <div class="container">
      <div class="sub-title-wrap sub-title-with-nav">
        <h2 class="sub-title" v-if="title">{{ title }}</h2>
        <a href="#" class="title-btn"
          >See All
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.92367 0.164778L9.61163 0.496184C9.40484 0.715841 9.40484 1.072 9.61163 1.2917L13.3153 5.20314H0.529554C0.237108 5.20314 0 5.455 0 5.76564V6.23439C0 6.54503 0.237108 6.79689 0.529554 6.79689H13.3153L9.61163 10.7083C9.40484 10.928 9.40484 11.2841 9.61163 11.5039L9.92367 11.8353C10.1305 12.0549 10.4658 12.0549 10.6725 11.8353L15.813 6.39775C16.0198 6.1781 16.0198 5.82194 15.813 5.60224L10.6725 0.164778C10.4658 -0.0549258 10.1305 -0.0549258 9.92367 0.164778Z"
              fill="white"
            /></svg
        ></a>
      </div>
      <div class="product-carousel owl-carousel owl-theme title-nav">
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/1.jpg" class="d-block" />
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
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/2.jpg" class="d-block" />
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
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/4.jpg" class="d-block" />
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
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/5.jpg" class="d-block" />
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
        <div class="item">
          <div class="product-box">
            <div class="img">
              <a href="#">
                <img src="/products/1.jpg" class="d-block" />
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSlider',
  props: {
    title: {
      type: String,
      default: '',
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.product-box {
  background: #fff;
  border: 2px dashed rgba(105, 189, 68, 0.3);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgb(0 0 0 / 6%);
  margin: 0 3px 20px;
  transition: all 0.5s;
}

.product-box:hover {
  border-color: var(--primary);
}

.product-box .text {
  border-radius: 17px;
  background: #F7F6F2;
  padding: 18px 15px;
  position: relative;
  margin: -1px;
}

.product-box h3 {
  font-size: 16px;
  margin: 0 0 4px;
}

.product-box h3 a {
  color: var(--dark);
}

.product-box h3 a:hover {
  color: var(--primary);
}

.product-box .price {
  color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}

.product-box .price del {
  color: #BEBEBE;
  margin-left: 3px;
}

.reting-wrap {
  width: 84px;
  height: 13px;
  position: relative;
  background: url("/star.svg") no-repeat 0 0;
  background-size: 76px auto;
}

.reting-wrap span {
  display: block;
  height: 100%;
  background: url("/star.svg") no-repeat 0 -16px;
  background-size: 76px auto;
}

.product-box .text .more-link {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 15px;
}

.product-box .more-link a {
  background: var(--primary);
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
}

.product-box .more-link a:hover {
  background: var(--dark);
  color: #fff;
  transform: scale(1.1);
}

.product-box .img {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 17px;
}

.product-box .img>a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-box .img>a>img,
.product-box .img>img {
  max-width: 80%;
  max-height: 80%;
  transition: all 0.5s;
}

.product-box:hover .img>a>img,
.product-box:hover .img>img {
  transform: scale(1.1);
}

.product-box .img .offer-label {
  background: var(--primary);
  position: absolute;
  right: 2px;
  top: 0;
  margin: 8px;
  color: #fff;
  border-radius: 50px;
  padding: 0px 12px;
  font-size: 11px;
  line-height: 20px;
}

.product-box .img .product-whishlist {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
}

.product-box .product-whishlist a {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E3F3DB;
  border-radius: 50%;
  padding: 7px;
}

.product-box .product-whishlist a:hover {
  background: var(--primary);
}

.product-box .product-whishlist a img {
  transition: all 0.4s;
}

.product-box .product-whishlist a:hover img {
  filter: brightness(0) invert(1);
}

.sub-title-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 20px;
  justify-content: space-between;
}

.sub-title-wrap .sub-title {
  margin-bottom: 0;
}

.sub-title-wrap.sub-title-with-nav {
  padding-right: 95px;
}

.sub-title-wrap .title-btn {
  color: #fff;
  background: var(--primary);
  border-radius: 50px;
  padding: 5px 20px;
  line-height: 24px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
}

.sub-title-wrap .title-btn:hover {
  color: #fff;
  background: var(--dark);
}

.sub-title-wrap .title-btn svg {
  max-height: 11px;
  margin-left: 7px;
}
</style>
