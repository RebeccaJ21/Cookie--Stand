'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',' 8pm'];

var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var pike = {

  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  render: function() {
    var ulEl = document.getElementById('firstandpike');

    for(var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeName[0] + ': ' + this.hours[i] + hours;
      ulEl.appendChild(liEl);
    }
  }
};

pike.render();