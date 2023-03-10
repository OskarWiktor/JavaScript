'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};

// DESTRUCTURING ARRAYS

const arr = [2, 3, 4];
//const a = arr[0];
//const b = arr[1];
//const c = arr[2];

const [x, y, z] = arr; // jeżeli chcemy przypisać dany element array do danej nazwy, w tym wypadku: x y z, x=2, y=3, z=4
console.log(x, y, z);
console.log(arr); // array wciąż istnieje normalnie

const [first, second] = restaurant.categories;
console.log(first, second); // 0 i 1

let [main, , secondary] = restaurant.categories; // przerwa pomiędzy pozwala ignorować daną wartość/dane w arr
console.log(main, secondary); // 0 i 2

// Switching variables, Zmiana położenia w arr: 1 na 2 i 2 na 1

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// recive 2 return values from a function
const [starterOrder, mainOrder] = restaurant.order(2,0);
console.log(starterOrder, mainOrder);

// array w array
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
//console.log(i, j); // 2, [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);