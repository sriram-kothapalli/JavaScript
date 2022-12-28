//local scope
// function sriram(a,b){
//     let i =a+b;
//     console.log(i)
// }
// sriram(10,20)

// //global
var x = 1;
var y = 2;
async function nama(haa, bee) {
    var f = (haa += bee);
    console.log(x + y);
}
await nama(1, 2);
console.log(f);