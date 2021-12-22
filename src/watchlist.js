'use strict';

let watchList;
let moviesHTML = '';
let watchTime = []
let totalTime;

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
                    <section class="poster" id="${movie._id}">
                        <div class="tcontainer">
                            <i class="fas fa-trash delete"></i>
                        </div>
                        <a href="movie.html?id=${movie.movie_id}">
                            <img src="${movie.poster_path}">
                        </a>
                    </section>
                </div>
            `;

            watchTime.push(parseInt(movie.runtime));
        }); 

        // https://appdividend.com/2020/07/24/javascript-sum-array-how-to-find-sum-of-array-in-js/
        totalTime = watchTime.reduce((a, b) => {
            return a + b;
        });
        console.log('total watchtime: ' + totalTime)

        // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php
        function timeConvert(n) {
            var num = n;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            return rhours + " hour(s) and " + rminutes + " minute(s).";
        }

        let watchedTime = timeConvert(totalTime);

        document.getElementById('watchtime').innerHTML = watchedTime;
        document.getElementById('watchList').innerHTML = moviesHTML;
        console.log('rendered!');
    }

    document.getElementById('watchList').addEventListener('click', (event)=> {
        const movieId = event.target.closest('.poster').id;
        console.log(event.target)

        if(movieId){
            if(event.target.className.indexOf('delete') !== -1){
                console.log(movieId)
                console.log('delete')
                
                deleteMovie(movieId);
                
            }
        }
        
    })
    async function deleteMovie(movieId){
        fetch(`https://web2-backend-rhysdevalckeneer.herokuapp.com/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: movieId,
            })
        }).then(async data => {
            console.log(data)
            return data;
        })
    }
    renderWatchlist();
}

