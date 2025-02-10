const express = require('express');
const router = express.Router();
const {createUserQuote,getUserQuotes} = require('../controller/UserContoller');

router.post('/',createUserQuote);
router.get('/',getUserQuotes);

module.exports = router;