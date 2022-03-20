<template>
  <div>
    <h5>Welcome {{ customerName }}</h5>
  </div>
</template>


<script>
import { mapGetters  } from 'vuex'
export default {
  name: 'my-account',
  computed: {
    ...mapGetters({
      customerName: 'customer/getCustomerName'
    })
  }
}
</script>