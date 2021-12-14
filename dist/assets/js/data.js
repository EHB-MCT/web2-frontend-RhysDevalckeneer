'use strict';

let watchList;
let moviesHTML = '';

window.onload = function() {

    async function renderWatchlist() {
        moviesHTML = '';
    
        let response = await fetch('https://web2-backend-rhysdevalckeneer.herokuapp.com/movies');
        // console.log(response)
        let data = await response.json();
        console.log(data);
    
        data.forEach(movie => {
            moviesHTML += `
                <div class="col-2">
                    <section class="poster">
                        <div class="watched">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    </section>
                </div>
            `;
        }); 

        document.getElementById('watchList').innerHTML = moviesHTML;
        console.log('rendered!');
    }
    renderWatchlist();
}

