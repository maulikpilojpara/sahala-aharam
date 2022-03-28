<template>
  <div class="login-body order-1 order-md-2">
    <div class="login-inner">
      <div class="login-logo d-block d-md-none">
        <nuxt-link to="/">
          <img src="/logo.svg" alt="" />
        </nuxt-link>
      </div>
      <h2>Create an account</h2>
      <form method="post" @submit.prevent="register">
        <div class="row">
          <div class="col col-12 col-lg-6">
            <div class="form-field-latest">
              <input v-model="first_name" placeholder="First Name *" type="text" class="form-control" required />
            </div>
          </div>
          <div class="col col-12 col-lg-6">
            <div class="form-field-latest">
              <input v-model="last_name" placeholder="Last Name *" type="text" class="form-control" required />
            </div>
          </div>
        </div>
        <div class="form-field-latest">
          <input v-model="email" placeholder="Email *" type="email" class="form-control" required />
        </div>
        <div class="form-field-latest form-field-radio">
          <label>Gender <em>*</em></label>
          <div class="row">
            <div class="col col-12 col-lg-6">
              <div class="form-check">
                <input v-model="gender" id="male" value="male" type="radio" class="form-check-input" required />
                <label for="male" class="form-check-label">Male</label>
              </div>
            </div>
            <div class="col col-12 col-lg-6">
              <div class="form-check">
                <input v-model="gender" id="female" value="female" type="radio" class="form-check-input" required />
                <label for="female" class="form-check-label">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-field-latest">
          <input v-model="phone" placeholder="Phone *" type="text" class="form-control" required />
        </div>
        <div class="form-field-latest">
          <input v-model="password" placeholder="Password *" type="password" class="form-control" required />
        </div>
        <div class="form-field-submit">
          <button class="btn btn-primary" :disabled="formResponse && formResponse.class === 'load' ? true : false">
            <span v-if="formResponse && formResponse.class === 'load'"> {{formResponse.msg}} </span>
            <span v-else> Sign Up </span>
          </button>
        </div>
      </form>
      <!-- <div v-if="formResponse && formResponse.class !== 'load'" class="form-response" :class="formResponse.class">
        <h5>{{ formResponse.msg }}</h5>
      </div> -->
      <div class="alert" :class="`alert-${formResponse.class}`" v-if="Object.keys(formResponse).length > 0" role="alert">
        {{ formResponse.msg }}
      </div>
    </div>
    <div class="login-bottom-links">
      <ul>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      phone: '',
      password: '',
      formResponse: {}
    }
  },
  methods: {
    async register() {
      console.log('registerin');
      this.formResponse = {};

      const payload = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        gender: this.gender,
        mobile: this.phone
      }
      // console.log('Register payload:: ', payload);
      // return;

      try {
        this.formResponse = {
          msg: 'Processing...',
          class: 'load'
        }
        const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : process.env.APP_URL_PROD
        const registerResponse = await this.$axios.post(`${appURL}/api/register_user`, payload);
        console.log('registerResponse::', registerResponse.data);
        if (registerResponse && registerResponse.data && registerResponse.data.message) {
          console.log('registerResponse.data.message:: ', registerResponse.data.message[1]);
          if (registerResponse.data.message[1] === 'success') {
            this.formResponse = {
              msg: 'Register User successfully!',
              class: 'success'
            }
            // this.$router.push('/login')

          }
          if (registerResponse.data.message[1] === 'Already Registered') {
            this.formResponse = {
              msg: 'User is already registered',
              class: 'danger'
            }
          }

        } else {
          this.formResponse = {
            msg: 'Something went wrong. Please try again!',
            class: 'danger',
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
