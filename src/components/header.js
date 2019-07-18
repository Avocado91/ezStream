import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header>
        <div>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
            <p>
                <ul>
                    <li>
                        <Link to="/">Movies</Link>
                    </li>
                    <li>
                        <Link to="/series/">Series</Link>
                    </li>
                    <li>
                        <Link to="/anime/">Anime</Link>
                    </li>
                </ul>
            </p>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
