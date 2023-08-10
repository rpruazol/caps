'use strict';

const {io} = require('socket.io-client');
const socket = io('ws://localhost:3000/caps');



socket.on("pickup", (payload) => {
  console.log(`picking up ${payload.vendorId}`)
  socket.emit('in-transit', payload);
  setTimeout(() => {
    console.log('delivered')
    socket.emit('delivered', payload)
  }, 2000)
  
})


// module.exports = pickupConfirmation;