//Spread Operator is Used to Copy or Add properties
//Spread operator is used to Split up the Array or  Object Properties


const numbers = [1,2,3];
const newnumbers =[...numbers,4]

// console.log(newnumbers);

// const person = {
//     name :'Shrey'
// };
// const newperson = {
//     ...person, 
//     age :28
// }

// console.log(newperson)

//Another Ex-
function fun(...val) {
    console.log(val);
}
function funOne(a, b, c) {
    console.log(a,b,c);
}

// const arrOne = [10, 20, 30];
// funOne(...arrOne)
// fun(10,20)



//Rest Operater
// The rest operator (…) allows us to call a function with any number of arguments 
// and then access those excess arguments as an array.The rest operator also allows us in destructuring array or objects.

const filter = (...args) => {
    return args.filter(el => el ===2);

}
console.log(filter(1,2,3));