'use strict'

const {pickupConfirmation, deliveredConfirmation} = require('./handler')
const {pickup, inTransit, delivered, received} = require('../../eventPool.js')
const {io} = require('socket.io-client');
const client = io(
  'ws://localhost:3000/caps',
  {
    auth: {
      role: 'driver'
    }
  }
  );

  function init(){
    console.log('driver initial connection')
    client.emit('getAll');
  }
  
  init();

client.on(pickup, (payload) => {
  pickupConfirmation(payload, client)
  setTimeout(() => {
    deliveredConfirmation(payload, client)}
    , 5000);
});


