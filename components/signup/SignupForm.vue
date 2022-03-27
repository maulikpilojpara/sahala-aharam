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
        <div class="form-field-latest">
          <label>First Name <em>*</em></label>
          <input v-model="first_name" type="text" class="form-control" required />
        </div>
        <div class="form-field-latest">
          <label>Last Name <em>*</em></label>
          <input v-model="last_name" type="text" class="form-control" required />
        </div>
        <div class="form-field-latest">
          <label>Email <em>*</em></label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="">
          <label>Gender <em>*</em></label>
          <div>
            <label for="male">Male</label>
            <input v-model="gender" id="male" value="male" type="radio" class="" required />
          </div>
          <div>
            <label for="female">Female</label>
            <input v-model="gender" id="female" value="female" type="radio" class="" required />
          </div>
        </div>
        <div class="form-field-latest">
          <label>Phone <em>*</em></label>
          <input v-model="phone" type="text" class="form-control" required />
        </div>
        <div class="form-field-latest">
          <label>Password <em>*</em></label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <div class="form-field-submit">
          <button class="btn btn-primary" :disabled="formResponse && formResponse.class === 'load' ? true : false">
            <span v-if="formResponse && formResponse.class === 'load'"> {{formResponse.msg}} </span>
            <span v-else> Sign Up </span>
          </button>
        </div>
      </form>
      <div v-if="formResponse && formResponse.class !== 'load'" class="form-response" :class="formResponse.class">
        <h5>{{ formResponse.msg }}</h5>
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
        const appURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.APP_URL_PROD
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
