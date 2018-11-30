import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="topbar"  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link className="header__logo" to="/">
        {siteTitle}
      </Link>

      <a href="https://github.com/saigowthamr/gatsbyblog-starter"
        style={{ color: "white", float: "right" }} title="github" >Github</a>
    </div>
  </div>
)

export default Header
