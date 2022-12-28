//equality operator object
let person1 = 'sriram';
let person2 = 'sriram'
console.log(person1===person2)

let key1 = {
    name :'sriram',
    age :26
}
let key2 = {
    name : 'sriram',
    age : '26'
}
console.log(key1==key2)
console.log(key1.name===key2.name)
console.log(key1.age==key2.age)
console.log(key1.age===key2.age)



//constructor function; object equality
function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode
}
let address1 =new Address('jonnada','anakapalli',533233)
let address2 =new Address('jonnada','anakapalli',533233)
let address3 =address1;
function areSame(address1,address2){ //are same little bit easy
    return address1===address2;
}
console.log(areSame(address1,address2));//false
console.log(areSame(address1,address3));//true
function areEqual(address1,address2){ // little tough
    return address1.street===address2.street &&
    address1.city===address2.city &&
    address1.zipcode===address2.zipcode;
}
console.log(areEqual(address1,address2));