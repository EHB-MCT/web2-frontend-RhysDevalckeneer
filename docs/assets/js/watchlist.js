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

eval("\n\nlet watchList;\nlet moviesHTML = '';\nlet watchTime = []\nlet totalTime;\n\nwindow.onload = function() {\n\n    async function renderWatchlist() {\n        moviesHTML = '';\n    \n        let response = await fetch('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies');\n        // console.log(response)\n        let data = await response.json();\n        console.log(data);\n    \n        data.forEach(movie => {\n            moviesHTML += `\n                <div class=\"col-2\">\n                    <section class=\"poster\" id=\"${movie._id}\">\n                        <div class=\"tcontainer\">\n                            <i class=\"fas fa-trash delete\"></i>\n                        </div>\n                        <a href=\"movie.html?id=${movie.movie_id}\">\n                            <img src=\"${movie.poster_path}\">\n                        </a>\n                    </section>\n                </div>\n            `;\n\n            watchTime.push(parseInt(movie.runtime));\n        }); \n\n        // https://appdividend.com/2020/07/24/javascript-sum-array-how-to-find-sum-of-array-in-js/\n        totalTime = watchTime.reduce((a, b) => {\n            return a + b;\n        });\n        console.log('total watchtime: ' + totalTime)\n\n        // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php\n        function timeConvert(n) {\n            var num = n;\n            var hours = (num / 60);\n            var rhours = Math.floor(hours);\n            var minutes = (hours - rhours) * 60;\n            var rminutes = Math.round(minutes);\n            return rhours + \" hour(s) and \" + rminutes + \" minute(s).\";\n        }\n\n        let watchedTime = timeConvert(totalTime);\n\n        document.getElementById('watchtime').innerHTML = watchedTime;\n        document.getElementById('watchList').innerHTML = moviesHTML;\n        console.log('rendered!');\n    }\n\n    document.getElementById('watchList').addEventListener('click', (event)=> {\n        const movieId = event.target.closest('.poster').id;\n        console.log(event.target)\n\n        if(movieId){\n            if(event.target.className.indexOf('delete') !== -1){\n                console.log(movieId)\n                console.log('delete')\n                \n                deleteMovie(movieId);\n                \n            }\n        }\n        \n    })\n    async function deleteMovie(movieId){\n        fetch(`https://web2-backend-rhysdevalckeneer.herokuapp.com/movies/${movieId}`, {\n            method: \"DELETE\",\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                _id: movieId,\n            })\n        }).then(async data => {\n            console.log(data)\n            return data;\n        })\n    }\n    renderWatchlist();\n}\n\n\n\n//# sourceURL=webpack:///./src/watchlist.js?");

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