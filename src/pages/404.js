import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="four-o-four">
    <h1>404</h1>
    <h3>Uh oh! Page not found!</h3>
    <Link className="" to="/">
        Go Back to PerfectlySalted.co
    </Link>
    </div>
  </Layout>
)

export default NotFoundPage
