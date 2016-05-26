var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test:   /\.scss/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        }]
    },
    resolve: ['', '.js', '.scss']
}