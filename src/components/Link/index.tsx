import styled from 'styled-components'

import { media, colors } from '../../utils/style'

export const IconLink = styled.a`
  padding-left: 20px;
  outline: 0;
  text-decoration: none;
  color: ${colors.colorTextLight};

  @media (${media.phone}) {
    color: ${colors.colorText};
  }
`
