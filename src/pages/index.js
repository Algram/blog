import React, { Component } from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import access from 'safe-access'
import { prune, include } from 'underscore.string'
import Header from '../components/Header'
import { tee } from '../util/helpers'

import '../scss/index.scss'

class BlogIndex extends Component {
  render () {
    const metadata = this.props.data.site.siteMetadata
    let pages = get(this, 'props.data.allMarkdownRemark.edges')
    const pageLinks = []

    // Sort pages.
    pages.sort((a, b) => (new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date)))

    pages.reverse()

    // Move pinned post to top
    pages = tee(pages, page => page.node.frontmatter.pinned === true)

//         access(page, 'file.ext') === 'md' &&
    pages.forEach((pageGraphQl) => {
      const page = pageGraphQl.node.frontmatter
      const pageContent = pageGraphQl.node.html

      if (
        !include(page.path, '/404') &&
        moment(page.date).isBefore(new Date())
      ) {
        // Parse teaser-text
        const description = prune(pageContent.replace(/<[^>]*>/g, ''), 300)

        const datePublished = access(page, 'data.date')
        const category = access(page, 'data.category')

        // Styling for pinned post
        let pinned
        if (page.pinned) {
          pinned = <i className='postpreview__pinned fa fa-thumb-tack' />
        }

        pageLinks.push(
          <div className='postpreview' key={page.path}>
            <div className='postpreview__hero'>
              <Link to={page.path}>
                <img alt='post-hero' src={`${page.path}${access(page, 'hero.base') || 'hero.jpg'}`} />
              </Link>
            </div>
            <time dateTime={moment(datePublished).format('DD-MMMM-YYYY')}>
              {moment(datePublished).format('DD MMMM YYYY')}
            </time>
            <span className='postpreview__category'>{ category }</span>
            {pinned}
            <h2><Link to={page.path}> { page.title } </Link></h2>
            <p className='postpreview__content'>
              <span dangerouslySetInnerHTML={{ __html: description }} />
              <Link to={page.path}>more »</Link>
            </p>
          </div>
        )
      }
    })
    return (
      <div id='startpage'>
        <Helmet
          title={get('node.frontmatter.title')}
          meta={[
            { name: 'keywords', content: 'blog, articles, coding, design, 3d printing, raspberry pi, development, linux' },
            { name: 'robots', content: 'index, follow' }
          ]}
        />
        <div>
          <Header
            title={metadata.title}
            author={metadata.author}
          />
          {pageLinks}
        </div>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
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
          frontmatter {
            path
            date
            title
            hero {
              base
            }
          }
        }
      }
    }
  }
`
