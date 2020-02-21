"use strict";

class Popup {
  constructor(element) {
    this.elem = document.querySelector(element);
    this.isOpen = false;
  }

  openPopup() {
    this.elem.classList.add("open");
    this.isOpen = true;
  }

  closePopup() {
    this.elem.classList.remove("open");
    this.isOpen = false;
  }

  togglePopup() {
    if (this.isOpen) this.closePopup();
    else this.openPopup();
  }

  setValue(title) {
    this.elem.querySelector(".title").innerHTML = title;
  }
}

/* Language select */

const langPopup = new Popup(".lang-list");
const langTxt = document.querySelectorAll(".lang");
const langSelectItems = document.querySelectorAll(".lang-item");

const setLang = () => {
  langTxt.forEach(element => {
    if (element.classList.contains(`${event.target.dataset.value}`)) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });
};

const setMobLangBtnActive = () => {
  langSelectItems.forEach(element => {
    if (element.dataset.value === event.target.dataset.value) {
      element.classList.add("lang-active");
    } else {
      element.classList.remove("lang-active");
    }
  });
};

const selectLang = () => {
  document.querySelector(".title").innerHTML = event.target.innerHTML;
  setLang();
};

const onSelectLangClick = () => {
  if (event.target.className === "title") {
    langPopup.togglePopup();
  } else if (event.target.classList.contains("lang-item")) {
    selectLang();
    setMobLangBtnActive();
    langPopup.closePopup();
  } else if (!langPopup.elem.contains(event.target)) {
    langPopup.closePopup();
  }
};

document.addEventListener("click", onSelectLangClick);

/* Text Popup */

const textPopup = new Popup(".popup");
const popupContainer = document.querySelector(".popup");

const openTextPopup = () => {
  popupContainer.innerHTML = event.target.previousElementSibling.innerHTML;
  textPopup.openPopup();
  document.body.classList.add("popup-wrapper");
};

const closeTextPopup = () => {
  textPopup.closePopup();
  document.body.classList.remove("popup-wrapper");
};

const onReadMoreClick = () => {
  if (event.target.classList.contains("read-more")) {
    openTextPopup();
  } else if (!textPopup.elem.contains(event.target)) {
    closeTextPopup();
  }
};

document.addEventListener("click", onReadMoreClick);

/* Mobile Menu */

const mobMenuPopup = new Popup(".mob-menu");
const mobMenuBtn = document.querySelector(".mob-menu-btn");

const toggleMobMenu = () => {
  mobMenuBtn.classList.toggle("open");
  mobMenuPopup.togglePopup();
};

const closeMobMenu = () => {
  mobMenuBtn.classList.remove("open");
  mobMenuPopup.closePopup();
};

const onMobMenuBtnClick = () => {
  if (event.target.closest(".mob-menu-btn")) {
    toggleMobMenu();
  } else if (
    event.target.classList.contains("mob-nav-link") ||
    event.target.classList.contains("lang-item") ||
    event.target.closest(".socials-link") ||
    event.target.closest(".mob-menu-btn")
  ) {
    closeMobMenu();
  }
};

document.body.addEventListener("click", onMobMenuBtnClick);

/*Slider*/

const sliderContainer = document.querySelector(".slider-container");
const sliderControlsContainer = document.querySelector(".slider-controls");
const sliderControls = ["previous", "next"];
const sliderItems = document.querySelectorAll(".slider-item");
const treatmentsArticles = document.querySelectorAll(".treatments-list-item");

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  setInitialState() {
    this.carouselArray[0].classList.add("slider-item-previous");
    this.carouselArray[1].classList.add("slider-item-selected");
    this.carouselArray[2].classList.add("slider-item-next");
  }

  setCurrentState(target, selected, previous, next) {
    selected.classList.remove("slider-item-selected");
    previous.classList.remove("slider-item-previous");
    next.classList.remove("slider-item-next");

    if (target.className == "slider-controls-previous") {
      selected.classList.add("slider-item-next");
      previous.classList.add("slider-item-selected");
      next.classList.add("slider-item-previous");
      setTreatmentArticle(previous.dataset.about);
    } else {
      selected.classList.add("slider-item-previous");
      previous.classList.add("slider-item-next");
      next.classList.add("slider-item-selected");
      setTreatmentArticle(next.dataset.about);
    }
  }

  setControls() {
    this.carouselControls.forEach(control => {
      sliderControlsContainer.appendChild(
        document.createElement("button")
      ).className = `slider-controls-${control}`;
    });
  }

  useControls() {
    const triggers = [...sliderControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener("click", () => {
        const target = control;
        const selectedItem = document.querySelector(".slider-item-selected");
        const previousSelectedItem = document.querySelector(
          ".slider-item-previous"
        );
        const nextSelectedItem = document.querySelector(".slider-item-next");

        this.setCurrentState(
          target,
          selectedItem,
          previousSelectedItem,
          nextSelectedItem
        );
      });
    });
  }
}

const treatmentsCarousel = new Carousel(
  sliderContainer,
  sliderItems,
  sliderControls
);

treatmentsCarousel.setControls();
treatmentsCarousel.setInitialState();
treatmentsCarousel.useControls();

function setTreatmentArticle(dataset) {
  treatmentsArticles.forEach(el => {
    el.dataset.about === dataset
      ? el.classList.remove("d-none")
      : el.classList.add("d-none");
  });
}
