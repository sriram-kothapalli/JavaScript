//count occurance
const allStudentsAge = [19, 22, 18, 19, 16, 18, 19, 21, 24];
let target = 21;

let counter = 0;
for (studentAge of allStudentsAge) {
  if (studentAge == target) {
        counter++;
    }
};

console.log(counter);