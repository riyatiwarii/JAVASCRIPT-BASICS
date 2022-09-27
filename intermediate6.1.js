const User = require("./intermediate6.js");

const riya = new User("riya", "riya@yahoo.com");

console.log(riya.getInfo());

riya.enrollCourse("Javascript Bootcamp");
riya.enrollCourse("React Bootcamp");
console.log(riya.getCourseList());

let courses = riya.getCourseList();
console.log(`The number of courses in the courselist: ${courses.length}`)
if (courses.length == 0){
    console.log("You have not enrolled in any course yet.")
}
else {
    console.log("The courses enrolled in:")
    courses.forEach((course) =>
    console.log(course))
}

