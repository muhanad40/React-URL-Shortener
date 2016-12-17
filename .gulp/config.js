let path = require('path')

const dirs = {
    raw:   path.join('.', 'src'),
    build: path.join('.', 'assets')
}

const input = {
        js:   path.join(dirs.raw, 'js', '**', '*.js'),
        scss: path.join(dirs.raw, 'scss', '**', '*.scss')
    },
    output  = {
        js:   path.join(dirs.build, 'js'),
        css:  path.join(dirs.build, 'css')
    }

const webpack = {
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["latest", "react"]
                }
            }
        ]
    }
}

module.exports = {
    input,
    output,
    webpack
}