var express = require('express');
const { findAll } = require('../module/user');
var router = express.Router();
const user = require('../module/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const allUsers = findAll();
  res.send(allUsers);
});

module.exports = router;
