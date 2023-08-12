"use strict";

function pickupConfirmation(payload, socket) {
  console.log(`picking up ${payload.orderId}`);
  socket.emit("in-transit", payload);
}

function deliveredConfirmation(payload, socket) {
  console.log(`delivered ${payload.orderId}`);
  socket.emit("delivered", payload);
}

module.exports = { pickupConfirmation, deliveredConfirmation };
