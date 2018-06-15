'use strict';

const neeoapi = require('neeo-sdk');

const controller2 = {
  onButtonPressed: function onButtonPressed(name) {
    console.log(`[NEAR-CONTROLLER] ${name} button pressed`);

    // TODO implement the actions for your device here
  }
  }
};

const device2test = neeoapi.buildDevice('Device 2')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('device 2')
  .setType('TV')

  .addButton({ name: 'button-2', label: 'Button 2' })
  .addButtonHandler(controller2.onButtonPressed);

module.exports = device2test;