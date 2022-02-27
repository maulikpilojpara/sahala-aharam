<template>
  <div class="login-wrap">
    <LoginInfo />
    <LoginForm />
  </div>
</template>

<script>
import LoginInfo from '../components/login/LoginInfo.vue';
import LoginForm from '../components/login/LoginForm.vue';

export default {
  name: 'Login',
  layout: 'login',
  components: {
    LoginInfo,
    LoginForm
  },
}
</script>
