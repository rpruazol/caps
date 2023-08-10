'use strict';

const Order = require('./customer.js');

const {io} = require('socket.io-client');

const client = io('ws://localhost:3000/caps');

client.on('delivered', deliveredOrder)

function deliveredOrder(payload) {
  console.log(`Thank you for your order, ${payload.customer}!`);
}

client.on('in-transit', (payload) => {
  console.log('on the way!')
})
// setInterval(() => {
// }, 10000);

client.emit('pickup', new Order('1-206-flowers'))
// module.exports = { vendorOrder, deliveredOrder };
