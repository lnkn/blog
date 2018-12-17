import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header"  >
    <div>
    <Link className="header__logo" to="/">Perfectly Salted</Link>
      <div className="header__navlinks">
      <Link className="header__links_about" to="about">About</Link>
      <Link className="header__links_contact" to="contact">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
