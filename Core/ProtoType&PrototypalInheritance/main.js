let arr = ["aman", "raman"];

let object = {
  name: "Shrey",
  age: 20,
  getIntro: function (params) {
    console.log(`${this.name} is ${this.age} year old `);
  },
};

// function fun() {}

//Whenever you create any function or variable in JS,It gets access to many hidden properties and methods .
//these come via prototype.

//JS Engine attaches an Object to your Original Object, and that is how we get acess to those properites and methods

//How to access those Hidden Properties or Methods?

// object.__proto__.
// arr.__proto__.
// fun.__proto__;

//EVERYTHING IN JS IS OBJECT

/*
arr.__proto__
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object

Array.prototype
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

arr.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

arr.__proto__.__proto__.__proto__
null
*/

let object2 = {
    name : "harshad",
}

//never do this thing ever
// object2.__proto__ = object;

/*
object
{name: "Shrey", age: 20, getIntro: ƒ}
object2.__proto__
{name: "Shrey", age: 20, getIntro: ƒ}

object.getIntro()
Shrey is 20 year old 

object2.getIntro()
harshad is 20 year old 

*/

//Here, object2 is inheriting form it parent object or proto

//setting mybind to prototype of Function.
Function.prototype.mybind = function() {
    console.log("qwertyu");
}

function fun() {
    
}
