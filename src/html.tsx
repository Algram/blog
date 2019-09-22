import React from 'react'

const HTML = ({ headComponents, body, postBodyComponents }) => {
  const piwikTracking = (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
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
          <!-- End Piwik Code -->
        `,
      }}
    />
  )

  const piwikTrackingNoJS = (
    <noscript>
      <p>
        <img
          src="//rphl.io/piwik/piwik.php?idsite=1"
          style={{ border: 0 }}
          alt=""
        />
      </p>
    </noscript>
  )

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        {process.env.NODE_ENV === 'production' && piwikTracking}
        {process.env.NODE_ENV === 'production' && piwikTrackingNoJS}
      </body>
    </html>
  )
}

export default HTML
