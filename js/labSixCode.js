// Seattle: 23, 65, 6.3
// Tokyo: 3, 24, 1.2
// Dubai: 11, 38, 3.7
// Paris: 20, 38, 2.3
// Lima: 2, 16, 4.6

// [1] Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.
// BRANCK NAME: [ constructorMadness ]                 >>> COMPLETED <<<

// [2] Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.                           >>> Checkout <<<
//                                                >>> push when constructor function is operational <<<
//                                                >>>

// [3] Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// [4] Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.





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
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      seattleStorefront.appendChild(li);
    }

  },
};

let tokyo = {
  name: 'Tokyo',
  minimumCustomerPerHour: 3,
  maximumCustomerPerHour: 24,
  avgCookieSalesPerCustomer: 1.2,
  cookiesSoldPerHourArray: [],
  dailyTotalCookieSales: 0,
  generateRandomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  },
  calculateCookiesSoldPerHour: function () {
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
      let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
      this.dailyTotalCookieSales += cookiesSoldCurrentHour;
    }
  },
  render: function () {
    this.calculateCookiesSoldPerHour();
    let tokyoStorefront = document.getElementById('Tokyo');
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      tokyoStorefront.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotalCookieSales}`;
    tokyoStorefront.appendChild(li);
  },
};

let dubai = {
  name: 'Dubai',
  minimumCustomerPerHour: 11,
  maximumCustomerPerHour: 38,
  avgCookieSalesPerCustomer: 3.7,
  cookiesSoldPerHourArray: [],
  dailyTotalCookieSales: 0,
  generateRandomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  },
  calculateCookiesSoldPerHour: function () {
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
      let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
      this.dailyTotalCookieSales += cookiesSoldCurrentHour;
    }
  },
  render: function () {
    this.calculateCookiesSoldPerHour();
    let dubaiStorefront = document.getElementById('Dubai');
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      dubaiStorefront.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotalCookieSales}`;
    dubaiStorefront.appendChild(li);
  },
};

let paris = {
  name: 'Paris',
  minimumCustomerPerHour: 20,
  maximumCustomerPerHour: 38,
  avgCookieSalesPerCustomer: 2.3,
  cookiesSoldPerHourArray: [],
  dailyTotalCookieSales: 0,
  generateRandomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  },
  calculateCookiesSoldPerHour: function () {
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
      let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
      this.dailyTotalCookieSales += cookiesSoldCurrentHour;
    }
  },
  render: function () {
    this.calculateCookiesSoldPerHour();
    let parisStorefront = document.getElementById('Paris');
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      parisStorefront.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotalCookieSales}`;
    parisStorefront.appendChild(li);
  },
};

let lima = {
  name: 'Lima',
  minimumCustomerPerHour: 2,
  maximumCustomerPerHour: 16,
  avgCookieSalesPerCustomer: 4.6,
  cookiesSoldPerHourArray: [],
  dailyTotalCookieSales: 0,
  generateRandomCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerPerHour - this.minimumCustomerPerHour + 1) + this.minimumCustomerPerHour);
  },
  calculateCookiesSoldPerHour: function () {
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let currentlHourlyCustomer = this.generateRandomCustomerPerHour();
      let cookiesSoldCurrentHour = Math.ceil(currentlHourlyCustomer * this.avgCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldCurrentHour);
      this.dailyTotalCookieSales += cookiesSoldCurrentHour;
    }
  },
  render: function () {
    this.calculateCookiesSoldPerHour();
    let limaStorefront = document.getElementById('Lima');
    for (let i = 0; i < hoursOfOperationArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOfOperationArray[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      limaStorefront.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotalCookieSales}`;
    limaStorefront.appendChild(li);
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



function Store(name, minimumCustomerPerHour, maximumCustomerPerHour, avgCookieSalesPerCustomer){
  this.name = name;
  this.minimumCustomerPerHour = minimumCustomerPerHour;
  this.maximumCustomerPerHour = maximumCustomerPerHour;
  this.avgCookieSalesPerCustomer = avgCookieSalesPerCustomer;
},