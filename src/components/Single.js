import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.scss'

class Single extends Component {

  render() {
          <div className="wrapper">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={postList}>
              {this.props.children}
            </div>
            <Footer />
          </div>
  }
}

export default Single

