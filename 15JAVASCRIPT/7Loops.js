//While Loop And Do While Loop
//for loop
//FOR IN 
//FOR OF
//FOR EACH



//FOR IN AND FOR OF  LOOP WERE INTRODUCED IN ES6

var name = ['A', 'B', 'C', 'D', 'E']

for (var i = 0; i < name.length; i++) {
    console.log(name[i]);
}

for (let element in name) {
    console.log(element);
}
// FOR in RETurns Index number


for (let elements of name) {
    console.log(elements);
}
// FOR OF RETUNS VALUE



name.forEach(function (ele, index, array) {
    console.log(`This element ${ele} is present at index number ${index}`);
});


//FOR EACH is comnbination of for in and and for of as we can get both value and index
//BReak cannot be used with forEach