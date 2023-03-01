/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/
/*
const myCountry = {
    country: 'Poland',
    capital: 'Warszawa',
    language: 'Polish',
    population: 37,
    neighbours: ['German', 'Czech republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
}
console.log(myCountry);
*/


/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
/*
const myCountry = {
    country: 'Poland',
    capital: 'Warszawa',
    language: 'Polish',
    population: 37,
    neighbours: ['German', 'Czech republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
}

console.log(`${myCountry.country} has a ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population)
myCountry['population'] -= 2;
console.log(myCountry.population)
*/


/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
/*
const myCountry = {
    country: 'Poland',
    capital: 'Warszawa',
    language: 'Polish',
    population: 37,
    neighbours: ['German', 'Czech republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
    describe: function() {
        console.log(`${this.country} has a ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    isIsland: function() {
        console.log(`${this.isIsland = this.neighbours === 0 ? true : false}`);
    }
}
myCountry.describe();
myCountry.isIsland();
console.log(myCountry)
*/


/*
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
/*
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`)
}
*/


/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/
/*
const populations = [144, 370, 66, 81]
const percentage2 = []
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentage2.push(perc);
}
console.log(percentage2);
*/


/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway
*/
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

for ( let i = 0; i < listOfNeighbours.length; i++ ) {
    for ( let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
}
*/


/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/
/*
const populations = [144, 370, 66, 81]
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentage2 = []
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentage2.push(perc);
}
console.log(percentage2);

const percentage3 = []
let y = 0;
while(y < populations.length) {
    const perc = percentageOfWorld1(populations[y]);
    percentage3.push(perc);
    y++;
}
console.log(percentage3)
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



/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:

    4.1. First, you will need to add up all values in the array. To do the addition, 
    start by creating a variable 'sum' that starts at 0. Then loop over the 
    array using a for loop. In each iteration, add the current value to the 
    'sum' variable. This way, by the end of the loop, you have all values 
    added together

    4.2. To calculate the average, divide the sum you calculated before by the 
    length of the array (because that's the number of elements)

    4.3. Call the function with the 'totals' array
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for( let i = 0; i < bills.length; i++ ) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/