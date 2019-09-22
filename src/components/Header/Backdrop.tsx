import styled from 'styled-components'

import { media, colors } from '../../utils/style'

export const Backdrop = styled.div`
  background: ${colors.colorBackgroundDark};
  height: 350px;
  margin-bottom: -350px;
  margin-left: calc(-50vw + 50%);
  text-align: center;
  width: 100vw;

  @media (${media.phone}) {
    background: ${colors.colorBackground};
  }
`
