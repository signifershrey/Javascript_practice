//This Keyword refers to an object that is executing in the current code.

//like 'window' object executes in the global scope

// console.log(this);
//prints the window object 

//Similarly, every function while executing has a reference to 
//its current execution context, which can be referenced by 'this'

/*
In most of the cases, the value of 'this' depends by how a function is called. It may be different 
each time the function is called.
The value of 'this' also depends whether we are working in the strict mode or not. 
*/

//Slopy Mode

//Example 1

// In global execution context, 'this' refers to the global object as the function call is bound 
// to window object by default.


//Inside a function, if the value of 'this' is not set by the call, then it will also default to 
///'window' object. Eg.,

function abc() {
 console.log(this);
}
abc(); //It gets into the Window Object


//But when an object has a function defined as a property to it, its 'this' refers to the object 
//the method is called on. Eg.,

var obj = {
 a: 25,
 abc: function() {
 return this.a;
 }
}
console.log(obj.abc());  //prints 25


//In Scrict Mode

'use script'
/*
Strict mode puts a restriction on value of this, it will be undefined if in global context 
function is not bound to any object. Whereas in sloppy mode it was set to ‘window’ 
object.

*/

//example


function abc() {
 console.log(this);
}
abc(); //Prints Undefined
window.abc();  //Prints window object //#Doubt

//Using Call() or Apply Methods

/*
As we know now that in strict mode if you call a function staightaway it not bound to 
any object. So you can bound a function to a particular object by using 'call()' or 'apply()'
methods.
*/

var obj = {a: 12, b: 13};
function sum() {
 return this.a + this.b;
}
sum.call(obj);
sum.apply(obj);


/*
The difference in 'call()' and 'apply()' functions lies in the way arguments are passed to 
the function.
In call() method, you pass individual parameters after passing the object parameter
In apply() method, you pass the rest of the parameters as an array.

*/

//For More Go to Devsnest Day9 task