import { css } from 'styled-components'

const sizes = {
  desktop: 1100,
  tablet: 768,
  phone: 480,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const colors = {
  colorBackground: '#ffffff',
  colorBackgroundDark: '#2d3642',
  colorBackgroundLighter: '#e3e3e3',
  colorBackgroundLight: '#f2f2f2',
  colorText: '#333333',
  colorTextLighter: '#4e4e4e',
  colorTextLight: '#ffffff',
  colorLink: '#4a79df',
  colorDonate: '#e3b93c',
  colorAccent: '#bb354c',
  colorInfo: '#61bde2',
  colorDanger: '#bb354c',
}
