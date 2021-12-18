/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/watchlist.js":
/*!**************************!*\
  !*** ./src/watchlist.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\nlet watchList;\r\nlet moviesHTML = '';\r\n\r\nwindow.onload = function() {\r\n\r\n    async function renderWatchlist() {\r\n        moviesHTML = '';\r\n    \r\n        let response = await fetch('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies');\r\n        // console.log(response)\r\n        let data = await response.json();\r\n        console.log(data);\r\n    \r\n        data.forEach(movie => {\r\n            moviesHTML += `\r\n                <div class=\"col-2\">\r\n                    <section class=\"poster\">\r\n                        <a href=\"movie.html?id=${movie.movie_id}\">\r\n                            <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\">\r\n                        </a>\r\n                    </section>\r\n                </div>\r\n            `;\r\n        }); \r\n\r\n        document.getElementById('watchList').innerHTML = moviesHTML;\r\n        console.log('rendered!');\r\n    }\r\n    renderWatchlist();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/watchlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/watchlist.js"]();
/******/ 	
/******/ })()
;