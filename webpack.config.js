const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        search: './src/search.js',
        movie: './src/movie.js',
        watchlist: './src/watchlist.js',
      },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/assets/js'),
    },
};
