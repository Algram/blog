import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();


module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string
  },
  render() {
    const { body } = this.props;
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        </body>
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </html>
    );
  }
});
