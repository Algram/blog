import React from 'react';
import moment from 'moment';
import Helmet from "react-helmet";
import ReadNext from '../components/ReadNext';
import { config } from 'config';
import Bio from 'components/Bio';

import '../css/zenburn.css';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em>
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper;
