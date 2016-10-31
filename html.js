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

    let css, piwikTracking, piwikTrackingNoJS;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
      piwikTracking = <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        <!-- Piwik -->
            var _paq = _paq || [];
            _paq.push(["setDomains", ["*.blog.rphl.io"]]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//rphl.io/piwik/";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();
          <!-- End Piwik Code -->`
        }} />

      piwikTrackingNoJS = <noscript><p><img src="//rphl.io/piwik/piwik.php?idsite=1" style={{ border: 0 }} alt="" /></p></noscript>
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          {piwikTracking}
          {piwikTrackingNoJS}
        </body>
      </html>
    );
  }
});
