import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShortenedUrlTemplate from '../templates/ShortenedUrl'
import { deleteUrl } from '../actions'

const mapStateToProps = (state) => {
    return {}
}

export class ShortenedUrl extends Component {
    onDelete(id, e) {
        this.props.deleteUrl(id)
    }

    render() {
        return ShortenedUrlTemplate.apply(this)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUrl: (id) => {
            dispatch(deleteUrl(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortenedUrl)