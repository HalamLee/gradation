const circle = document.querySelector(".circle");
const btn = document.querySelector("#btn");
const circleWrapper = document.querySelector(".circle-wrapper");
const colorsCircle = document.querySelector(".colors-circle");
const colorCircle1 = document.querySelector(".color-circle:first-child");
const colorCircle2 = document.querySelector(".color-circle:nth-child(2)");
const colorCircle3 = document.querySelector(".color-circle:last-child");

let filling = false;

function handleModeClick() {
  if (filling === true) {
    btn.innerText = "Change the color";
    btn.style.border = "none";
    circleWrapper.classList.remove("before-choice-wrapper");
  }
}

function changeBgGradient(event) {
  let colors = [];
  for (let i = 0; i < 9; i++) {
    colors.push(Math.floor(Math.random() * 256));
  }

  const color1 = [colors[0], colors[1], colors[2]];
  const color2 = [colors[3], colors[4], colors[5]];
  const color3 = [colors[6], colors[7], colors[8]];
  const deg = Math.floor(Math.random() * 180);

  if (color1 === color2 || color2 === color3 || color3 === color1) {
    return changeBgGradient();
  }
  circle.style.background = `linear-gradient(${deg}deg, rgb(${color1[0]},${color1[1]},${color1[2]}), rgb(${color2[0]},${color2[1]},${color2[2]}), rgb(${color3[0]},${color3[1]},${color3[2]}))`;
  colorCircle1.style.background = `rgb(${color1[0]},${color1[1]},${color1[2]})`;
  colorCircle2.style.background = `rgb(${color2[0]},${color2[1]},${color2[2]})`;
  colorCircle3.style.background = `rgb(${color3[0]},${color3[1]},${color3[2]})`;
  filling = true;
  handleModeClick();
}

btn.addEventListener("click", changeBgGradient);
