//count occurance

let numbers = [1, 2, 3, 4, 5, 1, 1];
let count = countOccurrences(numbers, 1);
console.log(count);
function countOccurrences(n, searchElement) {
  return n.reduce((accumulator, numbers) => {
    // console.log(accumulator);
    const occurrence = numbers === searchElement ? 1 : 0;
    // console.log(accumulator, numbers, searchElement);
    return accumulator + occurrence;
  }, 0);
}
