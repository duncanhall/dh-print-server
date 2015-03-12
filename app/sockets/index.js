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
    printatronClient = socket;
  });

  socket.on('print-request', printRequestHandler);
  socket.on('disconnect', disconnectHandler);
}

/**
 *
 * @param printRequest
 */
function printRequestHandler (printRequest) {

  if (printatronClient !== undefined && printatronClient !== null) {
    printatronClient.emit('relay-print', printRequest);
  }
}

/**
 *
 */
function disconnectHandler () {
  console.log('Socket disconnected');
}

exports.init = init;
