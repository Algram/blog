import React from 'react'
import moment from 'moment'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import ReadNext from '../components/ReadNext'
import CommentsList from '../components/comments/CommentsList'
import { Bio } from '../components/Bio'
import Link from 'gatsby-link'
import { Default as DefaultLayout } from '../components/Layout'
import '../scss/post.scss'
import '../scss/material.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const context = this.props.pageContext

    return (
      <DefaultLayout>
        <div className="post">
          <Link className="navHome" to={`/#${post.frontmatter.title}`}>
            All Articles
          </Link>
          <div className="markdown">
            <Helmet
              title={post.frontmatter.title}
              meta={[
                { name: 'keywords', content: post.frontmatter.keywords },
                { name: 'robots', content: 'index, follow' },
              ]}
            />
            <h1>{post.frontmatter.title}</h1>
            <div
              className="post__content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <em className="post__date">
              Posted {moment(post.date).format('MMMM D, YYYY')}
            </em>
            <hr />
            <Bio
              author={{
                name: 'Raphael',
                email: 'aliasgram@gmail.com',
              }}
            />
            <hr />
            <ReadNext post={context.next} />
            {post.frontmatter.githubIssue && <hr />}
            {post.frontmatter.githubIssue && (
              <CommentsList id={post.frontmatter.githubIssue} />
            )}
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        githubIssue
      }
    }
  }
`
