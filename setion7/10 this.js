//this
// var a = 10;
// console.log(this); //here representing an object
// console.log(window.a);
// console.log(a);
// console.log(this.a);
// console.log(window);
let person = {
  name: "sriram",
  age: 26,
  email: "srk",
  college: function () {
    console.log(this); //it represents current object inside the function
  },
};
person.college();
console.log(person);
// var person2 = {
//   name: "sriram",
//   age: 26,
//   email: "srk",
// };
// console.log(person2);
// console.log(this);
// var person2 = {
//   name: "sriram",
//   age: 26,
//   email: "srk",
// };
// console.log(person2);
// console.log(this.person2); //we using let variable so we get error here

//this keyword: this refrences the object executes the current function
//if a function part of object is called an method.
//method 1
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
video.play();
//method 2
//if a this method part of function declaration then it is window object
function na() {
  console.log(this);
}
na();
