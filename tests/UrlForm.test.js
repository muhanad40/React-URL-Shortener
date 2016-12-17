import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ConnectedUrlForm, { UrlForm } from '../src/js/components/UrlForm'
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store = mockStore({})

describe('UrlForm component', () => {
    it('should render with a button', () => {
        let linkComponent = mount(
                <Provider store={ store }>
                    <ConnectedUrlForm />
                </Provider>
            ),
            input  = linkComponent.find('.form__input'),
            button = linkComponent.find('.form__button')

        expect(input.length).toEqual(1)
        expect(button.length).toEqual(1)
    })

    it('should trigger submit callback when the form is submitted', () => {
        sinon.spy(UrlForm.prototype, 'onSubmit')

        let linkComponent = mount(
                <Provider store={ store }>
                    <UrlForm />
                </Provider>
            ),
            input  = linkComponent.find('.form__input'),
            submitButton = linkComponent.find('.form__button')

        submitButton.simulate('submit')

        expect(UrlForm.prototype.onSubmit.called).toEqual(true)
    })

    it('should clear the input box after the form is submitted', () => {
        let linkComponent = mount(
                <Provider store={ store }>
                    <ConnectedUrlForm />
                </Provider>
            ),
            input  = linkComponent.find('.form__input'),
            button = linkComponent.find('.form__button')

        input.node.value = 'www.google.com'
        button.simulate('submit')

        expect(input.node.value).toEqual('')
    })
})