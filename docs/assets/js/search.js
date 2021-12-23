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

eval("\n\n// let baseUrl = \"https://web2-backend-rhysdevalckeneer.herokuapp.com/movies\";\n\n\nwindow.onload = function() {\n    getUpcoming();\n    getPopular();\n\n    document.getElementById('searchForm').addEventListener('submit', event => {\n        event.preventDefault();\n        let query = document.getElementById('searchInput').value;\n        searchMovie(query);\n        \n        // clear form \n        document.getElementById('searchInput').value = \"\";\n    });\n}\n\nasync function getUpcoming() {\n    let baseUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&page=1`;\n\n    getData(baseUrl).then(result => {\n        let data = result.results;\n        console.log(data);\n\n        let upcomingHTML='';\n\n        data.forEach(movie => {\n            upcomingHTML += `\n                <div class=\"col-2 poster\" id=\"${movie.id}\"> \n                    <a href=\"movie.html?id=${movie.id}\"> \n                        <p class=\"score\"><i class=\"fas fa-star\"></i> ${movie.vote_average}</p> \n                        <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" onerror=\"this.onerror=null;this.src='https://www.fillmurray.com/500/725';\">\n                    </a>\n                </div>`\n        });    \n        document.getElementById(\"upcoming\").innerHTML = upcomingHTML;\n    }); \n}\n\nasync function getPopular() {\n    let baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&page=1`;\n\n    getData(baseUrl).then(result => {\n        let data = result.results;\n        console.log(data);\n\n        let popularHTML='';\n\n        data.forEach(movie => {\n            popularHTML += `\n                <div class=\"col-2 poster\" id=\"${movie.id}\"> \n                    <a href=\"movie.html?id=${movie.id}\"> \n                        <p class=\"score\"><i class=\"fas fa-star\"></i> ${movie.vote_average}</p> \n                        <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" onerror=\"this.onerror=null;this.src='https://www.fillmurray.com/500/725';\">\n                    </a>\n                </div>`\n        });    \n        document.getElementById(\"popular\").innerHTML = popularHTML;\n    }); \n}\n\n// search movie\nfunction searchMovie(query) {\n    let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`;\n    console.log(query);\n\n    getData(baseUrl).then(result => {\n        let data = result.results;\n        console.log(data);\n\n        let searchedHTML='';\n\n        data.forEach(movie => {\n            searchedHTML += `\n                <div class=\"col-2 poster\" id=\"${movie.id}\"> \n                    <a href=\"movie.html?id=${movie.id}\"> \n                        <p class=\"score\"><i class=\"fas fa-star\"></i> ${movie.vote_average}</p> \n                        <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" onerror=\"this.onerror=null;this.src='https://www.fillmurray.com/500/725';\">\n                    </a>\n                </div>\n            `\n        });    \n        \n        document.getElementById(\"searchedMovies\").innerHTML = searchedHTML;\n    }); \n}\n\nasync function getData(url) {\n    let response = await fetch(url);\n    return await response.json();\n}\n\n//# sourceURL=webpack:///./src/search.js?");

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