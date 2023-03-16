//week4-day1-hw


console.log('******************** Classes Methods and Properties *********************')
console.log('       ')

console.log('******************** Hamster *********************')
console.log('       ')

class Hamster {
  constructor(name){
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price;
  }
}

let hamster = new Hamster('Jerry')
console.log(hamster);




console.log('       ')
console.log('******************** Person *********************')
console.log('       ')


class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(){
    console.log(`Hello, my name is ${this.name}!`);
  }
  eat(){
    this.weight++;
    this.mood++;
  }
  exercise(){
    this.weight--;
  }
  ageUp(){
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
  }
  buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood+=10;
    this.bankAccount-=hamster.getPrice();
  }
}

const mark = new Person('Mark')
console.log(mark);





console.log('       ')
console.log('******************** Create a Story with your Person class *********************')
console.log('       ')


const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp();
}
for(let i =0; i < 5; i++){
  timmy.eat();
}
for(let i =0; i < 5; i++){
  timmy.exercise();
}
for(let i =0; i < 9; i++){
  timmy.ageUp();
}
const gus = new Hamster('Gus');
gus.owner = 'Timmy';
timmy.buyHamster(gus);

for(let i =0; i < 15; i++){
  timmy.ageUp();
}
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();

console.log(timmy);





console.log('       ')
console.log('******************** Chef Make Dinners *********************')
console.log('       ')

class Dinner {
  constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  constructor(){
    this.dinners = [];
  }

  cook(arg1, arg2, arg3){
    let dinner = new Dinner(arg1, arg2, arg3)
    this.dinners.push(dinner);
  return this.dinners;
}
}

let allDinners = new Chef();

allDinners.cook('salad', 'steak', 'icecream');
allDinners.cook('salad1', 'steak1', 'icecream1');
allDinners.cook('salad2', 'steak2', 'icecream2');
console.log(allDinners.dinners);

