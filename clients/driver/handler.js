"use strict";

const {pickup, inTransit, delivered, received} = require('../../eventPool.js')


function pickupConfirmation(payload, socket) {
  console.log(`picking up ${payload.orderId}`);
  socket.emit(received, payload)
  socket.emit(inTransit, payload);
}

function deliveredConfirmation(payload, socket) {
  console.log(`delivered ${payload.orderId}`);
  socket.emit(delivered, payload);
}

module.exports = { pickupConfirmation, deliveredConfirmation };
