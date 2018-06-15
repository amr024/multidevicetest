'use strict';

const neeoapi = require('neeo-sdk');

const controller = {
  onButtonPressed: function onButtonPressed(name) {
    console.log(`[DEVICE 2-CONTROLLER] ${name} pressed`);
  }
  };

const device2test = neeoapi.buildDevice('Device 2')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('device 2')
  .setType('ACCESSORY')

  .addButton({ name: 'button-2', label: 'Button 2' })
  .addButtonHandler(controller.onButtonPressed);

module.exports = device2test;