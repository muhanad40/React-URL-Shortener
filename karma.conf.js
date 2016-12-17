let webpackConfig = require('./.gulp/config').webpack

webpackConfig.devtool = 'inline-source-map'
webpackConfig.externals = {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
}

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'sinon'],
        files: [
            'tests/**/*.test.js'
        ],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        preprocessors: {
            'tests/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}
