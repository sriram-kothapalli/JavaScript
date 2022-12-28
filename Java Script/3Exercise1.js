//create address object with 3 properties 
//street,city,address
//And then create a function called showAddress and take the address object along with the value.



let address = {
    street : 'Veternary Colony',
    city :   'Vijayawada',
    adress : 'lalitha nivas 4th floor' 
}
address.phno = 9640405249;
address['rukesh'] ='name';
function showAddress(address){
for(let key in address)
console.log(key,address[key])
console.log(address.city,address['city'])
}
showAddress(address)