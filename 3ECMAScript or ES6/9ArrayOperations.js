
//Primitive and  Reference type

//Num String Booleans are primitive type they will copy the value
//Array and Object are Reference type

// const numbers = [1, 2, 3];
// //double the array
// const doublenumbers = numbers.map((num) => {
//     return num * 2;
// });

// console.log(numbers)
// console.log(doublenumbers)

//map is build in functions, it is executed on each element of the array

//SEARCHING AND FILTER IN ARRAY

// var Names = ["A", "B", "C", "D", "E", "C"];

// console.log(Names.indexOf('C',));
// // If not present then returns -1. Searches FORWARD

// console.log(Names.lastIndexOf('C'));
// // Seacrhes BACKWARD

//Array.prototype.includes()
//It determines whether the array contains a value, returning true or false as appropriate

// console.log(Names.includes('D'));
// console.log(Names.includes("DE"));


//.find() Method

//arr.find(callback(element[,index[,array]])[, thisArg])
//Returns  the found element in array, or *UNDEFINED* if not found
//ONLY problem is that is return only ONE Element //

// const prices = [200, 300, 350, 400, 450, 500, 600];

// console.log(prices[9]);//undefined

// // price < 400  -> GIVEN condition

// const findElement = prices.find((currVal) => {
//     return currVal < 400;
// });

// console.log(findElement); //Only return 200(i.e first satisfying value)

// console.log(prices.findIndex((currVal) => currVal < 100));
//IT Returns Index and -1 If not FOUND

//Differnce b/w .find() and .findInDEx

//Filter Method
//It returns a new array containing all elements of the calling array for which the provided filtering function return true
//Gives list of elements instead of one Element and Returns Empty Array if Element is not Found

//price < 400 ->Condition

// const newPriceTag = prices.filter((elem, index) => {
//     return elem < 400;
// })

// console.log(newPriceTag);

//Sort Method ->
//It sorts the element of array after converting them into STRINGS in Ascending order comparing the seq of UTF_16 code unit values

// const months = ['March', 'Jan', 'April', 'December']
// const numbers = [2, 31, 100, 33, 123, 1]
// const numbersArray = ['2', '31', '100', '33', '123', '1']

// console.log(months.sort());
// console.log(numbers.sort());//First converted into strings and then sorted,Therefore sort() method will produce an incorrect result when sorting the numbers.

// console.log(numbersArray.sort());

//CRUD OPERATORS IN ARRAY
//GO To BASIC FOLDER->Array

//const price = [200, 300, 350, 400, 450, 500, 600];

//Push add a Elment at last and RETURNS NEW Length of array
// price.push('1000')
// console.log(price);

//MAP METHOD
//It returns a new array  containing the results of calling a function on every element in this array.

// const array1 = [1, 3, 5, 7, 9, 10];

//num >5

// let newArr = array1.map((currElement, ind, arr) => {
//     return currElement > 5;
// })

//You can see it return True and false value,but if you want the exact value to be returned then use  CHAINING with MAP , This means that map() is chainable so it means you can attach reduce() sort() filter() and so on after performing a map() on array . //See example below

// let newArr1 = array1.map((curr, index, arr) => {

//     return `Index number is =${index} and the value is{curr} belongs to ${arr}`
// })
// console.log(array1);
// console.log(newArr);
//console.log(newArr1);

//DIFERRENCE BETWEEN MAP AND FOREACH
//https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/

// let arr = [2, 3, 4, 5, 6, 7]

// let arr3 = arr.map((currEle) => {
//     return currEle * 2;
// }).filter((currEle) => {
//     return currEle > 10;
// })

// console.log(arr3);

//REDUCE METHOD

//It is used to flatten an array means to convert the 3d or 2d array into a single Dimension array.
//THE  reduce() method executes a reducer function on each element of the array, resulting in single output value.

//The reduce function takes FOUR arguments:
// Accumulator ->EK SATH JAMA KARNA SAB
// current value
// current index
// source array

// let arr11 = [2, 4, 5, 6, 8];

// let sum = arr11.reduce((accumulator, curEle, index, arr) => {
//   debugger;
//   return (accumulator += curEle);
// });

// console.log(sum);

// let sumX = arr11.map((cur) => cur * 2).filter((curr) => curr > 10).reduce((accumulator, curr) => {
//     return accumulator += curr;
// })
// console.log(sumX);

//HOW to FLatten an array
//converting 3d and 2d into single dimension

// const arr = [
//   ["zone_1", "zone_2"],
//   ["zone_3", "zone_4"],
//   ["zone_5", "zone_6"],
//   ["zone_7", "zone_8"],
// ];
// console.log(arr);

// let flatarray = arr.reduce((accum, curEle) => {
//   return accum.concat(curEle);
// });
// console.log(flatarray);

//DRAWBACK of reduce was it cannot concate where there in another array inside 2d array
//REDuce method is not used not BECAUSE IN ECMA 2020 a new method was released which can easily do this task.
