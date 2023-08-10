"use strict";

const { Server } = require("socket.io");

const io = new Server();

io.listen(3000);

const caps = io.of("/caps");

caps.on("connection", (socket) => {
  console.log("client connected.  id>>", socket.id);
  // orderReceivedListener(payload);
    socket.on("pickup", (payload) => {
      socket.join(payload.vendorId);
      console.log('order received!  creating room..')
      caps.emit('pickup', payload);
    });
    socket.on('in-transit', (payload) => {
      console.log('package is in transit')
      socket.to(payload.vendorId).emit('in-transit', payload)
      socket.to(payload.vendorId).emit('delivered', payload)
    })
  })



// DONE Use the socket.io npm package to configure an event Server that can be started at a designated port using node.
// DONE Accept connections on a namespace called caps, and configure socket objects from clients.
// DONE Ensure that client sockets are connecting to their appropriate room if specified.
// Configure a Global Event Pool that every client socket should listen for:
  // pickup - this will be broadcast to all sockets except the sender.
  // in-transit - this will be emitted only to Vendors that have joined the appropriate room.
  // delivered - this will be be emitted only to Vendors that have joined the appropriate room.

