import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class PageNotFound extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h1>Page Not Found</h1>
                <Link className="nav-link" to="/">Go Back</Link>
            </div>
        )
    }
}

export default PageNotFound
