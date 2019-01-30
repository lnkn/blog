import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.scss'

class Layout extends Component {

  render() {

    var postList

    if (this.props.children.length > 2 ) {
      postList = "post-list-wrapper__many"
    } else {
      postList = "post-list-wrapper__one"
    }
    // console.log(this.props.children.length)
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
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="wrapper">
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
