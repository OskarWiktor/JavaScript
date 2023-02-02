'use strict';
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
// to deklaracja funkcji, function declaration
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

/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).

A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time

Test data:

§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:

§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 

*/

/*

// Data 1
const calcAverage = (x, y, z) => (x + y + z) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);

const checkWinner =  function (avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log (`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`no winer`);
    }
}

checkWinner(avgDolphins, avgKoalas);

// Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins);
console.log(avgKoalas);

checkWinner(avgDolphins, avgKoalas);

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

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

*/

/*
const calcTip = function(bill) {
    if( bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.20
        return tip;
    };
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(total);

*/


// Obiekty

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
// literal syntax
// arrays - ordered data, object - unstrocted data

console.log(jonas)

//wydobywanie wartości
console.log(jonas.lastName)
console.log(jonas['lastName']) // tutaj możemy dać expression

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]); 

if(jonas[interestedIn]) {
    console.log(jonas.interestedIn);
} else {
    console.log('Wrond request! Choose between firstName, lastName, age, job and friends')
} // wykorzystanie falsy = wartości undefined jeśli któś wpiszę złą nazwę

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas); //dodanie elementów


// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
