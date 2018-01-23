'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];

var allCookieStores = [];

var cookieSalesTable = document.getElementById('storeTable');

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHour = [];
  this.totalCookies = [];
  allCookieStores.push(this);
}

function makeHeaderRow() {
  var storeEl = document.createElement('td');
  storeEl.textContent = 'Store';
  storeEl.style.textDecoration = 'underline';

  var trEl = document.createElement('tr');
  trEl.appendChild(storeEl);
  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total Sales';
  trEl.appendChild(totalEl);
  cookieSalesTable.appendChild(trEl);
}

Store.prototype.calculateCustomersPerHour = function() {
  var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  console.log('before round', randomCustomer);
  randomCustomer = Math.round(randomCustomer);
  console.log('after round', randomCustomer);
  return randomCustomer;
  //calculates a random customer per hour
};

Store.prototype.calculateCookiesPerHour = function() {
  var cookiesPerHour = this.calculateCustomersPerHour() * this.avgCookies;
  console.log('before round' , cookiesPerHour);
  cookiesPerHour = Math.round(cookiesPerHour);
  console.log('after round', cookiesPerHour);
  return cookiesPerHour;
};

Store.prototype.calculateTotalCookiesPerStore = function() {
  var storeTotal = 0;
  for (var i = 0; i < hours.length; i++) {
  
    var cookies = this.calculateCookiesPerHour();
    console.log(cookies);
    this.cookiesSoldPerHour.push(cookies);
    console.log(this.cookiesSoldPerHour);
    storeTotal += cookies;
    console.log(storeTotal);
    this.totalCookies.push(storeTotal);
  }
  return this.totalCookies;
};

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


Store.prototype.render = function() {
  var sales = this.calculateTotalCookiesPerStore();
  console.log(sales);

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  // var dailySales = this.totalCookies;
  // console.log(dailySales);
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);


  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHour[i];
    trEl.appendChild(tdEl);

    var thEl = document.createElement('th');
    thEl.textContent = sales[i];
  }
  trEl.appendChild(thEl);
  cookieSalesTable.appendChild(trEl);
};


makeHeaderRow();
pike.render();
airport.render();
seattleCenter.render();
capitalHill.render();
alki.render();
