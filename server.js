let express = require('express'),
    app     = express(),
    path    = require('path'),
    testsResponses = require('./tests/test_responses')

app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/urls', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(testsResponses.urls));
})
app.post('/shorten', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(testsResponses.url));
})

app.listen(3000, function () {
    console.log('URL Shortener app has started. Visit: http://localhost:3000')
})