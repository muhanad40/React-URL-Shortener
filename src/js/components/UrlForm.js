import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import UrlFormTemplate from '../templates/UrlForm'

const mapStateToProps = (state) => {
    return {}
}

export class UrlForm extends Component {
    _clearInputBox() {
        let inputEl = ReactDOM.findDOMNode(this).getElementsByClassName('form__input')[0]
        inputEl.value = ''
    }

    onSubmit(e) {
        this._clearInputBox()
    }

    render() {
        return UrlFormTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(UrlForm)