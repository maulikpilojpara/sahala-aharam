<template>
  <div class="login-info-cover">
    <div
      class="login-bg"
      style="background-image: url('/login-bg.jpg')"
    ></div>
    <div class="login-info-wrap order-2 order-md-1 w-100">
      <div class="login-info-inner">
        <div class="login-info">
          <div class="login-logo d-none d-md-block">
            <nuxt-link to="/">
              <img src="/logo-light.svg" alt="" />
            </nuxt-link>
          </div>
          <h2>Hello, Friend!</h2>
          <h5>Start Your shopping Today <br />with Sahara Aahram.....</h5>
          <nuxt-link to="/login" class="btn btn-light">Sign In</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginInfo'
};
</script>
