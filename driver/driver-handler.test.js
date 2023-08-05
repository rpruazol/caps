'use strict';




const eventEmitter = require('../eventPool.js');
const pickupConfirmation = require('./handler.js')

const randomOrder = require('../vendor/customer.js');


describe('event emitter for order pickup', () => {
  let consoleSpy;
  let orderSpy;
  
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    // orderSpy = jest.spyOn(pickupConfirmation, 'payload').mockImplementation();

  });


  afterEach(() => {
    consoleSpy.mockRestore();
  })

  it('pick up an order', async () => {
    pickupConfirmation(randomOrder());
    expect(consoleSpy).toHaveBeenCalled();
  })
})