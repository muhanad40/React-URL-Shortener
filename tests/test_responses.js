let url = {
    id: 1,
    original: 'www.google.com',
    shortUrl: 'http://localhost:3000/d2435g35g',
    created: '1 min ago'
}

let urls = [
    url,
    Object.assign({}, url, { id: 2, original: 'www.youtube.com', shortUrl: 'http://localhost:3000/f344fg4', created: '1 min ago' }),
    Object.assign({}, url, { id: 3, original: 'www.yahoo.com', shortUrl: 'http://localhost:3000/93f3dg4', created: '2 mins ago' }),
    Object.assign({}, url, { id: 4, original: 'www.ask.com', shortUrl: 'http://localhost:3000/d24f323', created: '6 mins ago' }),
]

module.exports = {
    url,
    urls
}