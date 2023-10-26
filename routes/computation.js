var express = require('express');
var router = express.Router();

var X = Math.random() * 100;
var Y = Math.random() * 200;
var p1 = 0
var p2 = 0;
var p3 = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    p1 = Math.hypot(X);
    p2 = Math.hypot(Y);
    p3 = Math.hypot(X);

    res.send(`The Random Number is ${X} and ${Y} <br><br> round applied is ${X} is ${p1} <br><br> round applied is ${Y} is ${p2} <br><br> round applied is ${X} is ${p3}`);
  
});

module.exports = router;