import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'
import Home from '../components/Home'
import Img from 'gatsby-image';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <div>
    <Home></Home>
      <Layout>
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} key={i} className="post-list"
          >
                {/* <img src={node.fontmatter.image.childImgage.sharp}></img> */}
                {/* <Img fluid={node.frontmatter.image.childImageSharp.fluid} /> */}
                <div className="post-list__text">
                  <h1>{node.frontmatter.title}</h1>
                  {/* <span>{node.frontmatter.date}</span> */}
                  {/* <p>{node.excerpt}</p> */}
                  <span className="readmore">Read More →</span>
                </div>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} 
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  />
            </Link>
          ))}
      </Layout>
      </div>
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
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxHeight: 460) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
