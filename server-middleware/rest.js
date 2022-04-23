const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios');
module.exports = {
  path: '/',
  handler: app
};
app.use(bodyParser.json());

app.post('/api/login_user', (req, res) => {
  const data = JSON.stringify({
      "usr": req.body.email,
      "pwd": req.body.password
  });
  console.log('data:: ', data);
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };
  console.log('options:: ', options);
  axios.request(options).then((response) => {
    console.log('response.data:: ', response.data);
    
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
  console.log('data:: ', data);
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.user_sign_up`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };
  console.log('register options:: ', options);
  axios.request(options).then((response) => {
    console.log('response.data:: ', response.data);
    
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
  console.log('req.body.token:: ', JSON.stringify(req.body.items));
  const items = JSON.stringify(req.body.items);
  var data = JSON.stringify({
    "items": items,
    // "items":"[{\"item_code\": \"OSGNW5KG\",\"qty\": 3}, {\"item_code\": \"VGOKRLSE\",\"qty\": 2}]",
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

  console.log('create_cart options:: ', options);
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

app.post('/api/get_cutomer_cart', (req, res) => {
  console.log('req.body.token:: ', req.body.token);
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_cart_quotation`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.body.token
    },
  };

  console.log('get_cutomer_cart options:: ', options);
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send('Something went wrong. Please try again!');
  });
});

app.get('/api/check_loggedin_status/:token', (req, res) => {
  console.log('req.body.token:: ', req.params.token);
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/frappe.auth.get_logged_user`,
    headers: {
      'Authorization': req.params.token
    },
  };

  console.log('get_cutomer_cart options:: ', options);
  
  axios.request(options).then((response) => {
    res.status(200).send({success: true, response: response.data});
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});

app.get('/api/get_cart_data/:token', (req, res) => {
  console.log('req.body.token:: ', req.params.token);
  const options = {
    method: 'GET',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.organic_cart.get_cart_quotation`,
    headers: {
      'Authorization': req.params.token
    },
  };

  console.log('get_cutomer_cart options:: ', options);
  
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
    res.status(404).send({error: true, msg:'Something went wrong. Please try again!'});
  });
});