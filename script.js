"use strict";

const contentBox = document.querySelector(".content-box");
const colorGen = document.querySelector(".color-gen");
const colorBtn = document.querySelector(".color-btn");
const body = document.querySelector("body");
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

colorBtn.addEventListener("click", function () {
  //generate a random number
  let randomNumber = Math.trunc(Math.random() * 10);
  //change the backgroundcolor of the body
  contentBox.style.backgroundColor = color[randomNumber];
  body.style.backgroundColor = color[randomNumber];
  colorBtn.style.backgroundColor = color[randomNumber];
  // display the color value in the div box
  colorGen.textContent = color[randomNumber];
});
