'use strict';


const eventEmitter = require('../eventPool.js');


eventEmitter.on('pickup', pickupConfirmation);



function pickupConfirmation(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`)
  
  eventEmitter.emit('in-transit', payload, 'in-transit');
  eventEmitter.emit('delivered', payload, 'in-transit');
}

module.exports = pickupConfirmation;