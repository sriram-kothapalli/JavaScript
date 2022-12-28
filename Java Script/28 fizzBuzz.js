//fizzbuzz
//if a number is divisible by 3 we get fiz.
//if a number is divisible by 5 we get buzz
// if a number is divisible by 15 we get fizzbuzz

// function fizzbuzz(input) {
//   if (input % 3 == 0) {
//     console.log("number is fizz");
//   } else if (input % 5 == 0) {
//     console.log("number is buzz");
//   } else console.log("fizzbuzz");
// }
// fizzbuzz(3);


let x= fizzbuzz(45);
console.log(x);
function fizzbuzz(input){
    if((input%3===0) && (input%5===0))
    return 'fizzBuzz';
    if(input%3===0)
    return 'fizz';
    if(input%5===0)
    return 'buzz';
    return input;
}



