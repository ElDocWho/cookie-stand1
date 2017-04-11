'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(storeName,minHourly,maxHourly,avgSalesPersonStore) {
  this.name = storeName;
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
    console.log(this.numCookies);
    this.numCookies.push(pike.custHour());
  }
};

var pike = new Store('1st and Pike',23,65,6.3);
pike.addNumCookies();
var seaTac = new Store('Seatac Airport',3,24,1.2);
seaTac.addNumCookies();
var seattleCenter = new Store('Seattle Center',11,38,3.7);
seattleCenter.addNumCookies();
var capitolHill = new Store('Capitol Hill',20,38,2.3);
capitolHill.addNumCookies();
var alki = new Store('Alki',2,16,4.6);
alki.addNumCookies();
