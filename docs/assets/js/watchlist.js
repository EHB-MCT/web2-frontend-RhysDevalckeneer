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

eval("\r\n\r\nlet watchList;\r\nlet moviesHTML = '';\r\nlet watchTime = []\r\nlet totalTime;\r\n\r\nwindow.onload = function() {\r\n\r\n    async function renderWatchlist() {\r\n        moviesHTML = '';\r\n    \r\n        let response = await fetch('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies');\r\n        // console.log(response)\r\n        let data = await response.json();\r\n        console.log(data);\r\n    \r\n        data.forEach(movie => {\r\n            moviesHTML += `\r\n                <div class=\"col-2\">\r\n                    <section class=\"poster\">\r\n                        <a href=\"movie.html?id=${movie.movie_id}\">\r\n                            <img src=\"${movie.poster_path}\">\r\n                        </a>\r\n                    </section>\r\n                </div>\r\n            `;\r\n\r\n            watchTime.push(parseInt(movie.runtime));\r\n        }); \r\n\r\n        // https://appdividend.com/2020/07/24/javascript-sum-array-how-to-find-sum-of-array-in-js/\r\n        totalTime = watchTime.reduce((a, b) => {\r\n            return a + b;\r\n        });\r\n        console.log('total watchtime: ' + totalTime)\r\n\r\n        // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php\r\n        function timeConvert(n) {\r\n            var num = n;\r\n            var hours = (num / 60);\r\n            var rhours = Math.floor(hours);\r\n            var minutes = (hours - rhours) * 60;\r\n            var rminutes = Math.round(minutes);\r\n            return rhours + \" hour(s) and \" + rminutes + \" minute(s).\";\r\n        }\r\n\r\n        let watchedTime = timeConvert(totalTime);\r\n\r\n        document.getElementById('watchtime').innerHTML = watchedTime;\r\n        document.getElementById('watchList').innerHTML = moviesHTML;\r\n        console.log('rendered!');\r\n    }\r\n    renderWatchlist();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/watchlist.js?");

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