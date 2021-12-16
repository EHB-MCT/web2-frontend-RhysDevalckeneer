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

eval("\n\nlet watchList;\nlet moviesHTML = '';\n\nwindow.onload = function() {\n\n    async function renderWatchlist() {\n        moviesHTML = '';\n    \n        let response = await fetch('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies');\n        // console.log(response)\n        let data = await response.json();\n        console.log(data);\n    \n        data.forEach(movie => {\n            moviesHTML += `\n                <div class=\"col-2\">\n                    <section class=\"poster\">\n                        <a href=\"movie.html?id=${movie.movie_id}\">\n                            <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\">\n                        </a>\n                    </section>\n                </div>\n            `;\n        }); \n\n        document.getElementById('watchList').innerHTML = moviesHTML;\n        console.log('rendered!');\n    }\n    renderWatchlist();\n}\n\n\n//# sourceURL=webpack:///./src/watchlist.js?");

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