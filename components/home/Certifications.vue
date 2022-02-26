<template>
  <section class="mini-section" v-if="certificates && certificates.length > 0">
    certificates.length:: {{certificates.length}}
    <div class="container">
      <h2 class="sub-title">Our Certification</h2>
      <div class="certification-carousel owl-carousel owl-theme title-nav">
        <div class="item" v-for="(certificate, inx) in certificates" :key="inx">
          <div class="certificat-box">
            <img :src="certificate.cert_image" :alt="certificate.certification_name" class="d-block" />
          </div>
        </div>
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
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters  } from 'vuex'

export default {
  name: 'Certifications',
  computed: {
    ...mapGetters({
      certificates: 'global/getHomeCertificates'
    })
  }
  
};
</script>

<style scoped>
.certificat-box {
  height: 95px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.02);
  border-radius: 11px;
  border: 1px solid #E3F3DB;
  background: #fff;
  margin-bottom: 15px;
}

.certificat-box img {
  max-height: 100%;
  display: block;
  transition: all 0.5s;
}

.certificat-box:hover img {
  transform: scale(1.1);
}
</style>
