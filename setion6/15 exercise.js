//move an element
let numbers =[1,2,3,4];
let output =move(numbers,1,-4);
console.log(output)
function move(array,index,offset){
    let output=[...array];
    let element =output.splice(index,1)[0];
    output.splice(index + offset,0,element);
    return output;
}