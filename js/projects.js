"use strict";

//Selects all elements necesary for making the swap
const projectsSystems = document.querySelector(".projects__list--systems");
const projectsElectronics = document.querySelector(
  ".projects__list--electronics"
);
const folderSystems = document.querySelector(".projects__folderIcon--systems");
const folderSystemsOpen = document.querySelector(
  ".projects__folderIcon--systemsOpen"
);

const folderElectronics = document.querySelector(
  ".projects__folderIcon--electronics"
);
const folderElectronicsOpen = document.querySelector(
  ".projects__folderIcon--electronicsOpen"
);

const systemsContainer = document.querySelector(".projects__container--systems");

const electronicsContainer = document.querySelector(
  ".projects__container--electronics"
);

const systemsNameContainer = document.querySelector(
  ".projects__nameContainer--systems"
);
const electronicsNameContainer = document.querySelector(
  ".projects__nameContainer--electronics"
);

//When the name or icon is clicked, elements are toggled or swapped
systemsNameContainer.addEventListener("click", toggleSystems);
electronicsNameContainer.addEventListener("click", toggleElectronics);

//Code Review by Andrea Beltrán: When the elements are exchanged, they overlap with the the projects in other devices such as those that can be tested directly in Mozilla Firefox

// Folder with projects of system engineering is opened?
let systemsOpen = true;
// Folder with projects of electronics engineering is opened?
let electronicsOpen = false;
// Is folder with projects of system engineering on top?
let isSystemsOnTop = true;

//List of projects, each one with name, description, img and link to code
const projects = {
  project1: {
    name: "Grupos",
    description:
      "A web application made in order to allow people to join interest groups and programm meetings in different spaces of the city",
    img: "../images/grupos.png",
    link: "https://github.com/Uniandes-ISIS2603-backup/201720-s1_grupos",
  },
  project2: {
    name: "Yale",
    description:
      "An entire system architecture design for a smart lock company. Build in mind to withstand 300.000 requests per minute in the worst case",
    img: "../images/yale.png",
    link: "https://github.com/ISIS2503/201810_02_pipo",
  },
  project3: {
    name: "OwO",
    description:
      "A mobile application designed in order to facilitate students plan their study times and connect them with the university systems",
    img: "../images/OwO.png",
    link: "https://gitlab.com/ISIS3510_201810_Team2/Android",
  },
  project4: {
    name: "GM",
    description:
      "A mobile application which allowed people to ask questions about cars they scan with a QR code",
    img: "../images/gm.png",
    link: null,
  },
  project5: {
    name: "Podometer",
    description:
      "A podometer designed with an Arduino so that it counts every time the person makes a step",
    img: "../images/podometer.png",
    link: null,
  },
  project6: {
    name: "Yale",
    description:
      "An Arduino project in order to simulate an Smart Lock. It had more than 3 different kinds of sensors",
    img: "../images/yaleArduino.png",
    link:
      "https://github.com/ISIS2503/201810_02_pipo/tree/master/entidadFisica",
  },
  project7: {
    name: "Thermostated Bath",
    description:
      "A thermostated bath created to heat microfluidic systems up to 50°C in a controlled manner",
    img: "../images/bath.png",
    link: "https://github.com/korkies22/ProyectoAnaloga",
  },
};

//Shows first project of systems folder after 200ms
setTimeout(() => {
  projectsSystems.style["maxHeight"] = "7rem";
  folderSystemsOpen.style.display = "inline-block";
  folderSystems.style.display = "none";
  systemsOpen = true;

  setTimeout(() => openProject("project1"), 200);
}, 200);

//Closes folder at top, swap folders order and opens new folder on top
function swapProjects() {
  //Set all appropiated variables
  let firstProject = systemsContainer;
  let secondProject = electronicsContainer;
  let firstProjectContainer = projectsSystems;
  let secondProjectContainer = projectsElectronics;
  let firstProjectFolder = folderSystems;
  let firstProjectFolderOpen = folderSystemsOpen;
  let secondProjectFolder = folderElectronics;
  let secondProjectFolderOpen = folderElectronicsOpen;
  systemsOpen = false;
  electronicsOpen = true;
  //If systems folder is not on top, the required variables are other ones
  if (!isSystemsOnTop) {
    firstProject = electronicsContainer;
    secondProject = systemsContainer;
    firstProjectContainer = projectsElectronics;
    secondProjectContainer = projectsSystems;
    firstProjectFolder = folderElectronics;
    firstProjectFolderOpen = folderElectronicsOpen;
    secondProjectFolder = folderSystems;
    secondProjectFolderOpen = folderSystemsOpen;
    systemsOpen = true;
    electronicsOpen = false;
  }

  //After 400ms the projects are swaped. This happens second
  setTimeout(() => {
    firstProjectFolderOpen.style.display = "none";
    firstProjectFolder.style.display = "inline-block";
    secondProjectFolder.style.display = "none";
    secondProjectFolderOpen.style.display = "inline-block";
    secondProject.style.transform = "translateY(0rem)";
    firstProject.style.transform = "translateY(0rem)";

    //This setTimeout is required so that the animation looks fluid. I found this by "cacharrear"
    setTimeout(() => {
      secondProjectContainer.style["maxHeight"] = "7rem";
    }, 0);

    secondProject.parentNode.insertBefore(secondProject, firstProject);
    isSystemsOnTop = !isSystemsOnTop;
  }, 400);

  //Starts moving the projects and closes project on top. This happens first
  firstProject.style.transform = "translateY(1rem)";
  secondProject.style.transform = "translateY(-3rem)";
  firstProjectContainer.style["maxHeight"] = "0";
}

//If systems folder is opened, closes it. If it's closed, opens it. If is on bottom puts it in the top
function toggleSystems() {
  if (systemsOpen) {
    folderSystemsOpen.style.display = "none";
    folderSystems.style.display = "inline-block";
    projectsSystems.style["maxHeight"] = "0";
    systemsOpen = !systemsOpen;
  } else {
    if (!isSystemsOnTop) {
      swapProjects();
    } else {
      folderSystems.style.display = "none";
      folderSystemsOpen.style.display = "inline-block";
      projectsSystems.style["maxHeight"] = "7rem";

      systemsOpen = !systemsOpen;
    }
  }
}

//If electronics folder is opened, closes it. If it's closed, opens it. If is on bottom puts it in the top
function toggleElectronics() {
  if (electronicsOpen) {
    folderElectronicsOpen.style.display = "none";
    folderElectronics.style.display = "inline-block";
    projectsElectronics.style["maxHeight"] = "0";
    electronicsOpen = !electronicsOpen;
  } else {
    if (isSystemsOnTop) {
      swapProjects();
    } else {
      folderElectronics.style.display = "none";
      folderElectronicsOpen.style.display = "inline-block";
      projectsElectronics.style["maxHeight"] = "7rem";

      electronicsOpen = !electronicsOpen;
    }
  }
}

//Selects all variables necesary for showing a project
let projectContainer = document.querySelector(".project");
let projectName = document.querySelector(".project__name");
let projectDescription = document.querySelector(".project__description");
let projectImg = document.querySelector(".project__img");
let projectLink = document.querySelector(".project__link");

//Shows a project depending on the id of the project clicked. The format of the ids is 'project*Id*' where *Id* is a number from 1 to 7
function openProject(id) {
  const project = projects[id];
  projectContainer.style.opacity = 1;
  projectName.innerHTML = project.name;
  projectDescription.innerHTML = project.description;
  projectImg.src = project.img;
  projectLink.href = project.link;
  projectLink.innerHTML = project.link;
}
