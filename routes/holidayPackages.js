var express = require('express');
var router = express.Router();

var Packages = require('../models/holidayPackages');

/* Render Package main page. */
router.get('/',  function (req, res, next) {
    Packages.find(function (err, packages) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('HolidayPackages/index', {
                title: 'Packages',
                packages: packages,
            });
        }
    });
});

router.get('/add', function(req,res,next){
    res.render('HolidayPackages/add', { title: 'Add Packages' });
})

router.post('/add', function (req, res, next) {
    Packages.create({
        name: req.body.packageName,
        Destinations: req.body.destination,
        Category: req.body.category,
        Duration: req.body.duration,
        Overview: req.body.overview,
        inclusions: req.body.inclusions,
        itinerary: req.body.itinerary,
        price: req.body.price,
        created: Date.now(),
    }, function (err, User) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/holidayPackages');
        }
    });
});



module.exports = router;













