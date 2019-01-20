import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header">
    <div className="navlinks">
      <Link className="navlinks__about" to="about">About</Link>
      <Link className="navlinks__logo" to="/">Perfectly Salted</Link>
      <Link className="navlinks__contact" to="contact">Contact</Link>
      <a href="[https://www.instagram.com/perfectlysalted/]">
      <img title="Instagram" alt="RSS" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" width="35" height="35" />
      </a>
      </div>
    </div>
)

export default Header
