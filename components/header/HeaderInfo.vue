<template>
  <div class="header-info-wrap">
    <div class="header-info-overlay"></div>
    <div class="header-info" data-scrollbar>
      <div class="header-info-close">
        <span></span>
        <span></span>
      </div>
      <div class="d-none d-md-none d-lg-block">
        <h3>Get in Touch</h3>
        <ul class="header-sidebar-info">
          <li>
            <h5>Address</h5>
            <p>No.329-1, Lorem ipsum is a text commonly (Gujarat - India)</p>
          </li>
          <li>
            <h5>Email Address</h5>
            <p>
              <a href="mailto:sales@sahajaaharam.com">sales@sahajaaharam.com</a>
            </p>
          </li>
          <li>
            <h5>Phone Number</h5>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          </li>
        </ul>
        <ul class="social-info">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  class=""
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  class=""
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-youtube fa-w-18 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  class=""
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="p_bar" id="myBar"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderInfo"
};
</script>

<style scoped>
.header-info {
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  background: #fff;
  z-index: 993;
  border-left: 1px solid #ddd;
  padding: 35px;
  overflow: auto;
  transition: all 0.5s;
  transform: translatex(100%);
}

.header-info-show .header-info {
  transform: translatex(0);
}

.header-info[data-scrollbar] {
  position: fixed;
}

.header-info-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 992;
  backdrop-filter: blur(7px);
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}

.header-info-show .header-info-overlay {
  opacity: 1;
  visibility: visible;
}

.header-info-close {
  width: 40px;
  height: 40px;
  margin: 0 0 20px auto;
  position: relative;
  cursor: pointer;
  transition: all 0.4s;
}

.header-info-close:hover {
  transform: scale(0.9);
}

.header-info-close:before,
.header-info-close:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 36px;
  height: 1.5px;
  background: var(--dark);
  border-radius: 5px;
  transform: rotate(45deg);
  margin: auto;
}

.header-info-close:after {
  transform: rotate(-45deg);
}

.header-info h3 {
  margin: 0 0 25px;
  font-size: 26px;
}

.header-info h3:after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: var(--primary);
  border-radius: 5px;
  margin-top: 12px;
}

.header-info ul.social-info {
  margin-top: 50px;
}

.header-info ul.footer-info a {
  color: var(--dark);
}

.header-info ul.footer-info a:hover {
  color: var(--primary);
}

ul.header-sidebar-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.header-sidebar-info h5 {
  margin: 0 0 4px;
  font-size: 13px;
}

ul.header-sidebar-info li {
  margin-bottom: 20px;
}

ul.header-sidebar-info li:last-child {
  margin-bottom: 0;
}

ul.social-info {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

ul.social-info li {
  margin: 0 10px 10px 0;
}

ul.social-info li:last-child {
  margin-right: 0;
}

ul.social-info li a {
  width: 38px;
  height: 38px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  color: #555;
  background: #fff;
}

ul.social-info li a svg {
  display: block;
  max-height: 100%;
}

ul.social-info li a:hover {
  color: #fff;
  border-color: var(--primary);
  background: var(--primary);
}
</style>
