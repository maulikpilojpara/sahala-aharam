<template>
  <div class="checkout-main">
    <div class="container">
      <div v-show="deleteResponse" class="delete-response">
          <p>{{ deleteResponse }}</p>
      </div>
      <div class="address-wrap">
        <div v-if="shippingAddresses && shippingAddresses.length > 0" class="address-main">
          <h3>Shipping Addresses</h3>
          <div class="card-wrap">
            <template v-for="(spAddress, indx) in shippingAddresses">
              <div class="card" :key="indx">
                <span v-show="showDeleteIcon" class="delete" @click="deleteAddress(spAddress)">x</span>
                <h6>{{ spAddress.name }}</h6>
                <p v-html="spAddress.display" />
              </div>
            </template>
          </div>
        </div>
        <!-- Billing -->
        <div v-if="billingAddresses && billingAddresses.length > 0" class="address-main">
          <h3>Billing Addresses</h3>
          <div class="card-wrap">
            <template v-for="(blAddress, indx) in billingAddresses">
              <div class="card" :key="indx">
                <span v-show="showDeleteIcon" class="delete" @click="deleteAddress(blAddress)">x</span>
                <h6>{{ blAddress.name }}</h6>
                <p v-html="blAddress.display" />
              </div>
            </template>
          </div>
        </div>
        <!-- Add new address -->
        <button class="add-address-btn btn btn-primary" @click="toggleAddressForm()">Add new address</button>
        <button class="add-address-btn btn btn-primary" @click="showDeleteIcon = true">Delete address</button>
        <div v-if="newAddressForm" class="form_wrap">
          <form method="post" @submit.prevent="addNewForm">
            <div class="row">
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.address_title" placeholder="Address Title *" type="text" class="form-control" required />
                </div>
              </div>
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.address_line1" placeholder="Address Line 1 *" type="text" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.address_line2" placeholder="Address Line 2 *" type="text" class="form-control" required />
                </div>
              </div>
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.city" placeholder="City *" type="text" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.state" placeholder="State *" type="text" class="form-control" required />
                </div>
              </div>
              <div class="col col-12 col-lg-6">
                <div class="form-field-latest">
                  <input v-model="address.pincode" placeholder="Pincode *" type="text" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="form-field-latest form-field-radio">
              <label>Adress Type <em>*</em></label>
              <div class="row">
                <div class="col col-12 col-lg-6">
                  <div class="form-check">
                    <input v-model="address.address_type" id="billing" value="Billing" type="radio" class="form-check-input" required />
                    <label for="billing" class="form-check-label">Billing</label>
                  </div>
                </div>
                <div class="col col-12 col-lg-6">
                  <div class="form-check">
                    <input v-model="address.address_type" id="Shipping" value="Shipping" type="radio" class="form-check-input" required />
                    <label for="Shipping" class="form-check-label">Shipping</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-field-submit">
              <button class="btn btn-primary" :disabled="formResponse && formResponse.class === 'load' ? true : false">
                <span v-if="formResponse && formResponse.class === 'load'"> {{formResponse.msg}} </span>
                <span v-else> Add </span>
              </button>
              <div class="alert" :class="`alert-${formResponse.class}`" v-if="Object.keys(formResponse).length > 0 && formResponse.class !== 'load'" role="alert">
                {{ formResponse.msg }}
              </div>
            </div>
          </form>
        </div>
        <!-- checkout total -->
        <table class="table cart-total-table mb-0">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td align="right">&#8377; {{cartTotals.grand_total.toLocaleString('en-IN')}}</td>
            </tr>
            <!-- <tr>
              <td>Tax</td>
              <td align="right">&#8377; 2.00</td>
            </tr> -->
            <tr class="total-tr">
              <td>Total</td>
              <td align="right">&#8377; {{cartTotals.total.toLocaleString('en-IN')}}</td>
            </tr>
          </tbody>
        </table>
        <div class="checkoutt-btn-wrap">
          <button class="btn btn-primary w-100" @click="placeOrder()">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',
  data () {
    return {
      formResponse: {},
      address: {
        address_title: '',
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        pincode: '',
        address_type: ''
      },
      newAddressForm: false,
      showDeleteIcon: false,
      deleteResponse: ''
  }
  },
  computed: {
    ...mapGetters({
      customerToken: 'customer/getCustomerToken',
      shippingAddresses: 'customer/cart/getUserShippingAddresses',
      billingAddresses: 'customer/cart/getUserBillingAddresses',
      ErpOrderResponse: 'customer/cart/getErpOrderResponse',
      cartTotals: 'customer/getCartTotals',
    }),

  },
  methods: {
    async placeOrder () {
      console.log('placeOrder IN');
      await this.$store.dispatch('customer/cart/createErpOrder', this.customerToken)
      console.log('ErpOrderResponse:: ', this.ErpOrderResponse);

    },
    async deleteAddress (address) {
      if (confirm("Are you sure you want to delete?")) {
        console.log('address:: ', address);
        const deleteObj = {
          address: {
            	address_name: address.name
          },
          token: this.customerToken
        }
        const deleteAddressResp = await this.$store.dispatch('customer/cart/deleteAddress', deleteObj);
        this.deleteResponse = deleteAddressResp;

        if (deleteAddressResp.includes("Successfully")) {
            this.
            return
        }
        console.log('deleteAddressResp:: ', deleteAddressResp);
      };
    },
    toggleAddressForm() {
      this.newAddressForm = !this.newAddressForm
    },
    async addNewForm() {
      console.log('addNEw FORM');
      this.formResponse = {
        msg: 'Adding...',
        class: 'load'
      }
      const addObj = {
        address: this.address,
        token: this.customerToken
      }
      const addResponse = await this.$store.dispatch('customer/cart/addNewAddress', addObj);
      console.log('addResponse:: ', addResponse);
      if (addResponse) {
        this.formResponse = {
          msg: 'Add address successfully!',
          class: 'success'
        }
      }
      await this.currentCartQuotation();

      setTimeout(() => {
        this.newAddressForm = false;
        this.formResponse = {}
      }, 2000);


    },
    async currentCartQuotation () {
      await this.$store.dispatch('customer/cart/getCurrentCartQuotation', this.customerToken)
    }
  },
  async fetch () {
    await this.currentCartQuotation();
  }
}
</script>

<style scoped>
.address-main {
  margin-bottom: 50px;
}
.address-main > h3 {
  margin-bottom: 20px;
}
.card-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.card {
  border: 0 none;
  background-color: transparent;
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding: 0 15px;
}
.card:nth-child(n+4) {
  margin-top: 20px;
}
.address-wrap .form_wrap {
  margin: 50px 0;
}
@media (max-width: 767px) {
  .card {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .card:nth-child(n+4) {
    margin-top: 0;
  }
  .card:nth-child(n+3) {
    margin-top: 20px;
  }
  .address-main[data-v-3f9ab082] {
    margin-bottom: 30px;
  }
}
@media (max-width: 479px) {
  .card-wrap {
    flex-direction: column;
  }
  .card {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .card:nth-child(n+3) {
    margin-top: 0;
  }
  .card:nth-child(n+2) {
    margin-top: 20px;
  }
}
</style>
