<template>
  <div class="table-responsive">
    <!-- <pre>
      {{cartItems}}
    </pre> -->
    <table class="table cart-main-table" v-if="cartItems && cartItems.length > 0">
      <thead>
        <tr>
          <th>Product</th>
          <th class="text-end">Price</th>
          <th class="text-center">Quantity</th>
          <th class="text-end">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indx) in cartItems" :key="indx">
          <td>
            <div class="cart-product-name">
              <div class="img">
                <nuxt-link :to="`/product/${item.item_code}`"><img :src="getProductImage(item.image)" /></nuxt-link>
              </div>
              <h3><a href="#">{{item.item_name}}</a></h3>
            </div>
          </td>
          <td align="right">&#8377;{{item.rate}}</td>
          <td align="center">
            <div class="product-qty-field">
              <input type="text" :value="item.qty" />
              <span class="qty-action qty-action-minus"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right">&#8377; {{item.amount.toLocaleString('en-IN')}}</td>
        </tr>
        <!-- <tr>
          <td>
            <div class="cart-product-name">
              <div class="img">
                <a href="#"><img src="/products/2.jpg" /></a>
              </div>
              <h3><a href="#">Brown Eggs</a></h3>
            </div>
          </td>
          <td align="right">$7.25</td>
          <td align="center">
            <div class="product-qty-field">
              <input type="text" value="1" />
              <span class="qty-action qty-action-minus"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right">$14.50</td>
        </tr>
        <tr>
          <td>
            <div class="cart-product-name">
              <div class="img">
                <a href="#"><img src="/products/2.jpg" /></a>
              </div>
              <h3><a href="#">Brown Eggs</a></h3>
            </div>
          </td>
          <td align="right">$7.25</td>
          <td align="center">
            <div class="product-qty-field">
              <input type="text" value="1" />
              <span class="qty-action qty-action-minus"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right">$14.50</td>
        </tr>
        <tr>
          <td>
            <div class="cart-product-name">
              <div class="img">
                <a href="#"><img src="/products/2.jpg" /></a>
              </div>
              <h3><a href="#">Brown Eggs</a></h3>
            </div>
          </td>
          <td align="right">$7.25</td>
          <td align="center">
            <div class="product-qty-field">
              <input type="text" value="1" />
              <span class="qty-action qty-action-minus"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right">$14.50</td>
        </tr>
        <tr>
          <td>
            <div class="cart-product-name">
              <div class="img">
                <a href="#"><img src="/products/2.jpg" /></a>
              </div>
              <h3><a href="#">Brown Eggs</a></h3>
            </div>
          </td>
          <td align="right">$7.25</td>
          <td align="center">
            <div class="product-qty-field">
              <input type="text" value="1" />
              <span class="qty-action qty-action-minus"
                ><svg
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="qty-action qty-action-plus"
                ><svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 1L8 15.17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td align="right">$14.50</td>
        </tr> -->
      </tbody>
    </table>
    <div v-else>
      <h3>No products found!</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartItems',
  computed: {
    ...mapGetters({
      cartItems: 'customer/getCartItems'
    }),
  },
  methods: {
      getProductImage (imgPath) {
        if (imgPath) {
          return process.env.ERP_DOMAIN + imgPath
        } else {
          return '/logo.svg'
        }
      },
  },
};
</script>

<style>
</style>
