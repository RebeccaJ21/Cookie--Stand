'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];

function CookieStore(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
  this.cookieDailyTotal = 0;
}

CookieStore.prototype.render = function() {
  var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  console.log('before round'. randomCustomer);
  randomCustomer = Math.round(randomCustomer);
  console.log('after round', randomCustomer);
};
CookieStore.prototype.cookiesPerHour = function () {
  this.avgCookies * this.randomCustomer;
  return Math.round(this.cookiesPerHour);
};
CookieStore.prototype.hours = function () {
  for(var i = 0; i < hours.length; i++) {
    var cookieTotal = this.cookiesPerHour();
    this.cookiesPerHour.push(cookieTotal);
    this.cookieDailyTotal += cookieTotal;
  }
};

CookieStore.prototype.cookieDisplay = function() {
  var htmlDisplay = document.getElementById(this.name);
  console.log(this.name);
  for (var i = 0; i < hours.length; i++) {
    var display = hours[i] + ':' + this.cookiesPerHour[i] + 'cookies';
    console.log(display);
    var lE = document.createElement('li');
    lE.textContent = display;
    console.log(lE);
    htmlDisplay.appendChild(lE);
  }
};

var pike = new CookieStore ('1st and Pike', 23, 65, 6.3);
console.log(pike);
var airport = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
console.log(airport);
var seattleCenter = new CookieStore ('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
var capitalHill = new CookieStore ('Capitol Hill', 20, 38, 2.3);
console.log(capitalHill);
var alki = new CookieStore ('Alki', 2, 16, 4.6);
console.log(alki);
