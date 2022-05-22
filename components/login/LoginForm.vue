<template>
  <div class="login-body order-1 order-md-2">
    <div class="login-inner">
      <div class="login-logo d-block d-md-none">
        <nuxt-link to="/">
          <img src="/logo.svg" alt="" />
        </nuxt-link>
      </div>
      <h2>Sign in to Account</h2>
      <ul class="login-with-social">
        <!-- <li>
          <a href="#">
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7012 15.75L16.501 10.6827H11.4999V7.3943C11.4999 6.00797 12.1985 4.65664 14.4384 4.65664H16.712V0.342344C16.712 0.342344 14.6487 0 12.6761 0C8.55742 0 5.8653 2.42703 5.8653 6.82063V10.6827H1.28711V15.75H5.8653V28H11.4999V15.75H15.7012Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li> -->
        <li>
          <a href="#">
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8708 10.281C21.9782 10.8868 22.0549 11.4925 22.0549 12.2782C22.0549 19.1378 17.7421 24 11.25 24C5.03414 24 0 18.6303 0 12C0 5.36969 5.03414 0 11.25 0C14.2889 0 16.8213 1.17869 18.7858 3.14325L15.7315 6.27013C14.9027 5.41881 13.4447 4.42019 11.25 4.42019C7.41305 4.42019 4.28203 7.809 4.28203 12C4.28203 16.191 7.41305 19.5798 11.25 19.5798C15.7008 19.5798 17.3738 16.1582 17.6347 14.4065H11.25V10.2809H21.8708V10.281ZM32.7344 10.6833V7.2H29.4531V10.6833H26.1875V14.1834H29.4531V17.6667H32.7344V14.1834H36V10.6833H32.7344Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      </ul>
      <p class="login-sub-label">Or use your email account</p>
      <form method="post" @submit.prevent="loginAction">
        <div class="form-field-latest">
          <input v-model="email" placeholder="Email *" type="email" class="form-control" required />
        </div>
        <div class="form-field-latest p-relative">
          <input v-if="showPassword" v-model="password" placeholder="Password *" type="text" class="form-control p-right-40" required />
          <input v-else v-model="password" placeholder="Password *" type="password" class="form-control p-right-40" required />
          <span class="eye-icon-main" @click="toggleShow">
            <img :src="!showPassword ? '/eye.svg' : '/eye-slash.svg'" />
          </span>
        </div>
        <div class="form-field-links">
          <div class="remember-login-field">
            <!-- <div class="custom-checkbox">
              <label>
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
            </div> -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberMe">
              <label class="form-check-label" for="rememberMe">
                Remember Me
              </label>
            </div>
          </div>
          <p><a href="#">Forgot Password?</a></p>
        </div>
        <div class="form-field-submit">
          <!-- <button class="btn btn-primary">Sign In</button> -->
          <button class="btn btn-primary" :disabled="formResponse && formResponse.class === 'load' ? true : false">
            <span v-if="formResponse && formResponse.class === 'load'"> {{formResponse.msg}} </span>
            <span v-else> Sign In </span>
          </button>
        </div>
      </form>
      <!-- <div v-if="formResponse && formResponse.class !== 'load'" class="form-response" :class="formResponse.class">
        <h5>{{ formResponse.msg }}</h5>
      </div> -->
      <div class="alert" :class="`alert-${formResponse.class}`" v-if="Object.keys(formResponse).length > 0 &&  formResponse.class !== 'load'" role="alert">
        {{ formResponse.msg }}
      </div>
    </div>
    <div class="login-bottom-links">
      <ul>
        <li>
          <nuxt-link to="/">Privacy Policy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Terms & Conditions</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
      formResponse: {}
    }
  },
  computed: {
    appURL() {
      return process.env;
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async loginAction() {
      if (!this.email || !this.password) {
        return;
      }
      this.formResponse = {};
      console.log('this.email', this.email);
      console.log('this.password', this.password);

      try {
        this.formResponse = {
          msg: 'Processing...',
          class: 'load'
        }
        const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD
        console.log('appURL:: ', appURL);
        const loginURL = `${appURL}/api/login_user`;
        console.log('loginURL:: ', loginURL);

        const loginRes = await this.$axios.post(loginURL, {
          // "email":"maulik@yopmail.com",
          // "password":"maulik@123"
          "email": this.email,
          "password": this.password
        });
        if (loginRes && loginRes.data && loginRes.data.message) {
          if (Object.prototype.hasOwnProperty.call(loginRes.data.message, 'message')) { //Authentication Failed
            this.formResponse = {
              msg: loginRes.data.message.message,
              class: 'warning'
            };
            return;
          }
          this.$cookies.set('login_token', loginRes.data, { path: '/', maxAge: 60 * 60 * 24 * 7 });
          await this.$store.dispatch('customer/updateLoginFlag', true)
          await this.$store.dispatch('customer/updateUserContext', loginRes.data)
          const cusToken = await this.$store.getters['customer/getCustomerToken'];
          await this.$store.dispatch('customer/getUserCartData', cusToken);

          this.formResponse = {
            msg: 'You Have Successfully Logged in. Redirecting...',
            class: 'success'
          }
          setTimeout(() => {
            this.$router.push('/my-account');
          }, 1500)
        } else {
          this.formResponse = {
            msg: 'Something went wrong. Please try again!',
            class: 'danger'
          }
        }

      } catch (e) {
        this.error = e.response.data.message
        this.formResponse = {}
      }
    }
  }
};
</script>

<style scoped>
.p-relative {
  position: relative;
}
span.eye-icon-main img {
    height: 20px;
}
span.eye-icon-main {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer ;
}
.form-control.p-right-40 {
  padding-right: 40px;
}
</style>
