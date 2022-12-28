//moving an element
let numbers = [1, 2, 3, 4, 5, 6,7,23456,34,67,77,6];
let output = move(numbers, 0, 0);
console.log(output);
function move(array, index, offset) {
  let output = [...array];
  //1,2,3,4,5,6
  //Array.splice(start, removeCount, newItem, newItem, newItem, ...) 
  const element = output.splice(index,2)[1]
  console.log(element)
  console.log(output)
  output.splice(1)
  output.splice(index + offset, 0,11,12,13,14,15);

  return output;
}


//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi")