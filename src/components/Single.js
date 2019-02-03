import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import './layout.scss'
class Single extends Component {

  render() {
    return (
      <StaticQuery
      query={graphql`
        query SiteTitleQuery2 {
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
            <div>
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

export default Single
