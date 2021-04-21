import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="top-bar">
      <div className="container top-nav">
          <div className="nav-logo">Programactor.<span>design</span></div>
          <ul className="nav-links">
          <li>
              <Link to="../works" className="link link--elara"><span>Works</span></Link>
            </li>
            <li>
              <Link to="../aboutus" className="link link--elara"><span>About Us</span></Link>
            </li>
            <li>
              <Link to="../service" className="link link--elara"><span>Services</span></Link>
            </li>
            <li>
              <Link to="../contact" className="link link--elara"><span>Contact Us</span></Link>
            </li>
          </ul>
          <div className="navigation-show"></div>
      </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
