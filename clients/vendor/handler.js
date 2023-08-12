'use strict';

const Order = require('./customer.js');



function deliveredOrder(payload) {
  console.log(`Thank you for your order, ${payload.customer}!`);
}

function orderInTransit(payload) {
  console.log(`Order ${payload.orderId} on the way!`)
}



module.exports = { orderInTransit, deliveredOrder };
