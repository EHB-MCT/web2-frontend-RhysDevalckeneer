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

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ (() => {

eval("\r\n\r\n// let baseUrl = \"https://web2-backend-rhysdevalckeneer.herokuapp.com/movies\";\r\n\r\nwindow.onload = function() {\r\n    document.getElementById('searchForm').addEventListener('submit', event => {\r\n        event.preventDefault();\r\n        let query = document.getElementById('searchInput').value;\r\n    \r\n        searchMovie(query);\r\n        \r\n        // clear form \r\n        document.getElementById('searchInput').value = \"\";\r\n    });\r\n}\r\n\r\n// search movie\r\nfunction searchMovie(query) {\r\n    let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`;\r\n    console.log(query);\r\n\r\n    getData(baseUrl).then(result => {\r\n        let data = result.results;\r\n        console.log(data);\r\n\r\n        let searchedHTML='';\r\n\r\n        data.forEach(movie => {\r\n            searchedHTML += `\r\n                <div class=\"col-2 poster\" id=\"${movie.id}\"> \r\n                    <a href=\"movie.html?id=${movie.id}\"> \r\n                        <p class=\"score\"><i class=\"fas fa-star\"></i> ${movie.vote_average}</p> \r\n                        <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" onerror=\"this.onerror=null;this.src='https://www.fillmurray.com/500/725';\">\r\n                    </a>\r\n                </div>\r\n            `\r\n            \r\n        });    \r\n        \r\n        document.getElementById(\"searchedMovies\").innerHTML = searchedHTML;\r\n    }); \r\n}\r\n\r\nasync function getData(url) {\r\n    let response = await fetch(url);\r\n    return await response.json();\r\n}\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/search.js"]();
/******/ 	
/******/ })()
;