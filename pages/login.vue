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
  mounted() {
    this.$nextTick(() => {
      const bodyEle = document.querySelector('body');
      bodyEle ? bodyEle.classList.add('pt-0') : '';
    })
  },
  beforeDestroy() {
    this.$nextTick(() => {
      const bodyEle = document.querySelector('body');
      bodyEle ? bodyEle.classList.remove('pt-0') : '';
    })
  }
}
</script>
