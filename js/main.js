/* POPUP*/
const popup = document.querySelector(".popup");

const initPopup = event => {
  if (event.target.classList.contains("read-more")) {
    event.preventDefault;
    popup.classList.remove("d-none");
    popup.innerHTML = event.target.previousElementSibling.innerHTML;

    document.body.classList.add("popup-wrapper");
    Array.from(document.body.children).forEach(element => {
      if (element !== popup) {
        element.classList.add("blur");
      }
    });
  }
  document.body.addEventListener("click", closePopup, { once: true });
};

const closePopup = event => {
  if (event.target.closest("div") != popup) {
    popup.classList.add("d-none");
    document.body.classList.remove("popup-wrapper");
  }
  Array.from(document.body.children).forEach(element => {
      element.classList.remove("blur");
  });
};

document.body.addEventListener("click", initPopup);

/* ------------------ */

function CustomSelect(options) {
	const elem = options.elem;
  
	elem.onclick = function(event) {
	  if (event.target.className == 'title') {
		toggle();
	  } else if (event.target.tagName == 'LI') {
		setValue(event.target.innerHTML, event.target.dataset.value);
		close();
	  }
	}
  
	const isOpen = false;
  
	function onDocumentClick(event) {
	  if (!elem.contains(event.target)) close();
	}
  
	function setValue(title, value) {
	  elem.querySelector('.title').innerHTML = title;
  
	  const widgetEvent = new CustomEvent('select', {
		bubbles: true,
		detail: {
		  title: title,
		  value: value
		}
	  });
  
	  elem.dispatchEvent(widgetEvent);
  
	}
  
	function toggle() {
	  if (isOpen) close()
	  else open();
	}
  
	function open() {
	  elem.classList.add('open');
	  document.addEventListener('click', onDocumentClick);
	  isOpen = true;
	}
  
	function close() {
	  elem.classList.remove('open');
	  document.removeEventListener('click', onDocumentClick);
	  isOpen = false;
	}
  
  }

  const langSelect = new CustomSelect({
	elem: document.getElementById("lang-select")
  });

  const langTxt = document.querySelectorAll(".lang");

  document.addEventListener("select", function(event) {
	langTxt.forEach(element => {
		if (element.classList.contains(`${event.detail.value}`)) {
		  element.classList.remove("d-none");
		} else {
		  element.classList.add("d-none");
		}
	  });
  });
