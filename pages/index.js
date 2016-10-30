import React, { Component } from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import access from 'safe-access';
import { config } from 'config';
import { prune, include } from 'underscore.string';
import Bio from 'components/Bio';
import Header from 'components/Header';
import { tee } from 'util/helpers';

import 'scss/index.scss';

class BlogIndex extends Component {
  render() {
    let pages = this.props.route.pages;
    const pageLinks = [];

    // Sort pages.
    pages.sort((a, b) => {
      return (new Date(a.data.date) - new Date(b.data.date));
    });

    pages.reverse();

    // Move pinned post to top
    pages = tee(pages, page => page.data.pinned === true);

    pages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path;

        // Parse teaser-text
        const body = access(page, 'data.body');
        const description = prune(body.replace(/<[^>]*>/g, ''), 300);

        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        // Styling for pinned post
        let pinned;
        if (page.data.pinned) {
          pinned = <i className="postpreview__pinned fa fa-thumb-tack" />;
        }

        pageLinks.push(
          <div className="postpreview" key={page.path}>
            <div className="postpreview__hero">
              <Link to={prefixLink(page.path)}>
                <img src={`${prefixLink(page.path)}hero.jpg`} />
              </Link>
            </div>
            <time dateTime={moment(datePublished).format('DD MMMM YYYY')}>
              {moment(datePublished).format('DD MMMM YYYY')}
            </time>
            <span className="postpreview__category">{ category }</span>
            {pinned}
            <h2><Link to={prefixLink(page.path)}> { title } </Link></h2>
            <p className="postpreview__content">
              <span dangerouslySetInnerHTML={{ __html: description }} />
              <Link to={prefixLink(page.path)}>more »</Link>
            </p>
          </div>
        );
      }
    });
    return (
      <div id="startpage">
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: 'keywords', content: 'blog, articles, coding, design, 3d printing, raspberry pi, development, linux' },
            { name: 'robots', content: 'index, follow' }
          ]}
        />
        <div>
          <Header />
          {pageLinks}
        </div>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;
