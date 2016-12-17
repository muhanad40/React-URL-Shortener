import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ShortenedUrl from '../src/js/components/ShortenedUrl'
import ShortenedUrls from '../src/js/components/ShortenedUrls'
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store = mockStore({
    appReducer: {
        urls: [
            {
                id: '1',
                original: 'www.google.com',
                created: '1 min ago',
                shortUrl: 'sho.rt/f343g4f'
            },
            {
                id: '2',
                original: 'www.youtube.com',
                created: '4 min ago',
                shortUrl: 'sho.rt/f87sd'
            }
        ]
    }
})

describe('ShortenedUrls component', () => {
    it('should render many links', () => {
        let linkComponent = mount(
                <Provider store={ store }>
                    <ShortenedUrls />
                </Provider>
            ),
            elements = linkComponent.find(ShortenedUrl)

        expect(elements.length).toEqual(store.getState().appReducer.urls.length)
    })
})