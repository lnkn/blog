import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div className="page contact">
      <Link className="post__backbutton" to="/">←</Link>
      <h1>Contact</h1>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
        <label className="inp">
          <input type="text" id="inp" name="name" placeholder="&nbsp;" />
          <span className="label">Name</span>
          <span className="border"></span>
        </label>
        <br/>
        <br/>
        <label className="inp">
          <input type="email" id="inp" name="email" placeholder="&nbsp;" />
          <span className="label">Email</span>
          <span className="border"></span>
        </label>
        <br/>
        <br/>
        <label className="inp">
          <input type="text" id="inp" name="Message" placeholder="&nbsp;" />
          <span className="label">Message</span>
          <span className="border"></span>
        </label>
        <p>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default Contact

