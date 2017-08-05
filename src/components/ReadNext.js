import React from 'react'
import Link from 'gatsby-link'
import '../scss/suggestions.scss'

class ReadNext extends React.Component {
  render () {
    let nextPost = this.props.post

    return (
      <div className='suggestions'>
        <Link to={nextPost.frontmatter.path}>
          <h6>
            Read this next
          </h6>
          <h3>
            {nextPost.frontmatter.title}
          </h3>
          <p>{nextPost.excerpt}</p>
        </Link>
      </div>
    )
  }
}

export default ReadNext
