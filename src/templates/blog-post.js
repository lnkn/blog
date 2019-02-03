import React from 'react';
import Layout from '../components/Layout';
import './blog-post.scss';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby'
// import { Link } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl
    const { title, description, lead, date } = post.frontmatter;
    const thumbnail = post.frontmatter.image.childImageSharp.resize.src
    return (
        <Layout>
          <Metatags
            title={title}
            lead={lead}
            description={description}
            date={date}
            thumbnail={url + thumbnail}
            url={url}
            pathname={props.location.pathname}
          />
            <div>
                <div className="intro">
                    {/* <Link className="post__backbutton" to="/">←</Link> */}
                    <h1>{title}</h1>
                    <p className="lead">{lead}</p>
                    {/* <p className="date">{date}</p> */}
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                </div>
                <div
                    className="post"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </Layout>
    )
}


export default BlogPost



export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            description
            date
            lead
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

    site {
        siteMetadata {
            siteUrl
        }
    }
}
`