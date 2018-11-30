// import React from 'react'
import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.scss'


class Layout extends Component {

  render() {

    var postList
    var homeTitle 

    if (this.props.children.length > 2 ) {
      postList = "post-list-wrapper__many"
      homeTitle = "home"
    } else {
      postList = "post-list-wrapper__one"
      homeTitle = "hidehome"
    }
    console.log(this.props.children.length)
    return (
      <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Perfectly Salted' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className="wrapper">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={homeTitle}>
              <h1>The Recipe Bucket</h1>
              <h2>Exploring the joys of baking!</h2>
            </div>
            <div className={postList}>
              {this.props.children}
            </div>
            <Footer />
          </div>
        </>
      )}
    />
    );
  }
}

export default Layout
