'use strict';

var horas, fecha, c = 1;
var app = document.getElementById('wrap');

function Store(storeName,minHourly,maxHourly,avgSalesPersonStore) {
  this.name = storeName;
  this.storeHours = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
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
  for (var x = 0; x < 14; x++) {
    pike.custHour();
    this.numCookies.push(pike.custHour());
  }
};

Store.prototype.createTable = function(){

  var tableBox = document.createElement('table');
  var header = document.createElement('th');
  var tableRow = document.createElement('tr');
  var tableColumn = document.createElement('td');
  header.textContent = this.name;
  tableRow.appendChild(header);


  var tableRow1 = document.createElement('tr');
  for (i = 0;i < 15 && c === 1 ; i++) {
    fecha = document.createElement('td');
    fecha.textContent = this.storeHours[i];
    console.log(fecha);
    tableRow1.appendChild(fecha);
    tableBox.appendChild(tableRow1);
    app.appendChild(tableBox);
  }
  c = 0;
  for (var i = 0;i < 16; i++) {
    horas = document.createElement('td');
    horas.textContent = this.numCookies[i];
    console.log(this.numCookies[i]);
    tableRow.appendChild(horas);
    tableBox.appendChild(tableRow);
    app.appendChild(tableBox);
  }

//  return tableBox;

};



var pike = new Store('1st and Pike',23,65,6.3);
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
