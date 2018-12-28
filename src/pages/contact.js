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
        <label class="inp">
          <input type="email" id="inp" name="email" placeholder="&nbsp;" />
          <span class="label">Email</span>
          <span class="border"></span>
        </label>
        <label class="inp">
          <input type="email" id="inp" name="Message" placeholder="&nbsp;" />
          <span class="label">Message</span>
          <span class="border"></span>
        </label>
        <p>
          <br/>
          <button type="submit">Send</button>
        </p>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact


{/* <p>
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
        </p> */}