//sum of multiples 3 and 5

var sum=0;
for (x = 0; x <=10; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
    console.log(sum);
  }
}
//if the raminder is zero then it executes

//sum 3 and 5
//x=0 , x is incrementing 10 times like 0,1,2,3,4,5,6,7,8,9
//0%3=0    0  
//1%3=0    
//2%3=0
//3%3=0    3  
//4%3=0        5
//5%3=0    
//6%3=0    6
//7%3=0
//8%3=0
//9%3=0    9

//sum +=x or 
//x=x+y assignment operator
//these are satisfies from the if statement 0,3,5,6,9 from the remainder
// output: 0,3,8,14,23