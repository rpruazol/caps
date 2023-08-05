'use strict';

const eventEmitter = require('../eventPool.js');
const randomOrder = require('./customer.js');

// eventEmitter.on('pickup', vendorOrder);
eventEmitter.on('delivered', deliveredOrder);

function vendorOrder(vendor){
// the payload will have the vendor order, but not sure what this function will actually be doing...
const order = randomOrder(vendor);
eventEmitter.emit('pickup', order, 'pickup');
}

function deliveredOrder(payload){
  console.log(`Thank you for your order, ${payload.customer}!`);
}



vendorOrder('amazon')