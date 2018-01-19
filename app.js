'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var pike = {
  //name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomCustomers: function() {
    var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);
    return randomCustomer;
  },
  cookiesPerHour: function() {
    var cookiesSoldPerHour = this.randomCustomers() * this.avgCookies;
    console.log('before round', cookiesSoldPerHour);
    cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
    console.log('after round', cookiesSoldPerHour);
    return cookiesSoldPerHour;
  },
  totalSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i <= hours.length; i++) {
      if(i === (hours.length)) {
        sales[i] = total;
        console.log(hours[i], sales[i]);
      } else {
        sales[i] = this.cookiesPerHour();
        console.log(hours[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    }
    console.log(sales);
    return sales;
  },
  render: function() {
    var ulEl = document.getElementById('pike');
    var dailySales = this.totalSales();
    console.log(dailySales);
    for (var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dailySales[i] + ' cookies';
        ulEl.appendChild(liEl);
      } else {
        var totalEl = document.createElement('total');
        totalEl.textContent = 'Total:  ' + dailySales[i];
        ulEl.appendChild(totalEl);
      }
    }
  }
};

var airport = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomCustomers: function() {
    var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);
    return randomCustomer;
  },
  cookiesPerHour: function() {
    var cookiesSoldPerHour = this.randomCustomers() * this.avgCookies;
    console.log('before round', cookiesSoldPerHour);
    cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
    console.log('after round', cookiesSoldPerHour);
    return cookiesSoldPerHour;
  },
  totalSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i <= hours.length; i++) {
      if(i === (hours.length)) {
        sales[i] = total;
        console.log(hours[i], sales[i]);
      } else {
        sales[i] = this.cookiesPerHour();
        console.log(hours[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    }
    console.log(sales);
    return sales;
  },
  render: function() {
    var ulEl = document.getElementById('airport');
    var dailySales = this.totalSales();
    console.log(dailySales);
    for (var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dailySales[i] + ' cookies';
        ulEl.appendChild(liEl);
      } else {
        var totalEl = document.createElement('total');
        totalEl.textContent = 'Total:  ' + dailySales[i];
        ulEl.appendChild(totalEl);
      }
    }
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomCustomers: function() {
    var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);
    return randomCustomer;
  },
  cookiesPerHour: function() {
    var cookiesSoldPerHour = this.randomCustomers() * this.avgCookies;
    console.log('before round', cookiesSoldPerHour);
    cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
    console.log('after round', cookiesSoldPerHour);
    return cookiesSoldPerHour;
  },
  totalSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i <= hours.length; i++) {
      if(i === (hours.length)) {
        sales[i] = total;
        console.log(hours[i], sales[i]);
      } else {
        sales[i] = this.cookiesPerHour();
        console.log(hours[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    }
    console.log(sales);
    return sales;
  },
  render: function() {
    var ulEl = document.getElementById('seattleCenter');
    var dailySales = this.totalSales();
    console.log(dailySales);
    for (var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dailySales[i] + ' cookies';
        ulEl.appendChild(liEl);
      } else {
        var totalEl = document.createElement('total');
        totalEl.textContent = 'Total:  ' + dailySales[i];
        ulEl.appendChild(totalEl);
      }
    }
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 3.7,
  randomCustomers: function() {
    var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);
    return randomCustomer;
  },
  cookiesPerHour: function() {
    var cookiesSoldPerHour = this.randomCustomers() * this.avgCookies;
    console.log('before round', cookiesSoldPerHour);
    cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
    console.log('after round', cookiesSoldPerHour);
    return cookiesSoldPerHour;
  },
  totalSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i <= hours.length; i++) {
      if(i === (hours.length)) {
        sales[i] = total;
        console.log(hours[i], sales[i]);
      } else {
        sales[i] = this.cookiesPerHour();
        console.log(hours[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    }
    console.log(sales);
    return sales;
  },
  render: function() {
    var ulEl = document.getElementById('capitolHill');
    var dailySales = this.totalSales();
    console.log(dailySales);
    for (var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dailySales[i] + ' cookies';
        ulEl.appendChild(liEl);
      } else {
        var totalEl = document.createElement('total');
        totalEl.textContent = 'Total:  ' + dailySales[i];
        ulEl.appendChild(totalEl);
      }
    }
  }
};
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCustomers: function() {
    var randomCustomer = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);
    return randomCustomer;
  },
  cookiesPerHour: function() {
    var cookiesSoldPerHour = this.randomCustomers() * this.avgCookies;
    console.log('before round', cookiesSoldPerHour);
    cookiesSoldPerHour = Math.round(cookiesSoldPerHour);
    console.log('after round', cookiesSoldPerHour);
    return cookiesSoldPerHour;
  },
  totalSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        sales[i] = this.cookiesPerHour();
        console.log(hours[i] + sales[i]);
        total += parseInt(sales[i]);
      } else {
        sales[i] = total;
        console.log(hours[i], sales[i]);
      }
    }
    console.log(sales);
    return sales;
  },
  render: function() {
    var ulEl = document.getElementById('alki');
    var dailySales = this.totalSales();
    console.log(dailySales);
    for (var i = 0; i <= hours.length; i++) {
      if(i < (hours.length)) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dailySales[i] + ' cookies';
        ulEl.appendChild(liEl);
      } else {
        var totalEl = document.createElement('total');
        totalEl.textContent = 'Total:  ' + dailySales[i];
        ulEl.appendChild(totalEl);
      }
    }
  }
};
pike.render();
airport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
