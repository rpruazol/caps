'use strict'

const {pickupConfirmation, deliveredConfirmation} = require('./handler')
const {pickup, inTransit, delivered} = require('../../eventPool.js')
const {io} = require('socket.io-client');
const client = io('ws://localhost:3000/caps');


client.on(pickup, (payload) => {
  pickupConfirmation(payload, client)
  setTimeout(() => {
    deliveredConfirmation(payload, client)}
    , 1000);
});