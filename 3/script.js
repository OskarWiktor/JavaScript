'use strict';

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

/*

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.

*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcBMI();
console.log(mark.BMI);

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
} 

john.calcBMI();
console.log(john.BMI);


if(mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})!`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})!`)
}
*/

// LOOPS


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
//...

// loop statemant, 3 kroki

for( let rep = 1; rep <= 10; rep = rep++) { //(1 ; 2 ; 3), 1 od kiedy ma zacząć, 2 na czym ma się skończyć, będzie się dalej działo jeśli true, przestanie jak false, 3 co ma robić za każdym razem (teraz inkrementacja).
    console.log(`Lifting weights repetition ${rep}`);
}
// możemy zacząć nawet od 5

