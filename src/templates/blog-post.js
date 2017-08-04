import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import DisqusThread from 'react-disqus-thread';
import ReadNext from '../components/ReadNext';
import Bio from '../components/Bio';
import Link from 'gatsby-link';

import '../scss/post.scss';
import '../scss/material.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div className="post">
        <Link className="navHome" to={'/'}>
          All Articles
        </Link>
        <div className="markdown">
          <Helmet
            title={post.frontmatter.title}
            meta={[
              { name: 'keywords', content: post.keywords },
              { name: 'robots', content: 'index, follow' }
            ]}
          />
          <h1>{post.frontmatter.title}</h1>
          <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <em className="post__date">
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr />
          <Bio
            author={{
              name: 'Raphael',
              email: 'aliasgram@gmail.com'
            }}
          />
          <hr />
          { /* <ReadNext post={post} pages={'/'} /> */ }
          {/* <DisqusThread
            shortname="rphl-io"
            identifier="rphl-io"
            title={post.title}
            url={`https://blog.rphl.io${this.props.location.pathname}`}
          />*/}
        </div>
      </div>
    );
  }
}

BlogPostTemplate.propTypes = {
  route: React.PropTypes.object
};

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }
}
`
