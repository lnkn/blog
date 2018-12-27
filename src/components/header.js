import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header">
    <div className="navlinks">
      <Link className="navlinks__about" to="about">About</Link>
      <Link className="navlinks__logo" to="/">Perfectly Salted</Link>
      <Link className="navlinks__contact" to="contact">Contact</Link>
    </div>
  </div>
)

export default Header
