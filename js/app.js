'use strict';

// console.log('Greetings ALOYSIOUS!');

let myContainer = document.getElementById('container');

console.log(myContainer);

// 1. create the ELEMENT
let section = document.createElement('section');
// 2. give it CONTENT
// 3. append to the DOM (to its parent or directly to the DOM)
//  syntax is parent.appendChild(child)
myContainer.appendChild(section);

// create the image
// 1. create the ELEMENT
let img = document.createElement('img');
// 2. give it content
img.src = '/img/cookiePile.jpg';
img.alt = 'Salmon';
img.title = 'Classic image of a Salmon in all thier glory';
// 3.append it to the DOM
section.appendChild(img);

let article = document.createElement('article');
section.appendChild(article);

let h3 = document.createElement('h3');
h3.textContent = 'Pat/s Salmon Cookies';
article.appendChild(h3);

let p = document.createElement('p');
p.textContent = 'You need not be Pacific Native Born to appreciate the cookies Pat has crafted, his masterpiece is a global hit. Pleasing the teastebuds of hipsters from Seattle clear across the globe.';
article.appendChild(p);

let seattle = document.getElementById('seattle');
// console.log(seattle);


// Venue : Seattle
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


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let dailyTotalCookieSales = 0;

function randomCustomerPerHour() {
  min = Math.ceil(minimumCustomerEachHour);
  max = Math.floor(maximumCustomerEachHour);
  return Math.floor(Math.random() * (maximumCustomerEachHour - minimumCustomerEachHour) + minimumCustomerEachHour);
}
// Math.random [inclusive] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

let venue = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  avgCookieSalesPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  // a method to calcucalte random number of customers per hour
  //  a method to calculate and populatenumber of cookies sold per hour array
  // a method to render the list items.
  randomCustomerPerHour()
}

console.log(venue, hours, randomCustomerPerHour);

