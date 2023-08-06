'use strict';

const eventEmitter = require('../eventPool.js');
const randomOrder = require('./customer.js');

// eventEmitter.on('pickup', vendorOrder);
eventEmitter.on('delivered', deliveredOrder);

function vendorOrder(vendor) {
  console.log('hello world');
  const order = randomOrder(vendor);
  eventEmitter.emit('pickup', order, 'pickup');
}

function deliveredOrder(payload) {
  console.log(`Thank you for your order, ${payload.customer}!`);
}

vendorOrder('amazon');

module.exports = { vendorOrder, deliveredOrder };
