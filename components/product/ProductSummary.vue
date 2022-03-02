<template>
  <div class="summery">
    <div class="price-offer"><span>20% Off</span></div>
    <h2>All Natural Italian-Style Chicken Meatballs</h2>
    <div class="price-rating-wrap">
      <div class="price">$7.25 <del>$8.50</del></div>
      <div class="reting-wrap">
        <span style="width: 80%"></span>
      </div>
    </div>
    <p>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a docubefore the fin a
      placeholder text commonly used to demonstrate the visual form of a
      document or a typeface without relying on meaningful content. Lorem ipsum
      may be used as a placeholder before the final copy is available.
    </p>
    <ul class="variation-point">
      <li><b>Type : </b>Organic</li>
      <li><b>MFG : </b>Jun 4,2021</li>
      <li><b>Life : </b>30 days</li>
    </ul>
    <div class="qty-submit-wrap">
      <div class="product-qty">
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
      </div>
      <div class="add-to-cart">
        <button class="addtocart-btn">
          <img src="images/shopping-cart.svg" alt="" /> Add to Cart
        </button>
      </div>
    </div>
    <div class="product-meta">
      <div class="item"><b>Category : </b>Meats & Seafood</div>
      <div class="item"><b>SKU : </b>ZU49VOR</div>
      <div class="item ms-lg-auto">
        <b>Tags : </b><a href="#">Chicken</a>, <a href="#">Natural</a>,
        <a href="#">Organic</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSummary",
};
</script>
