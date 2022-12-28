//Arrow Functions
// let courses = [
//     {
//         sriram: 'a'
//     },
//     {
//         rukesh: 'c'
//     }
// ];
// let course=courses.find(course=>course.sriram === 'a');
// console.log(course)
let courses = [
    {
        sriram: 'a'
    },
    {
        rukesh: 'c'
    }
];
let course=courses.findIndex(course=>course.rukesh === 'c');
console.log(course)