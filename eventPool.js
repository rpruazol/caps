'use strict';

// Export a single EventEmitter from the Node JS module.
// Should be imported by any module that needs to notify or be alerted by other modules of an event.

const EventEmitter = require('events');


const eventEmitter = new EventEmitter();


module.exports = eventEmitter;