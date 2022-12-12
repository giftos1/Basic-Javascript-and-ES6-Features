// testing out basic javascript and ES6 features

/*When you declare a variable with the let keyword inside a block, statement, or expression
* its scope is limited to that block, statement, or expression
* As a preference you can assign all your variables using const by default, unless they know they'll need to reassign values.
* NB: Some developers do this.*/

const firstName = "Gift";
const secondName = "Ogingo";
const myName = firstName + ' ' + secondName;
console.log(myName);

//basic calculations
const firstBatch = 20;
const secondBatch = 10;
const result = firstBatch * secondBatch;
console.log(result, secondBatch);


const myAge = 26;
const humanDogRatio = 7;
const myDogAge = myAge * humanDogRatio
console.log(myDogAge)

// basic for and while loops
const firstArray = ["Gift", 1, "Ogingo", 2, "Asha", "Mohamed"]
for (let i = 0; i < firstArray.length; i++) {
    console.log(firstArray[i]);
}

const secondArray = [];
let n = 0;
while (n < firstArray.length) {
    secondArray.push(n);
    n++;
}
console.log(secondArray);

// Destructure assignment to Extract Values from Objects
const user = { name: myName, age: myAge};
const { name, age} = user;
console.log(name, age);

//Use rest parameter with function parameters
function howMany(...args) {
    return "There are " + args.length + " arguments";
}

console.log(howMany(1, 2, 3, 4, 5));

// use of spread operator to evaluate arrays in-place
const maxNumber = Math.max(...secondArray);
console.log(maxNumber);

// Destructure assignment to assign variables from nested objects
const client = {
    ashaMohamed: {
        age: 32,
        email: 'asha@hotmail.com'
    }
};

const { ashaMohamed: { age: userAge, email: userEmail}} = client;
console.log(userAge, userEmail);

// Destructure assignment to assign variables from arrays
const [a,,, b] = [10, 20, 30, 40, 50]; // prints 10 40
console.log(a, b);

// destructure assignment with rest parameter to reassign array elements

const [y, z, ...thirdArray] = [2, 4, 5, 6 ,7 ,8, 10];
console.log(y, z, thirdArray);

thirdArray.unshift(maxNumber);
console.log(thirdArray);

// create strings using template literals
const randomUser = {
    publicName: 'FleetVs',
    racialOrigin: 'European'
};
console.log(`That celebritie\'s name is ${randomUser.publicName}.
He is a ${randomUser.racialOrigin}.`);

// use arrow functions to write concise anonymous functions
const displayMyAge = () => `I am ${myAge} years old.`;
console.log(displayMyAge());

//set default parameters for your functions

const reaction = (lastName = "Anonymous") => "Hurray " + lastName + " !";
console.log(reaction("Gifto"));

// write arrow functions with parameters

const triple = (number) => number * 3;
console.log(triple(30));

// Prevent object mutation

let obj = {
    name: "Gift Ogingo",
    situation: "Not Critical"
};
Object.freeze(obj); // prevent property values from being changed
console.log(obj.name + "\n" + obj.situation);