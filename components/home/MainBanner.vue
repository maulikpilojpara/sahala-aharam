<template>
  <section class="mini-section pt-md-0">
    <div class="container">
      <div class="main-slider owl-carousel owl-theme">
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="banner-box">
            <div class="banner-img">
              <img src="/banner.jpg" class="d-block w-100" />
            </div>
            <div class="banner-text">
              <div class="banner-logo">
                <img src="/logo-light.svg" alt="" />
              </div>
              <h2>We Do Healthy</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <div class="btn-set">
                <a href="#" class="btn btn-light">Shop Now</a>
              </div>
              <h5>100% Organic Guarantee</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBanner'
};
</script>

<style>
.banner-box {
  position: relative;
  filter: blur(7px);
  transition: all 0.5s;
}

.active .banner-box {
  filter: blur(0);
}

.main-slider .item {
  border-radius: 30px;
  overflow: hidden;
}

.banner-box .banner-text {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: url("/caption-bg.jpg") no-repeat center center;
  background-size: contain;
  background-color: var(--primary);
  text-align: center;
  width: 36%;
  color: #fff;
  padding: 40px 60px 90px;
  z-index: 1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  align-items: center;
}

.banner-box .banner-text:before {
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 3px solid #fff;
  content: "";
  display: block;
  margin: 8px;
  border-radius: 24px;
}

.banner-box .banner-img {
  border-radius: 30px;
  overflow: hidden;
  height: 470px;
}

.banner-box .banner-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-logo {
  width: 80px;
  margin: 0 0 20px;
}

.banner-text h2 {
  font-size: 32px;
  margin: 0 0 15px;
}

.banner-text h5 {
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: normal;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 28px;
  margin: 0;
}

.banner-text .btn-set {
  margin-top: 8px;
}

.main-slider .owl-dots {
  width: 36%;
  position: absolute;
  left: 0;
  bottom: 70px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-slider .owl-dots .owl-dot {
  width: 10px;
  height: 10px;
  background: #fff;
  margin: 0 3px;
  border-radius: 50%;
  transition: all 0.5s;
  opacity: 0.2;
}

.main-slider .owl-dots .owl-dot:hover,
.main-slider .owl-dots .owl-dot.active {
  opacity: 1;
}
</style>
