function tee (a, fn) {
  const nonMatches = []
  const matches = a.filter((e, i) => {
    const match = fn(e, i)
    if (!match) nonMatches.push(e)
    return match
  })
  return matches.concat(nonMatches)
}

function isScrolledIntoView (el) {
  const elemTop = el.getBoundingClientRect().top
  const elemBottom = el.getBoundingClientRect().bottom
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0
  return isVisible
}

module.exports = {
  tee,
  isScrolledIntoView
}
