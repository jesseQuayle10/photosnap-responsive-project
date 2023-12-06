'use strict';
///// MONTHLY/YEARLY TOGGLE SWITCH FUNCTIONALITY //////
//////////////////////////////////////////////
// C/Box (inside Toggle Switch)
const membershipCheckbox = document.querySelector('.membership-checkbox');

// the 2 <p>s next to toggle switch - for BOLD Styling
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
