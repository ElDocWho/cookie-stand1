'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var firstAndPike = {
  name: '1st and Pike',
  minHourly: 23,
  maxHourly: 65,
  numCookiesPike: [],
  avgSalesPersonPike: 6.3,
};

var minPike = firstAndPike.minHourly;
var maxPike = firstAndPike.maxHourly;

function custHour(min, max) {
  console.log(min);
  console.log(max);

  var total = Math.floor(Math.random() * (max - min) ) + min;
  return Math.floor(total);
}

for (var hoursPike = 0;hoursPike < 14; hoursPike++) {
  var cHour = custHour(minPike, maxPike);
  firstAndPike.numCookiesPike.push(cHour);
}

var storeH1 = document.getElementById('pike');
storeH1.textContent = firstAndPike.name;
console.log(firstAndPike.numCookiesPike);

var storePikeUl = document.getElementById('pike-list');
console.log(storePikeUl);
var storePikeLi;
for (var i = 0; i < firstAndPike.numCookiesPike.length; i++ ){
  storePikeLi = document.createElement('li');
  storePikeLi.setAttribute('class', 'st-li');
  storePikeLi.textContent = storeHours[i] + ' ' + Math.floor(firstAndPike.numCookiesPike[i] * firstAndPike.avgSalesPersonPike);
  storePikeUl.appendChild(storePikeLi);
}

//Second store

var seaTac = {
  name: 'Seatac Airport',
  minHourly: 3,
  maxHourly: 24,
  numCookies: [],
  avgSalesPerson: 1.2,
};

var minseaTac = seaTac.minHourly;
var maxseaTac = seaTac.maxHourly;

for (var hoursseaTac = 0;hoursseaTac < 14; hoursseaTac++) {
  var cHour = custHour(minseaTac, maxseaTac);
  seaTac.numCookies.push(cHour);
}

var storeseaTacUl = document.getElementById('seaTac1-list');
var storeseaTacLi;
var storeH1 = document.getElementById('seaTac1');
storeH1.textContent = seaTac.name;

for (var i = 0; i < seaTac.numCookies.length; i++ ){
  storeseaTacLi = document.createElement('li');
  storeseaTacLi.setAttribute('class', 'st-li');
  storeseaTacLi.textContent = storeHours[i] + ' ' + Math.floor(seaTac.numCookies[i] * seaTac.avgSalesPerson);
  storeseaTacUl.appendChild(storeseaTacLi);
}

//third store

var seattle = {
  name: 'Seattle Center',
  minHourly: 11,
  maxHourly: 38,
  numCookies: [],
  avgSalesPerson: 3.7,
};

var minSeattle = seattle.minHourly;
var maxSeattle = seattle.maxHourly;

for (var hoursseattle = 0;hoursseattle < 14; hoursseattle++) {
  var cHour = custHour(minSeattle, maxSeattle);
  seattle.numCookies.push(cHour);
}

var storeseaTacUl = document.getElementById('seattle-list');
var storeseaTacLi;
var storeH1 = document.getElementById('seattle');
storeH1.textContent = seattle.name;

for (var i = 0; i < seaTac.numCookies.length; i++ ){
  storeseaTacLi = document.createElement('li');
  storeseaTacLi.setAttribute('class', 'st-li');
  storeseaTacLi.textContent = storeHours[i] + ' ' + Math.floor(seaTac.numCookies[i] * seaTac.avgSalesPerson);
  storeseaTacUl.appendChild(storeseaTacLi);
}

//fourth store

var capitol = {
  name: 'Capitol Hill',
  minHourly: 20,
  maxHourly: 38,
  numCookies: [],
  avgSalesPerson: 2.3,
};

var minCapitol = capitol.minHourly;
var maxCapitol = capitol.maxHourly;

for (var hoursCapitol = 0;hoursCapitol < 14; hoursCapitol++) {
  var cHour = custHour(minCapitol, maxCapitol);
  capitol.numCookies.push(cHour);
}

var storeCapitolUl = document.getElementById('capitol-list');
var storeCapitolLi;
var storeH1 = document.getElementById('capitol');
storeH1.textContent = capitol.name;

for (var i = 0; i < capitol.numCookies.length; i++ ){
  storeCapitolLi = document.createElement('li');
  storeCapitolLi.setAttribute('class', 'st-li');
  storeCapitolLi.textContent = storeHours[i] + ' ' + Math.floor(capitol.numCookies[i] * capitol.avgSalesPerson);
  storeCapitolUl.appendChild(storeCapitolLi);
}

//fifth store

var alki = {
  name: 'Alki',
  minHourly: 2,
  maxHourly: 16,
  numCookies: [],
  avgSalesPerson: 4.6,
};

var minAlki = alki.minHourly;
var maxAlki = alki.maxHourly;

for (var hoursAlki = 0;hoursAlki < 14; hoursAlki++) {
  var cHour = custHour(minAlki, maxAlki);
  alki.numCookies.push(cHour);
}

var storeAlkiUl = document.getElementById('Alki-list');
var storeAlkiLi;
var storeH1 = document.getElementById('Alki');
storeH1.textContent = alki.name;

for (var i = 0; i < alki.numCookies.length; i++ ){
  storeAlkiLi = document.createElement('li');
  storeAlkiLi.setAttribute('class', 'st-li');
  storeAlkiLi.textContent = storeHours[i] + ' ' + Math.floor(alki.numCookies[i] * alki.avgSalesPerson);
  storeAlkiUl.appendChild(storeAlkiLi);
}
