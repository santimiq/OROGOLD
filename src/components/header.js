import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-orogold.png"
import header from "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header className="full-header">
    <div className="container">
      <div className="headergroup">
        <div className="logo-group">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="info-group">
          <p>orogoldspa@orogold.com</p>
          <button>Reserva ahora</button>
        </div>
      </div>
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
