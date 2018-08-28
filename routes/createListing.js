var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createListing');
});

router.post('/', function(req, res, next) {

    var data = [];

    let promises = new Promise(function(resolve, reject) {
        fs.readFile('../MOYB-challange-2018/public/Data/Listings.json', 'utf8',(err, fileContent) => {
            if( err ) {
                console.log(err);
                reject();
            } else {
                data = JSON.parse(fileContent.toString());
                resolve();
            }
        });
    });

    promises.then(() => {
        res.render('market', {
            data: data
        });
    });
});



module.exports = router;
