"use strict";



function pickupConfirmation(payload, socket) {
  console.log(`picking up ${payload.vendorId}`);
  socket.emit("in-transit", payload);
}

function deliveredConfirmation(payload, socket) {
  console.log("delivered");
  socket.emit("delivered", payload);
}

module.exports = {pickupConfirmation, deliveredConfirmation}
