/* global window */
let firstPage = true

exports.onRouteUpdate = (state) => {
  if (firstPage) {
    firstPage = false
    return
  }

  window._paq = window._paq || []
  window._paq.push(['setCustomUrl', state.pathname])
  window._paq.push(['setDocumentTitle', document.title || state.pathname])
  window._paq.push(['trackPageView'])
}
