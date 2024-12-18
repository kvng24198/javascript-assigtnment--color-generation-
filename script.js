"use strict";

const contentBox = document.querySelector(".content-box");
const colorGen = document.querySelector(".color-gen");
const colorBtn = document.querySelector(".color-btn");
const body = document.querySelector("body");

const letters = "0123456789ABCDEF";
colorBtn.addEventListener("click", function () {
  //generate a random color

  const randomCol = generateRandomColor();

  body.style.backgroundColor = randomCol;
  colorBtn.style.backgroundColor = randomCol;
  colorGen.textContent = randomCol;
});
function generateRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
