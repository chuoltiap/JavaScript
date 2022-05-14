var animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 },
];
// let dogs = []
// for(i = 0; i < animals.length; i++);
// if(animals[i].type === 'dog');
// dogs.push(animals[i]);

let oldDogs = animals.filter(function(animals) {
    return animals.age > 10 && animals.type === 'dog';
})
console.log(oldDogs);

