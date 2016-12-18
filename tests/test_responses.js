let url = {
    id: 1,
    original: 'www.google.com',
    shortUrl: 'https://dummy-url-shortener.herokuapp.com/d2435g35g',
    created: '1 min ago'
}

let urls = [
    url,
    Object.assign({}, url, { id: 2, original: 'www.youtube.com', shortUrl: 'https://dummy-url-shortener.herokuapp.com/f344fg4', created: '1 min ago' }),
    Object.assign({}, url, { id: 3, original: 'www.yahoo.com', shortUrl: 'https://dummy-url-shortener.herokuapp.com/93f3dg4', created: '2 mins ago' }),
    Object.assign({}, url, { id: 4, original: 'www.ask.com', shortUrl: 'https://dummy-url-shortener.herokuapp.com/d24f323', created: '6 mins ago' }),
]

module.exports = {
    url,
    urls
}