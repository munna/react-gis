var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');
module.exports = {
    entry: 
        {
        client: path.join(parentDir, 'src/client.js'),
        bundle: path.join(parentDir, 'src/bundle.js')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: "[name].js"
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
    }
}