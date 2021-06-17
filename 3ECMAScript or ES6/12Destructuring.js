/*What is Destructuring??
//It Helps to unpack values from arrays, or properties from objects, into distinct variables.

//Array Destructuring
//Values can be skipped
//Indexing Happen on basis of indexs

//Object Destructuring
//Values can not be skipped
//Indexing Happen on basis of Keys





*/


// const numbers = [1, 2, 3, 4, 5, 6, 7];
//Destructuring
// [num1, num2] = numbers;
// console.log(num1, num2);

//skiping a number
// [num1, , num3] = numbers;
// console.log(num1, num3);

//default value
// const numbers2 = [1,2,,4]
// let [num1, num2, num3 = '3',num4] = numbers2
// console.log(num3);

//numbers except starting 2 numbers
// [num1, num2, ...rest] = numbers;
// console.log(rest);

// It copies the Actual  values when reassigned as variable



//DESTRUCTURING IN OBJECTS



let user = {
    name: 'Shrey',
    email: 'Shrey@gmail.com',
    mobile:12325
}
// let{email,name,address,mobile=999} = user
// console.log(email);
// console.log(name);
// console.log(address);
// console.log(mobile);

// //name ke baad jitne bhi h uttha lega
// let { ...name } = user;
// console.log(name);

//sab hi aaega
// let { ...email } = user;
// console.log(email);

//mobile chor k sab print hoga 
let {mobile,...email } = user;
console.log(email);




const person1 = {
    name: 'Max'
};

const secondperson1 = person1;
//Here we have not copied instead pointed a pointer to that place pointer OR Say Referenced to that 

person1.name = 'MABOYANCE'
//We can see that name in Person1 is also Changed even we havent changed the secondperson therefore it implies tha here pointer is involve
//OR
//Here the changes happened in the new obj also beacuse of the pointer

console.log(person1)
console.log(secondperson1)


//Same case happens in case of ARRAYS

//Now WE WILL LEARN TO COPY THE ACTUAL THING IN  IMMUTABLE WAY i.e COPY WITHOUT THE POINTER .WE USE SPREAD OPERATOR


const person2 = {
    name: 'Max'
};

const secondperson2 = {
    ...person2
};
//Copies the properties

person2.name = 'MALI'
//here the changes happened in the original obj and not in the new obj


console.log(person2)
console.log(secondperson2)
