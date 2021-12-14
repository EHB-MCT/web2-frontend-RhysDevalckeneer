'use strict';

// let baseUrl = "https://web2-backend-rhysdevalckeneer.herokuapp.com/movies";

window.onload = function() {
    document.getElementById('searchForm').addEventListener('submit', event => {
        event.preventDefault();
        let query = document.getElementById('searchInput').value;
    
        searchMovie(query);
        
        // clear form 
        document.getElementById('searchInput').value = "";
    });
}

// search movie
function searchMovie(query) {
    let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`;
    console.log(query);

    getData(baseUrl).then(result => {
        let data = result.results;
        console.log(data);

        let searchedHTML='';

        data.forEach(movie => {
            searchedHTML += `
            <div class="col-2 poster" id="${movie._id}">   
                <i class="far fa-bookmark"></i>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onerror="this.onerror=null;this.src='https://www.fillmurray.com/500/725';">
            </div>`
        });
        document.getElementById("searchedMovies").innerHTML = searchedHTML;
    });

    let list = document.getElementById('searchedMovies');
    addMovie(list);
}

function addMovie(list) {

    let el = document.getElementsByClassName('fa-bookmark');

    list.addEventListener('click', event => {
        event.preventDefault();

        const movieId = el.closest('movie').id;
        console.log(movieId);
    })
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
}





function renderWatchlist() {
    
    getData('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies').then(result =>{
        let watchedHTML = '';

        result.forEach(movie => {
            watchedHTML += `
            <div class="col-2 movie" id="${movie._id}">   
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            </div>`
        }); 

        document.getElementById("watchList").innerHTML = watchedHTML;
    })
   
}

renderWatchlist();

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}