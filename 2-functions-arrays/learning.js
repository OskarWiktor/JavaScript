"use strict";
/*

// FUNKCJE - są jak zmienne ale zamiast jednej wartości mogą przchowywać niezliczoną ilość bloków kodu
// można ich używać wielokrotnie w wielu miejscach
function logger() {
    console.log('My name is Adam');
}
// calling / running / invoking function
logger();
logger();
logger();
logger();
// (parametry - input data)
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // 5 i 0 to argumenty - wartości parametrów
console.log(appleJuice)
// jeśli nigdy nie przywołamy funkcji kod zawarty w niej nigdy się nie spełni


const appleOrangeJuice = fruitProcessor(2,4);
const orangeJuice = fruitProcessor(0,7);

console.log(appleOrangeJuice);
console.log(orangeJuice); // console.log() tez jest funkcją, wbudowaną która wyświetla dane parametry

const num = Number('23');

*/

/*
// function calcAge1(birthYear) {
//     const age = 2023 - birthYear;
//     return age;
// }
const age1 = calcAge1(1997);

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

console.log(age1); 
// function declaration
// deklarację możemy wywołać przed zdefiniowaniem samej funkcji, expression nie. Aczkolweik nie jest to najlepszy pomysł


const calcAge2 = function (birthYear) { // funkcja bez imienia = anonimowa funkcja, zamisat najpierw mieć nazwę odrazu jest wprowadzona w zmienną
    return 2023 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age2);
//to wyrażenie funkcji, function expression. Funkcja jest w tym wypadku wartością, wartością zmiennej
// oba działają w ten sam sposób, trzeba znać oba sposoby, expression można w template literals (!)
//czasem które ktoś pisze jest kwestią preferencji, ale nalezy znać różnicę żęby nie stworzyć błędów


let now = 2023;

const calcAge = function(birthYear) {
    return now - birthYear;
}

const age = calcAge(1991);

console.log(age)
*/

/*
// arrow function = szybsza do napisania forma function expression

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

//Arrow function - nie trzeba pisać return ani function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement
}

console.log(yearsUntilRetirement(1980));

*/

/*
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1980, 'Ktoś'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
    return juice;
}
console.log(fruitProcessor(2, 4));
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired`)
        return retirement;
    }

    return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1970,'Mike')); // wychodzi -2, dwa lata temu przeszedł na emeryture
*/

// Arrays

/*
const friends = ['Michael', 'Adam', 'Ktoś']
console.log(friends);

const years = new Array(1991, 1984, 2000, 2023);
console.log(years)

console.log(friends[0]); // Michael
console.log(friends[2]); // Ktoś

console.log(friends.length); //3
console.log(friends[friends.length - 1]); // 3-1 = [2] = Ktoś

// mutacja

friends[2] = 'Jay'; // zmienia wartość pomimo że to const = mutacja
console.log(friends);
// friends = ['Bob', 'Alice'] // nie mozliwe

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends] //możliwe bo to expressiom
console.log(jonas)
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const ageLast = calcAge(years2[years2.length - 1]);
// Każdy element z array musi mieć jakąś wartość więc funkcje też są możliwe

console.log(age1, age2, ageLast);

const ages =[calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

*/

//	arrays operations (methods)

/*

const friends = ['Michael', 'Steven', 'Ktoś'];

// dodawanie elementu
friends.push('Jay'); //push - wbudowana funkcja = methoda, mutuje array, jay = parametr
console.log(friends); // dodało się 'Jay' na końcu

const newLength = friends.push('Adam') // gdybyśmy potrzebowali długość/ilość elementów
console.log(newLength)


friends.unshift('John'); // unshift - dodaje na początku
console.log(friends);

// usuwanie elementu

friends.pop(); // usuwa ostatni element
console.log(friends);

const popped = friends.pop();
console.log(popped) // ta funkcja zwraca usunięty element w tym wypadku 'Jay'
console.log(friends);

friends.shift(); // usuwa pierwszy element
const shifted = friends.shift()
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steven')); // = 0
console.log(friends.indexOf('Bob')); // -1 bo nie ma

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Peter')) {
    console.log('You have a friend Peter')
} else {
    console.log('You dont have friend Peter')
}

*/
