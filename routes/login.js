var express = require('express');
var router = express.Router();
const user = require('../module/user');

router.post('/', function(req, res) {
  //登录
  console.log(req, 'req')
  user.findAll().then(users => {
    users.forEach(el => {

    })
    res.send(users);
  })
})

module.exports = router;