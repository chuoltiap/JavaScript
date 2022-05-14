// let number = '10' + 10;
// console.log(number);

// let number2 = + '10' + 10;
// console.log(number2);

// let number3 = 10;
// number3++;
// console.log(++number3);

// const carTwo = {
//     color: 'green',
//     status: {
//         running: 'yes',
//         passenger: 2,
//         fuelTank:'empty'
//     },
//     value:9000
// }

// const combinedCar = {
//     careOne,
//     carTwo
// }
// console.log(combinedCar);

// const myMoney = {
//     quarters:4,
//     dimes:10,
//     nickels:20,
//     pennies:100
// }
// for(const coin of myMoney){
//     console.log(`${coin}: ${myMoney[coin]}`);
// }

// const myArray = [1,2,3];
// const arrTwo = myArray.splice(0,4).slice(0,2)
// arrTwo = 9;
// console.log(arrTwo);

// function truthy(x){
//     if (5===x){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(truthy(6));

// () => {console.log("problem");}

// const race = "100M dash"
// const runners = ["Usain Bolt", "Asafa Powell", "Justin Gatlin"];

// const results = runners.map((runner, i) =>({name:runner, race, place:i + 1}));

// console.log(results);

// let x = 5;
// console.log(x === 6);

// let name1 = 'Lion'
// name2 = name1.toLocaleLowerCase().split('').reverse().join('');

// console.log(name2);

// function present() {
// return 'is in class'
// }
// let name = "Chuol"
// console.log(name, present);

// let myDinner = [
//     {id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 500},
//     {id: "qwe2456yh", name: "meat", image:"🍖🍖", price:600},
//     {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price:400},
// ]
// let amount = myDinner.map((cheque, i) =>)

// const hero = {
//     alias: "Robin",
//     name: "Batman",
//     catchPhrase: "We will fight",
//     message: function(){
//         return `${this.alias} and ${this.name}, ${this.catchPhrase}`
//     }
//     arrowMsg:() => {
//         return `${alias} and ${name}, ${catchPhrase}`
//     }
// }

// console.log(hero.message());
// console.log(arrowMsg());


const carOne = {
    color: 'blue',
    status: {
      running: true,
      passengers: 4,
      wiperFluid: 'empty'
    },
    age: 5,
    miles: 50000,
    value: '8000'
  }
  const carTwo = {
    color: 'green',
    status: {
      running: 'yes',
      passengers: 2,
      fuelTank: 'empty'
    },
    value: 9000
  }
  const combinedCar = {
  ...carOne,
  ...carTwo
  }
  


  const obj = {
      name: 'Chuol',
      age: 24,
      isPresent: true,
  }
  let chuolInfo = {...obj}
  console.log(chuolInfo);