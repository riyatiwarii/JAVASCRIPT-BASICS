// Array.map
var studentRecords = [ {name: 'Shreya', id: 123, marks : 98 },
          {name: 'Anjali', id: 101, marks : 23 },
          {name: 'Nancy', id: 200, marks : 45 },
          {name: 'anyone_else', id: 121, marks : 75 } ] 

var studentNames = studentRecords.map(stu => stu.name.toUpperCase());
console.log(studentNames)

// Array.filter
var studentMarks = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120);
console.log(studentMarks)

// Filter and Map function together
var studentMarks = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120).map(stu => stu.marks);
console.log(studentMarks)

//Array.reduce
var totalMarks = studentRecords.reduce((acc,curr) => acc + curr.marks, 0)
console.log(totalMarks);

//Filter and Reduce function together
var studentMarks = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120).reduce(
    (acc,curr) => acc+curr.marks, 0
)
console.log(studentMarks)

//Map, Filter and Reduce function together
var totalMarks = studentRecords.map(function(stu){
    if (stu.marks < 50){
        stu.marks += 15;}
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0)
console.log(totalMarks)
