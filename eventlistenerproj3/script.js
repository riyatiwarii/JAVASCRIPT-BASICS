const colors = [".red",".cyan",".violet",".orange",".pink"]

const center = document.querySelector(".center")

colors.forEach((element) => {
    document.querySelector(element).addEventListener('mouseenter', () => {
        center.style.backgroundColor = window.getComputedStyle(document.querySelector(element)).backgroundColor
    })
})

