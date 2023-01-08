const persons = [
    {
        name: 'Gift Ogingo',
        height: 185,
        gender: 'male',
        weight: 70,
        belief: 'Christian',
        age: 25
    },
    {
        name: 'Samuel Red',
        height: 190,
        gender: 'male',
        weight: 85,
        belief: 'Muslim',
        age: 28
    },
    {
        name: 'Christina Holds',
        height: 177,
        gender: 'female',
        weight: 64,
        belief: 'Atheist',
        age: 26
    },
    {
        name: 'Ava Rods',
        height: 145,
        gender: 'male',
        weight: 55,
        belief: 'Christian',
        age: 16
    }];


// REDUCE
//1. Get total weight of all persons
const totalWeight = persons.reduce((acc, cur) => acc + cur.weight, 0);
console.log(totalWeight);
//2. Get total height of all persons
const totalHeight = persons.reduce((acc, cur) => acc + cur.height, 0);
console.log(totalHeight);
//3. Get total number of persons by belief
const personByBelief = persons.reduce((acc, cur) => {
    if (acc[cur.belief]) {
        acc[cur.belief]++;
    }else {
        acc[cur.belief] = 1;
    }
    return acc;
}, {});
console.log(personByBelief);
//4. Get total number of characters in all the character names
const totalNameCharacters = persons.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNameCharacters);