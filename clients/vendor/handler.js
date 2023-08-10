'use strict';

const Order = require('./customer.js');

const {io} = require('socket.io-client');

const socket = io('ws://localhost:3000/caps');
console.log(socket)
// socket.on('connect', () => {
//   console.log('socket')
//   // socket.on('pickup', vendorOrder);
//   socket.on('delivered', deliveredOrder);
// })


// function vendorOrder(vendor) {
//   console.log('order sent!')
//   socket.emit('pickup', new Order(vendor));
// }

function deliveredOrder(payload) {
  console.log(`Thank you for your order, ${payload.customer}!`);
}

setInterval(() => {
  socket.emit('pickup', new Order('1-206-flowers'))
}, 2000);

// module.exports = { vendorOrder, deliveredOrder };
