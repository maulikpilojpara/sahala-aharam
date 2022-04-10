<template>
  <div style="text-align:center">
    <h5>Welcome {{ customerName }}</h5>
    <div>
      <buton @click="logout()">Logout</buton>
    </div>
  </div>
</template>


<script>
import { mapGetters  } from 'vuex'
export default {
  name: 'my-account',
  middleware: 'authenticated',
  computed: {
    ...mapGetters({
      customerName: 'customer/getCustomerName',
      customerToken: 'customer/getCustomerToken'
    })
  },
  methods: {
    async logout() {
      console.log('yescliced');
      await this.$store.dispatch('customer/logOutUser', this.customerToken);
      this.$cookies.remove('login_token');
      this.$router.push('/')
    }
  }
}
</script>