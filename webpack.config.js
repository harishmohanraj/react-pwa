var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/components/main.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            }
        ]
    }
};