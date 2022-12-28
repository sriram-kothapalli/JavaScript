let sriram;//var keyword we used before the ES6-Version 
console.log(sriram)

//for keyword name shold be always lower case.
//if write an name LAST NAME Shold be like this lastName i.e; Camel notation
//keyword name shouldn't started with the number
//cannot contains a space and hypen '-'

// let intrestrate = 0.3; //the value of variable is changed
// intrestrate = 1;
// console.log(intrestrate)

const intrestrate = 0.3; //the value of const is not changed (FIXED)
console.log(intrestrate)


//Primitive or value type: 1.String 2.Number 3.Boolean 4. Undefined 5. Null
//String:      Sequence of character is called an string ('sriram') or ("sriram")
//Number:      Eg: let sriram = 1;
//Boolean:     Eg: let sriram = true/false;
//undefined:   Eg: let sriram;
//null         Eg: let sriram = null; if in case the progragramer dont the value the he can assigned the future untill he wrote the value is null

let ser = undefined;
console.log(typeof ser)



//Objects: in objects we can write the multiple properties by defining the key and values

let cha = {
    name : 'roman',
    age : 1,
    lastname : 'kothapalli'
}
cha.age = 'ravana' //dot notation
cha['age'] = 'sita' //bracket notation
console.log(cha.age)
//Arrays : An arrays is an object we can store multiple values in it.
let naga =['daaa','mame'];
naga[2] = 'nooo';
console.log(naga)
console.log(naga[0])
console.log(naga[1])
console.log(naga[2])


// //function:
// function palli(oth){
//     //Block of code
// }
{
function vathicoming(num1){
return num1+5
}
var num1 = 100;
}
console.log(num1+5)

// function don ()
// {
//     console.log('hello world')
// }
// don();


function boo(name) //parameter
{
    console.log('hello ' + name);  //argument
}
boo('soni');

function friend(name,lastname){
    console.log('hello ' + name,''+lastname)
}
friend('sriram','kothapalli')


function square (number){
    return number * number;
}
console.log(square(2))