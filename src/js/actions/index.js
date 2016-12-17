import superagent from 'superagent'

export function fetchUrls() {
    return dispatch => {
        dispatch({
            type: 'FETCH_URLS'
        })

        superagent.get('/urls')
            .set('Accept', 'application/json')
            .end((err, res) => {
                dispatch(storeUrls(res.body))
            })
    }
}

export function storeUrls(urlsObj) {
    return {
        type: 'STORE_URLS',
        urlsObj
    }
}

export function storeUrl(urlObj) {
    return {
        type: 'STORE_URL',
        urlObj
    }
}

export function shortenUrl(url) {
    return dispatch => {
        dispatch({
            type: 'SHORTEN_URL',
            url
        })

        superagent.post('/shorten')
            .send({url})
            .end((err, res) => {
                dispatch(storeUrl(res.body))
            })
    }
}