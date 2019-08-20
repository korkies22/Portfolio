"use strict";

//Select the 2 images from main
const img1 = document.querySelector(".main__img--1");
const img2 = document.querySelector(".main__img--2");

//Waits for image to load
img1.onload = function() {
  console.log('hi')
  //Hides first image
  setTimeout(() => {
    img1.classList.toggle("main__img--gone");
  }, 750);

  //Shows second image
  setTimeout(() => {
    img2.classList.toggle("main__img--gone");
  }, 1250);
};
