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
JavaScript Fundamentals – Part 1
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*

 // Data 1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let BMIMark = weightMark  / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

// Data 2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

BMIMark = weightMark  / heightMark ** 2;
BMIJohn = weightJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

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

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement

*/

/*
// Data 1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let BMIMark = weightMark  / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)
 
// Data 2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

BMIMark = weightMark  / heightMark ** 2;
BMIJohn = weightJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);
 
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})`)
};
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
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//DATA 1
/*
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if(averageScoreDolphins > averageScoreKoalas) {
    console.log(`Winner are Dolphins withe average ${averageScoreDolphins} score points`);
} else if(averageScoreKoalas > averageScoreDolphins) {
    console.log(`Winner are Koalas withe average ${averageScoreKoalas} score points`);
} else {
    console.log('There is no winner');
}
*/

//Data Bonus 1
/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 125) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100 ) {
    console.log(`Winner are Dolphins withe average ${averageScoreDolphins} score points`);
} else if(averageScoreKoalas > averageScoreDolphins && averageScoreKoalas > 100) {
    console.log(`Winner are Koalas withe average ${averageScoreKoalas} score points`);
} else {
    console.log('There is no winner');
}
*/

//Data Bonus 2
/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100 ) {
    console.log(`Winner are Dolphins withe average ${averageScoreDolphins} score points`);
} else if(averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log(`Winner are Koalas withe average ${averageScoreKoalas} score points`);
} else {
    console.log('There is no winner');
}
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

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/

/*
const bill = 275;
const tip = 300 >= bill && bill >= 50 ? bill * (15/100) : bill * (20/100);
console.log(bill, tip)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)
*/