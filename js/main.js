"use strict";

const backdrop = document.querySelector('.backdrop');
const sideNav = document.querySelector('.sideNav');

function openSideNav() {
  backdrop.style.display = 'block';
  sideNav.style.width="60vw";
}

function closeSideNav() {
  backdrop.style.display = 'none';
  sideNav.style.width="0%";
}
