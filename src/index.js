import '../dist/assets/css/style.css';
import '../dist/assets/css/media.css';

'use strict';

class Movies {
    constructor() {
        this.movieList = document.getElementById("movieList");
    }

    render() {
        let htmlString = '';
        this.movies.forEach(movie => {
            htmlString += movie.htmlString;
        });
        this.moviesList.insertAdjacentHTML('beforeend', htmlString);
        // console.log(htmlString);
    }
}

class Movie {
    constructor(){

    }

    async fetch() {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84`);
        const json = await response.json();

        this.movies = json.movies.map(movie => {
            // console.log('user', user);
            return new Movie(movie)
        });
        console.log('fetch movies: ', this.movies);
    }

    async init() {
        await this.fetch();
        this.render();
    }

    get htmlString() {
        console.log(this.data);
        return `
            <div class="col-md-2">
                <a href="">
                    <div class="movie">
                        <img src="" alt="">
                    </div>
                </a>
            </div>
        `
    }
}

const movies = new Movies();
movies.render();

class Form {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.bindEvents();
    }

    clearForm() {
        this.searchInput.value = '';
    }

    submitForm(event) {
        event.preventDefault();
        // this.uploadData();
        this.clearForm();
        console.log(this.userElement.value);
    }
}

new Form();