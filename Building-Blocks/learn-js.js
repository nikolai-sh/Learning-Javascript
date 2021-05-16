"use strict"

let admin;
let name = "Джон";
admin = name;
// alert(admin);
let ourPlanetName = "Earth";
let currentUserName;
// alert("heelo");
// document.write(ourPlanetName)

// alert("Я JavaScript!");
// alert('Мир');
// let sum = (a, b) => a + b;
// let double = n => n * 2;
// let sayHi = () => alert("Hello!");
// // sayHi();
// // alert(sum(2, 5));

// // let age = prompt('How old are you?', 18);

// let welcome = (age < 18) ? 
//     () => alert('Hello') :
//     () => alert('Welcome!');

// // welcome();
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };
// // alert( sum(4,4) );
// // // alert('kkk');
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Are you agree?",
//     () => alert("You are agree."),
//     () => alert("You aren't agree.")
// );

///////////////// Object/////////////////////////////

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// };

// // // alert(user.name);
// // alert(user.age);

// user.isAdmin = true;
// delete user.age;
// // user["likes birds"] = true;

// // alert(user["likes birds"])

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser("John", 30);

// for (let key in user) {
//     alert( key );
//     alert( user[key] );
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key]
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   multiplyNumeric(menu);

//   function multiplyNumeric(obj) {
//       for (let key in obj) {
//           if (typeof obj[key] == 'number') {
//               obj[key] *= 2;
//           }
//       }
//   }
//   multiplyNumeric(menu);

//   let clone = Object.assign({}, user); // create new object clone that equal to user
  
let calculator = {
    
    read() {
        this.num1 = +prompt("Enter a num1", 0);
        this.num2 = +prompt("Enter a num2", 0);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },

};
calculator.read();
alert(calculator.mul());
// alert(calculator.num1);