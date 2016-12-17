import appReducer from '../src/js/reducers/appReducer'
import testResponses from './test_responses'

describe('`appReducer` reducer', () => {
    it('should store a url', () => {

        let initialState = {
                urls: []
            },
            newState = appReducer(initialState, {
                type: 'STORE_URL',
                urlObj: testResponses.url
            })

        expect(newState.urls[0]).toEqual(testResponses.url)
    })

    it('should store a set of urls', () => {

        let initialState = {
                urls: []
            },
            newState = appReducer(initialState, {
                type: 'STORE_URLS',
                urlsObj: testResponses.urls
            })

        expect(newState.urls).toEqual(testResponses.urls)
    })

    it('should store a url to an existing list of urls', () => {

        let initialState = {
                urls: [
                    testResponses.urls[0]
                ]
            },
            newState = appReducer(initialState, {
                type: 'STORE_URL',
                urlObj: testResponses.urls[1]
            })

        expect(newState.urls).toEqual([
            testResponses.urls[1],
            testResponses.urls[0]
        ])
    })
})