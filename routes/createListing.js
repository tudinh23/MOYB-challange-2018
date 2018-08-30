var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createListing');
});

router.post('/', function(req, res, next) {
  var data = fs.readFile('../MOYB-challange-2018/public/Data/Listings.json', 'utf8',(err, data) => {
    if(err) {
      console.log(err);
    }
    else {
      obj = JSON.parse(data);
      obj.push(
        {
          "title": "Yeet Style Oven",
          "description": "oven, Pretty shit, has had much use",
          "price": 20000,
          "category": "kitchen",
          "featured": true,
          "type": "listing"
        }
      );
      fs.writeFile('../MOYB-challange-2018/public/Data/Listings.json', JSON.stringify(obj), 'utf8', (err, data) => {
        res.render('createListing');
      });
    }
  });
});

module.exports = router;
