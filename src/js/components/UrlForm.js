import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import UrlFormTemplate from '../templates/UrlForm'

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

        let isValid = this._validateForm()

        if(!isValid) {
            this.formIsInvalid = true
        } else {
            this.formIsInvalid = false
        }

        this._clearInputBox()
        this.forceUpdate()
    }

    render() {
        return UrlFormTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(UrlForm)