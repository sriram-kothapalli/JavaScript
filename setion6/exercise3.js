//except method
let numbers = [1,2,3,4,5,6,7,8,9,10]
let output = except(numbers,[1,2,3,4,5])
console.log(output)
function except(array,excluded){
    let output =[]
    for(let element of array)
    if(!excluded.includes(element))
    output.push(element);
    return output;
}