//calculate grade of a student
//0-59:f
//60-69:d
//70-79:c
//80-89:b
//89-90:a

var students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];
var Avgmarks = 0;
for (i = 0; i < students.length; i++) {
  console.log(students[i])
  Avgmarks += students[i][1];
  //0+80=80
  //0+80+77=157
  //0+80+77+88=245
  //0+80+77+88+95=340
  //0+80+77+88+95+68=408
  // console.log(Avgmarks)
  var avg = Avgmarks / students.length;
  //80/5=16
  //157/5=31.4
  //245/5=49
  //340/5=68
  //408/5=81.6
  console.log(avg);
}
if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}
console.log("Average grade:", Avgmarks / students.length);
