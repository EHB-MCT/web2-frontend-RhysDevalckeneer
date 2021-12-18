'use strict';

let providerHTML = "";

window.onload = function () {

    // let renderPage  = document.getElementById('renderPage');
    // get id from url
    let selectedId = document.location.search.replace(/^.*?\=/, '');

    async function displayMovie() {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`);
        
        const movie = await response.json();
        console.log(movie);

        document.getElementById('movieImage').src = 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;
        document.getElementById('movieTitle').innerHTML = movie.title
        document.getElementById('movieYear').innerHTML = movie.id;

        // display genres
        let genresHTML = "";
        let genres = movie.genres;
        genres.forEach(genre => {
            genresHTML += `
                <p class="genre">${genre.name}</p>
            `
        });  
        document.getElementById("genres").innerHTML = genresHTML;

        document.getElementById('movieRuntime').innerHTML = movie.runtime;
        document.getElementById('movieOverview').innerHTML = movie.overview;

        document.getElementById('realeaseDate').innerHTML = movie.release_date;
        document.getElementById('budget').innerHTML = movie.budget;
        document.getElementById('revenue').innerHTML = movie.revenue;
    }

    displayMovie();

    async function getProviders() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}/watch/providers?api_key=ace96559b8fb0dd613fdfd48023afa84`);
        
        
        const provider = await response.json();
        console.log(provider);

        let data = provider.results.US.buy;
        console.log(data);

        let providerHTML = "";
        data.forEach(p => {
            providerHTML += `
            <div class="col-1">
                <img src="https://image.tmdb.org/t/p/original${p.logo_path}">
            </div>
            `
        });
        document.getElementById("providers").innerHTML = providerHTML;
    }

    getProviders();


    // add movie
    async function addMovie() {
        console.log('clicked')
        //Get the data from the form fields
        let movieId = document.getElementById('movieYear').value;
        let moviePoster = document.getElementById('movieImage').src.value;

        fetch(`https://web2-backend-rhysdevalckeneer.herokuapp.com/movies/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movie_id: movieId,
                poster_path: moviePoster
            })

        }).then(response => {
            return response.json()
        }).then(async data => {
            console.log('Success:', data);
            //Add succes message
        });
    }
    let addButton = document.getElementById('addMovie');
    addButton.addEventListener("click", addMovie);
}




