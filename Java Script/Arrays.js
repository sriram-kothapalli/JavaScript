//Arrays
//1.Why Arrays? Group of elements represent in one variable
//2.How to declare arrays
//3. how to access array elements
//4. how to update/add array elements
//5. methods on arrays

//declare arrays in two ways
let person = ['sriram','jonnada',26]
// let person =new Array ('sriram','jonnada',26)
console.log(person)
//Access array elements
console.log(person[0])
//update / add array elements
person[3] = 9640405249;
person[4] = 'sriram@gmail.com';
console.log(person)
//methods on array:
//push()
//pop()
//unshift()
//shift()
//indexOf()
//slice()
person.push('rukesh')
console.log(person)
let x =person.pop()
console.log(x)//delete the last element and print the element in console
console.log(person)
person.unshift('akanksha')//adding the element as first value in array
console.log(person)
person.shift()//removing the first element from array 
console.log(person)
console.log(person.indexOf('jonnada'))//display the element stored in which place
console.log(person.slice(1,3))//display the elements based on the index (1,3-1)
