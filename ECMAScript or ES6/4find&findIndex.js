//Why?

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let res = arr.find(function (item) {
//     // return item < 5
//     //It will return UNDEFINED IF NOTHING IS RETURNED
// })

// console.log(res);


// let res1 = arr.findIndex(function (item) {
//   //  return item < 5
//   //It will return -1 IF NOTHING IS RETURNED
// });

// console.log(res1);


// use of Objects

let data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 50, name: "Y" },
  { id: 32, name: "C " },
  { id: 31, name: "C " },
];

// let res2 = data.find(function (item) {
//     return item.id > 5
// })

// console.log(res2);

//Can you compare Name instead of ID.??

// let res3 = data.find(find(function (item) {
//     return item.name > "B"    
// }))

// data.sort((a, b) => a.name - b.name)

data.sort((a, b) => {
    if (a.name > b.name)
        return 1; //  swap
    else
        return -1; //kuch nhi hoga
    
    return 0;
}  )

console.log(data);

//a b, z y 
//-1  

// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same orde