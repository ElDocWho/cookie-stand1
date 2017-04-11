'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var firstAndPike = {
  name: '1st and Pike',
  minHourly: 23,
  maxHourly: 65,
  numCookiesPike: [],
  avgSalesPerson: 6.3,
};

var minPike = firstAndPike.minHourly;
var maxPike = firstAndPike.maxHourly;

function custHour(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var total = Math.floor(Math.random() * (max - min)) + min;
  return total;
}

for (var hoursPike = 0;hoursPike < 14; hoursPike++) {
  var cHour = custHour(minPike, maxPike);
  firstAndPike.numCookiesPike.push(cHour);
}
console.log(firstAndPike.numCookiesPike);

var storePikeUl = document.getElementById('store-list');
console.log(storePikeUl);
var storePikeLi;
for (var i = 0; i < firstAndPike.numCookiesPike.length; i++ ){
  storePikeLi = document.createElement('li');
  storePikeLi.setAttribute('class', 'st-li');
  storePikeLi.textContent = storeHours[i] + (firstAndPike.numCookiesPike[i] * firstAndPike.avgSalesPerson);
  storePikeUl.appendChild(storePikeLi);
}

//Second store

var firstAndPike = {
  name: '1st and Pike',
  minHourly: 23,
  maxHourly: 65,
  numCookiesPike: [],
  avgSalesPerson: 6.3,
};

var minPike = firstAndPike.minHourly;
var maxPike = firstAndPike.maxHourly;

for (var hoursPike = 0;hoursPike < 14; hoursPike++) {
  var cHour = custHour(minPike, maxPike);
  firstAndPike.numCookiesPike.push(cHour);
}
console.log(firstAndPike.numCookiesPike);

var storePikeUl = document.getElementById('store-list');
console.log(storePikeUl);
var storePikeLi;
for (var i = 0; i < firstAndPike.numCookiesPike.length; i++ ){
  storePikeLi = document.createElement('li');
  storePikeLi.setAttribute('class', 'st-li');
  storePikeLi.textContent = storeHours[i] + (firstAndPike.numCookiesPike[i] * firstAndPike.avgSalesPerson);
  storePikeUl.appendChild(storePikeLi);
}
