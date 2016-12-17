import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShortenedUrlsTemplate from '../templates/ShortenedUrls'

const mapStateToProps = (state) => {
    return {
        urls: state.appReducer.urls
    }
}

class ShortenedUrls extends Component {
    render() {
        return ShortenedUrlsTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(ShortenedUrls)