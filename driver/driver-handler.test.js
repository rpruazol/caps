'use strict';




const eventEmitter = require('../eventPool.js');
const pickupConfirmation = require('./handler.js')

const Order = require('../vendor/customer.js');


describe('event emitter for order pickup', () => {
  let consoleSpy;
  let orderSpy;
  let emitSpy;
  
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    // orderSpy = jest.spyOn(pickupConfirmation, 'payload').mockImplementation();
    emitSpy = jest.spyOn(eventEmitter, 'emit').mockImplementation();
  });


  afterEach(() => {
    consoleSpy.mockRestore();
  })

  it('pick up an order', async () => {
    let order = new Order('amazon');
    pickupConfirmation(order);
    expect(consoleSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith('in-transit', order, 'in-transit');
    expect(emitSpy).toHaveBeenCalledWith('delivered', order, 'delivered');

  })
})