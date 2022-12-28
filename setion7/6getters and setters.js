//in this we see about the get and set methods in  objects.
//geters and setters
//get is an access the properties
//set is an change of the properties or mutate them
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`; //templet literal
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "John Smith";
console.log(person);
console.log(person.firstName,person.lastName,person.fullName)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
//   console.log(person.lang)

//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang;
//     }
//   };
//     person.lang='en'
//   console.log(person)