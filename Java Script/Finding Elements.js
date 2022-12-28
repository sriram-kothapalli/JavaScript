//finding Elements (Refrence Types)


let courses = [
    {
        sriram: 'a'
    },
    {
        chaitanya: 'c'
    }
];
let course=courses.find(function(course){
    return course.sriram === 'a';

})
console.log(course)

// let courses = [
//     {
//         sriram: 'a'
//     },
//     {
//         chaitanya: 'c'
//     }
// ];
// let course=courses.findIndex(function(course){
//     return course.sriram === 'a';

// })
// console.log(course)