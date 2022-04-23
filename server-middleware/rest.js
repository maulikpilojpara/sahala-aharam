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
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/frappe.auth.get_logged_user`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
  };
  
  axios.request(options).then((response) => {
    res.status(200).send({success: true, response: response.data});
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
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
<<<<<<< HEAD

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
=======
>>>>>>> 3d88a417f66c302fc23d6604b4a49865f1483542

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

// Razorpay call
<<<<<<< HEAD
=======

>>>>>>> 3d88a417f66c302fc23d6604b4a49865f1483542
app.post("/createPayment", (req, res, next) => {
  return admin
    .firestore()
    .collection("payments")
    .add(req.body)
    .then(payment => {
      var instance = new Razorpay({
        key_id: KEY_ID,
        key_secret: KEY_SECRET
      });

      var options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: payment.id,
        payment_capture: 1
      };
      instance.orders.create(options, function(err, order) {
        return res.status(201).send(order);
      });
    })
    .catch(er => {
      return res.status(400).send({ er });
    });
});