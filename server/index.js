'use strict';


const {Server} = require('socket.io');

const io = new Server(3000);

const caps = io.of('/caps');

caps.on('connection', (socket) => {
  console.log('client connected.  id>>', socket.id);
});



// DONE Use the socket.io npm package to configure an event Server that can be started at a designated port using node.
// DONE Accept connections on a namespace called caps, and configure socket objects from clients.
// Ensure that client sockets are connecting to their appropriate room if specified.
// Configure a Global Event Pool that every client socket should listen for:
// pickup - this will be broadcast to all sockets except the sender.
// in-transit - this will be emitted only to Vendors that have joined the appropriate room.
// delivered - this will be be emitted only to Vendors that have joined the appropriate room.

//     NOTE: You may need to create an extra event here that allows clients to join rooms.

