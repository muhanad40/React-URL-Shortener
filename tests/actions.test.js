import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shortenUrl, storeUrl } from '../src/js/actions'
import testResponses from './test_responses'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('`storeUrl` action', () => {
    it('should create action to store a URL', () => {
        let action = storeUrl(testResponses.url)

        expect(action).toEqual({
            type: 'STORE_URL',
            urlObj: testResponses.url
        })
    })
})

describe('`shortenUrl` action', () => {
    let server,
        store

    beforeEach(() => {
        server = sinon.fakeServer.create()
        store = mockStore()
    })

    afterEach(() => {
        server.restore()
    })

    it('should make a POST request to shorten a URL', () => {
        let url             = 'www.google.com',
            expectedActions = [
                { type: 'SHORTEN_URL', url },
                { type: 'STORE_URL', urlObj: testResponses.url }
            ]

        store.dispatch(shortenUrl(url))

        server.requests[0].respond(200,
                                   { "Content-Type": "application/json" },
                                   JSON.stringify(testResponses.url))

        expect(store.getActions()).toEqual(expectedActions)
        expect(server.requests[0].method).toEqual('POST')
        expect(server.requests[0].url).toEqual('/shorten')
        expect(server.requests[0].requestHeaders['Content-Type']).toMatch(/application\/json/)
        expect(JSON.parse(server.requests[0].requestBody)).toEqual({url})
    })
})