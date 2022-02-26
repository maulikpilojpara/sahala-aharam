<template>
  <section class="mini-section pt-0" v-if="bestOffers && bestOffers.length > 0">
    <div class="container">
      <h2 class="sub-title">Best Offers for you</h2>
      <div class="offer-carousel owl-carousel owl-theme title-nav">
        <div class="item" v-for="(offer, inx) in bestOffers" :key="inx">
          <div
            class="offer-box"
            :style="`background-color: ${backgroundcolor(inx)}; color: ${backgroundcolor(inx)}`"
          >
            <h4 v-if="offer.discount">{{offer.discount}}% OFF</h4>
            <h3 v-if="offer.offer_name">{{offer.offer_name}}</h3>
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
                    d="M10.908 0.164778L10.596 0.496184C10.3892 0.715841 10.3892 1.072 10.596 1.2917L14.2997 5.20314H1.51393C1.22148 5.20314 0.984375 5.455 0.984375 5.76564V6.23439C0.984375 6.54503 1.22148 6.79689 1.51393 6.79689H14.2997L10.596 10.7083C10.3892 10.928 10.3892 11.2841 10.596 11.5039L10.908 11.8353C11.1148 12.0549 11.4501 12.0549 11.6569 11.8353L16.7973 6.39775C17.0041 6.1781 17.0041 5.82194 16.7973 5.60224L11.6569 0.164778C11.4501 -0.0549258 11.1148 -0.0549258 10.908 0.164778Z"
                    fill="currentColor"
                  /></svg
              ></a>
            </div>
            <div class="img">
              <img :src="offer.offer_image ? offer.offer_image : '/offer-banner/placeholder.jpg' " class="d-block" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'BestOffers',
  computed: {
    ...mapGetters({
      bestOffers: 'global/getHomeBestOffers'
    })
  },
  methods: {
    backgroundcolor (index) {
      const colorKey = parseInt(index) % 4 
      const colorArray = [
        '#3A261D',
        '#FFB12B',
        '#69BD45',
        '#005EC6',
      ];
      return colorArray[colorKey];
    }
  }
  
};
</script>

<style scoped>
.offer-box {
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
  z-index: 1;
  background: url("/offer-banner-bg.png") no-repeat center center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  margin: 0 0px 5px;
  min-height: 150px;
}

.offer-box .img {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  max-width: 60%;
  transition: all 0.5s;
}

.offer-box:hover .img {
  transform: scale(1.1);
}

.offer-box h4 {
  color: transparent;
  font-style: italic;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fff;
  font-size: 22px;
  font-weight: 900;
  text-shadow: 0 2px 0 rgb(255 255 255 / 10%);
  margin: 0 0 8px;
}

.offer-box h3 {
  color: #fff;
  font-size: 18px;
  margin: 0;
}

.offer-box .more-link {
  margin-top: auto;
}

.offer-box .more-link a {
  width: 25px;
  height: 25px;
  color: inherit;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}

.offer-box .more-link a:hover {
  transform: scale(1.2);
}
</style>
