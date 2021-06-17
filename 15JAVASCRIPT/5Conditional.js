//If Statements
//If-else
//Else if
//Switch-case



let whoishere='userwwe'

if(whoishere==='user'){
    console.log('GReetings to you')
}
else if(whoishere=='teacher'){
    console.log('you are a teacher')
}
else{
    console.log('invalid')
}



array = [1, 2, 3, 4, 5]
var s="";
for (let i = 0; i < array.length; i++) 
{
    // console.log(array[i])
    s+= i + " ";
};
console.log(s);

gu = function () {
    console.log('Hello Guys!');
    }

console.log(gu);
gu()

// // function a(){
// //     return 1
// // }

let a =function (){
        return 1
     }

let b = 23



// TYPEERROR OCCURS WHEN DATA TYPE DOESNT MATCHES
//STRING AND CHARACTER ARE TREATED AS STRING DATATYPE ONLY
//INT AND FLOAT ARE TREATED AS NUMBER DATATYPE
//YOU CAN PASS ANY NUMBER OF ARGUMENTS IN CONSOLE.LOG()



const getmygrade = function (name,cm,tm) {
    let mypercent = (cm / tm) * 100

    let mygrade = ''

    if (mypercent >= 90) {
        mygrade = 'A'
    }
    else if (mypercent >= 75) {
        mygrade = 'B'
    }
    else if (mypercent >= 60) {
        mygrade = 'C'
    }
    else {
        mygrade = 'F'
    }

    return `${name} has received ${mygrade} and ${mypercent} percent`


}

let yourresult= getmygrade('SURAJ',80,100)
console.log(yourresult)

let sayname =function(name){

    console.log("Greetings from the User")
    console.log(`Hello ${name}`)
   
}
var name="Shrey";
sayname(name);//function calling

