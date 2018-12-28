import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div className="page contact">
      <Link className="post__backbutton" to="/">←</Link>
      <h1>Contact</h1>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
