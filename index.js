const circle = document.querySelector(".circle");
const btn = document.querySelector("#btn");

function changeBgGradient(event) {
  let colors = [];
  for (let i = 0; i < 9; i++) {
    colors.push(Math.floor(Math.random() * 256));
  }

  const color1 = [colors[0], colors[1], colors[2]];
  const color2 = [colors[3], colors[4], colors[5]];
  const color3 = [colors[6], colors[7], colors[8]];

  if (color1 === color2 || color2 === color3 || color3 === color1) {
    return changeBgGradient();
  }
  circle.style.background = `linear-gradient(60deg, rgb(${color1[0]},${color1[1]},${color1[2]}), rgb(${color2[0]},${color2[1]},${color2[2]}), rgb(${color3[0]},${color3[1]},${color3[2]}))`;
}

btn.addEventListener("click", changeBgGradient);
