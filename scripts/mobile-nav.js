'use strict';

///////////// MAIN NAV FUNCTIONALITY /////////////
//////////////////////////////////////////////////
// *.main-nav = initially = Hidden
// - on CLK Need to add "main-nav-open" - TO PARENT of Nav BTN - so can Target .main-nav - when "main-nav-open" has been added to its Parent - eg:
// .main-nav-open ~ .main-nav {...css}
//...NEED "~"  - else Selector wont work

//// grab el's
// Mobile Nv BTN - for CLK EVT & to Change this btn's Icon
const mobileNavBtn = document.querySelector('.btn-mobile-nav');

// for Overlay when Mobile Nav is Active
const pageContainer = document.querySelector('.container');

// for Toggling the (H) of the Mobile Nav Container
const pageHeaderContainer = document.querySelector('.page-header-container');

// Mobile Nav & Lg btn Parent (so can use "~" OR Desc Sel')
const navAndBtnParent = document.querySelector('.page-header-container');

//// CLK EVT on Mobile Nav BTN
// On CLK "".main-nav-open" = Added to Parent of BTN - so can select the .main-nav via...
//...   .main-nav-open ~ .main-nav OR DESC SEL' {...css}
mobileNavBtn.addEventListener('click', (e) => {
  // so can use Desc. Sel' OR "~" - to Open Mobile Nav & Display Lg Btn
  navAndBtnParent.classList.toggle('main-nav-open');

  // for Nav O/Lay
  pageContainer.classList.toggle('main-nav-open');

  // toggle the "=" & "X" Burger Icons
  //...these Classes just have a BG-Img (= SVG of "=" OR "X")
  mobileNavBtn.classList.toggle('btn-mobile-open');
  mobileNavBtn.classList.toggle('btn-mobile-close');

  // Toggle the (H) of the Mobile Nav Container
  pageHeaderContainer.classList.toggle('height-small');
});
