'use strict';

const eventEmitter = require('../eventPool.js');
const {vendorOrder, deliveredOrder} = require('./handler.js')
const randomOrder = require('./customer.js');



describe('event emitter for order pickup', () => {
  let consoleSpy;
  let orderSpy;
  
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    orderSpy = jest.spyOn(eventEmitter, 'emit');
  });


  afterEach(() => {
    consoleSpy.mockRestore();
  })

  it('pick up an order', () => {
    vendorOrder('amazon');
    expect(consoleSpy).toHaveBeenCalled();
    expect(orderSpy).toHaveBeenCalled();
  })
})