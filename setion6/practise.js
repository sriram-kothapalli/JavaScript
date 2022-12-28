// function User(name,age,ph){
//     this.name=name,
//     this.age=age,
//     this.ph=ph
// };
// let User1= new User('Sriram',26,9640405249);
// User1.college = 'klu'
// console.log(User1)

// let User2=new User('chaitanya',20,46387291)
// User2['age']=29
// console.log(User2)




// let x =[1,2,3,4,5]
// for(let y of x)
// console.log(y)
// x.forEach(y=> {
//     console.log(y)
// })


let numbers = [1,2,3,4,5,6,-1]
let positiveNumbers=numbers.every(x=> {
    return x>=0;
})
console.log(positiveNumbers)


let numbers2= [-1,-2,-3,1]
let any =numbers2.some(x=>{
return x>=0;
})
console.log(any)