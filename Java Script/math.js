// Math.E
// Euler's constant and the base of natural logarithms; approximately 2.718.

// Math.LN2
// Natural logarithm of 2; approximately 0.693.

// Math.LN10
// Natural logarithm of 10; approximately 2.303.

// Math.LOG2E
// Base-2 logarithm of E; approximately 1.443.

// Math.LOG10E
// Base-10 logarithm of E; approximately 0.434.

// Math.PI
// Ratio of a circle's circumference to its diameter; approximately 3.14159.

// Math.SQRT1_2
// Square root of ½; approximately 0.707.

// Math.SQRT2
// Square root of 2; approximately 1.414.

//Math.max(1,2,3)
//Math.min(1,2,3)
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

let x=random(1, 10);
console.log(x)
//Every time we get a random numbers as the output