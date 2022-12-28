//here little bit confused either condition is satisfied or not satisfied we getting an ouput


//sum of arguments
function sum(...items) {
    //   console.log(items)
    // console.log(items.length);
  if (items.length === 5 && Array.isArray(items)){
  items = [...items];
  // console.log(Array.isArray(items))
  // console.log(items.length === 4) && Array.isArray(items)
  return items.reduce((s, w) => s * w  );
  }
}
console.log(sum(1, 2, 3, 4,5));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits);
// console.log(result)



// function sum(a,b){
// console.log(a+b)
// }
// sum(1,2)


//The isArray() method returns true if an object is an array, otherwise false.