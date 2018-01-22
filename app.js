'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];

var allCookieStores = [];

var cookieSalesTable = document.getElementById('storeTable');

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  allCookieStores.push(this);
}
allCookieStores = [];

Store.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);

  cookieSalesTable.appendChild(trEl);
}

var pike = new Store ('1st and Pike', 23, 65, 6.3);
console.log(pike);
var airport = new Store ('SeaTac Airport', 3, 24, 1.2);
console.log(airport);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
var capitalHill = new Store ('Capitol Hill', 20, 38, 2.3);
console.log(capitalHill);
var alki = new Store ('Alki', 2, 16, 4.6);
console.log(alki);


Store.prototype.calculateCustomersPerHour = function() {
  var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  console.log('before round'. randomCustomer);
  randomCustomer = Math.round(randomCustomer);
  console.log('after round', randomCustomer);
  return Math.round(this.calculateCustomersPerHour);
  
  //calculates a random customer per hour
};

Store.prototype.calculateCookiesPerHour = function() {
  var cookiesSoldPerHour = Math.random() * (this.maxcust - this.minCust + 1) + this.minCust;
  console.log('beforeround' , cookiesSoldPerHour);
  cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
  console.log('after round', cookiesSoldPerHour);
  return Math.round(this.calculateCookiesPerHour);
};
Store.prototype.calculateTotalCookiesPerStore = function() {
  for(var i = 0; i < hours.leangth; i++) {
    var totalCookies = this.calculateCookiesPerHour();
    this.calculateCookiesPerHour.push(totalCookies);

  }
};
Store.prototype.render = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.leangth; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookies;
  trEl.appendChild(thEl);
  cookieSalesTable.appendChild(trEl);
};

function makeFooterRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Totals Sales for All Stores';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var totalCookies = 0;
    for(var j in Store.all) {
      totalCookies += Store.allStores[j].cookiesSoldPerHour;
      thEl.createElement('th');
      thEl.textContent = totalCookies;
      trEl.appendChild(thEl);

    }
    cookieSalesTable.appendChild(trEl);
  }
}

makeHeaderRow();
pike.render();
airport.render();
seattleCenter.render();
capitalHill.render();
alki.render();
makeFooterRow();
