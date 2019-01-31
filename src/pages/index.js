import React from 'react'
import { Link, graphql } from 'gatsby'
import './post-list.scss';
import Layout from '../components/layout'
import Img from 'gatsby-image';
// import Home from '../components/Home'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <div>
		 
      <Layout>
	  	{/* <Home/> */}
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} key={i} className="post-list">
                {/* <img src={node.fontmatter.image.childImgage.sharp}></img> */}
                {/* <Img fluid={node.frontmatter.image.childImageSharp.fluid} /> */}
                <div className="post-list__text">
                    {/* <div className="post-list__type"><span>Recipe</span></div> */}
                  	<h1 className="post-list__title">{node.frontmatter.title}
						<br/>
						<span>Read More →</span>
                  	</h1>
					{/* <span>{node.frontmatter.date}</span> */}
					{/* <p>{node.excerpt}</p> */}
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
