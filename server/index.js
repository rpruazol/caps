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
    })
    socket.on('delivered', (payload) => {
      socket.to(payload.vendorId).emit('delivered', payload)
    })
  })
