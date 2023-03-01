"use strict";

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

// obiekty w obiekcie, object methods

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    //calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    //} // każda funkcja dodana w obiekcie to metoda

    //calcAge: function() {
    //    // console.log(this);
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    },
};

//console.log(jonas.calcAge(1991));
//console.log(jonas['calcAge'](1991));

console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge 
console.log(jonas.getSummary());

*/


// LOOPS

/*

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
//...

// loop statemant, 3 kroki

for( let rep = 1; rep <= 10; rep++) { 
    console.log(`Lifting weights repetition ${rep}`);
}

*/

// looping arrays

/*
const jonas = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];
// i = typowa nazwa dla loop

//for(let i = 0; i < 5 ; i++) {
//    console.log(jonas[i])
//} // hardcode bo i < 5, a co jakby było więcej

for(let i = 0; i < jonas.length ; i++) {

    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for( let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue statemant and break

console.log('---ONLY STRINGS---')

for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] !== 'string') continue; // jeśli tak to idz/rób dalej
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBERS---')

for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] === 'number') break;  //przestanie iść dalej jak napotka pierwszą liczbę
    console.log(jonas[i], typeof jonas[i]);
}
*/

// loop in loop

/*
const jonas = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ... 4 - wcześniej
// 4, 3 ... 0 - teraz

for(let i = jonas.length - 1; i >= 0; i-- ) {
    console.log(i, jonas[i]);
};

for ( let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-----Starting exercise ${exercise}-----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    };
};
*/

// while loop

/*

for ( let rep = 1; rep <= 10; rep++) { 
    console.log(`Lifting weights repetition ${rep}`);
};

//inny sposób na pętle, jeśli nie wiemy ile razy ma się powtarzać

let rep = 1;
while(rep <= 10){ 
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
} //jeśli true to będzie działać, w tym wypadku za każdym razem do 10 ( bedzie działać tak długo jak ... coś)

let dice = Math.trunc(Math.random() * 6) + 1; // Math.trunc - daje pełne liczby, Math.random() * 6 - daje liczby od 1 do 6
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Congratulation! You rolled a 6')
}

*/