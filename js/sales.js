'use strict';

let hoursOfOperationArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minimumCustomerPerHour, maximumCustomerPerHour, avgCookieSalesPerCustomer) {
  this.name = name;
  this.minimumCustomerPerHour = minimumCustomerPerHour;
  this.maximumCustomerPerHour = maximumCustomerPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.dailyTotalCookieSales = 0;
  this.render();
}



Store.prototype.generateRandomCustomerPerHour = function () {
  return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  // Math.random [inclusive] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

Store.prototype.calculateCookiesSoldPerHour = function () {
  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
    let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
    // Need to push the information into the array in order to get current totals
    this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
    this.dailyTotalCookieSales += cookiesSoldCurrentHour;
  }
  console.log(this.dailyTotalCookieSales);
};

// create a METHOD to render the list items to the sales.html page.
Store.prototype.render = function () {
  this.calculateCookiesSoldPerHour();
  let salmonSalesTable = document.getElementById('salmonCookiesSalesData');
  let tr = document.createElement('tr');
  salmonSalesTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }
  // Create a method to populate 'Daily Location Total' column
  console.log(this.dailyTotalCookieSales);
  let td = document.createElement('td');
  td.textContent = this.dailyTotalCookieSales;
  tr.appendChild(td);

  // let tfoot = document.createElement('totalSalesData');
  // tfoot.textContent = `${this.cookiesSoldPerHourArray[0]}`;
  // td.appendChild(tfoot);
};

let jerkRow = function () {
  let salmonSalesTable = document.getElementById('salmonCookiesSalesData');
  let thead = document.createElement('thead');
  salmonSalesTable.appendChild(thead);

  let tr =  document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = hoursOfOperationArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = ('Daily Total Sales');
  tr.appendChild(td);

  let tfoot = document.createElement('tfoot');
  tr.appendChild(tfoot);
};


// thead = header ROW of table
// th = header OF the specific row


// Store.prototype.calculateHourlyTotals = function () {
//   let tfoot = document.getElementById

let seattleLocation = new Store('Seattle', 23, 65, 6.3);
let tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
let dubaiLocation = new Store('Dubai', 11, 38, 3.7);
let parisLocation = new Store('Paris', 20, 38, 2.3);
let limaLocation = new Store('Lima', 2, 16, 4.6);

jerkRow();
