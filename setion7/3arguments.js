//arguments

// function sum(a,b){
//     return a+b;

// }
// console.log(sum(2,3));

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(2, 3, 4, 5, 6, 7));