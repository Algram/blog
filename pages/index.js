import React, { Component } from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import access from 'safe-access';
import { config } from 'config';
import include from 'underscore.string/include';
import Bio from 'components/Bio';

class BlogIndex extends Component {
  render() {
    const pageLinks = [];
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, page =>
      access(page, 'data.date')
    ).reverse();

    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path;

        // Parse teaser-text
        const body = access(page, 'data.body');
        const bodyFirstPStart = body.indexOf('<p>');
        const bodyFirstPEnd = body.indexOf('</p>') - bodyFirstPStart;
        const description = body.substring(bodyFirstPStart + 3, bodyFirstPEnd);

        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        pageLinks.push(
          <div className="post" key={page.path}>
            <time dateTime={moment(datePublished).format('MMMM D, YYYY')}>
              {moment(datePublished).format('MMMM YYYY')}
            </time>
            <span className="post__category">{ category }</span>
            <h2><Link to={prefixLink(page.path)}> { title } </Link></h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        );
      }
    });
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            { name: 'description', content: 'Sample blog' },
            { name: 'keywords', content: 'blog, articles' }
          ]}
        />
        <Bio />
        <ul>
          {pageLinks}
        </ul>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;
