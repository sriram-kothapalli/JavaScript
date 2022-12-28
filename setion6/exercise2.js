//includes
//if the given element exists return true, if not exists return false.
let numbers = [1, 2, 3, 4, 5, 6];
console.log(includes(numbers, 6));
function includes(array, searchElement) {
  for (let element of array) 
  if (element === searchElement) return true;
  return false;
}
