const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// console.log(display,buttons)

buttons.forEach((button) => {
    button.addEventListener('click',(e) => console.log(e.target.dataset.value))
})