const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
    filename: 'ribbit-connect.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};