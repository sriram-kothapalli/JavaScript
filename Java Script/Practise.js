// let person ={
//     name :'sriram',
//     email : 'sriramkothapalli@outlook.in',
//     ph : 9640405249,
//     dob : undefined,
//     job:null,
// }
// person.akhil = 'lokesh'
// person.akhil = 'mini'
// console.log(person.akhil)
// console.log(person.name,person.email,person.job,person.ph)
// console.log(person['ph'],person['email'],person['akhil'])




// let movie = new object();
// movie.budget = '5000crores'
// console.log(movie)
// movie. sriram = 'name'
// console.log(movie)

function User(n,a,p){
    this.name =n;
    this.age= a;
    this.place=p
    this.login=function(
        ){
        console.log('Hello'+" "+ this.name +" "+'loggedin')
    }
    
}
let user1=new User('sriram',25,'jonnada')
let user2=new User('rukesh',50,'ankapalli')
console.log(user1,user2)
user1.mobile=9640405249
console.log(user1)
user1.login()
let user3 = Object.create(user1)//cloning of an object
console.log(user3)
let user4 = Object.create(user1,{
    email:{
      value: 'sriramkothapalli@outlook.in'
    },
    phno:{
       value: 9640405249
    }
})
console.log(user4)

//garbage collection: you cannot tell garbage collector when to run and what variables to remove from memory .so based on the complex algorthims this garbage collector runs in the bacground  it figures out what variables are not used 
//Math:
