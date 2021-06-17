/*
    Spread Operator - 

*/
let fruits = ['a', 'b', 'c']
let otherFruits = ['x','y','z']

function printAll(a,b,c) {
    console.log(a, b, c);
   
}

function printAll2(...a) {
     console.log(a); //rest
}

// printAll(fruits[0], fruits[1],fruits[2]);
// printAll(...fruits) //spread
// printAll2(...fruits)

//merge 2 arrays
let allFruits = [...fruits ,...otherFruits]
console.log(allFruits);


//merging without using 3rd array
fruits = ['a', 'b', ...otherFruits, 'c']
console.log(fruits)

//spread - to spread into many from one
//rest -To collect from many  into  one