var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createListing');
});

router.post('/', function(req, res, next) {

    console.log(req.body.buttonType);

});



module.exports = router;
