"use strict";

const { Server } = require("socket.io");

const {pickup, inTransit, delivered} = require('../eventPool.js');
const logger = require('../logger.js');
const io = new Server();

io.listen(3000);

const caps = io.of("/caps");



caps.on("connection", (socket) => {
  console.log("client connected.  id>>", socket.id);
    handleEvents(socket);
  })


  function handlePickup(payload, socket){
      socket.join(payload.vendorId);
      console.log('order received!  creating room..')
      caps.emit('pickup', payload);
      logger(payload, pickup)
    }

  function handleEvents(socket){
    socket.on(pickup, (payload) => handlePickup(payload, socket));
    socket.on(inTransit, (payload) => handleInTransit(payload, socket));
    socket.on(delivered, (payload) => handleDelivered(payload, socket));
  }

  function handleInTransit(payload, socket){
      console.log('package is in transit', payload)
      socket.to(payload.vendorId).emit('in-transit', payload)
      logger(payload, inTransit)
  }

  function handleDelivered(payload, socket){
      socket.to(payload.vendorId).emit('delivered', payload)
      logger(payload, delivered)
  }

