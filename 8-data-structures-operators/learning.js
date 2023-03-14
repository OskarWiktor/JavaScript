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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`this is a pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'gdzieś, 24/2',
  mainIndex: 2,
  starterIndex: 2,
});

// DESTRUCTURING ARRAYS
/*
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
*/

// DESTRUCTURING OBJECTS
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// inne nazwy niz w object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b); // 111, 999

({ a, b } = obj); // zmiana wartości

console.log(a, b); // 23, 7

//nested objects, obiekt w obiekcie
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/

// spread operator
/*
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [1, 2, ...arr]; // ... pobiera i "wypakowuje" wszystkie wartości z wybranego arr
console.log(goodArr);

console.log(...goodArr); // wypakowuje arr, możemy zobaczyć poszczególne wartości osobno

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // nowy array
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables - wszystko oprócz obiektów (string, array, maps etc)
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // J o n a s  S. jako array
console.log(letters);
console.log(...str); // J o n a s  S. pojedyńcze
// console.log(`${...str} coś`); // nie możliwe

const ingrediants = [prompt("Let's make pasta. Ingredient1?"), prompt("Let's make pasta. Ingredient2?"), prompt("Let's make pasta. Ingredient3?")]; // Let\'s - ponieważ 's przed ' dajemy \ by nie skończyło w tym miejscu zdania lub w ""

console.log(ingrediants);
//restaurant.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2],)
restaurant.orderPasta(...ingrediants);

// Objects
const newRestaurant = {...restaurant, founder: 'Guiseppe', foundIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// REST PATTERN AND PARAMETERS
// Pakuje w array

// SPREAD, po prawej od =, wypakuje
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
