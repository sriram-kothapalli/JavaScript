//factory function
// function createCircle(radius){
//     return{
//         radius,//key
//         draw(){  //method
//             console.log(draw)
//         }
//     }
// }
// let circle1=createCircle(1)
// console.log(circle1)
// let circle2=createCircle(2)
// console.log(circle2)
// let circle3=createCircle(3)
// console.log(circle3)


function createEmployeeObjects(name,age){
    return{ //return an object
        name,
        work(){
            console.log('New Employee:',name+age)
        }
    }
}
//creating an employee with factory functions
let emp1= createEmployeeObjects('akanksha ',26)
emp1.work()
let emp2= createEmployeeObjects('rukesh ',26)
emp2.work()
