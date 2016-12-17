import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShortenedUrlTemplate from '../templates/ShortenedUrl'

const mapStateToProps = (state) => {
    return {}
}


class ShortenedUrl extends Component {
    render() {
        return ShortenedUrlTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(ShortenedUrl)