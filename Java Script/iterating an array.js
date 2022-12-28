//iterating an array
let numbers =[1,2,3,4,5,6,7]
for (let number of numbers)//method 1
console.log(number)
numbers.forEach(function(number) { //method 2
console.log(number)
})
numbers.forEach(number=>{//method 3
    console.log(number)
})
