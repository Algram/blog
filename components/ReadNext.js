import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/find';

import '../scss/suggestions.scss';

class ReadNext extends React.Component {
  render() {
    const { pages, post } = this.props;
    let { next } = post;

    // find similar post by category
    if (!next) {
      const similarArray = pages.filter(p =>
        (p.data.category === post.category) &&
        (p.data.body !== post.body)
      );

      next = similarArray[Math.floor(Math.random() * similarArray.length)].path;
    }

    let nextPost;
    if (next) {
      nextPost = find(pages, page =>
        includes(page.path, next)
      );
    }
    if (!nextPost) {
      return React.createElement('noscript', null);
    } else {
      nextPost = find(pages, page =>
        includes(page.path, next.slice(1, -1))
      );
      // Create pruned version of the body.
      const html = nextPost.data.body;
      const body = prune(html.replace(/<[^>]*>/g, ''), 200);

      return (
        <div className="suggestions">
          <Link
            to={{
              pathname: prefixLink(nextPost.path),
              query: {
                next: true
              }
            }}
          >
            <h6>
              Read this next
            </h6>
            <h3>
              {nextPost.data.title}
            </h3>
            <p>{body}</p>
          </Link>
        </div>
      );
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
};

export default ReadNext;
