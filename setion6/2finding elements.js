// let books = [
//   { id: 1, name: "maths" },
//   { id: 2, name: "social" },
// ];
// let book = books.find(function (book) {
//   return book.name === "social";
// });
// console.log(book);

let books = [
  { id: 1, name: "maths" },
  { id: 2, name: "social" },
];
let book = books.findIndex(function (book) {
  return book.name === "maths";
});
console.log(book);
