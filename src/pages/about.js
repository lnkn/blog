import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <div className="page about">
    <Link className="post__backbutton" to="/">←</Link>
    <h1>About</h1>
    <div className="about_main">
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>‍
    </div>
    <p>Want to get in touch? </p>
    <Link to="Contact">Contact Zoe</Link>
    </div>
  </Layout>
)

export default About
