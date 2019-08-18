"use strict";

const img1 = document.querySelector('.main__img--1');
const img2 = document.querySelector('.main__img--2');

setTimeout(() => {
  img1.classList.toggle('main__img--gone');
}, 750)
setTimeout(() => {
  img2.classList.toggle('main__img--gone');
}, 1250)