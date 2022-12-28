function india(x, y, z) {// Parameters
  //Arguments
  console.log(x + y); //Addition
  console.log(x - y); //Subtraction
  console.log(x * y); //Multiplication
  console.log(x / y); //Division
  console.log(x % y); //Modulus
  console.log(x**y) //exponetial ** x to the power of y
  console.log(x);
  console.log(++x); //increment
  console.log(x); //the x is increment from 20 to 21
  console.log(y);
  console.log(--y); // Decrements
  console.log(y); //the y is decrement from 30 to 29
  console.log(x + y); //the result is 21+29=50
  console.log((x = y)); // the value of x is y now 29
  console.log(x); // the value of x is now 29
  console.log(x + y);
  document.write(x); //dispalys x value here 29
}
india(5,2,1);
 

//eg: incerment and decrement are two types post increment and pre increment
//post decrement and pre decrement
let x= 5
console.log(x++) //the value of x is 5
console.log(x)  //the value of x should be now 6
let d=7; //Artimetric operator
d+=7;  //14
d-=7;  //7
d*=7   //49
console.log(d)


//comparision operator: it checks the value true or false is boolean
let r=1,s=3,m=5;
console.log(r>0)//true
console.log(s>6)//false
console.log(m<5)//false


//Equality Operator
//Equality operator we have two types 1.Strict and loose
console.log(1===1) //true
console.log('r'===r) //false
console.log('1'==1) //true
console.log(s==r) //false
console.log(s==s)  //true

//terinary operator
let value = 67;
let type = value>67? 'gold' : 'silver'; 
console.log(type) //gold
//if the condition is true return the first value

//logical operator : we have 3 types logical and,logical or, logical not.
//logical and: if both are same then returns true, if not false.
//&&--double ampersand
//Logical or: if both are same or not than it returns true
//Logical not: !
console.log(7>5 && 7>=4)
console.log(true && true)
console.log(true || false)
let highincome =true;
let elizibleForLoan = true;
let aprrove =(highincome && elizibleForLoan)
console.log(aprrove)
let aprrove2 =(highincome || elizibleForLoan)
console.log(aprrove2)


//operator precedence

let f =2 +1 * 3
console.log(f)
//f= 7

let l=(1+2)*3
console.log(l)
//l=9