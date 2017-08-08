import React, { Component } from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { prune } from 'underscore.string'
import Header from '../components/Header'
import { tee } from '../util/helpers'
import '../scss/index.scss'

class BlogIndex extends Component {
  render () {
    const pageLinks = []
    const siteMetadata = this.props.data.site.siteMetadata
    let pages = this.props.data.allMarkdownRemark.edges

    // Move pinned post to top
    pages = tee(pages, page => page.node.frontmatter.pinned === true)

    pages.forEach((page) => {
      const pageMetadata = page.node.frontmatter

      if (
        pageMetadata.layout !== 'post' ||
        !moment(pageMetadata.date).isBefore(new Date())
      ) return

      const pageContent = page.node.html
      const pageDescription = prune(pageContent.replace(/<[^>]*>/g, ''), 300)
      const pageHero = get(pageMetadata, 'hero.childImageSharp.resize.src')

      // Styling for pinned post
      let pinned
      if (pageMetadata.pinned) {
        pinned = <i className='postpreview__pinned icon-thumb-tack' />
      }

      pageLinks.push(
        <div className='postpreview' id={pageMetadata.title} key={pageMetadata.path}>
          <div className='postpreview__hero'>
            <Link to={pageMetadata.path}>
              <img alt='post-hero' src={`${__PATH_PREFIX__}${pageHero}` || 'Default Image'} />
            </Link>
          </div>
          <time dateTime={moment(pageMetadata.date).format('DD-MMMM-YYYY')}>
            {moment(pageMetadata.date).format('DD MMMM YYYY')}
          </time>
          <span className='postpreview__category'>{ pageMetadata.category }</span>
          {pinned}
          <h2><Link to={pageMetadata.path}> { pageMetadata.title } </Link></h2>
          <p className='postpreview__content'>
            <span dangerouslySetInnerHTML={{ __html: pageDescription }} />
            <Link to={pageMetadata.path}>more »</Link>
          </p>
        </div>
      )
    })

    return (
      <div id='startpage'>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'keywords', content: 'blog, articles, coding, design, 3d printing, raspberry pi, development, linux' },
            { name: 'robots', content: 'index, follow' }
          ]}
        />
        <div>
          <Header
            title={siteMetadata.title}
            author={siteMetadata.author}
          />
          {pageLinks}
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author {
          name
          email
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          fileAbsolutePath
          frontmatter {
            layout
            path
            date
            category
            title
            pinned
            hero {
              childImageSharp {
                resize(width: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
