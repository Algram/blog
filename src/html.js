import React from 'react'
import Helmet from 'react-helmet'

export default class HTML extends React.Component {
  render () {
    const head = Helmet.rewind()

    let css
    let piwikTracking
    let piwikTrackingNoJS
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!../public/styles.css') }} /> // eslint-disable-line
      // css = <link rel='stylesheet' type='text/css' href={`${__PATH_PREFIX__}/styles.css`} />
      piwikTracking = (
        <script type='text/javascript' dangerouslySetInnerHTML={{ __html: `
          <!-- Piwik -->
              var _paq = _paq || [];
              _paq.push(["setDomains", ["*.blog.rphl.io"]]);
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['enableHeartBeatTimer']);
              (function() {
                var u="//rphl.io/piwik/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
              })();
            <!-- End Piwik Code -->`
        }}
        />
      )

      piwikTrackingNoJS = (
        <noscript>
          <p>
            <img src='//rphl.io/piwik/piwik.php?idsite=1' style={{ border: 0 }} alt='' />
          </p>
        </noscript>
      )
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          {this.props.headComponents}
        </head>
        <body>
          <div id='___gatsby' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          {piwikTracking}
          {piwikTrackingNoJS}
        </body>
      </html>
    )
  }
}
