/*
let js = 'nice';
if ( js === 'nice' ) alert('js is nice');

10 + 15 - 18 + 72 - 2;
console.log(10 + 15 - 18 + 72 - 2);

let firstName = 'Ktoś';
let secondName = 'Coś';
console.log(firstName)


let age = 22;
age = 23;

const birthYear = 2000;
// birthYear = 1999; // nie możliwe

*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3)

const firstName = 'Jonas';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = 15 + 10 = 25 
x *= 4; // x = 25 * 4 = 100
x++; // x = 100 + 1 = 101
x--; // x = 101 - 1 = 100
console.log(x);

console.log(ageJonas > ageSarah); // true
console.log (ageSarah >= 18); // true
console.log (ageSarah <= 18); // false

const isFullAge = ageSarah >= 18;
console.log (isFullAge);  // true
console.log ( now - 1991 > now - 2018 ); // true
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log ( now - 1991 > now - 2018 );

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)
*/

/*
const firstName = "Jonas";
const job = "teacher"
const birthYear = 1991;
const now = 2022;
const age = now - birthYear;

console.log(age);

const jonas = "I'm " + firstName + ", a " + age + " years old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${age} years old ${job}`;
console.log(jonasNew);
*/

/*
const age = 19;
const isFullAge = age >= 18;

if (isFullAge) {
    console.log("Sarah can start driving license");
}
*/

/*
const age = 15;
if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, Wait anther ${yearsLeft} years`)
};


const birthYear = 2002;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/

/*
// Type Conversion
const inputYear = '1991';
console.log(inputYear + 18); // nie
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'));
console.log(typeof NaN)

console.log(String(23), 23)

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n)
console.log(2+3+4+'5'); // 95
console.log('10'-'4'-'3'-2+'5'); //15
*/

/*

// 5 falsy values: 0, '', undefined, null, NaN // zrobią sie false zmieniając je na boolean, cokolwiek innego będzie true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));

const money = 0;

if (money) { // bez money >= czy cokolwiek bo money 0 = false, jeśli będzie cokolwiek to będzie true
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;  // problem jeśli będzie = 0
if(height) {
    console.log('defined');
} else {
    console.log('undefined');
} /// MEGA WAŻNE np jeśli ktoś czegoś nie wpisał w inpucie

*/

/*
const age = 18; // = - nadanie wartości
if(age === 18) console.log('You are 18'); // === - takie samo
'18' == 18 // true == - podobne
'18' === 18 // false

//przydatne przy hasłach itd. (===)
// powinno się unikać == żeby nie było bugów, jest mega niebezpieczny tworzy dużo problemów

const favourite = prompt("What is your favourite number");
console.log(favourite);
console.log(typeof favourite); // string?

if(favourite == 23){
    console.log('nakhdfa');
} // wyjdzie

if(favourite === 23){
    console.log('nakhdfa');
} else if (favourite === 7) {
    console.log('acbjwd')
} else if (favourite === 10) {
    console.log('acbjdfsdfwd')
} else {
    console.log("ani 7 ani 23 ani 10")
}

const favourite = Number(prompt("What is your favourite number")); // da numer a nie string

if(favourite !== 23) console.log("nie 23"); // inne niż 23    !== - inne niż / rózne

// w onu sytuacjach powinno sie pamiętać żeby było === a nie == czyli też !== a nie !=

*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // && - AND
console.log(hasDriversLicense || hasGoodVision); // || - or
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(asDriversLicense && hasGoodVision && !isTired) { // false bo isTired = true, gdyby było false to tutaj było by true (operaor NOT)
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive..');
};
*/


/*
const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Write video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day!');
}
*/

// expression = 3 + 4, 1991, true, true && !false - jak słowa
// statment = if/else, switch - jak zdania

/*
const age = 23;
age >= 18 ? console.log("I like to drink wine") : // ? - jak if true zrób to, : - jak else, jeśli false zrób to
console.log("I like to water");

const drink = age >= 18 ? 'wine' : 'water';  // uproszczona wersja tegop wyżej
console.log(drink); 
// dzieki temu nie musimy deklarować wartości przed if

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// idealne dla małych decyzji, z dwoma opcjami, jesli tak to to, jeśli nie to to
*/