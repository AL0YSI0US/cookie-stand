'use strict';

// console.log('Greetings ALOYSIOUS!');

let myContainer = document.getElementById('container');

// console.log(myContainer);

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


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let dailyTotalCookieSales = 0;

function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Math.random [inclusive] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let venue = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookieSales: 6.3,
  // random number math.random (between two vales)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  // a method to calcucalte random number of customers per hour
  //  a method to calculate and populatenumber of cookies sold per hour array
  // a method to render the list items.
};

console.log(venue, hours, getRandomInclusive);


// let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']; ???????????????????????????????

// let tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSales: 1.2,
//   // random number math.random (between two vales)
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSales: 3.7,
//   // random number math.random (between two vales)
// };

// let paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSales: 2.3,
//   // random number math.random (between two vales)
// };

// let lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSales: 4.6,
//   // random number math.random (between two vales)
// };
