let initialState = {
    urls: []
}

export default (state = initialState, action) => {
    let newState

    switch (action.type) {
        case 'STORE_URL':
            newState = Object.assign({}, state)
            newState.urls.push(action.urlObj)
            return newState

        case 'STORE_URLS':
            newState = Object.assign({}, state)
            newState.urls = action.urlsObj
            return newState

        default:
            return state
    }
}