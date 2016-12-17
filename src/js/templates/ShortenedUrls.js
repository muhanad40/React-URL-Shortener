import React from 'react'
import ShortenedUrl from '../components/ShortenedUrl'

export default function () {
    let linkComponents = this.props.urls.map(function iterateLinks(linkConfig, i) {
        return (
            <ShortenedUrl key={ i } { ...linkConfig } />
        )
    })

    return (
        <div>{ linkComponents }</div>
    )
}