//fizzbuzz
// var x = function(x){
//     if (x===3 && x<2){
//         console.log('number is fizz')
//     }
//     else if (x=5 || x>0){
//         console.log('number is buzz')
//     }
//     else console.log('number is fizzbuzz')
// }
// x(3);

function fizzbuzz(x){
    if (x===0 || x===3)
    console.log('fizz')
    else if(x>0 && x<9)
    console.log('buzz')
    else
    console.log('fizzbuzz')
}
fizzbuzz(3);