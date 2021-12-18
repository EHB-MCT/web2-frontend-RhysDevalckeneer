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

/***/ "./src/movie.js":
/*!**********************!*\
  !*** ./src/movie.js ***!
  \**********************/
/***/ (() => {

eval("\n\nlet providerHTML = \"\";\n\nwindow.onload = function () {\n\n    // let renderPage  = document.getElementById('renderPage');\n    // get id from url\n    let selectedId = document.location.search.replace(/^.*?\\=/, '');\n\n    async function displayMovie() {\n\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`);\n        \n        const movie = await response.json();\n        console.log(movie);\n\n        document.getElementById('movieImage').src = 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;\n        document.getElementById('movieTitle').innerHTML = movie.title\n        document.getElementById('movieYear').innerHTML = movie.id;\n\n        // display genres\n        let genresHTML = \"\";\n        let genres = movie.genres;\n        genres.forEach(genre => {\n            genresHTML += `\n                <p class=\"genre\">${genre.name}</p>\n            `\n        });  \n        document.getElementById(\"genres\").innerHTML = genresHTML;\n\n        document.getElementById('movieRuntime').innerHTML = movie.runtime;\n        document.getElementById('movieOverview').innerHTML = movie.overview;\n\n        document.getElementById('realeaseDate').innerHTML = movie.release_date;\n        document.getElementById('budget').innerHTML = movie.budget;\n        document.getElementById('revenue').innerHTML = movie.revenue;\n    }\n\n    displayMovie();\n\n    async function getProviders() {\n        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}/watch/providers?api_key=ace96559b8fb0dd613fdfd48023afa84`);\n        \n        \n        const provider = await response.json();\n        console.log(provider);\n\n        let data = provider.results.US.buy;\n        console.log(data);\n\n        let providerHTML = \"\";\n        data.forEach(p => {\n            providerHTML += `\n            <div class=\"col-1\">\n                <img src=\"https://image.tmdb.org/t/p/original${p.logo_path}\">\n            </div>\n            `\n        });\n        document.getElementById(\"providers\").innerHTML = providerHTML;\n    }\n\n    getProviders();\n\n\n    // add movie\n    async function addMovie() {\n        console.log('clicked')\n        //Get the data from the form fields\n        let movieId = document.getElementById('movieYear').value;\n        let moviePoster = document.getElementById('movieImage').src.value;\n\n        fetch(`https://web2-backend-rhysdevalckeneer.herokuapp.com/movies/`, {\n            method: \"POST\",\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                movie_id: movieId,\n                poster_path: moviePoster\n            })\n\n        }).then(response => {\n            return response.json()\n        }).then(async data => {\n            console.log('Success:', data);\n            //Add succes message\n        });\n    }\n    let addButton = document.getElementById('addMovie');\n    addButton.addEventListener(\"click\", addMovie);\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/movie.js?");

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