//string
let message = 'hello world';
console.log(typeof message)
console.log(message.length)
console.log(message)
console.log(message.includes('world'))
console.log(message.includes('no'))
let message2 = new String('hello world');
console.log(typeof message2)
console.log(message2.length)
console.log(message2)
console.log(message2.includes('hello'))
console.log(message2.includes('no'))
console.log(message2.startsWith('hello'))
console.log(message2.startsWith('Hello'))
console.log(message2.endsWith('d'))
console.log(message.indexOf('w'))