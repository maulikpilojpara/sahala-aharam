<template>
  <section class="mini-section pt-0" v-if="categories && categories.length > 0">
    <div class="container">
      <h2 class="sub-title">Our Category</h2>
      <div class="category-carousel owl-carousel owl-theme title-nav">
        <div class="item" v-for="(cat, indx) in categories" :key="indx">
          <div class="category-box">
            <div class="icon">
              <img :src="cat.icon ? cat.icon : '/logo.svg'" class="d-block" />
            </div>
            <h3>{{cat.name}}</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      <!--
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Cereals.svg" class="d-block" />
            </div>
            <h3>Cereals</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Oil-Seeds.svg" class="d-block" />
            </div>
            <h3>Oil Seeds</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Sweetners.svg" class="d-block" />
            </div>
            <h3>Sweetners</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Flours-Suji.svg" class="d-block" />
            </div>
            <h3>Flours & Suji</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Health-Care.svg" class="d-block" />
            </div>
            <h3>Health Care</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img
                src="/category-icon/Processed-Foods.svg"
                class="d-block"
              />
            </div>
            <h3>Processed Foods</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Millets.svg" class="d-block" />
            </div>
            <h3>Millets</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="category-box">
            <div class="icon">
              <img src="/category-icon/Millets.svg" class="d-block" />
            </div>
            <h3>Millets</h3>
            <div class="more-link">
              <a href="#"
                ><svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7938 0.164778L10.4817 0.496184C10.275 0.715841 10.275 1.072 10.4817 1.2917L14.1854 5.20314H1.39967C1.10722 5.20314 0.870117 5.455 0.870117 5.76564V6.23439C0.870117 6.54503 1.10722 6.79689 1.39967 6.79689H14.1854L10.4817 10.7083C10.275 10.928 10.275 11.2841 10.4817 11.5039L10.7938 11.8353C11.0006 12.0549 11.3359 12.0549 11.5427 11.8353L16.6831 6.39775C16.8899 6.1781 16.8899 5.82194 16.6831 5.60224L11.5427 0.164778C11.3359 -0.0549258 11.0006 -0.0549258 10.7938 0.164778Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'Category',
  computed: {
    ...mapGetters({
      categories: 'global/getMainCategories'
    })
  }
  
};
</script>
