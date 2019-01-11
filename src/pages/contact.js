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
        <label class="inp">
          <input type="text" id="inp" name="name" placeholder="&nbsp;" />
          <span class="label">Name</span>
          <span class="border"></span>
        </label>
        <br/>
        <br/>
        <label class="inp">
          <input type="email" id="inp" name="email" placeholder="&nbsp;" />
          <span class="label">Email</span>
          <span class="border"></span>
        </label>
        <br/>
        <br/>
        <label class="inp">
          <input type="text" id="inp" name="Message" placeholder="&nbsp;" />
          <span class="label">Message</span>
          <span class="border"></span>
        </label>
        <p>
          <br/>
          <button type="submit">Send to Zoe</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default Contact

