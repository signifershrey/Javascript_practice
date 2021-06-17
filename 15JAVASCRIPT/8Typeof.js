// Numbers

typeof 37 === 'number';
typeof 3.14 === 'number';
typeof (42) === 'number';
typeof Math.LN2 === 'number';
console.log(typeof Infinity === 'number');
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';

/*
// Strings
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // NOTE that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof { a: 1 } === 'object';
typeof null === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function () { } === 'function';
typeof class C { } === 'function';
typeof Math.sin === 'function';


// This stands since the beginning of JavaScript
typeof null === 'object';
In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value.The type tag for objects was 0. null was represented as the NULL pointer(0x00 in most platforms).Consequently, null had 0 as type tag, hence the typeof return value "object". (reference)

A fix was proposed for ECMAScript(via an opt -in), but was rejected.It would have resulted in typeof null === 'null'.

Using new operator
// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
let str = new String('String');
let num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

let func = new Function();

typeof func; // It will return 'function'
Need for parentheses in Syntax
// Parentheses can be used for determining the data type of expressions.
let iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
Regular expressions
Callable regular expressions were a non - standard addition in some browsers.

    typeof / s / === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1
typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1

*/