/* global window */
let firstPage = true;

exports.onRouteUpdate = (state, page) => {
  if (firstPage) {
    firstPage = false;
    return;
  }

  window._paq = window._paq || [];
  window._paq.push(['setCustomUrl', state.pathname]);
  window._paq.push(['setDocumentTitle', page && page.data && page.data.title ? page.data.title : state.pathname]);
  window._paq.push(['trackPageView', page && page.data && page.data.title ? page.data.title : state.pathname]);
};
