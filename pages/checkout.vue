<template>
  <div class="checkout-main py-5">
    <div class="container">
      <div v-show="deleteResponse" class="delete-response">
          <p>{{ deleteResponse }}</p>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="address-wrap">
            <div v-if="shippingAddresses && shippingAddresses.length > 0" class="address-main">
              <h3>Shipping Addresses</h3>
              <div class="card-wrap">
                <template v-for="(spAddress, indx) in shippingAddresses">
                  <div class="card" :key="indx">
                    <div class="card-cover">
                      <input type="radio" v-model="selectedAddress" :value="spAddress.name" name="select-radio" class="delete" />
                      <div class="card-detail">
                        <h6>{{ spAddress.name }}</h6>
                        <p v-html="spAddress.display" />
                      </div>
                    </div>
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
                    <div class="card-cover">
                      <input type="radio" v-model="selectedAddress" :value="blAddress.name" name="select-radio" class="delete"  />
                      <div class="card-detail">
                        <h6>{{ blAddress.name }}</h6>
                        <p v-html="blAddress.display" />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <!-- Add new address -->
            <button class="add-address-btn btn btn-primary me-1" @click="toggleAddressForm()">Add new address</button>
            <button class="add-address-btn btn btn-primary" @click="deleteAddress()">Delete address</button>
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
          </div>
        </div>
        <div class="col-md-4">
          <!-- checkout total -->
          <div class="cart-total-wrap">
            <div class="cart-box cart-total">
              <div class="table-responsive">
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
              </div>
            </div>
            <div class="checkout-btn-wrap">
              <button class="btn btn-primary w-100" :disabled="showLoader" @click="placeOrder()"><template v-if="showLoader">Please wait...</template><template v-else>Place Order</template></button>
              <div v-if="showLoader" class="lds-ripple"><div></div><div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  head () {
      return {
          script: [
              {
                  hid: 'Razorpay',
                  src: 'https://checkout.razorpay.com/v1/checkout.js',
                  body: true,
                  defer: true,
              }
          ],
      }
  },
  data () {
    return {
      showLoader: false,
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
      razorpayInputs: 'customer/cart/getRazorpayInputs',
      cartTotals: 'customer/getCartTotals',
    }),

  },
  methods: {
    async placeOrder () {
      console.log('placeOrder IN');
      this.showLoader = true;
      await this.$store.dispatch('customer/cart/createErpOrder', this.customerToken)
      console.log('ErpOrderResponse:: ', this.ErpOrderResponse);
      // const erpOrder = 'SAL-ORD-2022-00003';
      if (this.ErpOrderResponse) {
        const payload = {
          token: this.customerToken,
          order_ref: this.ErpOrderResponse
        }
        await this.$store.dispatch('customer/cart/ERPMakePayment', payload)
        console.log('razorpayInputs:: ', this.razorpayInputs);
        const paymentResData = this.razorpayInputs
        const inputData = {
          key: this.razorpayInputs.api_key,
          amount: this.razorpayInputs.amount * 100, // 2000 paise = INR 20
          name: this.razorpayInputs.title,
          description: this.razorpayInputs.description,
          handler: function (response){
            razorpay.make_payment_log(response, inputData, paymentResData.reference_doctype, paymentResData.reference_docname, paymentResData.token);
          },
          prefill: {
            name: this.razorpayInputs.payer_name,
            email: this.razorpayInputs.payer_email,
            order_id: this.razorpayInputs.order_id
          },
          notes: 'Test Notes'
        };

        var razorpay = new Razorpay(inputData);

          razorpay.open();

          const axiosObj = this.$axios;
          const routerObj = this.$router;
          razorpay.make_payment_log = function(response, options, doctype, docname, token){
            const razPayload = {
              razorpay_payment_id: response.razorpay_payment_id,
              options: options,
              reference_doctype: doctype,
              reference_docname: docname,
              token: token
            }
            console.log('razPayload:: ', razPayload);

            const appURL = process.env.NODE_ENV !== 'production' ? process.env.APP_URL_LOCAL : process.env.APP_URL_PROD;
            try {
              axiosObj.post(`${appURL}/api/razorpay_checkout`, {orderData: razPayload}).then(res => {
                console.log('res make_payment_log:: ', res);
                if (res.data && res.data.message && res.data.message.status == 200) {
                  routerObj.push({
                    path: res.data.message.redirect_to
                  })
                  // window.location.href = res.data.message.redirect_to
                } else if (res.status && ([401,400,500].indexOf(res.data.message.status) > -1)) {
                  routerObj.push({
                    path: res.data.message.redirect_to
                  })
                  // window.location.href = res.data.message.redirect_to
                }
              })
            } catch (e) {
              console.log('Place Order Error: ',e);
            }
          }

          razorpay.on('payment.failed', function (response){
              console.log('payment.failed:: ', response);
        });
        this.showLoader = false;
        return

      } else {
        console.log('Order Response not found!');
      }
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
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}
.card:nth-child(n+3) {
  margin-top: 20px;
}
.address-wrap .form_wrap {
  margin: 50px 0;
}
.card-cover {
  position: relative;
  height: 100%;
}
.card-cover > input[type="radio"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.card-cover .card-detail {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  height: 100%;
}
.card-cover > input[type="radio"]:checked + .card-detail {
  border-color: var(--primary);
}
.address-wrap .form_wrap {
    margin: 50px 0;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 0px 6px 0px #b9b3b3;
    background-color: #fff;
}
@media (max-width: 767px) {
  .address-wrap .form_wrap {
      margin: 25px 0;
      padding: 15px;
  }
  .address-main {
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
  html .btn {
    padding: 0 15px;
  }
}

/*Loader*/
.checkoutt-btn-wrap {
    position: relative;
}
.lds-ripple {
  display: inline-block;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 40px;
  top: -15px;
  z-index: 9;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
.checkout-main .btn {
  z-index: 0;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
