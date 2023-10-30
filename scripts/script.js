'use strict';

// *.main-nav = initially = Hidden
// - on CLK Need to add "main-nav-open" - TO PARENT of Nav BTN - so can Target .main-nav - when "main-nav-open" has been added to its Parent - eg:
// .main-nav-open ~ .main-nav {...css}
//...NEED "~"  - else Selector wont work

//// grab el's
// Mobile Nv BTN
const mobileNavBtn = document.querySelector('.btn-mobile-nav');

// const mobileNavCloseBtn = document.querySelector('.btn-mobile-nav');

// Mobile Nav Parent (for "~" Sel')
const navBtnParent = document.querySelector('.logo-mobile-nav');

// O/Lay Container - so can add the Class w/ the O/Lay Styles
const overlayContainer = document.querySelector('.overlay-container');

const heroSection = document.querySelector('.hero-section');

const mainNav = document.querySelector('.main-nav');

//// CLK EVT on Mobile Nav BTN
// On CLK "".main-nav-open" = Added to Parent of BTN - so can select the .main-nav =>
//...   .main-nav-open ~ .main-nav {...css}
mobileNavBtn.addEventListener('click', (e) => {
  // so can use "~" - to Open Mobile Nav
  navBtnParent.classList.toggle('main-nav-open');

  // toggle O/Lay Styles Class
  overlayContainer.classList.toggle('main-nav-overlay');

  // toggle the "=" & "X" Burger Icons
  //...these Classes just have a BG-Img (= SVG of "=" OR "X")
  mobileNavBtn.classList.toggle('btn-mobile-open');
  mobileNavBtn.classList.toggle('btn-mobile-close');

  // console.log(e.className);
});
