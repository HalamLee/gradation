const circle = document.querySelector(".circle");
const btn = document.querySelector("#btn");
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeBgGradient(event) {
  const color1 = Math.floor(Math.random() * colors.length);
  const color2 = Math.floor(Math.random() * colors.length);
  if (color1 === color2) {
    return changeBgGradient();
  }
  circle.style.backgroundImage = `linear-gradient(60deg, ${colors[color1]}, ${colors[color2]})`;
}

btn.addEventListener("click", changeBgGradient);
