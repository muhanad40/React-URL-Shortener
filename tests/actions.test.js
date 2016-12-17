import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shortenUrl, storeUrl, fetchUrls, storeUrls, deleteUrl } from '../src/js/actions'
import testResponses from './test_responses'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('`storeUrls` action', () => {
    it('should create action to store URLs', () => {
        let action = storeUrls(testResponses.urls)

        expect(action).toEqual({
            type: 'STORE_URLS',
            urlsObj: testResponses.urls
        })
    })
})

describe('`storeUrl` action', () => {
    it('should create action to store a URL', () => {
        let action = storeUrl(testResponses.url)

        expect(action).toEqual({
            type: 'STORE_URL',
            urlObj: testResponses.url
        })
    })
})

describe('`deleteUrl` action', () => {
    it('should create action to delete a URL', () => {
        let action = deleteUrl(1)

        expect(action).toEqual({
            type: 'DELETE_URL',
            id: 1
        })
    })
})

describe('Async actions', () => {
    let server,
        store

    beforeEach(() => {
        server = sinon.fakeServer.create()
        store = mockStore()
    })

    afterEach(() => {
        server.restore()
    })

    it('should make a GET request to get all shortened URLs', () => {
        let expectedActions = [
                { type: 'FETCH_URLS' },
                { type: 'STORE_URLS', urlsObj: testResponses.urls }
            ]

        store.dispatch(fetchUrls())

        server.requests[0].respond(200,
                                   { "Content-Type": "application/json" },
                                   JSON.stringify(testResponses.urls))

        expect(store.getActions()).toEqual(expectedActions)
        expect(server.requests[0].method).toEqual('GET')
        expect(server.requests[0].url).toEqual('/urls')
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