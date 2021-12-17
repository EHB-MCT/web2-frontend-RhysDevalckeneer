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
                <div class="col-2 poster" id="${movie.id}"> 
                    <a href="movie.html?id=${movie.id}"> 
                        <p class="score"><i class="fas fa-star"></i> ${movie.vote_average}</p> 
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onerror="this.onerror=null;this.src='https://www.fillmurray.com/500/725';">
                    </a>
                </div>
            `
            
        });    
        
        document.getElementById("searchedMovies").innerHTML = searchedHTML;
    }); 
}

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}