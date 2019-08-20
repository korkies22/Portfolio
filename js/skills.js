'use strict'
/*
  Carousel design and implementation based on Swiper: https://idangero.us/swiper/
*/

//The width of the screen. This is used to calculate how much to move the perspective
const width = document.body.clientWidth
//////////////////////////////////////////////////// Second Carousel

//Finds appropiate carousel
const carousel1 = document.querySelector('.carousel--1')
//Which card should be shown. First card to be shown is first one in order
let selectedIndex1 = 0

//Cards inside the carousel
const cards1 = carousel1.childNodes
let numCards1 = 0
for (let i = 0; i < cards1.length; i++) {
  //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
  if (cards1[i].nodeName.toLowerCase() == 'div') {
    //The number of cards is counted only on the first iteration
    numCards1++
    //Because they are interleved. The i's are 1,3,5...
    const newI = (i - 1) / 2
    const newPerspective = Math.abs(newI - selectedIndex1)
    const newZIndex = 1 - newPerspective
    //Sets appropiate zIndex to all divs
    cards1[i].style.zIndex = newZIndex
    const newIndex = -112.5 * (1 - newZIndex)
    const newRotation = 56.25 * (-newI + selectedIndex1)
    //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
    cards1[i].style.transform =
      'translate3d(0px, 0px, ' +
      newIndex +
      'px) rotateX(0deg) rotateY(' +
      newRotation +
      'deg)'
  }
}

//The carousel container also needs to be translated 3d so that the appropiate card is at center
const newRotation = 0.5 * width - 150 - selectedIndex1 * 300
const newTranslation = width * -0.51114649 + 270
carousel1.style.transform =
  'translateX(' +
  newTranslation +
  'px) translate3d(' +
  newRotation +
  'px, 0px, 0px)'
const newPerspective = 400 + 900 * selectedIndex1
carousel1.style.perspectiveOrigin = newPerspective + 'px 50%'

function rotateCarousel1() {
  for (let i = 0; i < cards1.length; i++) {
    //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
    if (cards1[i].nodeName.toLowerCase() == 'div') {
      //Because they are interleved. The i's are 1,3,5...
      const newI = (i - 1) / 2
      const newPerspective = Math.abs(newI - selectedIndex1)
      const newZIndex = 1 - newPerspective
      //Sets appropiate zIndex to all divs
      cards1[i].style.zIndex = newZIndex
      const newIndex = -112.5 * (1 - newZIndex)
      const newRotation = 56.25 * (-newI + selectedIndex1)
      //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
      cards1[i].style.transform =
        'translate3d(0px, 0px, ' +
        newIndex +
        'px) rotateX(0deg) rotateY(' +
        newRotation +
        'deg)'
    }
  }
  //The carousel container also needs to be translated 3d so that the appropiate card is at center
  const newRotation = 0.5 * width - 150 - selectedIndex1 * 300
  const newTranslation = width * -0.51114649 + 270
  carousel1.style.transform =
    'translateX(' +
    newTranslation +
    'px) translate3d(' +
    newRotation +
    'px, 0px, 0px)'
  const newPerspective = 400 + 900 * selectedIndex1
  carousel1.style.perspectiveOrigin = newPerspective + 'px 50%'
}

//Button for showing prev card
const prevButton1 = document.querySelector('.carousel__button--prev-1')
prevButton1.addEventListener('click', function() {
  if (selectedIndex1 == 0) return
  selectedIndex1--
  rotateCarousel1()
})

//Button for showing next card
const nextButton1 = document.querySelector('.carousel__button--next-1')
nextButton1.addEventListener('click', function() {
  if (selectedIndex1 == numCards1 - 1) return
  selectedIndex1++
  rotateCarousel1()
})

//////////////////////////////////////////////////// Second Carousel

//Finds appropiate carousel
const carousel2 = document.querySelector('.carousel--2')
//Which card should be shown. First card to be shown is first one in order
let selectedIndex2 = 0

//Cards inside the carousel
const cards2 = carousel2.childNodes
let numCards2 = 0
for (let i = 0; i < cards2.length; i++) {
  //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
  if (cards2[i].nodeName.toLowerCase() == 'div') {
    //The number of cards is counted only on the first iteration
    numCards2++
    //Because they are interleved. The i's are 1,3,5...
    const newI = (i - 1) / 2
    const newPerspective = Math.abs(newI - selectedIndex2)
    const newZIndex = 1 - newPerspective
    //Sets appropiate zIndex to all divs
    cards2[i].style.zIndex = newZIndex
    const newIndex = -112.5 * (1 - newZIndex)
    const newRotation = 56.25 * (-newI + selectedIndex2)
    //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
    cards2[i].style.transform =
      'translate3d(0px, 0px, ' +
      newIndex +
      'px) rotateX(0deg) rotateY(' +
      newRotation +
      'deg)'
  }
}

//The carousel container also needs to be translated 3d so that the appropiate card is at center
const newRotation2 = 0.5 * width - 150
const newTranslation2 = width * -0.51114649 + 270
carousel2.style.transform =
  'translateX(' +
  newTranslation2 +
  'px) translate3d(' +
  newRotation2 +
  'px, 0px, 0px)'
const newPerspective2 = 450 + 900 * selectedIndex2
carousel2.style.perspectiveOrigin = newPerspective2 + 'px 50%'

function rotateCarousel2() {
  for (let i = 0; i < cards2.length; i++) {
    //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
    if (cards2[i].nodeName.toLowerCase() == 'div') {
      //Because they are interleved. The i's are 1,3,5...
      const newI = (i - 1) / 2
      const newPerspective = Math.abs(newI - selectedIndex2)
      const newZIndex = 1 - newPerspective
      //Sets appropiate zIndex to all divs
      cards2[i].style.zIndex = newZIndex
      const newIndex = -112.5 * (1 - newZIndex)
      const newRotation = 56.25 * (-newI + selectedIndex2)
      //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
      cards2[i].style.transform =
        'translate3d(0px, 0px, ' +
        newIndex +
        'px) rotateX(0deg) rotateY(' +
        newRotation +
        'deg)'
    }
  }
  //The carousel container also needs to be translated 3d so that the appropiate card is at center
  const newRotation = 0.5 * width - 150 - selectedIndex2 * 300
  const newTranslation2 = width * -0.51114649 + 270
  carousel2.style.transform =
    'translateX(' +
    newTranslation2 +
    'px) translate3d(' +
    newRotation +
    'px, 0px, 0px)'
  const newPerspective = 400 + 900 * selectedIndex2
  carousel2.style.perspectiveOrigin = newPerspective + 'px 50%'
}

//Button for showing prev card
const prevButton2 = document.querySelector('.carousel__button--prev-2')
prevButton2.addEventListener('click', function() {
  if (selectedIndex2 == 0) return
  selectedIndex2--
  rotateCarousel2()
})

//Button for showing next card
const nextButton2 = document.querySelector('.carousel__button--next-2')
nextButton2.addEventListener('click', function() {
  if (selectedIndex2 == numCards2 - 1) return
  selectedIndex2++
  rotateCarousel2()
})

//////////////////////////////////////////////////// Third Carousel

//Finds appropiate carousel
const carousel3 = document.querySelector('.carousel--3')
//Which card should be shown. First card to be shown is first one in order
let selectedIndex3 = 0

//Cards inside the carousel
const cards3 = carousel3.childNodes
let numCards3 = 0
for (let i = 0; i < cards3.length; i++) {
  //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
  if (cards3[i].nodeName.toLowerCase() == 'div') {
    //The number of cards is counted only on the first iteration
    numCards3++
    //Because they are interleved. The i's are 1,3,5...
    const newI = (i - 1) / 2
    const newPerspective = Math.abs(newI - selectedIndex3)
    const newZIndex = 1 - newPerspective
    //Sets appropiate zIndex to all divs
    cards3[i].style.zIndex = newZIndex
    const newIndex = -113.5 * (1 - newZIndex)
    const newRotation = 56.25 * (-newI + selectedIndex3)
    //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
    cards3[i].style.transform =
      'translate3d(0px, 0px, ' +
      newIndex +
      'px) rotateX(0deg) rotateY(' +
      newRotation +
      'deg)'
  }
}

//The carousel container also needs to be translated 3d so that the appropiate card is at center
const newRotation3 = 0.5 * width - 150
const newTranslation3 = width * -0.51114649 + 270
carousel3.style.transform =
  'translateX(' +
  newTranslation3 +
  'px) translate3d(' +
  newRotation3 +
  'px, 0px, 0px)'
const newPerspective3 = 450 + 900 * selectedIndex3
carousel3.style.perspectiveOrigin = newPerspective3 + 'px 50%'

function rotateCarousel3() {
  for (let i = 0; i < cards3.length; i++) {
    //The if is necesary because there are some attributes besides the card. Tipically they are interleaved
    if (cards3[i].nodeName.toLowerCase() == 'div') {
      //Because they are interleved. The i's are 1,3,5...
      const newI = (i - 1) / 2
      const newPerspective = Math.abs(newI - selectedIndex3)
      const newZIndex = 1 - newPerspective
      //Sets appropiate zIndex to all divs
      cards3[i].style.zIndex = newZIndex
      const newIndex = -113.5 * (1 - newZIndex)
      const newRotation = 56.25 * (-newI + selectedIndex3)
      //Sets appropiate translate3d Z index so that the card is close or far from the screen and ratateY degree so that the card is rotated properly. This was found by looking at swiper
      cards3[i].style.transform =
        'translate3d(0px, 0px, ' +
        newIndex +
        'px) rotateX(0deg) rotateY(' +
        newRotation +
        'deg)'
    }
  }
  //The carousel container also needs to be translated 3d so that the appropiate card is at center
  const newRotation = 0.5 * width - 150 - selectedIndex3 * 300
  const newTranslation3 = width * -0.51114649 + 270
  carousel3.style.transform =
    'translateX(' +
    newTranslation3 +
    'px) translate3d(' +
    newRotation +
    'px, 0px, 0px)'
  const newPerspective = 400 + 900 * selectedIndex3
  carousel3.style.perspectiveOrigin = newPerspective + 'px 50%'
}

//Button for showing prev card
const prevButton3 = document.querySelector('.carousel__button--prev-3')
prevButton3.addEventListener('click', function() {
  if (selectedIndex3 == 0) return
  selectedIndex3--
  rotateCarousel3()
})

//Button for showing next card
const nextButton3 = document.querySelector('.carousel__button--next-3')
nextButton3.addEventListener('click', function() {
  if (selectedIndex3 == numCards3 - 1) return
  selectedIndex3++
  rotateCarousel3()
})
