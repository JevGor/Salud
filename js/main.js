/* FADED TEXT*/
const popup = document.querySelector('.popup');

const initPopup = (event) => {
	if (event.target.classList.contains('read-more')) {
    event.preventDefault;
    popup.classList.remove('d-none');
		popup.innerHTML = event.target.previousElementSibling.innerHTML;

		document.body.classList.add('popup-wrapper');
	}
	document.body.addEventListener('click', closePopup, { once: true });
};

const closePopup = (event) => {
	if (event.target.closest('div') != popup) {
		popup.classList.add('d-none');
		document.body.classList.remove('popup-wrapper');
	}
};

document.body.addEventListener('click', initPopup);

/* LANGUAGE */

const select = document.querySelector('.items');
const langTxt = document.querySelectorAll('.lang');

select.addEventListener('change', (event) => {
	langTxt.forEach((element) => {
		if (element.classList.contains(`${event.target.value}`)) {
			element.classList.remove('d-none');
		} else {
			element.classList.add('d-none');
		}
	});
});
