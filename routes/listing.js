var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('listing');
});


router.post('/', function(req, res, next) {
    var listingData = [];
    let promises = new Promise(function(resolve, reject) {
        fs.readFile('../Myob challange/public/Data/Listings.json', 'utf8',(err, fileContent) => {
            if( err ) {
                console.log(err);
                reject();
            } else {
                var data = JSON.parse(fileContent.toString());
                for (var key in data) {
                    console.log(req.body)
                    if (data[key].title == req.body.buttonType) {
                        listingData = data[key];
                    }
                }
                resolve();
            }
        });
    });

    promises.then(() => {
        res.render('listing', {
            listingData: listingData
        });
    });

});

module.exports = router;
