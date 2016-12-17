import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShortenedUrlTemplate from '../templates/ShortenedUrl'

const mapStateToProps = (state) => {
    return {}
}

export class ShortenedUrl extends Component {
    onDelete() {
        // console.log('delete link!')
    }

    render() {
        return ShortenedUrlTemplate.apply(this)
    }
}

export default connect(mapStateToProps)(ShortenedUrl)