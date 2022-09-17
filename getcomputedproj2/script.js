const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(orange).backgroundColor);

const bgColor = (selectedElement) => {
    return console.log(window.getComputedStyle(selectedElement).backgroundColor);
}
bgColor(orange);