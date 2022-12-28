//array from range
let numbers =arrayFromRange(1,4);
console.log(numbers);
function arrayFromRange(min,max){
    const output=[];
    for(i=min;i<max;i++)
    output.push(i);
    return output;
}