var express = require('express');
var router = express.Router();
var fs = require('fs');


var data = fs.readFile('../MOYB-challange-2018/public/Data/Listings.json', 'utf8',(err, fileContent) => {
    if( err ) {
        console.log(err);
    }
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createListing');
});

router.post('/', function(req, res, next) {
    res.redirect('/myAccount');
});

module.exports = router;
