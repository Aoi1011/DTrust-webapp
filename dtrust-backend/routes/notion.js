var express = require('express')
var axios = require('axios')

var router = express.Router()

String.prototype.splice = function (idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

axios.defaults.baseURL = 'https://api.notion.com/v1';
axios.defaults.headers.common['Authorization'] = 'Bearer secret_8uo8xngKqFNxS1ExuaFe5t716WcE5gIVDpx9cOWxA54';
axios.defaults.headers.common['Notion-Version'] = '2021-07-27';

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the retrieving a page route
router.get('/pages/:pageId?', function (req, res) {
  var pageId = (req.params.pageId ? req.params.pageId : "").replace(/-/g, "");
  pageId = pageId.splice(20, 0, "-").splice(16, 0, "-").splice(12, 0, "-").splice(8, 0, "-");
  axios.get('/pages/' + pageId)
    .then(function (response) {
      // handle success
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // handle error
      // console.log(error.response.data);
      res.status(error.response.status).json(error.response.data);
    })
    .then(function () {
      // always executed
    });
})

// define the retrieving a block route
router.get('/blocks/:blockId?', function (req, res) {
  var blockId = (req.params.blockId ? req.params.blockId : "").replace(/-/g, "");
  blockId = blockId.splice(20, 0, "-").splice(16, 0, "-").splice(12, 0, "-").splice(8, 0, "-");
  axios.get('/blocks/' + blockId)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // handle error
      // console.log(error.response.data);
      res.status(error.response.status).json(error.response.data);
    })
    .then(function () {
      // always executed
    });
})

// define the retrieving children route
router.get('/children/:blockId?', function (req, res) {
  var blockId = (req.params.blockId ? req.params.blockId : "").replace(/-/g, "");
  blockId = blockId.splice(20, 0, "-").splice(16, 0, "-").splice(12, 0, "-").splice(8, 0, "-");
  axios.get('/blocks/' + blockId + '/children')
    .then(function (response) {
      // handle success
      // console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // handle error
      // console.log(error.response.data);
      res.status(error.response.status).json(error.response.data);
    })
    .then(function () {
      // always executed
    });
})

module.exports = router