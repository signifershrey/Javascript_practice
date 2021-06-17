class Human {
//   constructor() {
//   this.gender = "Male";
//   }

  //In classes,don't have to write func while defining func
  //In classes,don't have to write data while defining var
  myname = "Shreuyys";
  printGender() {
    console.log(this.myname);
  }
}
const person = new Human();
person.printGender();
console.log(person.myname); 

// class Person extends Human {
//   constructor() {
//     super(); //IMPORTANT  SUPER CONSTRUCTOR
//     this.name = "Max";
//     this.gender = "Female";
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();
// console.log(person.myname);

/////ES 7
////ANOTHER WAY /SYNTAXX

// class Human {
//   gender = "Male";

//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   name = "Max";
//   //gender ='Female';

//   printMyName = () => {
//     console.log(this.name);
//   };
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

