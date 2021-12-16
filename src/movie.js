console.log('movie called');

window.onload = function () {

    let renderPage  = document.getElementById('renderPage');
    // get id from url
    let selectedId = document.location.search.replace(/^.*?\=/, '');

    async function displayMovie() {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`);
        
        const movie = await response.json();
        console.log(movie);

        let movieData = `
        <header style="background-image: url(https://image.tmdb.org/t/p/original${movie.backdrop_path});background-size:cover;background-position: 0% 20%">
            <nav class="container">
                <div class="row">
                    <div class="col-8">
                        <img src="./assets/img/movietime_logo.png" class="logo">
                    </div>
                    <div class="col-4">
                        <ul>
                            <li>
                                <a href="./index.html"><i class="fas fa-home"></i> Home</a>
                            </li>
                            <li>
                                <a href="./search.html"><i class="fas fa-search"></i> Search</a>
                            </li>
                            <li>
                                <a href="./watchlist.html"><i class="fas fa-plus"></i> Watchlist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-2" id="moviePoster">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                </div>
                <div class="col-9">
                    <h4>${movie.title} <small>${movie.release_date}</small></h4>
                    <p>${movie.genres[0].name}</p>
                </div>
                <div class="col-1">
                    BUTTON
                </div>
            </div>
        </div>
        `;
        renderPage.innerHTML = movieData;
    }

    displayMovie();
}