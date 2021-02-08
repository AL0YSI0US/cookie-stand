'use strict';

let salmonSalesTable = document.getElementById('salmonCookiesSalesData');
let tfoot = document.createElement('tfoot');

let myForm = document.querySelector('form');

const allStores = [];
let footerTotals = [];
let grandTotal = 0;


let hoursOfOperationArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Store(name, minimumCustomerPerHour, maximumCustomerPerHour, avgCookieSalesPerCustomer) {
  this.name = name;
  this.minimumCustomerPerHour = minimumCustomerPerHour;
  this.maximumCustomerPerHour = maximumCustomerPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.dailyTotalCookieSales = 0;
  allStores.push(this);
  // this.render();
}



Store.prototype.generateRandomCustomerPerHour = function () {
  return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
};

Store.prototype.calculateCookiesSoldPerHour = function () {
  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
    let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
    // Need to push the information into the array in order to get current totals
    this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
    this.dailyTotalCookieSales += cookiesSoldCurrentHour;
  }
  // console.log(this.dailyTotalCookieSales);
};

// create a METHOD to render the list items to the sales.html page.
Store.prototype.render = function () {
  this.calculateCookiesSoldPerHour();
  let tbody = document.createElement('tbody');
  salmonSalesTable.appendChild(tbody);
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }
  // Create a method to populate 'Daily Location Total' column
  // console.log(this.dailyTotalCookieSales);
  let td = document.createElement('td');
  td.textContent = this.dailyTotalCookieSales;
  tr.appendChild(td);
};

let renderStores = function () {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
};

let jerkRow = function () {
  let thead = document.createElement('thead');
  salmonSalesTable.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let th = document.createElement('th');
    th.textContent = hoursOfOperationArray[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = ('Daily Total Sales');
  tr.appendChild(th);
};


let bottomLine = function () {
  calcFooterTotals();

  salmonSalesTable.appendChild(tfoot);

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = ('Hourly Totals');
  tr.appendChild(th);

  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
};

function calcFooterTotals() {
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hoursOfOperationArray.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      hourTotal += allStores[j].cookiesSoldPerHourArray[i];
    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}




function handleSubmit(event) {
  event.preventDefault();

  let locationName = event.target.location.value;
  let minCust = +event.target.mincust.value;
  let maxCust = +event.target.maxcust.value;
  let avgCookies = +event.target.avgcookies.value;

  let newStore = new Store(locationName, minCust, maxCust, avgCookies);
  newStore.render();
  document.getElementById('salmonCookiesSalesData').deleteRow(-1);
  bottomLine();
}


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

jerkRow();
renderStores();
bottomLine();

myForm.addEventListener('submit', handleSubmit);
