var express = require('express');
var router = express.Router();

let page = require('../controllers/index');

/* GET home page. */
router.get('/', page.index);

module.exports = router;
