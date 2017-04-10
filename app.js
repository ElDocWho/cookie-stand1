'use strict';

var custHour;
var storeNames = ['una','dos'];

var store = {
  name: storeNames,
  minHourly: 5,
  maxHourly: 25,
};

var minH = store.minHourly;
var maxH = store.maxHourly;

function custHour(min, max) {
  min = parseInt(Math.ceil(min));
  console.log(min);
  max = parseInt(Math.floor(max));
  console.log(max);
  var total = Math.floor(Math.random() * (max - min)) + min;
  console.log(total);
  return total;
}

custHour(minH, maxH);
