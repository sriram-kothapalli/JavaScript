//count truthy
// falsy expressions are undefined , null , NaN , 0 , "",false,-0,-0n
//Truthy expressions are {}, string, true,[],number,"0",infinity,3.14,-3.14,-Infinity

let isActive =true;
let jammu = false;
let namee ='sriram';
let age = 0;
let aged = 1;
let ageed =2;
let sudo = ''
let edj = undefined;
let ghjkl =null;
let dc = NaN;
if (namee)
console.log('hello',namee)
console.log(Boolean(56))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(0n))
console.log(Boolean("0"))
console.log(Boolean(true))
console.log(Boolean(false))
console.log(Boolean(-0))







// Boolean(false);         // false
// Boolean(undefined);     // false
// Boolean(null);          // false
// Boolean('');            // false
// Boolean(NaN);           // false
// Boolean(0);             // false
// Boolean(-0);            // false
// Boolean(0n);            // false

// Boolean(true);          // true
// Boolean('hi');          // true
// Boolean(1);             // true
// Boolean([]);            // true
// Boolean([0]);           // true
// Boolean([1]);           // true
// Boolean({});            // true
// Boolean({ a: 1 });      // true