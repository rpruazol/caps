'use strict';

const {deliveredOrder, orderInTransit} = require('./handler')
const Order = require('./customer')
const {io} = require('socket.io-client');
const client = io('ws://localhost:3000/caps');

client.on('delivered', deliveredOrder);
client.on('in-transit', orderInTransit);



setInterval(() => {
  client.emit('pickup', new Order('1-206-flowers'))
}, 5000);
