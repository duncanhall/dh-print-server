'use strict';

var io;
var printatronClient;

/**
 *
 * @param http
 */
function init (http) {

  io = require('socket.io')(http);
  io.on('connection', connectHandler);
}

/**
 *
 * @param socket
 */
function connectHandler (socket) {

  socket.on('printatron-client-id', function () {
    console.log('Printer client connected');
    printatronClient = socket;
  });

  socket.on('disconnect', disconnectHandler);
}

/**
 *
 */
function disconnectHandler () {
  console.log('Socket disconnected');
}

/**
 *
 * @param printJob
 */
function sendPrintRequest (printJob) {

  if (printatronClient !== undefined && printatronClient !== null) {
    printatronClient.emit('relay-print', printJob);
  }
}

exports.init = init;
exports.sendPrintRequest = sendPrintRequest;
