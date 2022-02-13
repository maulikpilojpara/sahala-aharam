<template>
  <div id="loader-wrapper">
    <div class="loader" id="loader">
      <div class="loader-style-1 panelLoad">
        <div class="cube-face cube-face-front">S</div>
        <div class="cube-face cube-face-back">A</div>
        <div class="cube-face cube-face-left">H</div>
        <div class="cube-face cube-face-right">A</div>
        <div class="cube-face cube-face-bottom">J</div>
        <div class="cube-face cube-face-top">A</div>
      </div>
    </div>
    <div class="loader-section-wrap">
      <div class="loader-section"></div>
      <div class="loader-section"></div>
      <div class="loader-section"></div>
      <div class="loader-section"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLoader'
};
</script>

<style scoped>
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
}

#loader {
  z-index: 9999;
  max-width: 280px;
}

#loader span {
  color: var(--white);
  margin: 26px 0 0 0;
  display: none;
  font-size: 26px;
}

#loader-wrapper .loader-section-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  display: flex;
}

#loader-wrapper .loader-section {
  transform-origin: left center;
  background: var(--secondary);
  flex-grow: 1;
}

.loaded #loader-wrapper .loader-section-wrap .loader-section {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.loaded #loader {
  opacity: 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.loaded #loader-wrapper {
  visibility: hidden;
  -webkit-transition: all 0.3s 1s ease-out;
  transition: all 0.3s 1s ease-out;
}

#loader span.cube-face img {
  margin-top: 30px;
}

#loader span.cube-face {
  display: block;
  margin-top: 120px;
  color: var(--dark);
  font-family: Kodchasan;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 3px;
}

div#loader {
  z-index: 99999;
}

.loader-style-1 {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 30px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s;
  perspective: 9999px;
  color: var(--dark);
  margin: -40px 0 0 -40px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  margin-left: -37px;
  top: 65px;
  opacity: 1;
}

.loader-style-1.panelLoad {
  z-index: 11;
  top: 55%;
  margin-top: -60px;
  -webkit-animation: panel 2.2s infinite forwards;
  animation: panel 2.2s infinite forwards;
}

.loader-style-1.panelLoad .cube-face {
  color: var(--secondary);
  box-shadow: inset 0 0 0 1px var(--secondary), 0 0 1px 1px var(--secondary);
}

.loader-style-1 .cube-face {
  width: inherit;
  height: inherit;
  position: absolute;
  background: white;
  box-shadow: inset 0 0 0 1px var(--secondary), 0 0 1px 1px var(--secondary);
  opacity: 1;
  font-weight: 500;
  font-family: var(--font2);
  border-radius: 16px;
}

.loader-style-1 .cube-face-front {
  transform: translate3d(0, 0, 40px);
  -webkit-transform: translate3d(0, 0, 40px);
  font-size: 30px;
}

.loader-style-1 .cube-face-back {
  -webkit-transform: rotateY(180deg) translate3d(0, 0, 40px);
  transform: rotateY(180deg) translate3d(0, 0, 40px);
}

.loader-style-1 .cube-face-left {
  -webkit-transform: rotateY(-90deg) translate3d(0, 0, 40px);
  transform: rotateY(-90deg) translate3d(0, 0, 40px);
}

.loader-style-1 .cube-face-right {
  -webkit-transform: rotateY(90deg) translate3d(0, 0, 40px);
  transform: rotateY(90deg) translate3d(0, 0, 40px);
}

.loader-style-1 .cube-face-top {
  -webkit-transform: rotateX(90deg) translate3d(0, 0, 40px);
  transform: rotateX(90deg) translate3d(0, 0, 40px);
}

.loader-style-1 .cube-face-bottom {
  -webkit-transform: rotateX(-90deg) translate3d(0, 0, 40px);
  transform: rotateX(-90deg) translate3d(0, 0, 40px);
}

@keyframes panel {
  0% {
    -webkit-transform: rotateY(0deg) rotateZ(0deg);
    transform: rotateY(0deg) rotateZ(0deg);
  }

  20% {
    -webkit-transform: rotateY(90deg) rotateZ(0deg);
    transform: rotateY(90deg) rotateZ(0deg);
  }

  40% {
    -webkit-transform: rotateX(45deg) rotateZ(45deg);
    transform: rotateX(45deg) rotateZ(45deg);
  }

  60% {
    -webkit-transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
    transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
  }

  80% {
    -webkit-transform: rotateX(310deg) rotateZ(230deg);
    transform: rotateX(310deg) rotateZ(230deg);
  }

  100% {
    -webkit-transform: rotateX(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateZ(360deg);
  }
}
</style>
