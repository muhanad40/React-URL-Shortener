import React from 'react'
import UrlForm from '../components/UrlForm'
import ShortenedUrls from '../components/ShortenedUrls'

export default function () {
    return (
        <main className="container">
            <header className="header">
                <h1 className="header__title">URL Shortener</h1>
            </header>

            <UrlForm />

            <section className="urls">
                <header className="urls-header">
                    <div className="urls-header__title">Original</div>
                    <div className="urls-header__title">Created</div>
                    <div className="urls-header__title">Short URL</div>
                    <div className="urls-header__title">Delete</div>
                </header>

                <ShortenedUrls links={ [] } />
            </section>
        </main>
    )
}