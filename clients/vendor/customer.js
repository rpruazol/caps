'use strict';

const Chance = require('chance');
const chance = new Chance();
const uuid = require('uuid');


class Order{
  constructor(storename){
    this.store = storename,
    this.orderId = uuid.v4(),
    this.customer = `${chance.first({nationality: 'en'})} ${chance.last({nationality: 'en'})}`,
    this.address = `${chance.address()} ${chance.city()}, ${chance.state({ country: 'us' })}, ${chance.zip()}`
  }
}

module.exports = Order;