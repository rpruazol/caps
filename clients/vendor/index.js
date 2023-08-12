'use strict';

const {deliveredOrder, orderInTransit} = require('./handler')
const Order = require('./customer')
const {io} = require('socket.io-client');
const client = io(
  'ws://localhost:3000/caps',
  {
    auth: {
      role: 'vendor'
    }
  }
  );
const {pickup, inTransit, delivered} = require('../../eventPool.js')


client.on(delivered, deliveredOrder);
client.on(inTransit, orderInTransit);



setInterval(() => {
  client.emit('pickup', new Order('1-206-flowers'))
}, 50000);
