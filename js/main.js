class Popup {
	constructor(element) {
		this.elem = document.querySelector(element);
		this.isOpen = false;
		this.onDocumentClick = this.onDocumentClick.bind(this);
	}

	openPopup() {
		this.elem.classList.add("open");
		// document.addEventListener("click", this.onDocumentClick);
		this.isOpen = true;
	}

	closePopup() {
		this.elem.classList.remove("open");
		// document.removeEventListener("click", this.onDocumentClick);
		this.isOpen = false;
	}

	onDocumentClick(event) {
		if (!this.elem.contains(event.target)) this.closePopup();
	}

	togglePopup() {
		if (this.isOpen) this.closePopup();
		else this.openPopup();
	}

	setValue(title, value) {
		this.elem.querySelector(".title").innerHTML = title;
	}
}

/* Language select */
const langPopup = new Popup('.lang-list');
const langSelect = document.querySelector('.lang-list');
const langTxt = document.querySelectorAll('.lang');

document.addEventListener('click', onSelectClick);

function onSelectClick() {
	if (event.target.className == 'title') {
		langPopup.togglePopup();
	} else if (event.target.className == 'lang-item') {
		document.querySelector('.title').innerHTML = event.target.innerHTML;
		langTxt.forEach((element) => {
			if (element.classList.contains(`${event.target.dataset.value}`)) {
				element.classList.remove('d-none');
			} else {
				element.classList.add('d-none');
			}
		});
		langPopup.closePopup();
	} else if (!langPopup.elem.contains(event.target)) {
		langPopup.closePopup();
	}
}

/* Article Popup */
const articlePopup = new Popup('.popup');
const popupContainer = document.querySelector('.popup');

document.addEventListener('click', onReadMoreClick);

function onReadMoreClick() {
	if (event.target.classList.contains('read-more')) {
		popupContainer.innerHTML = event.target.previousElementSibling.innerHTML;
		articlePopup.openPopup();
		document.body.classList.add('popup-wrapper')
	} else if (!articlePopup.elem.contains(event.target)) {
		articlePopup.closePopup()
		document.body.classList.remove('popup-wrapper')
	}

}
