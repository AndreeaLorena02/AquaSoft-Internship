// 1.1 ES6 brings features like: classes, functions and modules and also introduces a new primitive data type
// "symbol" for unique values. Also, there are 2 new ways to define  variables, in es5 you use var, in es6 you can
// use let or const. String concatenation using ``, not +.

//ES5
var myFunct1 = function (x: number, y: number) {
  return x * y;
}
console.log(myFunct1(3, 5));

//ES6 - You don't need the function keyword, the return keyword, and the curly brackets.
const myFunct2 = (x: number, y: number) => x * y;
console.log(myFunct2(3, 5));

//In ES6 we use class keyword for oop, unlike es5 where we use function constructors and prototypes.
//   //ES5
function PersonES5(name, age) {
  this.name = name;
  this.age = age;
}
PersonES5.prototype.getName = function () {
  return "My name is " + this.name + "!";
};
var firstPerson = new PersonES5("Lorena", 22);
console.log(firstPerson.getName());

//ES6
class Person {
  constructor(public name: string, public age: number) { }

  getName(): string {
    return `My name is ${this.name}`;
  }
}

const myPerson = new Person("Lorena", 23);
console.log(myPerson.getName());

//1.2 Let, var and const - used for def variables; 
//example using var - can have global or local scope
//global scope
var number = 50;
function print() {
  var square = number * number;
  console.log(square);
}
console.log(number); // 50
print(); // 2500

//local scope
function print2() {
  var number2 = 50;
  var square2 = number2 * number2;
  console.log(square2);
}
print2(); // 2500
//console.log(number2);  // ReferenceError: number is not defined

//example using let - has block scope, can be accesed only inside that block where you define them
function exampleLet() {
  if (true) {
    let y = 20;
  }
  //console.log(y); // Throws a ReferenceError: y is not defined
}
exampleLet();

//example using const - same as let but the user cannot change the value once initialized
// const myNumber = 50;
// myNumber = 100;// Cannot assign to 'myNumber' because it is a constant.

//1.3 - spread operator allows you to "spread" the elements of an iterable into individual elements.
//-used to copy an array, to merge arrays or for functions as arguments
//it can be used with objects also
const array1 = [1, 2, 3, 4];
const array2 = [...array1];  // Creates a shallow copy of arr1
console.log(array2);  // [1, 2, 3]

const array3 = [4, 5, 6];
console.log([...array1, ...array3]); // [1,2,3,4,5,6] - merge


//1.4 Iterating using for...in loop method
const user: { [key: string]: any } = { name: "Lorena", age: 22, city: "Bucharest" };
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}
// //using Object.values() methods
// Object.values(user).forEach(value => {
//   console.log(value);
// });
// //using Object.entries()
// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

//using for...of
const obj: Record<string, any> = { name: "Lorena", age: 22, city: "Bucharest" };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

//deep copy using JSON
class numbers {
  a: number;
  b: number;
};

const numb1: numbers = { a: 1, b: 2 };

const deepCopy1: numbers = JSON.parse(JSON.stringify(numb1));

deepCopy1.b = 42;
console.log(numb1.b); // 2 as original

//deep copy using structuredClone()
const deepCopy2 = structuredClone(numb1);
deepCopy2.b = 42;
console.log(numb1.b); // 2

//1.5 
//Accessor methods do not modify the array - length, indexOf, find, toString, concat
let names = ["Andreea", "Ioana", "Daria", "Valentina"];
console.log(names.indexOf("Andreea")); // 0
//Mutator methods - modify the array: pop(), shift()- removes the first element, push() - to add elements, unshift() - to add elem at
// the beginning of array, slice() - to add or remove elements from any position, reverse(), fill() - replace all elem with a value and sort()
console.log(names);
names.pop();
console.log(names); //removed the last item - "Valentina"
//Iteration methods - loops through arrays and perform actions for each elem : forEach, map, reduce, flat, flatMap

const myNumbers: number[] = [1, 2, 3, 4, 5];
const evenNumbers = myNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


//1.6 Promises and Callback - async operations; promises - is an assurance that smth will be done 
//states for promises: fulfilled, rejected, pending and settled
let promise = new Promise<void>(function (resolve, reject) {
  const x = "Lorena";
  const y = "Lorena";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});
promise.
  then(function () {
    console.log('Success');
  }).
  catch(function () {
    console.log('Error');
  });

//Callback - to call another funct for example after finishing the first one

function add(a, b, callback) {
  console.log(`The sum of ${a} 
  and ${b} is ${a + b}`);
  callback();
}

function disp() {
  console.log(`This must be printed
   after addition`);
}
add(5, 6, disp);

//1.7 Async and await - async makes a function return a Promise and await makes a function wait for a Promise
//example async
const getString = async () => {
  let myString = "Hello World";
  return myString;
}
getString().then(myString => console.log(myString));

//await is only used within an async block and makes the code wait until the promise returns a result
const getData = async () => {
  let y = await "Hello World";
  console.log(y);
}
console.log(1);
getData();
console.log(2);

//1.8 Closures
function outerFunction(): () => void {
  let counter = 0;
  return function innerFunction() {
    counter++;
    console.log(`Counter: ${counter}`);
  };
}
const increment = outerFunction();
increment(); //"Counter: 1"
increment(); //"Counter: 2"
increment(); //"Counter: 3"

//1.9 UseState helps manage state whithin a component while useRef is used for accessing and manipulating DOM elements directly.
//Changes to the useState value will cause the component to re-render.
