"use strict";

//Selects backdrop, sidenav and hamburger icon
const backdrop = document.querySelector(".backdrop");
const sideNav = document.querySelector(".sideNav");
const hamburger = document.querySelector(".nav__hamburger");

//When hamburger is clicked the nav is opened
hamburger.addEventListener("click", openSideNav);
//When backdrop is clicked the nav is opened
backdrop.addEventListener("click", closeSideNav);

//Open side nav and shows backdrop
function openSideNav() {
  backdrop.style.display = "block";
  sideNav.style.width = "60vw";
}

//Hide side nav and backdrop
function closeSideNav() {
  backdrop.style.display = "none";
  sideNav.style.width = "0%";
}
