let express        = require('express'),
    app            = express(),
    path           = require('path'),
    bodyParser     = require('body-parser'),
    testsResponses = require('./tests/test_responses')

function _generateRandomChar() {
    var characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return characters[Math.floor(Math.random() * (characters.length - 1)) + 1]
}

// Generate unique ID
function generateUniqueUrl() {
        var base     = 'http://localhost:3000',
            uniqueId = '',
            idLength = 7

    for (var i = 0; i <= idLength; i++) {
        uniqueId += _generateRandomChar()
    }
    return base + '/' + uniqueId
}

app.use(bodyParser.json())
app.use('/assets', express.static(__dirname + 'assets'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/urls', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(testsResponses.urls))
})

app.post('/shorten', function (req, res) {
    var url      = req.body.url,
        response = JSON.stringify(Object.assign({}, testsResponses.url, {
            original: url,
            shortUrl: generateUniqueUrl()
        }))

    res.setHeader('Content-Type', 'application/json')
    res.send(response)
})

app.get(/(.*)/, function (req, res) {
    let requestedUrl = req.params[0].substr(1)

    testsResponses.urls.forEach(function iterateResponses(testResponse) {
        if(testResponse.shortUrl.match(requestedUrl)) {
            var redirectTo = testResponse.original

            if(redirectTo.search(/^http[s]?\:\/\//)) {
                redirectTo = 'http://' + redirectTo
            }
            res.redirect(redirectTo)
        }
    })
})

app.listen(process.env.PORT || 8080, function () {
    console.log('URL Shortener app has started. Visit: http://localhost:3000')
})