//for loop
for(let i=0;i<5;i++){
    if(i%2===0)
    console.log(i)
}

//while loop
let i=0;
while(i<5){
    if(i%2==0)
    console.log(i)
    i++;
}
//do-while
let q=0;
do{
    if(q%2==0)
    console.log(q)
    q++;
}
while(q<5)


//for-in
let person = {
    name : 'sriram',
    age :26,
    email : 'sriramkothapalli'
}
person.college = 'klu';
person['year']= 2022;
for(let key in person)
console.log(key,':',person[key])


let colors = ['white','green','yellow']
colors[3] = 'creem'
for(let index in colors)
console.log(index,colors[index])


//for-of

// const colors2 = ['white','green','yellow'];
// for (let colors2 of colors2)
// console.log(colors2);


//break and continue
let a = 0;
while(a<10){
    if(a===5)
    break;
    console.log(a)
    a++;

}

let b=0
while(b<10){
    if(b%2==0)
    continue;
    console.log(b)
    b++;
}