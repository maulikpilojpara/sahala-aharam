<template>
  <section class="mini-section pt-0" v-if="bestOffers && bestOffers.length > 0">
    <div class="container">
      <h2 class="sub-title">Best Offers for you</h2>
      <hooper class="offer-carousel title-nav" :settings="bestOffersSetting">
        <slide class="item" v-for="(offer, inx) in bestOffers" :key="inx">
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
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'
import { mapGetters  } from 'vuex'

export default {
  name: 'BestOffers',
  data() {
    return {
      bestOffersSetting: {
        infiniteScroll: false,
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
