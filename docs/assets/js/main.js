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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\n// let baseUrl = \"https://web2-backend-rhysdevalckeneer.herokuapp.com/movies\";\n\nwindow.onload = function() {\n    document.getElementById('searchForm').addEventListener('submit', event => {\n        event.preventDefault();\n        let query = document.getElementById('searchInput').value;\n    \n        searchMovie(query);\n        \n        // clear form \n        document.getElementById('searchInput').value = \"\";\n    });\n}\n\n// search movie\nfunction searchMovie(query) {\n    let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`;\n    console.log(query);\n\n    getData(baseUrl).then(result => {\n        let data = result.results;\n        console.log(data);\n\n        let searchedHTML='';\n\n        data.forEach(movie => {\n            searchedHTML += `\n            <div class=\"col-2 poster\" id=\"${movie._id}\">   \n                <i class=\"far fa-bookmark\"></i>\n                <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" onerror=\"this.onerror=null;this.src='https://www.fillmurray.com/500/725';\">\n            </div>`\n        });\n        document.getElementById(\"searchedMovies\").innerHTML = searchedHTML;\n    });\n\n    let list = document.getElementById('searchedMovies');\n    addMovie(list);\n}\n\nfunction addMovie(list) {\n\n    let el = document.getElementsByClassName('fa-bookmark');\n\n    list.addEventListener('click', event => {\n        event.preventDefault();\n\n        const movieId = el.closest('movie').id;\n        console.log(movieId);\n    })\n    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest\n}\n\n\n\n\n\nfunction renderWatchlist() {\n    \n    getData('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies').then(result =>{\n        let watchedHTML = '';\n\n        result.forEach(movie => {\n            watchedHTML += `\n            <div class=\"col-2 movie\" id=\"${movie._id}\">   \n                <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\">\n            </div>`\n        }); \n\n        document.getElementById(\"watchList\").innerHTML = watchedHTML;\n    })\n   \n}\n\nrenderWatchlist();\n\nasync function getData(url) {\n    let response = await fetch(url);\n    return await response.json();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;