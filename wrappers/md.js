import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import DisqusThread from 'react-disqus-thread';
import ReadNext from '../components/ReadNext';
import { config } from 'config';
import Bio from 'components/Bio';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'scss/post.scss';
import 'scss/material.scss';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div className="post">
        <Link className="navHome" to={prefixLink('/')}>
          All Articles
        </Link>
        <div className="markdown">
          <Helmet
            title={post.title}
            meta={[
              { name: 'keywords', content: post.keywords },
              { name: 'robots', content: 'index, follow' }
            ]}
          />
          <h1>{post.title}</h1>
          <div className="post__content" dangerouslySetInnerHTML={{ __html: post.body }} />
          <em className="post__date">
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr />
          <Bio />
          <hr />
          <ReadNext post={post} pages={route.pages} />
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

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
