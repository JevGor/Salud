/* eslint-disable no-tabs */
'use strict'

class Popup {
  constructor (element) {
    this.elem = document.querySelector(element)
    this.isOpen = false
  }

  openPopup () {
    this.elem.classList.add('open')
    this.isOpen = true
  }

  closePopup () {
    this.elem.classList.remove('open')
    this.isOpen = false
  }

  togglePopup () {
    if (this.isOpen) this.closePopup()
    else this.openPopup()
  }

  setValue (title, value) {
    this.elem.querySelector('.title').innerHTML = title
  }
}

/* Language select */
const langPopup = new Popup('.lang-list')
const langTxt = document.querySelectorAll('.lang')
const langSelectItems = document.querySelectorAll('.lang-item')

const setLang = () => {
  langTxt.forEach((element) => {
    if (element.classList.contains(`${event.target.dataset.value}`)) {
      element.classList.remove('d-none')
    } else {
      element.classList.add('d-none')
    }
  })
}

const setMobLangBtnActive = () => {
  langSelectItems.forEach((element) => {
    if (element.dataset.value === event.target.dataset.value) {
      element.classList.add('lang-active')
    } else {
      element.classList.remove('lang-active')
    }
  })
}

const selectLang = () => {
  document.querySelector('.title').innerHTML = event.target.innerHTML
  setLang()
}

const onSelectLangClick = () => {
  if (event.target.className === 'title') {
    langPopup.togglePopup()
  } else if (event.target.classList.contains('lang-item')) {
    selectLang()
    setMobLangBtnActive()
    langPopup.closePopup()
  } else if (!langPopup.elem.contains(event.target)) {
    langPopup.closePopup()
  }
}

document.addEventListener('click', onSelectLangClick)

/* Text Popup */
const textPopup = new Popup('.popup')
const popupContainer = document.querySelector('.popup')

const openTextPopup = () => {
  popupContainer.innerHTML = event.target.previousElementSibling.innerHTML
  textPopup.openPopup()
  document.body.classList.add('popup-wrapper')
}

const closeTextPopup = () => {
  textPopup.closePopup()
  document.body.classList.remove('popup-wrapper')
}

const onReadMoreClick = () => {
  if (event.target.classList.contains('read-more')) {
    openTextPopup()
  } else if (!textPopup.elem.contains(event.target)) {
    closeTextPopup()
  }
}

document.addEventListener('click', onReadMoreClick)

/* Mobile Menu */
const mobMenuPopup = new Popup('.mob-menu')
const mobMenuBtn = document.querySelector('.mob-menu-btn')

const toggleMobMenu = () => {
  mobMenuBtn.classList.toggle('open')
  mobMenuPopup.togglePopup()
}

const closeMobMenu = () => {
  mobMenuBtn.classList.remove('open')
  mobMenuPopup.closePopup()
}

const onMobMenuBtnClick = () => {
  if (event.target.closest('.mob-menu-btn')) {
    toggleMobMenu()
  } else if (
    event.target.classList.contains('mob-nav-link') ||
		event.target.classList.contains('lang-item') ||
		event.target.closest('.socials-link') ||
		event.target.closest('.mob-menu-btn')
  ) {
    closeMobMenu()
  }
}

document.body.addEventListener('click', onMobMenuBtnClick)
