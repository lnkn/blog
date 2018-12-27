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
          <p>Zoe Kuhn is a multi-disciplinary, product-focused design and technology leader. He joined Pioneer Square Labs in its infancy in December 2015 and has worked on brand identity, user experience, and product development across the studio's spinouts. He also spearheaded the early creation of TraceMe, where he currently sits as a Board Observer.</p>
          
          <p>Before PSL, David co-founded a boutique design and development studio that focused on digital product creation for brands such as Activision, AT&amp;T, Best Buy, BlackBerry, Jason Mraz, P&amp;G, Space Needle, The Great, T-Mobile, and Toyota.</p>
          
          <p>David studied Visual Communication Design and Music Composition at the University of Washington. In his final year of school, Universal Records / Almo Sounds signed his first startup (his band) to a recording contract. &nbsp;Additionally, Famous Music signed him as a songwriter to a publishing deal. His work has been featured widely in television and film.</p>
        
          <p>David lives in Seattle with his wife Ailsa, two children Stella and Marlowe and two cats, Willy and Floyd.</p>
          
        </div>‍
    </div>
    <p>Want to get in touch? </p>
    <Link to="Contact">Contact Zoe</Link>
    </div>
  </Layout>
)

export default About
