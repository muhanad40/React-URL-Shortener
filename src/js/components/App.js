import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppTemplate from '../templates/App'
import { fetchUrls } from '../actions'

const mapStateToProps = (state) => {
    return {}
}

export class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUrls())
    }

    render() {
        return AppTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(App)