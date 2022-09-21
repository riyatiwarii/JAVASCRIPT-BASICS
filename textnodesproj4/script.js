const courses = [    {   name : "Python Basics Course",
        price : 3.3
    },  {
        name : "Django Framework Course",
        price : 3.7
    },  {
        name : "React Framework Course",
        price : 3.1
    },  {
        name : "Nodejs Framework Course",
        price : 7.5
    },  {
        name : "Angular Framework Course",
        price : 5.2   }    ]

function generateCourseList(){

    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach((course) =>{

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$"+ course.price);
        span.appendChild(price)
        
        ul.appendChild(li)
        li.appendChild(span)
    })
}
// generateCourseList();
window.addEventListener("load",generateCourseList);

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price)
    generateCourseList();
})

const button2 = document.querySelector(".sort-btn2")
button2.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price)
    generateCourseList();
})