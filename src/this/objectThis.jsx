// const obj = {
//     name:"Nandini",
//     greet:function(){
//         console.log(this.name);
//     }
// }

// obj.greet();


// const person = {
//   name: "Nandini",
//   sayHi: function() {
//     console.log("Hi, I am " + this.name);
//   }
// };

// person.sayHi(); // "Hi, I am Nandini"



function show() {
  console.log(this.name);
}

const user = { name: "Nandini" };

const boundShow = show.bind(user);
boundShow();



