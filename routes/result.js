var express = require('express');
var router = express();

/* GET rate result. */
router.get('/', handleRateCalc);

function handleRateCalc(req, res) {
    const type = req.query.type;
    const weight = Number(req.query.weight);
  
    calcRate(res, type, weight);
}

function calcRate (res, type, weight) {
	type = type.toLowerCase();

	let result = 0;

    // calculate rate
	if (type == "letters (stamped)") {
        if (weight <= 1) {
            result = 0.55;
        } else if (weight <= 2) {
            result = 0.70;
        } else if (weight <= 3) {
            result = 0.85;
        } else {
            result = 1.00;
        }
	} else if (type == "letters (metered)") {
		if (weight <= 1) {
            result = 0.50;
        } else if (weight <= 2) {
            result = 0.65;
        } else if (weight <= 3) {
            result = 0.80;
        } else {
            result = 0.95;
        }		
	} else if (type == "large envelopes") {
		if (weight <= 1) {
            result = 1.00;
        } else if (weight <= 2) {
            result = 1.20;
        } else if (weight <= 3) {
            result = 1.40;
        } else if (weight <= 4) {
            result = 1.60;
        } else if (weight <= 5) {
            result = 1.80;
        } else if (weight <= 6) {
            result = 2.00;
        } else if (weight <= 7) {
            result = 2.20;
        } else if (weight <= 8) {
            result = 2.40;
        } else if (weight <= 9) {
            result = 2.60;
        } else if (weight <= 10) {
            result = 2.80;
        } else if (weight <= 11) {
            result = 3.00;
        } else if (weight <= 12) {
            result = 3.20;
        } else {
            result = 3.40;
        }
	} else if (type == "first-class package service—retail") {
		if (weight <= 4) {
            result =  3.80;
        } else if (weight <= 8) {
            result = 4.60;
        } else if (weight <= 12) {
            result = 5.30;
        } else {
            result = 5.90;
        }
	} else {
        //unknown option
        res.send("An unknown option has been selection");
    }
    
    const params = { type: type, weight: weight, result: result }

    res.render('result', params);
}

module.exports = router;