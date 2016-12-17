import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ConnectedShortenedUrl, { ShortenedUrl } from '../src/js/components/ShortenedUrl'
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store = mockStore({})

describe('ShortenedUrl component', () => {
    it('should render with given props', () => {
        let linkComponent = mount(
                <Provider store={ store }>
                    <ConnectedShortenedUrl id='1' original='www.google.com' created='1 min ago' shortUrl='sho.rt/f343g4f' />
                </Provider>
            ),
            elements = linkComponent.find('.link__col'),
            linkEl   = elements.nodes[0].getElementsByTagName('a')[0],
            createEl = elements.nodes[1],
            shortUrl = elements.nodes[2].getElementsByTagName('a')[0],
            deleteEl = elements.nodes[3]

        expect(linkEl.innerText).toEqual('www.google.com')
        expect(linkEl.getAttribute('href')).toEqual('www.google.com')
        expect(createEl.innerText).toEqual('1 min ago')
        expect(shortUrl.innerText).toEqual('sho.rt/f343g4f')
        expect(shortUrl.getAttribute('href')).toEqual('sho.rt/f343g4f')
    })

    it('should trigger delete callback when it is clicked', () => {
        ShortenedUrl.prototype.onDelete = sinon.spy()

        let linkComponent = mount(
                <Provider store={ store }>
                    <ShortenedUrl id='1' original='www.google.com' created='1 min ago' shortUrl='sho.rt/f343g4f' />
                </Provider>
            ),
            deleteEl = linkComponent.find('.icon-delete')

        deleteEl.simulate('click')

        expect(ShortenedUrl.prototype.onDelete.called).toEqual(true)
    })
})