//Create an Factory function 
    
// function person (Name,age,place){
//     return {
//         Name,
//         age,
//         place
//     };
// }
// let man =person('a','b','c')
// console.log(man)

//constructor function
function Similar(name,place,age){
    this.name=name;
    this.place=place;
    this.age=age;
}
let user1=new Similar ('sriram','jon',25)
console.log(user1)