let initialState = {
    urls: []
}

export default (state = initialState, action) => {
    let newState

    switch (action.type) {
        case 'STORE_URL':
            newState = Object.assign({}, state)
            newState.urls = state.urls.slice(0)
            newState.urls.unshift(action.urlObj)
            return newState

        case 'STORE_URLS':
            newState = Object.assign({}, state)
            newState.urls = action.urlsObj
            return newState

        case 'DELETE_URL':
            newState = Object.assign({}, state)
            newState.urls = state.urls.slice(0)
            newState.urls.forEach(function iterateUrls(urlObj, i) {
                if(urlObj.id == action.id) {
                    newState.urls.splice(i, 1)
                }
            })
            return newState

        default:
            return state
    }
}