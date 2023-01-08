let array = [0, 1, 2, 3, 4, 5];

function groupArray(arr, size) {
    let newArray = [];
    // let numSplitArray = arr.length / size;
    for (let i = 0; i < arr.length; i+= size) {
        let splitArray = arr.slice(i, i + size);
        newArray.push(splitArray);
    }
    console.log(newArray);
}

groupArray(array, 2);

// add items using splice
let numbers = [1, 2, 3, 4, 5, 6, 7];
// for (let number in numbers) {
//     console.log(number);
// }
let startIndex = 3;
let amountToDelete = 3;

numbers.splice(startIndex, amountToDelete,7, 12, 144)
console.log(numbers);

// remove items using splice
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12];
digits.splice(7, 4);
console.log(digits);
console.log(digits.indexOf(13));

// slice (creates a list of the sliced element)
let seasons = ["Spring", "Summer", "Autumn", "Winter"];
let currentSeason = seasons.slice(1);
console.log(currentSeason);

let seasonCount = 1;
for (let i = 0; i < seasons.length; i++) {
    console.log(seasonCount + "." + seasons[i]);
    seasonCount++;
}

let obj = {first: "Romeo"};
for (let objKey in obj) {
    console.log(objKey);
}
// console.log(obj.first)