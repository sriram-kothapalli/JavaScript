//try and catch
//when we are using the try method we have to use the catch method then
//try method is error handling
//if in case there is no error in try method then catch method does not execute
//throw if the condition wants to stop the current method we use the throw keyword in that block it ends the execution.
// try{
// console.log('chaitanya')
// console.log(sriram)
// }
// catch(error){
//     console.log(error)
//     console.log('hii')
// }
// console.log('rukesh')
// console.log('akanksha')

// let x=20
//   console.log("line1")
//   if(x<15){
//  throw "x must be greater than 15"
//  console.log('hii sriram')
//     };
//   console.log("hello")

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    if (typeof value !== 'string') return;
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = 'sriram kothapalli';
console.log(person);
