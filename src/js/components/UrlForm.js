import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import UrlFormTemplate from '../templates/UrlForm'
import { shortenUrl } from '../actions'

const mapStateToProps = (state) => {
    return {}
}

export class UrlForm extends Component {
    _getInputEl() {
        return ReactDOM.findDOMNode(this).getElementsByClassName('form__input')[0]
    }

    _clearInputBox() {
        let inputEl = this._getInputEl()
        inputEl.value = ''
    }

    _validateForm() {
        let inputEl = this._getInputEl()

        if(inputEl.value == '') {
            return false
        }
        return true
    }

    onSubmit(e) {
        e.preventDefault()

        let isValid = this._validateForm(),
            inputEl = this._getInputEl()

        if(!isValid) {
            this.formIsInvalid = true
        } else {
            this.formIsInvalid = false
            this.props.dispatch(shortenUrl(inputEl.value))
        }

        this._clearInputBox()
        this.forceUpdate()
    }

    render() {
        return UrlFormTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(UrlForm)