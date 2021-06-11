// Create a new index131.js file
// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for

var femaleStudents=['Bella','Tina','Vivian','Nora','Thera'];
var maleStudents=['Ryan','Devid','Peter','James','Hunter'];
var students=femaleStudents.concat(maleStudents);
var sortStudents=students.sort();
var i=0;
while(i<5){
    console.log(maleStudents[i]);
    i++;
}
for(i=0;i<5;i++){
console.log(femaleStudents.indexOf(femaleStudents[i]),' : ',femaleStudents[i]);
}

for(i=0;i<10;i++){
    console.log(sortStudents[i]);
}
