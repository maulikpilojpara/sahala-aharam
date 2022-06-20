const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios');
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const router = express();
// app.use(cors({ origin: true }));

// Add your razorpay key and secret
const KEY_ID = "rzp_test_WYMBQK6C3rMx0r";
const KEY_SECRET = "BBVEgjzlkGVGgyR5tJxmBW4z";

module.exports = {
  path: '/',
  handler: app
};
app.use(bodyParser.json());

// app.post("/createPayment", (req, res, next) => {
//   return admin
//     .firestore()
//     .collection("payments")
//     .add(req.body)
//     .then(payment => {
//       var instance = new Razorpay({
//         key_id: KEY_ID,
//         key_secret: KEY_SECRET
//       });

//       var options = {
//         amount: req.body.amount * 100,
//         currency: "INR",
//         receipt: payment.id,
//         payment_capture: 1
//       };
//       instance.orders.create(options, function(err, order) {
//         return res.status(201).send(order);
//       });
//     })
//     .catch(er => {
//       return res.status(400).send({ er });
//     });
// });

app.post('/api/login_user', (req, res) => {
  const data = JSON.stringify({
      "usr": req.body.email,
      "pwd": req.body.password
  });
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
  });
});

app.post('/api/register_user', (req, res) => {
  // const data = JSON.stringify({
  //   "email": "maulik@yopmail.com",
  //   "first_name": "Maulik",
  //   "last_name": "Pilojpara",
  //   "gender": "Male",
  //   "mobile_no": "8141669871"
  // });
  const data = JSON.stringify({
    "email": req.body.email,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "gender": req.body.gender,
    "mobile_no": req.body.mobile
  });
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.user_sign_up`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
  });
});

app.get('/api/getGlobalContent', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_website_content`,
    headers: {
      'Authorization': process.env.GUEST_TOKEN
    }
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error('getGlobalContent:  ', error);
  });
});

//Related products from SKU
app.get('/api/getRelatedProducts/:id', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_related_items?product=${req.params.id}`,
    headers: {
      'Authorization': process.env.GUEST_TOKEN
    }
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error('getGlobalContent:  ', error);
  });
});

//Related products from SKU
app.get('/api/getproducts/:categoryId', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_product_group_items?route=${req.params.categoryId}`,
    headers: {
      'Authorization': process.env.GUEST_TOKEN
    }
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error('getproducts:  ', error);
  });
});

app.post('/api/getProductDetails', (req, res) => {

  let token = '';
  if (req.body.api_key && req.body.api_secret) {
    token = `token ${req.body.api_key}:${req.body.api_secret}`
  }
  
  const data = JSON.stringify({
    "product_id": req.body.id,
    "Authorization": req.body.token
  });
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_product_detail`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    data : data
  };

  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

app.post('/api/create_cart', (req, res) => {
  const items = JSON.stringify(req.body.items);
  var data = JSON.stringify({
    "items": items,
    "warehouse": "Tarnaka DC - SAPCO"
  });
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.update_cart_custom`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
    data : data
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

//Update cart
app.post('/api/update_cart', (req, res) => {
  const items = JSON.stringify(req.body.items);
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.update_cart`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
    data : items
  };
  console.log('options update_cart:: ', options);
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

// get cart details
app.post('/api/get_cart_quotation', (req, res) => {
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_cart_quotation`,
    headers: {
      'Authorization': req.body.token
    },
  };
  console.log('get_cart_quotation options:: ', options);
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

app.post('/api/get_cutomer_cart', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_cart_quotation`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

app.post('/api/check_loggedin_status', (req, res) => {
  console.log('req.body.token:: ', req.body.token);
  
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/frappe.auth.get_logged_user`,
    headers: {
      'Authorization': req.body.token
    },
  };
  console.log('check_loggedin_status options:: ', options);
  
  
  axios.request(options).then((response) => {
    res.status(200).send({success: true, response: response.data});
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

//Get all orders by token
app.post('/api/get_order_list', (req, res) => {
  console.log('req.body.token:: ', req.body.token);
  
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_sales_order_list_custom`,
    headers: {
      'Authorization': req.body.token
    },
  };
  console.log('check_loggedin_status options:: ', options);
  
  
  axios.request(options).then((response) => {
    res.status(200).send({success: true, response: response.data});
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Orders not found. Something went wrong. Please try again!'});
  });
});

app.get('/api/get_cart_data/:token', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_cart_quotation`,
    headers: {
      'Authorization': req.params.token
    },
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

//Get CMS pages call
app.get('/api/get_cms_data/:page', (req, res) => {
  
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.${req.params.page}`,
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

//User Logout
app.post('/api/user_logout', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/logout`,
    headers: {
      'Authorization': req.body.token
    },
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

//User Add new shipping/billing adress
app.post('/api/add_cutomer_address', (req, res) => {
  var data = JSON.stringify(req.body.address);

  const options = {
    method: 'POST',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.add_new_address_custom`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
    data
  };
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

//Delete address
app.post('/api/delete_address', (req, res) => {
  var data = JSON.stringify(req.body.address);
  
  const options = {
    method: 'POST',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.delete_address`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
    data
  };

  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

// Create Order
app.post('/api/create_order', (req, res) => {
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.place_order`,
    headers: {
      'Authorization': req.body.token
    },
  };

  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong with create order. Please try again!');
  });
});

// After Create Order make payment call
app.post('/api/make_payment_request', (req, res) => {
  
  var data = JSON.stringify({
    "dn": req.body.order_ref,
    "dt": "Sales Order",
    "submit_doc": 1,
    "order_type": "Shopping Cart"
  });
  
  var config = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.make_payment_request`,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': req.body.token, 
    },
    data : data
  };

  axios.request(config).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong with create order. Please try again!');
  });
});

// After Success Order call
app.post('/api/razorpay_checkout', (req, res) => {
  var data = JSON.stringify(req.body.orderData);
  
  var config = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/frappe.templates.pages.integrations.razorpay_checkout.make_payment`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong with create order. Please try again!');
  });
});

//Related products from SKU
app.get('/api/get_season_item', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_season_item`,
    headers: {
      'Authorization': process.env.GUEST_TOKEN
    }
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error('get_season_item::  ', error);
  });
});
