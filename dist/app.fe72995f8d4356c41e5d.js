/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/norm&fonts.css":
/*!****************************!*\
  !*** ./css/norm&fonts.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/norm&fonts.css?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_norm_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/norm&fonts.css */ \"./css/norm&fonts.css\");\n/* harmony import */ var _css_norm_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_norm_fonts_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Popup =\n/*#__PURE__*/\nfunction () {\n  function Popup(element) {\n    _classCallCheck(this, Popup);\n\n    this.elem = document.querySelector(element);\n    this.isOpen = false;\n  }\n\n  _createClass(Popup, [{\n    key: \"openPopup\",\n    value: function openPopup() {\n      this.elem.classList.add(\"open\");\n      this.isOpen = true;\n    }\n  }, {\n    key: \"closePopup\",\n    value: function closePopup() {\n      this.elem.classList.remove(\"open\");\n      this.isOpen = false;\n    }\n  }, {\n    key: \"togglePopup\",\n    value: function togglePopup() {\n      if (this.isOpen) this.closePopup();else this.openPopup();\n    }\n  }, {\n    key: \"setValue\",\n    value: function setValue(title, value) {\n      this.elem.querySelector(\".title\").innerHTML = title;\n    }\n  }]);\n\n  return Popup;\n}();\n/* Language select */\n\n\nvar langPopup = new Popup(\".lang-list\");\nvar langTxt = document.querySelectorAll(\".lang\");\nvar langSelectItems = document.querySelectorAll(\".lang-item\");\n\nvar setLang = function setLang() {\n  langTxt.forEach(function (element) {\n    if (element.classList.contains(\"\".concat(event.target.dataset.value))) {\n      element.classList.remove(\"d-none\");\n    } else {\n      element.classList.add(\"d-none\");\n    }\n  });\n};\n\nvar setMobLangBtnActive = function setMobLangBtnActive() {\n  langSelectItems.forEach(function (element) {\n    if (element.dataset.value === event.target.dataset.value) {\n      element.classList.add(\"lang-active\");\n    } else {\n      element.classList.remove(\"lang-active\");\n    }\n  });\n};\n\nvar selectLang = function selectLang() {\n  document.querySelector(\".title\").innerHTML = event.target.innerHTML;\n  setLang();\n};\n\nvar onSelectLangClick = function onSelectLangClick() {\n  if (event.target.className === \"title\") {\n    langPopup.togglePopup();\n  } else if (event.target.classList.contains(\"lang-item\")) {\n    selectLang();\n    setMobLangBtnActive();\n    langPopup.closePopup();\n  } else if (!langPopup.elem.contains(event.target)) {\n    langPopup.closePopup();\n  }\n};\n\ndocument.addEventListener(\"click\", onSelectLangClick);\n/* Text Popup */\n\nvar textPopup = new Popup(\".popup\");\nvar popupContainer = document.querySelector(\".popup\");\n\nvar openTextPopup = function openTextPopup() {\n  popupContainer.innerHTML = event.target.previousElementSibling.innerHTML;\n  textPopup.openPopup();\n  document.body.classList.add(\"popup-wrapper\");\n};\n\nvar closeTextPopup = function closeTextPopup() {\n  textPopup.closePopup();\n  document.body.classList.remove(\"popup-wrapper\");\n};\n\nvar onReadMoreClick = function onReadMoreClick() {\n  if (event.target.classList.contains(\"read-more\")) {\n    openTextPopup();\n  } else if (!textPopup.elem.contains(event.target)) {\n    closeTextPopup();\n  }\n};\n\ndocument.addEventListener(\"click\", onReadMoreClick);\n/* Mobile Menu */\n\nvar mobMenuPopup = new Popup(\".mob-menu\");\nvar mobMenuBtn = document.querySelector(\".mob-menu-btn\");\n\nvar toggleMobMenu = function toggleMobMenu() {\n  mobMenuBtn.classList.toggle(\"open\");\n  mobMenuPopup.togglePopup();\n};\n\nvar closeMobMenu = function closeMobMenu() {\n  mobMenuBtn.classList.remove(\"open\");\n  mobMenuPopup.closePopup();\n};\n\nvar onMobMenuBtnClick = function onMobMenuBtnClick() {\n  if (event.target.closest(\".mob-menu-btn\")) {\n    toggleMobMenu();\n  } else if (event.target.classList.contains(\"mob-nav-link\") || event.target.classList.contains(\"lang-item\") || event.target.closest(\".socials-link\") || event.target.closest(\".mob-menu-btn\")) {\n    closeMobMenu();\n  }\n};\n\ndocument.body.addEventListener(\"click\", onMobMenuBtnClick);\n/*slider*/\n\nvar sliderContainer = document.querySelector(\".slider-container\");\nvar sliderControlsContainer = document.querySelector(\".slider-controls\");\nvar sliderControls = [\"previous\", \"next\"];\nvar sliderItems = document.querySelectorAll(\".slider-item\");\nvar treatmentsArticles = document.querySelectorAll(\".treatments-list-item\");\n\nvar Carousel =\n/*#__PURE__*/\nfunction () {\n  function Carousel(container, items, controls) {\n    _classCallCheck(this, Carousel);\n\n    this.carouselContainer = container;\n    this.carouselControls = controls;\n    this.carouselArray = _toConsumableArray(items);\n  }\n\n  _createClass(Carousel, [{\n    key: \"setInitialState\",\n    value: function setInitialState() {\n      this.carouselArray[0].classList.add(\"slider-item-previous\");\n      this.carouselArray[1].classList.add(\"slider-item-selected\");\n      this.carouselArray[2].classList.add(\"slider-item-next\");\n    }\n  }, {\n    key: \"setCurrentState\",\n    value: function setCurrentState(target, selected, previous, next) {\n      selected.classList.remove(\"slider-item-selected\");\n      previous.classList.remove(\"slider-item-previous\");\n      next.classList.remove(\"slider-item-next\");\n\n      if (target.className == \"slider-controls-previous\") {\n        selected.classList.add(\"slider-item-next\");\n        previous.classList.add(\"slider-item-selected\");\n        next.classList.add(\"slider-item-previous\");\n        setTreatmentArticle(previous.dataset.about);\n      } else {\n        selected.classList.add(\"slider-item-previous\");\n        previous.classList.add(\"slider-item-next\");\n        next.classList.add(\"slider-item-selected\");\n        setTreatmentArticle(next.dataset.about);\n      }\n    }\n  }, {\n    key: \"setControls\",\n    value: function setControls() {\n      this.carouselControls.forEach(function (control) {\n        sliderControlsContainer.appendChild(document.createElement(\"button\")).className = \"slider-controls-\".concat(control);\n      });\n    }\n  }, {\n    key: \"useControls\",\n    value: function useControls() {\n      var _this = this;\n\n      var triggers = _toConsumableArray(sliderControlsContainer.childNodes);\n\n      triggers.forEach(function (control) {\n        control.addEventListener(\"click\", function () {\n          var target = control;\n          var selectedItem = document.querySelector(\".slider-item-selected\");\n          var previousSelectedItem = document.querySelector(\".slider-item-previous\");\n          var nextSelectedItem = document.querySelector(\".slider-item-next\");\n\n          _this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem);\n        });\n      });\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar treatmentsCarousel = new Carousel(sliderContainer, sliderItems, sliderControls);\ntreatmentsCarousel.setControls();\ntreatmentsCarousel.setInitialState();\ntreatmentsCarousel.useControls();\n\nfunction setTreatmentArticle(dataset) {\n  treatmentsArticles.forEach(function (el) {\n    el.dataset.about === dataset ? el.classList.remove(\"d-none\") : el.classList.add(\"d-none\");\n  });\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });