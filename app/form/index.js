'use strict';

var router = require('express').Router();
var form = require('./controller');

router.post('/add-print-job', form.addPrintJob);

exports.router = router;