import React from 'react'

export default function () {
    return (
        <article className="link">
            <div className="link__col">
                <a href={ this.props.original } target="_blank">{ this.props.original }</a>
            </div>

            <div className="link__col">1 min ago</div>

            <div className="link__col">
                <a href={ this.props.shortUrl } target="_blank">{ this.props.shortUrl }</a>
            </div>

            <div className="link__col">
                <a href="#" className="icon-delete"></a>
            </div>
        </article>
    )
}