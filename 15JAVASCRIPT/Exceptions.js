//These are some of bugs or say exceptions of js

// console.log(5+"10");
// console.log(5+"ABC");
// console.log(5-"ABC");
// console.log(5-"10");
// let a =  1 + "8" -5 ;
// let b = "8" - "1"
// let c = 1 - 8 + "5"
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(1-'1');

//Agar String k andar Number hai aur subtraction ho raha h then wo normal subtraction 
//Agar String k andar String hain aur subtraction ho raha h then wo NAN hoga


//Undefined vs NUll

// var a = null
// console.log(a);
// console.log(typeof(a)); //null ka datatype object 
// var b;
// console.log(b);
// console.log(typeof(BiquadFilterNode)); //undefined is  a type  datatype 

//What is Nan ? 
//Not a Number is a property of the Global object*,or say it's a variable defined in global scope

// console.log("a"+"b")
// console.log("a"-"b") 

// var phone =91919191910
// var name = "shrey"

// console.log(isNaN(phone));//Can be used to get correct phone number.
// console.log(isNaN(name));

//console.log(NaN===NaN); //IT'S ALWAYS FALSE
//console.log(Number.NaN === NaN);
// console.log(isNaN.(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.NaN === NaN);

//Generate a random number b/w a given range
//Math.random() generates a rand no. b/w 0(inclusive) and 1(exclusive)
// Math.floor(Math.random() * (max - min + 1)) + min

// The parseInt() function parses a string and returns an integer. Here's an example:

// var a = parseInt("007");

// The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

//var a = parseInt(string,radix) radix specifies base of no. in the string , it can be b/w 2 - 36
//var a = parseInt("11", 2);

// The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.


function rangeOfNumbers(startNum, endNum) {
    var arr;
      if(startNum === endNum)
      {
        return []
      }
      else
      {
      var arr = rangeOfNumbers(startNum+1,endNum)
    
      arr.unshift(startNum);
      return arr;
    
      }
    };

rangeOfNumbers(1,5)
rangeOfNumbers(5,5)


console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);



//Give a example that Array is Special type of Object

const arr = [];
arr[0] = 'shre';
arr['a'] = 'async'
console.log(arr);
