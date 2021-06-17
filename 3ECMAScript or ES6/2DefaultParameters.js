//Default function parameters allowed name parameter
// initialized with deafult values if no values is passed as arguments


//a function can also be passed as Default Parameters
//Any Value can be passed inside , not only NUmber

function someValue() {
    return 10;
}


function mult(a, b = 5,c=someValue()) {
    return a * b *c;
}

// console.log(mult(2,3,4)); //24
// console.log(mult(2,4))  //80
// console.log(mult(2));  //100

function greet(a,b="User") {
    return a + " " + b;
}

console.log(greet("Hey", "Shrey"));
console.log(greet("Hey"));

// imp ques

function main(a,b=main()) {
    return a + b;
}
main(2);  // Maximum call stack size exceeded