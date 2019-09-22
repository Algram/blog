import styled from 'styled-components'

import { media, colors } from '../../utils/style'

export const H1 = styled.h1`
  margin: 0;
  padding: 20px 0 10px;
  text-align: center;

  @media (${media.phone}) {
    font-size: 1.4em;
  }
`
export const H3 = styled.h3`
  line-height: 1.4em;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const H4 = styled.h4`
  color: ${colors.colorAccent};
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
`
