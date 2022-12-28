//moving an element
let numbers = [1, 2, 3, 4, 5, 6];
let output = move(numbers, 2, 1);
console.log(output);
function move(array, index, offset) {
  let output = [...array];
  //1,2,3,4,5,6
  //Array.splice(start, removeCount, newItem, newItem, newItem, ...)
  const element = output.splice(index, 1)[0];
  output.splice(index + offset,0,element);
  //index+offset=3,0, (element=3)
  return output;
}
