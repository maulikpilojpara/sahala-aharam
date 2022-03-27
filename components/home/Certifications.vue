<template>
  <section class="mini-section" v-if="certificates && certificates.length > 0">
    <div class="container">
      <h2 class="sub-title">Our Certification</h2>
      <hooper class="certification-carousel title-nav" :settings="certificationSetting">
        <slide class="item" v-for="(certificate, inx) in certificates" :key="inx">
          <div class="certificat-box">
            <img :src="certificate.cert_image" :alt="certificate.certification_name" class="d-block" />
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <!-- <div class="item">
          <div class="certificat-box">
            <img src="/certificat/2.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/3.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/4.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/5.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/1.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/2.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/3.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/4.jpg" class="d-block" />
          </div>
        </div>
        <div class="item">
          <div class="certificat-box">
            <img src="/certificat/5.jpg" class="d-block" />
          </div>
        </div> -->
      </hooper>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'
import { mapGetters  } from 'vuex'

export default {
  name: 'Certifications',
  data() {
    return {
      certificationSetting: {
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
            itemsToShow: 2
          },
          768: {
            itemsToShow: 5
          },
          992: {
            itemsToShow: 6
          },
          1201: {
            itemsToShow: 7
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
      certificates: 'global/getHomeCertificates'
    })
  }

};
</script>
