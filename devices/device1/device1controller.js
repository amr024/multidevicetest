'use strict';

const neeoapi = require('neeo-sdk');

const controller = {
  onButtonPressed: function onButtonPressed(name) {
    console.log(`[DEVICE 1-CONTROLLER] ${name} button pressed`);
  }
  };

const device1test = neeoapi.buildDevice('Device 1')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('device 1')
  .setType('ACCESSORY')

  .addButton({ name: 'button-1', label: 'Button 1' })
  .addButtonHandler(controller.onButtonPressed);

module.exports = device1test;