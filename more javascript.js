
// Recursion. They must have a base case when they return without calling the function.
// multiply first n elements of an array
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

const myArray = [2, 4, 6, 8, 10];
console.log(multiply(myArray, 3));

// Do While loops
const anotherArray = [];
let i = 0;

do {
    anotherArray.push(i);
    i++;
} while (i < 5);
console.log(anotherArray);

// Test objects for properties
const obj = {
    name: "Gifto",
    height: "6'1"
};
console.log(obj.hasOwnProperty("name")); //true

if (obj.hasOwnProperty("height")) {
    console.log(obj.height);
} else {
    console.log("There is no such property");
}

// Access Nested Objects
const myDrawer = {
    upperChamber: {
        clothes: "pants"
    },
    lowerChamber: {
        clothes: "shirts"
    }
};
console.log(myDrawer.lowerChamber.clothes)
console.log(myDrawer["upperChamber"]["clothes"]);

// count backwards with a for loop
const numbers = [1, 3, 5, 7, 9, 11];
for (let i = numbers.length; i >= 0; i--) {
    console.log(numbers[i]);
}

// iterating through nested loops

const colors = [
    ["red"],
    ["blue"],
    ["green"],
    ["white"],
    ["orange"]
];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// append data to the end of an array
colors.push(["black"]);
console.log(colors);

// add elements at the beginning of an array
colors.unshift(["purple unshifted"]);
console.log(colors);

