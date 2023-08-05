'use strict';


const eventEmitter = require('../eventPool.js');


eventEmitter.on('pickup', pickupConfirmation);



function pickupConfirmation(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`)
  eventEmitter.emit('in-transit', payload);
  eventEmitter.emit('delivered', payload);
}