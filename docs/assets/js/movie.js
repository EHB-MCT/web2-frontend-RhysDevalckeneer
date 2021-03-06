'use strict';

let providerHTML = "";

window.onload = function () {


    // let renderPage  = document.getElementById('renderPage');
    // get id from url
    let selectedId = document.location.search.replace(/^.*?\=/, '');

    async function displayMovie() {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`);

        const movie = await response.json();
        // console.log(movie);

        document.getElementById('movieImage').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
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

        document.getElementById('movieScore').innerHTML = movie.vote_average;
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
        // console.log(provider);

        let data = provider.results.US.buy;
        // console.log(data);

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

    async function getRecs() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}/recommendations?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&page=1`);

        const result = await response.json();
        // console.log(provider);

        let data = result.results;
        // console.log(data);

        let recHTML = "";
        data.forEach(movie => {
            recHTML += `
            <div class="col-2 poster" id="${movie.id}"> 
                <a href="movie.html?id=${movie.id}"> 
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onerror="this.onerror=null;this.src='https://www.fillmurray.com/500/725';">
                </a>
            </div>
            `
        });
        document.getElementById("recommendations").innerHTML = recHTML;
    }

    

    getProviders();
    getRecs();

    let id;
    let poster;
    let runtime;

    // add movie
    async function addMovie(id, poster, runtime) {
        // console.log('clicked')
        //Get the data from the form fields
        id = document.location.search.replace(/^.*?\=/, '');
        poster = document.getElementById('movieImage').src;
        runtime = document.getElementById('movieRuntime').innerHTML;

        fetch(`https://web2-backend-rhysdevalckeneer.herokuapp.com/movies/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movie_id: id,
                poster_path: poster,
                runtime: runtime
            })
        }).then(async data => {
            console.log(data)
            return data;
        })
    }

    let addButton = document.getElementById('addMovie');
    addButton.addEventListener("click", event => {
        event.preventDefault();
        console.log(poster)
        addMovie(id, poster, runtime);
    })

}