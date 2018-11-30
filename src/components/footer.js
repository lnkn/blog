import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <div className="Footer"  >
    <div>
      <Link className="footer__logo" to="/">
        Made with ❤ in Seattle by Zoe
      </Link>
    </div>
  </div>
)

export default Footer
