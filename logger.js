'use strict';

const eventEmitter = require('./eventPool.js');

eventEmitter.on('pickup', logger)
eventEmitter.on('delivered', logger)
eventEmitter.on('in-transit', logger)


function logger(payload, event){
  const log = {
    event,
    time: new Date().toISOString(),
    payload
  }

  console.log('EVENT', log);
}