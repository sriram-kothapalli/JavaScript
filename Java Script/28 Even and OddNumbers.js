// Even and Odd Numbers
function number(limit) {
  for (i = 0; i <= limit; i++)
    if (i % 2 == 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
}
number(10);

//i++ is incrementing the limit 10 times in for loop.
//if the remainder is 0 the number is even
  