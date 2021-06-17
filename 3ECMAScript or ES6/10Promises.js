const { log } = require("console");
const fetch = require("node-fetch");

/*
What is Promis?e
Javascript and Time waits for none
A promise is an object that returns a value,which you expect
to recieve in future,but not currently

Why we need Promise?
Since JS is a synchronous and Single Threaded Language, it means
JS never waits for a code or function result whenever they take some
time to execute.

2parts ->producing code and Consuming code

*/

console.log("Say Hello to Promises");

// let data = 1;
// console.log(data);
// data = 2;
// setTimeout(() => {
//     console.log(data);
// }, 2000)

// data = 3;
// console.log("Last ", data);

//You will notice that you will get 3 in setTimeout also
//So to Resolve this Problem we use Promises

// let ans = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Code Has been executed after 3 second");
//     // resolve({name:'Shrey', age:13})
//     reject("some issues")
//     // resolve(10);
//   }, 2000);
// });

// ans
//   .then((item) => {
//     console.log("1st :", item);
//     return item * 10;
//   })
//   .then((item) => {
//     console.log("2nd :", item);
//   })
//   .catch((err) => {
//     console.log("Catch Block ", err);
//   })
//   .finally(() => {
//     console.log("It is FINAL Now");
//   });

// console.log("Say Bye to Promises");

///Let See a Live Example OR  Promise Chaining

// let data = fetch("https://dummy.restapiexample.com/api/v1/employees");
// data.then((item) => {
// //   console.log(item);
//     return item.json()
// }).then((res) => {
//     console.log(res);
// })

//Finally hamesha ya HAR BAR chalega chae Promise resolve ho ya Reject ho
////////////////////////////

//Promise.all VS Promise.allsettled VS promise.race

// let data = Promise.all([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("2 second");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("1 second");
//     }, 1000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//        res("5 second");
//         // rej("5 sec");
//     }, 4000);
//   }),
// ]);

// data.then((item) => {
//     console.log("Then Block ",item);
// }).catch((err) => {
//     console.log("Catch Block" ,err);
// })

//Promise.all will reject as soon as one of the Promises in the array rejects.

// Promise.allSettled will never reject - it will resolve once all Promises in the array have either rejected or resolved.

//Promise. race will resolve as soon as one Promise resolves,

// let data = Promise.allSettled([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("2 second");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("1 second");
//     }, 1000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("5 second");
//       // rej("5 sec");
//     }, 4000);
//   }),
// ]);

// data
//   .then((item) => {
//     console.log("Then Block ", item);
//   })
//   .catch((err) => {
//     console.log("Catch Block", err);
//   });


let data = Promise.race([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("2 second");
    }, 2000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("1 second");
    }, 5000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("4 second");
      // rej("5 sec");
    }, 4000);
  }),
]);

data
  .then((item) => {
    console.log("Then Block ", item);
  })
  .catch((err) => {
    console.log("Catch Block", err);
  });
