exports.onRouteUpdate = (state, page) => {
  window._paq = window._paq || [];
  window._paq.push(['setCustomUrl', state.pathname]);
  window._paq.push(['setDocumentTitle', page && page.data && page.data.title ? page.data.title : state.pathname]);
  window._paq.push(['trackPageView']);
};
