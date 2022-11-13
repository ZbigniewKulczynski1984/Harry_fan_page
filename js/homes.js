const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');
const test = document.querySelector('.test');
const btn = document.querySelector('#btn');
const td = document.getElementsByTagName('td');

//--------------------------------------------------

function openAccoidrionItems() {
	console.log(this.nextElementSibling.classList.toggle('active'));
}
accordionBtns.forEach((btn) =>
	btn.addEventListener('click', openAccoidrionItems)
);
openAccoidrionItems();

//----------------------------------------------------
