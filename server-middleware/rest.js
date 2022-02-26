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
      'Authorization': 'token e95e6c8dd17415c:b93c4ac11a576d9'
    }
  };
  axios.request(options).then((response) => {
    res.status(200).send(response.data);
  }).catch((error) => {
    console.error(error);
  });
});