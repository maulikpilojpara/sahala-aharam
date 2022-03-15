const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios');
module.exports = {
  path: '/',
  handler: app
};
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  console.log('req', req);
  console.log('res', res);
  res.status(200).send("TEstingin");
  // const options = {
  //   method: 'GET',
  //   url: `https://${process.env.ERP_DOMAIN}` + req.originalUrl
  // };
  // axios.request(options).then((response) => {
  //   res.status(200).send(response.data);
  // }).catch((error) => {
  //   console.error(error);
  // });
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
  var data = JSON.stringify({
    "product_id": req.body.id
  });
  const options = {
    method: 'post',
    url: `${process.env.ERP_DOMAIN}/api/method/organic_shop.api.get_product_detail`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.GUEST_TOKEN,
      'Cookie': 'sid=Guest'
    },
    data : data
  };

  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
  });
});