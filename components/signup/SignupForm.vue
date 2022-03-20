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
          <label>Email <em>*</em></label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-field-latest">
          <label>Password <em>*</em></label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <div class="form-field-submit">
          <button class="btn btn-primary">Sign Up</button>
        </div>
      </form>
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
  methods: {
    async register() {
      console.log('registerin');
      
      // try {
      //   await this.$axios.post('register', {
      //     username: this.username,
      //     email: this.email,
      //     password: this.password
      //   })

      //   await this.$auth.loginWith('local', {
      //     data: {
      //     email: this.email,
      //     password: this.password
      //     },
      //   })

      //   this.$router.push('/')
      // } catch (e) {
      //   this.error = e.response.data.message
      // }
    }
  }
};
</script>
