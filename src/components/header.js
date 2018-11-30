import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header"  >
    <div>
      <Link className="header__logo" to="/">
        Perfectly Salted
      </Link>
    </div>
  </div>
)

export default Header
