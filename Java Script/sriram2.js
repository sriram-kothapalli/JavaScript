//landscape or portrait
//Expression
// function landscape(width,height){
//     let a=width;
//     let b=height;
//     if(a<b){
//         console.log('width is the',width )
//     }
//     else if (a>b){
//         console.log('height is the',height)
//     }
//     else
//     console.log('both of them are wrong')
// }
// landscape('1080','870');

//declaration
let door=max(1080,870);
console.log(door)
function max(height,width){
    if(height<width) return true;
    else return false;
}