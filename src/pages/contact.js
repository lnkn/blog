import React from 'react'

import Single from '../components/Single'

const Contact = () => (
  <Single>
    <div className="page contact">
      <div>
        <h1>Say Hello!</h1>
        <p><strong>Feel free to give us a shout!<br/>We'd love to hear from you!</strong></p>
      </div>
      <div>
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
    </div>
  </Single>
)

export default Contact

