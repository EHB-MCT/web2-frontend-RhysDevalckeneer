/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/movie.js":
/*!**********************!*\
  !*** ./src/movie.js ***!
  \**********************/
/***/ (() => {

eval("console.log('movie called');\n\nwindow.onload = function () {\n\n    let renderPage  = document.getElementById('renderPage');\n    // get id from url\n    let selectedId = document.location.search.replace(/^.*?\\=/, '');\n\n    async function displayMovie() {\n\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`);\n        \n        const movie = await response.json();\n        console.log(movie);\n\n        let movieData = `\n        <header style=\"background-image: url(https://image.tmdb.org/t/p/original${movie.backdrop_path});background-size:cover;background-position: 0% 20%\">\n            <nav class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-8\">\n                        <img src=\"./assets/img/movietime_logo.png\" class=\"logo\">\n                    </div>\n                    <div class=\"col-4\">\n                        <ul>\n                            <li>\n                                <a href=\"./index.html\"><i class=\"fas fa-home\"></i> Home</a>\n                            </li>\n                            <li>\n                                <a href=\"./search.html\"><i class=\"fas fa-search\"></i> Search</a>\n                            </li>\n                            <li>\n                                <a href=\"./watchlist.html\"><i class=\"fas fa-plus\"></i> Watchlist</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </header>\n\n    <main>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-2\" id=\"moviePoster\">\n                    <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\">\n                </div>\n                <div class=\"col-9\">\n                    <h4>${movie.title} <small>${movie.release_date}</small></h4>\n                    <p>${movie.genres[0].name}</p>\n                </div>\n                <div class=\"col-1\">\n                    BUTTON\n                </div>\n            </div>\n        </div>\n        `;\n        renderPage.innerHTML = movieData;\n    }\n\n    displayMovie();\n}\n\n//# sourceURL=webpack:///./src/movie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/movie.js"]();
/******/ 	
/******/ })()
;