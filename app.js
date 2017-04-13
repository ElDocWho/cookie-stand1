'use strict';

var app = document.getElementById('wrap');
var elStoreForm = document.getElementById('newStoreForm');

function Store(storeName,minHourly,maxHourly,avgSalesPersonStore) {
  this.name = storeName;
  this.storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Totals'];
  this.minHourly = minHourly;
  this.maxHourly = maxHourly;
  this.numCookies = [];
  this.avgSalesPersonStore = avgSalesPersonStore;
}


Store.prototype.custHour = function() {
  var total = Math.floor(Math.random() * (this.maxHourly - this.minHourly) ) + this.minHourly;
  return Math.floor(total);
};

Store.prototype.addNumCookies = function () {
  for (var x = 0; x < this.storeHours.length; x++) {
    this.numCookies.push(this.custHour());
  }
};

Store.prototype.createDates = function() {

  var tableBox = document.createElement('table');
  var header = document.createElement('th');
  var tableRow = document.createElement('tr');

  header.textContent = '';
  tableRow.appendChild(header);

  for (var i = 0;i < this.storeHours.length; i++) {
    var fecha = document.createElement('td');
    fecha.textContent = this.storeHours[i];
    tableRow.appendChild(fecha);
    tableBox.appendChild(tableRow);
    app.appendChild(tableBox);
  }



};

Store.prototype.createTable = function() {

  var tableBox = document.createElement('table');
  var header = document.createElement('th');
  var tableRow = document.createElement('tr');
  var storeTotals= 0;

  header.textContent = this.name;
  tableRow.appendChild(header);


  for (var i = 0;i < (this.storeHours.length - 1); i++) {
    var horas = document.createElement('td');
    horas.textContent = this.numCookies[i];
    tableRow.appendChild(horas);
    storeTotals = storeTotals + this.numCookies[i];
  }

  horas = document.createElement('td');
  horas.textContent = storeTotals;
  tableRow.appendChild(horas);

  tableBox.appendChild(tableRow);
  app.appendChild(tableBox);

//  return tableBox; working without it.

};




var pike = new Store('1st and Pike',23,65,6.3);
pike.createDates();
pike.addNumCookies();
pike.createTable();
var seaTac = new Store('Seatac Airport',3,24,1.2);
seaTac.addNumCookies();
seaTac.createTable();
var seattleCenter = new Store('Seattle Center',11,38,3.7);
seattleCenter.addNumCookies();
seattleCenter.createTable();
var capitolHill = new Store('Capitol Hill',20,38,2.3);
capitolHill.addNumCookies();
capitolHill.createTable();
var alki = new Store('Alki',2,16,4.6);
alki.addNumCookies();
alki.createTable();

var submitButton = function(event) {
  event.preventDefault();
  var form = event.target;
  var storeLocation = form.storeLocation.value;
  var minimumCustomers = form.minimumCustomers.value;
  var maximumCustomers = form.maximumCustomers.value;
  var averageCookies = form.averageCookies.value;
  if (minimumCustomers > maximumCustomers) {
    alert('Not valid input values!!!!');
  } else {
    var formVariables = new Store(storeLocation, minimumCustomers, maximumCustomers, averageCookies);
    formVariables.addNumCookies();
    formVariables.createTable();
    form.reset();
  }
};
elStoreForm.addEventListener('submit',submitButton);
