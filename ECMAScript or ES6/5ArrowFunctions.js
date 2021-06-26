//It's Also Known as FAT Arrow Function

//THIS Keyword cannot be used with Arrow Functions


const sum = () => {
    let a = 5;
    let b = 13;
    let sum = a + b;
    return sum;
}
// console.log(sum());

// function add1(a,b) {
//     return a + b;
// }
// console.log(add1(1, 5));

let arr = [1, 2, 3, 4, 5]
let newarr = arr.map((item) => { return item * 2 })
let newarr1 = arr.map((item) => item * 2);


// console.log(newarr);
// console.log(newarr1);


//EXAMPle for react

let items = {
  fname: "abc",
  age: 12,
  getName: function () {
    console.log("narmal", this);
  },
  // In regular functions the this keyword represented the object that called the function,
  // which could be the window, the document, a button or whatever
  getNameArrow: () => {
    console.log("arrow", this);
  },
  // arrow function does'nt have its own this ,so there is no binding of this, so it picks this from windows.this
  // With arrow functions the this keyword always represents the object that defined the arrow function
};

items.getName();
items.getNameArrow()