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
                <input type="radio" v-model="selectedAddress" :value="spAddress.name" name="select-radio" class="delete" />
                <h4>{{ spAddress.name }}</h4>
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
                <input type="radio" v-model="selectedAddress" :value="blAddress.name" name="select-radio" class="delete"  />
                <h4>{{ blAddress.name }}</h4>
                <p v-html="blAddress.display" />
              </div>
            </template>
          </div>
        </div>
        <!-- Add new address -->
        <button class="add-address-btn" @click="toggleAddressForm()">Add new address</button>
        <button class="add-address-btn" @click="deleteAddress()">Delete address</button>
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
      selectedAddress: {},
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
      const createOrderObject = {
          "paymentMethod": {
              "method": "razorpay"
          },
          "billing_address": {
              "region": "Gujarat",
              "region_id": 496,
              "region_code": "GJ",
              "country_id": "IN",
              "street": [
                  "plot no 5, Tirupati Nagar ",
                  "Navagam Dindoli"
              ],
              "postcode": "396450",
              "city": "Surat",
              "firstname": "Maulik pilojpura",
              "lastname": "",
              "email": "maulikpilojpara@gmail.com",
              "telephone": "9033346057",
              "company": "Office"
          }
      }
      this.razorpayCheckoutFlow(createOrderObject)
    },
    async razorpayCheckoutFlow (createOrderObject) {
      // showLoadingScreen();
      // const customerContext = this.$store.getters['customer/login/getCustomerContext']
      const createRazorpayOrderData = {
          email: 'maulikpilojpara@gmail.com',
          billingAddressObject: createOrderObject.billing_address,
          quoteId: this.ErpOrderResponse,
          paymentMethod: 'razorpay'
      }
      console.log('razorpayCheckoutFlow createRazorpayOrderData', createRazorpayOrderData);
      await this.$store.dispatch('customer/cart/_createRazorpayOrder', createRazorpayOrderData)
      // call set payment info ?
      // // call fetch cart totals?
      // await this.$store.dispatch('customer/cart/_createOrder', createOrderObject)
      const confirmRazorpayOrderData = {
          email: 'maulikpilojpara@gmail.com',
          orderCheck: '1',
          quoteId: 123,
          paymentMethod: 'razorpay'
      }
      const confirmRazorpayOrderResponse = await this.$store.dispatch('customer/cart/_createRazorpayOrder', confirmRazorpayOrderData)
      console.log('razorpayCheckoutFlow confirmRazorpayOrderResponse', confirmRazorpayOrderResponse);
      
      const razorpayModalOptions = this.prepareRazorpayCheckoutModalOptions(confirmRazorpayOrderResponse.reserved_order_id, confirmRazorpayOrderResponse.amount, confirmRazorpayOrderResponse.rzp_order)
      // eslint-disable-next-line no-undef
      const razorpayCheckoutFlow = new Razorpay(razorpayModalOptions)
      razorpayCheckoutFlow.open()
      this.updateLatestOrderContext()
      // hideLoadingScreen()
    },
    prepareRazorpayCheckoutModalOptions (reservedIncrementId, amount, razorpayOrderId) {
      const KEY_ID = "rzp_test_WYMBQK6C3rMx0r";
      const KEY_SECRET = "BBVEgjzlkGVGgyR5tJxmBW4z";
      const razorpayModalOptions = {
          key: 'rzp_test_WYMBQK6C3rMx0r',
          currency: 'INR',
          name: 'Sahala Aharam',
          description: 'Organic Stores',
          image: 'https://sahala-aharam1.onrender.com/logo.svg',
          prefill: {
              name: 'Maulik',
              email: 'maulikpilojpara@gmail.com',
              contact: '9033346057'
          },
          theme: {
              color: '#3399cc'
          }
      }

        // const razorpayModalOptions = this.$store.getters['customer/cart/getRazorpayModalOptions'](true)
        razorpayModalOptions.notes = {
            merchant_quote_id: this.ErpOrderResponse,
            merchant_order_id: reservedIncrementId
        }
        razorpayModalOptions.amount = amount
        razorpayModalOptions.handler = response => this.placeOrderSuccessHandler(response)
        razorpayModalOptions.order_id = razorpayOrderId;
        razorpayModalOptions.modal = {
            ondismiss: () => this.paymentModalDismissedHandler()
        }
        return razorpayModalOptions
    },
    placeOrderSuccessHandler () {
        console.log('placeOrderSuccessHandler IN');
    },
    paymentModalDismissedHandler () {
        console.log('paymentModalDismissedHandler IN');
    },
    async deleteAddress () {
      if (confirm("Are you sure you want to delete?")) {
        const deleteObj = {
          address: {
            	address_name: this.selectedAddress
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
.card-wrap {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
span.delete {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: red;
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
}
</style>
