'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];

function cookieStore(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
  this.cookieDailyTotal = 0;
}

cookieStore.prototype.render = function() {
  var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  console.log('before round'. randomCustomer);
  randomCustomer = Math.round(randomCustomer);
  console.log('after round', randomCustomer);

  cookieStore.prototype.cookiesPerHour = function () {
    this.avgCookies * randomCustomer;
    return Math.round(this.cookiesPerHour);
  };
  cookieStore.prototype.hours = function () {
    for(var i = 0; i < hours.length; i++) {
      var cookieTotal = this.cookiesPerHour();
      this.cookiesPerHour.push(cookieTotal);
      this.cookieDailyTotal += cookieTotal;
    }
  };
};
