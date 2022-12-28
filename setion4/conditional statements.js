// //in java script we have if and else and switch and case

// // function time (x){
// //     if(x<12 && x<=6){
// //         console.log('good morning')
// //     }
// //     else if(x=6){
// //         console.log('good afternoon')
// //     }
// //     else
// //     console.log('good afternoon')
// // }
// // time(6)

// // let x;
// // switch (x) {
// //   case 1:
// //     console.log("good morning");
// //     break;
// //   case 2:
// //     console.log("good evening");
// //     break;
// //   case 3:
// //     console.log("good night");
// //     break;
// //   default:
// //     console.log("sriram");
// // }


// // for (let x=0;x<5;x++){
// //     if(x%2!==0)
// //     console.log(x)
// // }

// // let i=0;
// // while(i<5){
// //     if(i%2==0)
// //     console.log(i)
// //     i++;
// // }

// let i=0;
// do{
//     if(i%2==0)
//     console.log(i)
//     i++;
// }
// while(i<5)


//for in

let person = {
    name : 'sriram',
    age: 25,
    email :'sriramkothapalli@gmail.com'
};
person['degree']='klu'
person.school = 'siddhartha';
for(let key in person)
console.log(key,person[key]);


//arrays
let colors = ['red','blue','green'];
colors[3]= 'white';
for(let index in colors)
console.log(index,colors[index]);
