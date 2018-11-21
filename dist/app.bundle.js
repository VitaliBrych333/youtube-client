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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/check-widthScreen.js":
/*!*****************************************!*\
  !*** ./components/check-widthScreen.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkWidthScreen; });\n/* harmony import */ var _create_elementPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elementPage */ \"./components/create-elementPage.js\");\n/* harmony import */ var _create_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pagination */ \"./components/create-pagination.js\");\n\n\n\nfunction createPages(arrayObjectsResponse, end) {\n  Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 0, end);\n  Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, end);\n}\n\nfunction checkWidthScreen(arrayObjectsResponse) {\n  const widthScreen = window.innerWidth;\n\n  if (widthScreen >= 1353) {\n    createPages(arrayObjectsResponse, 4);\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    createPages(arrayObjectsResponse, 3);\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    createPages(arrayObjectsResponse, 2);\n  } else if (widthScreen < 685 && widthScreen > 411) {\n    createPages(arrayObjectsResponse, 1);\n  } else {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 0, 1);\n  }\n}\n\n//# sourceURL=webpack:///./components/check-widthScreen.js?");

/***/ }),

/***/ "./components/control-pages.js":
/*!*************************************!*\
  !*** ./components/control-pages.js ***!
  \*************************************/
/*! exports provided: controlScreen, pagination, swipeStart, swipeMove, swipeEnd, addMultipleListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlScreen\", function() { return controlScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pagination\", function() { return pagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeStart\", function() { return swipeStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeMove\", function() { return swipeMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeEnd\", function() { return swipeEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMultipleListeners\", function() { return addMultipleListeners; });\n/* harmony import */ var _create_elementPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elementPage */ \"./components/create-elementPage.js\");\n/* harmony import */ var _create_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pagination */ \"./components/create-pagination.js\");\n\n\nlet indexPageActive = 0;\nlet numberValueElement = 0;\nfunction controlScreen(arrayObjectsResponse) {\n  document.querySelector('#pagination').innerHTML = '';\n  const viewsContent = document.querySelector('#answer>div:first-child>.about>p:nth-child(3)>#views').textContent;\n  const objStartNumber = arrayObjectsResponse.findIndex(obj => {\n    return obj.views === viewsContent;\n  });\n  let numActivePage = 0;\n  const numberElement = objStartNumber + 1;\n  const widthScreen = window.innerWidth;\n\n  if (widthScreen >= 1353) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 4);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 4);\n    numActivePage = Math.ceil(numberElement / 4) - 1;\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 3);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 3);\n    numActivePage = Math.ceil(numberElement / 3) - 1;\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 2);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 2);\n    numActivePage = Math.ceil(numberElement / 2) - 1;\n  } else if (widthScreen < 685 && widthScreen > 411) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 1);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 1);\n    numActivePage = numberElement - 1;\n  } else {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 1);\n    numActivePage = numberElement - 1;\n  }\n\n  if (numActivePage < 0) {\n    numActivePage = 0;\n  }\n\n  indexPageActive = numActivePage;\n\n  if (widthScreen > 411) {\n    document.querySelector('#pagination>div.active').classList.remove('active');\n    document.querySelectorAll('#pagination>div')[numActivePage].classList.add('active');\n  }\n\n  return indexPageActive;\n}\nfunction pagination(arrayObjectsResponse, event) {\n  const numberPage = parseInt(event.target.textContent, 10);\n  const widthScreen = window.innerWidth;\n  document.querySelector('#pagination>div.active').classList.remove('active');\n  event.target.classList.add('active');\n  document.querySelector('#answer').innerHTML = '';\n  indexPageActive = numberPage - 1;\n\n  if (widthScreen >= 1353) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 4 * numberPage - 4, 4);\n    numberValueElement = 4 * indexPageActive;\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 3 * numberPage - 3, 3);\n    numberValueElement = 3 * indexPageActive;\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 2 * numberPage - 2, 2);\n    numberValueElement = 2 * indexPageActive;\n  } else {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberPage - 1, 1);\n    numberValueElement = indexPageActive;\n  }\n}\nlet touchStartCoords = {\n  'x': -1,\n  'y': -1\n};\nlet touchEndCoords = {\n  'x': -1,\n  'y': -1\n};\nlet direction = 'undefined';\nlet startTime = 0;\nlet elapsedTime = 0;\nconst minDistanceXAxis = 30;\nconst maxDistanceYAxis = 30;\nconst maxAllowedTime = 1000;\nfunction swipeStart(e) {\n  e = e || window.event;\n  e = 'changedTouches' in e ? e.changedTouches[0] : e;\n  touchStartCoords = {\n    'x': e.pageX,\n    'y': e.pageY\n  };\n  startTime = new Date().getTime();\n}\nfunction swipeMove(e) {\n  e = e || window.event;\n  e.preventDefault();\n}\nfunction swipeEnd(arrayObjectsResponse, e) {\n  const numLastElem = arrayObjectsResponse.length - 1;\n  e = e || window.event;\n  e = 'changedTouches' in e ? e.changedTouches[0] : e;\n  touchEndCoords = {\n    'x': e.pageX - touchStartCoords.x,\n    'y': e.pageY - touchStartCoords.y\n  };\n  elapsedTime = new Date().getTime() - startTime;\n\n  if (elapsedTime <= maxAllowedTime) {\n    if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis) {\n      direction = touchEndCoords.x < 0 ? 'left' : 'right';\n      const widthScreenTouch = window.innerWidth;\n\n      switch (direction) {\n        case 'left':\n          indexPageActive += 1;\n\n          if (numberValueElement > numLastElem) {\n            numberValueElement = 0;\n            break;\n          } else if (widthScreenTouch >= 1353) {\n            numberValueElement += 4;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n          } else if (widthScreenTouch < 1353 && widthScreenTouch >= 1019) {\n            numberValueElement += 3;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n          } else if (widthScreenTouch < 1019 && widthScreenTouch >= 685) {\n            numberValueElement += 2;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n          } else if (widthScreenTouch < 685 && widthScreenTouch > 411) {\n            numberValueElement += 1;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          } else {\n            numberValueElement += 1;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          }\n\n          break;\n\n        case 'right':\n          indexPageActive -= 1;\n\n          if (indexPageActive < 0) {\n            indexPageActive = 0;\n          }\n\n          if (numberValueElement <= 0 || numberValueElement > numLastElem) {\n            numberValueElement = 0;\n            break;\n          } else if (widthScreenTouch >= 1353) {\n            numberValueElement -= 4;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n          } else if (widthScreenTouch < 1353 && widthScreenTouch >= 1019) {\n            numberValueElement -= 3;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n          } else if (widthScreenTouch < 1019 && widthScreenTouch >= 685) {\n            numberValueElement -= 2;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n          } else if (widthScreenTouch < 685 && widthScreenTouch > 411) {\n            numberValueElement -= 1;\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          } else {\n            numberValueElement -= 1;\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          }\n\n          break;\n\n        default:\n          break;\n      }\n\n      if (indexPageActive > document.querySelectorAll('#pagination>div').length - 1) {\n        indexPageActive = 0;\n      }\n\n      if (widthScreenTouch > 411) {\n        document.querySelector('#pagination>div.active').classList.remove('active');\n        document.querySelectorAll('#pagination>div')[indexPageActive].classList.add('active');\n      }\n    }\n  }\n}\nfunction addMultipleListeners(el, s, fn) {\n  const evts = s.split(' ');\n\n  for (let i = 0, iLen = evts.length; i < iLen; i += 1) {\n    el.addEventListener(evts[i], fn, false);\n  }\n}\n\n//# sourceURL=webpack:///./components/control-pages.js?");

/***/ }),

/***/ "./components/create-elementPage.js":
/*!******************************************!*\
  !*** ./components/create-elementPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createDivs; });\nfunction createDivs(arrayObjectsResponse, start, count) {\n  document.querySelector('#answer').innerHTML = '';\n\n  for (let i = start; i < count + start; i += 1) {\n    if (arrayObjectsResponse[i] === undefined) break;else {\n      const div = document.createElement('div');\n      div.innerHTML = `\n              <div class=\"picture\">\n                <img src=${arrayObjectsResponse[i].img} alt=\"img\">\n              </div>\n              <div class=\"title\">\n                <a href=\"https://www.youtube.com/watch?v=${arrayObjectsResponse[i].id}\">${arrayObjectsResponse[i].title}</a>\n              </div>\n              <div class=\"about\">\n                <p><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span id=\"author\">${arrayObjectsResponse[i].author}</span></p>\n                <p><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><span id=\"date\">${arrayObjectsResponse[i].date}</span></p>\n                <p><i class=\"fa fa-eye\" aria-hidden=\"true\"></i><span id=\"views\">${arrayObjectsResponse[i].views}</span></p>      \n                <p class=\"description\">${arrayObjectsResponse[i].description}</p>\n              </div>`;\n      div.classList.add('item');\n      document.querySelector('#answer').appendChild(div);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./components/create-elementPage.js?");

/***/ }),

/***/ "./components/create-pagination.js":
/*!*****************************************!*\
  !*** ./components/create-pagination.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createPagination; });\n/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-page */ \"./components/event-page.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-pages */ \"./components/control-pages.js\");\n\n\nfunction createPagination(arrayObjectsResponse, start, count) {\n  const countPages = Math.round(arrayObjectsResponse.length / count);\n\n  for (let i = start; i <= countPages; i += 1) {\n    const div = document.createElement('div');\n    div.classList.add('page');\n\n    if (i === 1) {\n      div.classList.add('active');\n    }\n\n    div.addEventListener('mousedown', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"showPage\"]);\n    div.addEventListener('mouseup', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"hidePage\"]);\n    div.addEventListener('mouseout', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"hidePage\"]);\n    div.addEventListener('mouseup', _control_pages__WEBPACK_IMPORTED_MODULE_1__[\"pagination\"].bind(null, arrayObjectsResponse));\n    div.innerHTML = `${i}<span class=\"popuptext\" onmousedown=\"event.stopImmediatePropagation()\" onmouseup=\"event.stopImmediatePropagation()\" onmouseout=\"event.stopImmediatePropagation()\">Go to page ${i}</span>`;\n    document.querySelector('#pagination').appendChild(div);\n  }\n}\n\n//# sourceURL=webpack:///./components/create-pagination.js?");

/***/ }),

/***/ "./components/create-responseArray.js":
/*!********************************************!*\
  !*** ./components/create-responseArray.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newArrayResponse; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./components/variables.js\");\n\nconst {\n  arrayObjectsResponse\n} = Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nfunction newArrayResponse(arrayResponse) {\n  const length = arrayResponse.items.length;\n\n  for (let i = 0; i < length; i += 1) {\n    arrayObjectsResponse[i] = {\n      img: arrayResponse.items[i].snippet.thumbnails.medium.url,\n      id: arrayResponse.items[i].id.videoId,\n      title: arrayResponse.items[i].snippet.title,\n      author: arrayResponse.items[i].snippet.channelTitle,\n      date: arrayResponse.items[i].snippet.publishedAt.substring(0, 10),\n      description: arrayResponse.items[i].snippet.description,\n      nextPage: arrayResponse.nextPageToken\n    };\n  }\n\n  return arrayObjectsResponse;\n}\n\n//# sourceURL=webpack:///./components/create-responseArray.js?");

/***/ }),

/***/ "./components/event-page.js":
/*!**********************************!*\
  !*** ./components/event-page.js ***!
  \**********************************/
/*! exports provided: showPage, hidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPage\", function() { return showPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePage\", function() { return hidePage; });\nfunction showPage(event) {\n  event.target.querySelector('span').classList.add('show');\n}\nfunction hidePage(event) {\n  event.target.querySelector('span').classList.remove('show');\n}\n\n//# sourceURL=webpack:///./components/event-page.js?");

/***/ }),

/***/ "./components/request-search.js":
/*!**************************************!*\
  !*** ./components/request-search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\n/* harmony import */ var _create_responseArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-responseArray */ \"./components/create-responseArray.js\");\n/* harmony import */ var _request_viewsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-viewsCount */ \"./components/request-viewsCount.js\");\n/* harmony import */ var _check_widthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-widthScreen */ \"./components/check-widthScreen.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-pages */ \"./components/control-pages.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables */ \"./components/variables.js\");\n/* global gapi */\n\n\n\n\n\nfunction search() {\n  if (document.querySelector('main')) {\n    document.querySelector('main').remove();\n  }\n\n  const main = document.createElement('main');\n  main.innerHTML = `<div class=\"answer-block\" id=\"answer\"></div>\n    <div class=\"paging\" id=\"pagination\"></div>`;\n  document.querySelector('body').appendChild(main);\n  document.querySelector('#pagination').innerHTML = '';\n  let {\n    arrayResponse\n  } = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  function requestSearch() {\n    const wordRequest = document.querySelector('input').value;\n    gapi.client.init({\n      'apiKey': 'AIzaSyCVrwwoyqYxMZ4xXDIQnZVaGFkyLlJO2AM',\n      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']\n    }).then(() => {\n      return gapi.client.youtube.search.list({\n        maxResults: '15',\n        q: wordRequest,\n        part: 'snippet',\n        type: 'video',\n        fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode'\n      });\n    }).then(response => {\n      arrayResponse = response.result;\n      const arrayObjectsResponse = Object(_create_responseArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayResponse);\n      const length = arrayObjectsResponse.length;\n\n      for (let i = 0; i < length; i += 1) {\n        Object(_request_viewsCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, i);\n      }\n\n      setTimeout(() => {\n        const targetElement = document.querySelector('#answer');\n        Object(_check_widthScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayObjectsResponse);\n        window.addEventListener('resize', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"controlScreen\"].bind(null, arrayObjectsResponse));\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousedown touchstart', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeStart\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousemove touchmove', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeMove\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mouseup touchend', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeEnd\"].bind(null, arrayObjectsResponse));\n      }, 1000);\n    }, reason => {\n      console.log(`Error: ${reason.result.error.message}`);\n    });\n  }\n\n  gapi.load('client', requestSearch);\n}\n\n//# sourceURL=webpack:///./components/request-search.js?");

/***/ }),

/***/ "./components/request-viewsCount.js":
/*!******************************************!*\
  !*** ./components/request-viewsCount.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return requestViews; });\n/* global gapi */\nfunction requestViews(arrayObjectsResponse, i) {\n  function setViewCount(responseViewCount) {\n    arrayObjectsResponse[i].views = responseViewCount;\n  }\n\n  function viewsCount() {\n    gapi.client.init({\n      'apiKey': 'AIzaSyCVrwwoyqYxMZ4xXDIQnZVaGFkyLlJO2AM',\n      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']\n    }).then(() => {\n      return gapi.client.youtube.videos.list({\n        id: arrayObjectsResponse[i].id,\n        part: 'statistics',\n        fields: 'items/statistics/viewCount'\n      });\n    }).then(response => {\n      const responseViewCount = response.result.items[0].statistics.viewCount;\n      setViewCount(responseViewCount, i);\n    }, reason => {\n      console.log(`Error: ${reason.result.error.message}`);\n    });\n  }\n\n  gapi.load('client', viewsCount);\n}\n\n//# sourceURL=webpack:///./components/request-viewsCount.js?");

/***/ }),

/***/ "./components/variables.js":
/*!*********************************!*\
  !*** ./components/variables.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getVariables; });\nfunction getVariables() {\n  const arrayObjectsResponse = [];\n  const arrayResponse = [];\n  return {\n    arrayObjectsResponse,\n    arrayResponse\n  };\n}\n\n//# sourceURL=webpack:///./components/variables.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_request_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/request-search */ \"./components/request-search.js\");\n\n\nwindow.onload = () => {\n  const head = document.createElement('header');\n  head.innerHTML = `<h1>Youtube client</h1>\n    <p>Please, set name of the clip for search</p>\n    <form id=\"data\">\n      <input type=\"text\" placeholder=\"Clip name\">\n    </form>   \n    <button type=\"button\" form=\"data\">Search <i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>`;\n  document.querySelector('body').appendChild(head);\n  document.querySelector('button').addEventListener('click', _components_request_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });