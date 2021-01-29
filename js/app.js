'use strict';

console.log('Greetings ALOYSIOUS!');

//    Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies

{/* <ul id="Seattle">Seattle</ul> */ }


let hoursOfOperationArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(hoursOfOperationArray);

let seattle = {
  name: 'Seattle',
  minimumCustomerPerHour: 23,
  maximumCustomerPerHour: 65,
  avgCookieSalesPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotalCookieSales: 0,
  // create a METHOD to calcucalte random number of customers per hour.
  generateRandomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  // Math.random [inclusive] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  },
  // create a METHOD to calculate and populate the number of cookies sold per hour array.
  calculateCookiesSoldPerHour: function () {
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
      let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
      // Need to push the information into the array / get current totals
      this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
      this.dailyTotalCookieSales += cookiesSoldCurrentHour;
      // console.log(`Total Customers > by the hour < = ${currentlHourlyCustomer}, Total cookies sold this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyTotalCookieSales);
    }
  },
  // create a METHOD to render the list items to the sales.html page.
  render: function () {
    this.calculateCookiesSoldPerHour();
    // console.log('evidence that i am inside of this render ma jig aka method?');
    let seattleStorefront = document.getElementById('Seattle');
    // console.log(seattleStorefront + 'is this thing real?');
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      seattleStorefront.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotalCookieSales}`;
    seattleStorefront.appendChild(li);
  },
};



