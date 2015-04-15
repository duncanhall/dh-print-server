'use strict';

var path = require('path');
var sockets = require(path.resolve('app/sockets'));

/**
 *
 * @param req
 * @param res
 */
function addPrintJob (req, res) {

  console.dir(req.body);
  sockets.sendPrintRequest(req.body);
  res.status(200).end();
}


exports.addPrintJob = addPrintJob;