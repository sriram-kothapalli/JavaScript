// //Objects
// let circle = {
//     radius :1,
//     location : {
//         x:1,
//         y:1
//     },
//     invisible:true,
//     draw:function (s){
//         console.log('draw',s)
//     }

// }
// circle.draw(34)


let circle = {
    radius : 1,
    cube : true,
    hello :{
        x : 1,
        y:  2,
    },
    beim : 'string',
    hdshj : null,
    ghd : undefined,
        dram : function (c){
            console.log(this.radius,this.cube,this.hello['x'],this.hello['y'],c)
        }
}
circle.dram(2)