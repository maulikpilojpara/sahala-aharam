<template>
  <div class="login-wrap">
    <SignupInfo />
    <SignupForm />
  </div>
</template>

<script>
import SignupInfo from '../components/signup/SignupInfo.vue';
import SignupForm from '../components/signup/SignupForm.vue';

export default {
  name: 'Signup',
  layout: 'login',
  components: {
    SignupInfo,
    SignupForm
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
