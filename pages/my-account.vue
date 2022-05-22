<template>
  <div>
    <div class="container d-flex justify-content-between align-items-center">
      <h5>Welcome {{ customerName }}</h5>
      <button @click="logout()">Logout</button>  
    </div>
    <div class="container">
      <div class="seperator"></div>
      <div v-if="orders && orders.length > 0" class="my-orders-wrap">
        <h5>My Orders</h5>
        <table class="customers-order-table">
          <tr>
            <th>Name</th>
            <th>Order Status</th>
            <th>Grand Total</th>
            <th>Advance Paid</th>
            <th>Total Taxes</th>
          </tr>
          <tr v-for="(order, index) in orders" :key="index">
              <td>{{order.name}}</td>
              <td>{{order.status}}</td>
              <td>{{order.grand_total}}</td>
              <td>{{order.advance_paid}}</td>
              <td>{{order.total_taxes_and_charges}}</td>
          </tr>
        </table>
      </div>
      <div v-else>Ops! No orders found!</div>
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
      customerToken: 'customer/getCustomerToken',
      orders: 'customer/getUserOrders'
    })
  },
  async fetch() {
    await this.$store.dispatch('customer/getOrdersList', this.customerToken);
    console.log('orders::: ', this.orders);
    
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
<style scoped>
.customers-order-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.customers-order-table td, .customers-order-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.customers-order-table tr:nth-child(even){background-color: #f2f2f2;}

.customers-order-table tr:hover {background-color: #ddd;}

.customers-order-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #69BD44;
  color: white;
}
.seperator {
    border-bottom: 1px solid #c9c4c4;
    margin: 30px 0;
}
</style>