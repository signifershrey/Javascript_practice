//Variable Declaration
//var =>Global or function scope
//let and const => Block Scope

//Use of Let 
//1) varible do not overlap

//Hoisting - Using a variable before it has been declared
// Using a let variable before it is declared will result in a ReferenceError.
// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.
// JavaScript only hoists declarations, not initializations
// example
// console.log(a); // outputs 'undefined'
// var a = 3;


//Therefore it means Hoisting only works with var and not let and const??BUT
//But IT is NOT CORRECT , All the declarations (function,var,let,const,class) are hoisted in JS,
//while the  var declarations are initialized with undefined, but let and const declarations remain uninitialized.
// The time between these variables being declared and being evaluated is referred to as the temporal dead zone. 
// If you try to access these variables within this dead zone, you will get the reference error above.







// for (var i = 0; i < 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000)
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }




// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         x = function () {
//             return i;
//         };
//     }
// }
// console.log(i)
// // Returns 3 instead of 2 coz var is global var
// console.log(x())

for (let j = 0; j < 3; j++) {
    if (j == 2) {
        x = function () {
            return j;
        };

    }
}
// console.log(j) //j is not defined
console.log(x());
// Doesnt return any value coz let is block scope
