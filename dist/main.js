/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":

/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-config/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":

/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\n// import logo from './images/logo.png';\r\n\r\nconst showMovies = document.querySelector('#show-movies');\r\nconst totalMovies = document.querySelector('#totalMovies');\r\nconst popupClose = document.querySelector('#popup-close');\r\nconst popup = document.querySelector('.popup');\r\n\r\npopupClose.addEventListener('click', () => {\r\n  popup.classList.add('hide');\r\n});\r\n\r\nconst randomString = (length) => {\r\n  let result = '';\r\n  const characters = 'abcdefghijklmnopqrstuvwxyz';\r\n  const charactersLength = characters.length;\r\n  for (let i = 0; i < length; i += 1) {\r\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\r\n  }\r\n  return result;\r\n};\r\n\r\nconst liked = async (movieId) => {\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',\r\n    {\r\n      method: 'POST',\r\n      body: JSON.parse('{\"item_id\": ' + movieId + '}'), // string or object\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    }\r\n  );\r\n  const myJson = await response.json(); //extract JSON from the http response\r\n  // do something with myJson\r\n};\r\n\r\nconst loadApi = async () => {\r\n  const response = await fetch(\r\n    `https://api.tvmaze.com/search/shows?q=${randomString(1)}`\r\n  );\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n\r\n  // Add the total number of movies to the DOM\r\n  totalMovies.insertAdjacentHTML('afterend', `(${myJson.length})`);\r\n\r\n  for (let i = 0; i < myJson.length; i += 1) {\r\n    let { name } = myJson[i].show;\r\n    const movieId = myJson[i].show.id;\r\n    if (name.length > 15) name = `${name.substring(0, 15)}...`;\r\n\r\n    const image = JSON.stringify(myJson[i].show.image);\r\n    let imageSrc =\r\n      'https://static.tvmaze.com/uploads/images/medium_portrait/206/515082.jpg';\r\n\r\n    if (image !== 'null') {\r\n      imageSrc = myJson[i].show.image.medium;\r\n    }\r\n\r\n    showMovies.innerHTML += `\r\n  <!-- Single Movie Banner -->\r\n  <div class=\"single-movies card\">\r\n    <div class=\"movie-banner\">\r\n      <img\r\n        class=\"movie-banner-img\"\r\n        src=\"${imageSrc}\"\r\n        alt=\"movieName\"\r\n      />\r\n    </div>\r\n    <div class=\"title-rection\">\r\n      <h3 id=\"title\">${name}</h3>\r\n      <i id =\"${movieId}\" class=\"liked fa-regular fa-heart\"></i>\r\n    </div>\r\n    <div class=\"movie-likes\">\r\n      <p id=\"likes\">5 likes</p>\r\n    </div>\r\n    <div class=\"action-btns\">\r\n    <form class=\"submit-btns postReservation\">\r\n        <input type=\"hidden\" value=\"${movieId}\" id=\"movieId\">\r\n        <button class=\"btn btn-secondary\">Reservations</button>\r\n      </form>\r\n      <form class=\"submit-btns postComment\">\r\n        <input type=\"hidden\" value=\"${movieId}\" id=\"movieId\">\r\n        <button class=\"btn btn-primary\">Comments</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- Single Movie Banner End-->\r\n`;\r\n\r\n    const likeBtn = document.querySelectorAll('.liked');\r\n    likeBtn.forEach((btn) => {\r\n      btn.addEventListener('click', (e) => {\r\n        btn.classList.toggle('fa-regular');\r\n        btn.classList.toggle('fa-solid');\r\n        if (btn.classList.contains('fa-solid')) {\r\n          console.log('liked', e.target.id);\r\n          liked(e.target.id);\r\n        } else {\r\n          console.log('hate', e.target.id);\r\n        }\r\n      });\r\n    });\r\n  }\r\n};\r\n\r\nconst getMovieDetails = async (movieId) => {\r\n  const response = await fetch('https://api.tvmaze.com/shows/' + movieId);\r\n  const movieDetails = await response.json(); //extract JSON from the http response\r\n  // do something with myJson\r\n  console.log(movieDetails);\r\n  const popupContainer = document.querySelector('.popup-container');\r\n  let movieName = movieDetails.name;\r\n  let summary = movieDetails.summary;\r\n  let image = movieDetails.image;\r\n\r\n  let imageSrc =\r\n    'https://static.tvmaze.com/uploads/images/original_untouched/53/133615.jpg';\r\n\r\n  if (image !== 'null') {\r\n    imageSrc = movieDetails.image.original;\r\n  }\r\n\r\n  popupContainer.innerHTML =\r\n    `\r\n    <div class=\"popup-movie-banner\">\r\n          <img\r\n            class=\"popup-movie-banner-img\"\r\n            src=\"` +\r\n    imageSrc +\r\n    `\"\r\n            alt=\"` +\r\n    movieName +\r\n    ` Banner\"\r\n          />\r\n        </div>\r\n        <div class=\"popup-details\">\r\n          <div class=\"popup-title\">\r\n            <h2>` +\r\n    movieName +\r\n    `</h2>\r\n          </div>\r\n          <div class=\"popup-description\">\r\n            ` +\r\n    summary +\r\n    `\r\n          </div>\r\n\r\n          <div class=\"popup-comments\">\r\n            <h2 class=\"popup-comments-title\">\r\n              Comments<span id=\"commentConter\"></span>\r\n            </h2>\r\n            <div class=\"popu-comments-container\">\r\n              <ul class=\"comment-description\">\r\n                <li class=\"comments-received\">03/11/2021 Alex: I'd love to buy it!</li>\r\n                <li>03/11/2021 Alex: I'd love to buy it!</li>\r\n                <li>03/11/2021 Alex: I'd love to buy it!</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"add-comment-form\">\r\n            <h2 class=\"popup-comments-title\">\r\n              Add Comments<span id=\"addCOmment\"></span>\r\n            </h2>\r\n            <form>\r\n              <input type=\"text\" placeholder=\"Name\" name=\"name\" />\r\n              <textarea\r\n                name=\"comment\"\r\n                id=\"comment\"\r\n                cols=\"30\"\r\n                rows=\"8\"\r\n                placeholder=\"Comment\"\r\n                name=\"comment\"\r\n              >\r\n              </textarea>\r\n              <input type=\"submit\" value=\"Submit\" />\r\n            </form>\r\n          </div>\r\n        </div>`;\r\n};\r\n\r\nloadApi();\r\nsetTimeout(() => {\r\n  const postComment = document.querySelectorAll('.postComment');\r\n  postComment.forEach((submitButton) => {\r\n    submitButton.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      const movieId = submitButton.querySelector('#movieId').value;\r\n      console.log('movieId', movieId);\r\n      getMovieDetails(movieId);\r\n      popup.classList.remove('hide');\r\n    });\r\n  });\r\n}, 1000);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ })

/******/ 	});

/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	

/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/css/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;