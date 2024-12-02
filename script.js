"use strict";

const container = document.querySelector(".container");
const contentBox = document.querySelector(".content-box");
const colorGen = document.querySelector(".color-gen");
const colorBtn = document.querySelector(".color-btn");

const color = [
  "#FF69B4",
  "#33CC33",
  "#6666CC",
  "#CC3333",
  "#CCCC33",
  "#33CCCC",
  "#CC66CC",
  "#CCCC66",
  "#666666",
  "#CCCCCC",
];
for (let x = 0; x < color.length; x++) {
  //   console.log(color[x]);
  const randomIndex = Math.floor(math.radom() * color.length);
  const randomColor = color[randomIndex];
  //   return randomColor;
}

// function generateRandomColor() {
//   const randomcolor = math.floor(math, random() * color.length);
//   // Get the color at the random index
//   const randomColor = color[randomIndex];

//   // Display the random color
//   colorDisplay.style.backgroundColor = randomColor;
//   colorDisplay.innerText = randomColor;
//   return randomcolor;
// }
// const randomColor = color[x];
colorBtn.addEventListener("click", function () {
  container.style.backgroundColor = "red";
});
