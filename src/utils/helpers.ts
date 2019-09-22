export const isScrolledIntoView = el => {
  const { top, bottom } = el.getBoundingClientRect()
  return top < window.innerHeight && bottom >= 0
}
