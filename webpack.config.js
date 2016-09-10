var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        app: './components/main.js' // This path is relative to the context declared above
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'app'), // Its better to include only the files need than to exclude certain files.
            //exclude: /node-modules/,
            // We can move the presets inside a .babelrc file or we can put it inside the package.json file(one less file to commit).
            // query: {
            //     presets: ['es2015', 'react']
            // }
        }]
    },
    //Configring the server to load the files from dist folder instead of the root folder
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true, // By default Webpack will load our projects inside an iframe. To aviod that we have to use the inline mode.
        stats: 'errors-only'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'app', 'index.html'),
            hash: true // Takes care of hashing. Each time a new bundle file is served
        })
    ]
};