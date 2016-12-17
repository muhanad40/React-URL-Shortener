import React from 'react'

export default function () {
    return (
        <form className="form is-invalid" method="post" onSubmit={ this.onSubmit.bind(this) }>
            <input type="url" className="form__input" name="url" placeholder="Enter a URL..." />
            <span className="error">Error message</span>

            <input type="submit" className="form__button" value="Shorten!" />
        </form>
    )
}