'use strict';

const Chance = require('chance');
const chance = new Chance();
const uuid = require('uuid');


function randomOrder(storename){
  const payload = {
    store: storename,
    orderId: uuid.v4(),
    customer: `${chance.first({nationality: 'en'})} ${chance.last({nationality: 'en'})}`,
    address: `${chance.address()} ${chance.city()}, ${chance.state({ country: 'us' })}, ${chance.zip()}`
  }
  return payload;

}

module.exports = randomOrder;