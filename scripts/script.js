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
});

///// MONTHLY/YEARLY TOGGLE SWITCH FUNCTIONALITY //////
//////////////////////////////////////////////
// C/Box (inside Toggle Switch)
const membershipCheckbox = document.querySelector('.membership-checkbox');

// the 2 <p>s next to toggle switch
const paraMonthly = document.querySelector('.monthly');
const paraYearly = document.querySelector('.yearly');

// <spans> to change their Rendered VALUE
const basicPrice = document.querySelector('.basic-price');
const basicTerm = document.querySelector('.basic-term');
const proPrice = document.querySelector('.pro-price');
const proTerm = document.querySelector('.pro-term');
const businessPrice = document.querySelector('.business-price');
const businessTerm = document.querySelector('.business-term');

// EVT on Toggle Switch
membershipCheckbox.addEventListener('change', toggleMembershipTerm);

function toggleMembershipTerm() {
  // Toggle font = BOLD
  paraMonthly.classList.toggle('active-membership-term');

  paraYearly.classList.toggle('active-membership-term');

  // Render Diff Prices & membership Term
  if (!membershipCheckbox.checked) {
    basicPrice.textContent = '$19.00';
    proPrice.textContent = '$39.00';
    businessPrice.textContent = '$99.00';
    basicTerm.textContent = 'per month';
    proTerm.textContent = 'per month';
    businessTerm.textContent = 'per month';
  }

  if (membershipCheckbox.checked) {
    basicPrice.textContent = '$190.00';
    proPrice.textContent = '$390.00';
    businessPrice.textContent = '$990.00';
    basicTerm.textContent = 'per year';
    proTerm.textContent = 'per year';
    businessTerm.textContent = 'per year';
  }
}
