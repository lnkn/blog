import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'
import Img from 'gatsby-image';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} key={i} className="post-list" style={ { backgroundImage: `url(require("images/img.svg"))` } }>
              {/* <img src={node.fontmatter.image.childImgage.sharp}></img> */}
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
              <h1>{node.frontmatter.title}</h1>
              {/* <span>{node.frontmatter.date}</span> */}
              {/* <p>{node.excerpt}</p> */}
              <span className="readmore">Read More →</span>
          </Link>

        ))}
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
