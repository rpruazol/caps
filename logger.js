'use strict';

function logger(payload, event){
  const log = {
    event,
    time: new Date().toISOString(),
    payload
  }

  console.log('EVENT', log);
}

module.exports = logger