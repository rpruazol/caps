'use strict';

const eventEmitter = require('../eventPool.js');
const randomOrder = require('./customer.js')

// eventEmitter.on('pickup', vendorOrder);
eventEmitter.on('delivered', deliveredOrder);

function vendorOrder(payload){
// the payload will have the vendor order, but not sure what this function will actually be doing...
eventEmitter.emit('pickup', payload)
}

function deliveredOrder(payload){
  console.log(`Thank you for your order, ${payload.customer}!`);
}

function generateOrder(store){
  const order = randomOrder('amazon');
  console.log(order);
  eventEmitter.emit('pickup', order);
}

generateOrder();