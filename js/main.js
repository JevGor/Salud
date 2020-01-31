class Popup {
	constructor(element) {
		this.elem = document.querySelector(element);
		this.isOpen = false;
	}

	openPopup() {
		this.elem.classList.add('open');
		this.isOpen = true;
	}

	closePopup() {
		this.elem.classList.remove('open');
		this.isOpen = false;
	}

	togglePopup() {
		if (this.isOpen) this.closePopup();
		else this.openPopup();
	}

	setValue(title, value) {
		this.elem.querySelector('.title').innerHTML = title;
	}
}

/* Language select */
const langPopup = new Popup('.lang-list');
const langSelect = document.querySelector('.lang-list');
const langTxt = document.querySelectorAll('.lang');

const selectLang = () => {
	document.querySelector('.title').innerHTML = event.target.innerHTML;
	langTxt.forEach((element) => {
		if (element.classList.contains(`${event.target.dataset.value}`)) {
			element.classList.remove('d-none');
		} else {
			element.classList.add('d-none');
		}
	});
};

const onSelectLangClick = () => {
	if (event.target.className == 'title') {
		langPopup.togglePopup();
	} else if (event.target.className == 'lang-item') {
		selectLang();
		langPopup.closePopup();
	} else if (!langPopup.elem.contains(event.target)) {
		langPopup.closePopup();
	}
};

document.addEventListener('click', onSelectLangClick);

/* Article Popup */
const textPopup = new Popup('.popup');
const popupContainer = document.querySelector('.popup');

const openTextPopup = () => {
	popupContainer.innerHTML = event.target.previousElementSibling.innerHTML;
	textPopup.openPopup();
	document.body.classList.add('popup-wrapper');
};

const closeTextPopup = () => {
	textPopup.closePopup();
	document.body.classList.remove('popup-wrapper');
};

const onReadMoreClick = () => {
	if (event.target.classList.contains('read-more')) {
		openTextPopup();
	} else if (!textPopup.elem.contains(event.target)) {
		closeTextPopup();
	}
};

document.addEventListener('click', onReadMoreClick);

/* Mobile Menu */
// const mobMenu = new Popup('.mob-menu');
const mobMenuBtn = document.querySelector('.mob-menu-btn');

const onMobMenuBtnClick = () => {
	console.log(event.target)
	if (event.target.classList.contains('mob-menu-btn')) {
		mobMenuBtn.classList.add('open')
	}
}

document.addEventListener('click', onMobMenuBtnClick)
