'use strict';

const neeoapi = require('neeo-sdk');

const controller1 = {
  onButtonPressed: function onButtonPressed(name) {
    console.log(`[NEAR-CONTROLLER] ${name} button pressed`);

    // TODO implement the actions for your device here
  }
  }
};

const device1test = neeoapi.buildDevice('Device 1')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('device 1')
  .setType('TV')

  .addButton({ name: 'button-1', label: 'Button 1' })
  .addButtonHandler(controller1.onButtonPressed);

module.exports = device1test;