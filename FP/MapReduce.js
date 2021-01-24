const assert = require('assert');
data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];

function getAges(data) {
    let sum = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type === 'dog') {
            let tempAge = data[i].age;
            sum += (tempAge * 7);
        }
    }
    return sum;
}

assert.strictEqual(getAges(data), 84);

let ages = data
    .filter((animal) => {
        return animal.type === 'dog';
    }).map((animal) => {
        return animal.age * 7;
    }).reduce((sum, animal) => {
        return sum + animal;
    });

assert.strictEqual(ages, 84);

let isDog = (animal) => {
    return animal.type === 'dog';
}
let dogYears = (animal) => {
    return animal.age * 7;
}
let sum = (sum, animal) => {
    return sum + animal;
}

let ages2 = data
    .filter(isDog)
    .map(dogYears)
    .reduce(sum);

assert.strictEqual(ages2, 84);
