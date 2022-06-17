<template>
  <section class="mini-section pt-0">
    <div class="container">
      <div class="sub-title-wrap sub-title-with-nav">
        <h2 class="sub-title" v-if="title">{{ title }}</h2>
        <!-- <a href="#" class="title-btn" v-if="seeAllButton">See All
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
        ></a> -->
      </div>
      <hooper class="product-carousel title-nav" :settings="homeProductSliderSetting">
        <slide class="item" v-for="(product, indx) in products" :key="indx" :class="{'overlay': activeIndex === indx && showLoader}">
          <div class="product-box">
            <div class="img">
              <nuxt-link :to="{path: `/product/${product.name}` }">
                <img :src="product.image ? product.image : '/logo.svg'" class="d-block" />
              </nuxt-link>
              <!-- <div class="offer-label">20% Off</div> -->
              <!-- <div class="product-whishlist">
                <a href="#"><img src="/wishlist-icon.svg" alt="" /></a>
              </div> -->
            </div>
            <div class="text">
              <h3>
                <nuxt-link :to="{path: `/product/${product.name}` }">
                  {{product.item_name}}
                </nuxt-link>
              </h3>
              <div class="price">
                <span>&#8377;{{product.rate}}</span>
                <!-- <del>$8.50</del> -->
              </div>
              <!-- <div class="reting-wrap">
                <span style="width: 80%"></span>
              </div> -->
              <div class="more-link">
                <nuxt-link event="" to="#" @click.native="addToCart(product, indx)">
                <svg v-if="activeIndex === indx && cartResponse && !showLoader" width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                <svg
                  v-else
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
                  />
                </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <!-- <div class="item">
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
        </div> -->
      </hooper>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'

export default {
  name: 'ProductSlider',
  data() {
    return {
      activeIndex: '',
      showLoader: false,
      cartResponse: false,
      homeProductSliderSetting: {
        infiniteScroll: true,
        wheelControl: false,
        keysControl: false,
        autoPlay: true,
        hoverPause: false,
        playSpeed: 3000,
        transition: 600,
        itemsToSlide: 1,
        trimWhiteSpace: true,
        breakpoints: {
          0: {
            itemsToShow: 1
          },
          768: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 4
          },
          1201: {
            itemsToShow: 5
          }
        }
      }
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    seeAllButton: {
      type: Boolean,
      default: true,
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      getUserLoginStatus: 'customer/getUserLoginStatus',
      customerToken: 'customer/getCustomerToken',
      cartItems: 'customer/getCartItems',
    }),
  },
  methods: {
    async addToCart(product, indx) {
      console.log('addToCart:: ', product);
      if (this.activeIndex === indx) {
        return;
      }
      if (this.getUserLoginStatus) {
        this.activeIndex = indx;
        this.showLoader = true;
        const sameInCart = this.cartItems.find(item => item.item_code === product.name);
        let qty = 1;
        if (sameInCart && Object.keys(sameInCart).length > 0) {
          qty = parseInt(sameInCart.qty) + 1
        }

        const payload = {
          item_code: product.name,
          qty
        }
        const cartPayload = {
          items:payload,
          token: this.customerToken
        }
        console.log('product:: ',product);
        await this.$store.dispatch('customer/updateUserCart', cartPayload);
        this.showLoader = false;
        this.cartResponse = true;
      } else {
        this.cartResponse = false;
      }
    }
  }
};
</script>
