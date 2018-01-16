'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];
//15 hours
var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  render: function() {
    var ulEl = document.getElementById('firstandpike');
    var randomCustomer = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    console.log('before round', randomCustomer);
    randomCustomer = Math.round(randomCustomer);
    console.log('after round', randomCustomer);


    for(var i = 0; i < this.hours; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeName[i] + ': ' + this.hours[i] + hours;
      ulEl.appendChild(liEl);
    }
  }
};

pike.render();