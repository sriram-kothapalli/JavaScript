//reducing an array
let numbers = [1,-1,2,3]
let sum = numbers.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
})
console.log(sum)
