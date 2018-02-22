const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
      ]
    }
}