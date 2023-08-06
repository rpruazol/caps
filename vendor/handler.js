'use strict';

const eventEmitter = require('../eventPool.js');
const Order = require('./customer.js');

// eventEmitter.on('pickup', vendorOrder);
eventEmitter.on('delivered', deliveredOrder);

function vendorOrder(vendor) {
  eventEmitter.emit('pickup', new Order(vendor), 'pickup');
}

function deliveredOrder(payload) {
  console.log(`Thank you for your order, ${payload.customer}!`);
}

vendorOrder('amazon');

module.exports = { vendorOrder, deliveredOrder };
