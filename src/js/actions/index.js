import superagent from 'superagent'

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