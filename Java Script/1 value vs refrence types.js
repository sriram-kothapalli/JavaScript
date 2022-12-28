//premitive type/value type
//Refrece type

//1.Value Type: Number,string,boolean,null,undefined,symbol
//symbol is new one in java script
//2.refrence types : Object,Array,Function


// let x=10;
// let y=x;
// x=20;
//Now x and y are independent  


// let x={
    // value:10//when we used an object not stored in   variable stored in some where in the memory
// }
// let y=x;
// x.value =20;

// EG:
// let number =10;
// function increase (number){
//     number++
//     console.log(number)
// }
// increase(number)
// console.log(number)
//premitives are copied by their value
let number ={value:10};
function increase (number){
    number.value++
    console.log(number)
}
increase(number)
console.log(number)