function tee (a, fn) {
  const nonMatches = []
  const matches = a.filter((e, i) => {
    const match = fn(e, i)
    if (!match) nonMatches.push(e)
    return match
  })
  return matches.concat(nonMatches)
}

module.exports = {
  tee
}
