'use strict';

const {io} = require('socket.io-client');
const socket = io('ws://localhost:3000/caps');



socket.on("pickup", (payload) => {
  console.log(`picking up ${payload.vendorId}`)
  socket.emit('in-transit', payload);
  socket.emit('delivered', payload)
})


// module.exports = pickupConfirmation;