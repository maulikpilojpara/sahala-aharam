<template>
  <section class="bg-primary" v-if="testimonials && testimonials.length > 0">
    <div class="section-can-top">
      <img src="/section-can-top.png" class="w-100 d-block" />
    </div>
    <div class="section-can-bottom">
      <img src="/section-can-bottom.png" class="w-100 d-block" />
    </div>
    <div class="shape-1"><img src="/shape-1.svg" class="d-block" /></div>
    <div class="shape-2"><img src="/shape-2.svg" class="d-block" /></div>
    <div class="dot-shape dot-shape-1"></div>
    <div class="dot-shape dot-shape-2"></div>
    <div class="container">
      <div class="testimonial-title">
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
      </div>
      <div class="testimonial-carousel-wrap">
        <div class="testimonial-carousel owl-carousel owl-theme">
          <div class="item" 
            v-for="(testimonial, index) in testimonials"
            :key="index">
            <div class="testimonial-box">
              <p>
                {{testimonial.feedback}}
              </p>
              <div class="testi-user">
                <div class="inner">
                  <div class="img">
                    <img :src="testimonial.cust_image ? cust_image : '/avtar.jpg'" class="d-block" />
                  </div>
                  <h4>{{testimonial.customer_name}}</h4>
                  <h5>{{testimonial.customer_description}}</h5>
                </div>
              </div>
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
  name: 'Testimonials',
  computed: {
    ...mapGetters({
      testimonials: 'global/getTestimonials'
    })
  }
  
};
</script>

<style scoped>
.section-can-top {
  position: absolute;
  left: 0;
  right: 0;
  top: -1px;
}

.section-can-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
}

.testimonial-title {
  color: #fff;
  text-align: center;
  max-width: 660px;
  margin: 0 auto 40px;
  font-size: 18px;
}

.testimonial-title h2 {
  font-size: 40px;
  margin: 0 0 15px;
}

.testimonial-carousel-wrap {
  max-width: 600px;
  background: #fff;
  text-align: center;
  margin: 0 auto 110px;
  padding: 20px 70px 40px;
  border-radius: 18px;
  box-shadow: 0px 18px 52.8537px rgba(0, 0, 0, 0.1);
  position: relative;
}

.testimonial-carousel-wrap:before {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 18px 52.8537px rgba(0, 0, 0, 0.1);
  content: "";
  display: block;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px 30px -23px;
  z-index: -1;
}

.testimonial-carousel-wrap:after {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 18px 52.8537px rgba(0, 0, 0, 0.1);
  content: "";
  display: block;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px 60px -42px;
  z-index: -2;
}

.testimonial-box {
  padding-top: 68px;
  position: relative;
  z-index: 1;
  background: url("/testi-icon.svg") no-repeat top center;
  background-size: 180px auto;
}

.testimonial-box p {
  font-size: 19px;
  font-style: italic;
}

.testi-user {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  text-align: left;
}

.testi-user .inner {
  padding-left: 70px;
  position: relative;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testi-user .inner .img {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
}

.testi-user .inner .img img {
  width: 100% !important;
  height: 100%;
  object-fit: cover;
}

.testi-user h4 {
  font-size: 18px;
  margin: 0 0 5px;
}

.testi-user h5 {
  font-weight: normal;
  margin: 0;
  font-size: 18px;
  color: #8A8A8A;
}

.testimonial-carousel-wrap .owl-nav {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -160px;
}

.testimonial-carousel-wrap .owl-carousel .owl-nav button[class*="owl-"] {
  border: 0;
  color: #fff;
  border-radius: 0;
  background: transparent;
  width: 70px;
  height: 40px;
  opacity: 0.4;
}

.testimonial-carousel-wrap .owl-carousel .owl-nav button[class*="owl-"]:hover {
  opacity: 1;
  color: #fff;
}

.testimonial-carousel-wrap .owl-carousel .owl-nav button[class*="owl-"]:before {
  width: 44px;
  border-width: 3px;
}

.testimonial-carousel-wrap .owl-carousel .owl-nav button[class*="owl-"]::after {
  left: -27px;
  width: 17px;
  height: 17px;
  border-width: 3px;
}

.shape-1 {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 250px;
}

.shape-2 {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 250px;
}

.dot-shape {
  background: url("/dot-shape.svg") repeat 0 0;
  background-size: 36px auto;
  width: 150px;
  height: 290px;
  position: absolute;
  left: 70px;
  bottom: 0;
  opacity: 0.2;
}

.dot-shape.dot-shape-2 {
  top: 18%;
  left: 68%;
  transform: rotate(-35deg);
}
</style>
