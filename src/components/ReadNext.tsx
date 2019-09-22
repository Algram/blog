import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { H3, H4 } from '../components/Headline'
import { colors } from '../utils/style'

const Wrapper = styled.div`
  background: ${colors.colorBackgroundDark};
  color: ${colors.colorTextLight};
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const StyledP = styled.p`
  margin: 0;
`

export const ReadNext = ({ post }) => (
  <Wrapper>
    <StyledLink to={post.frontmatter.path}>
      <H4 as="div">Read this next</H4>
      <H3>{post.frontmatter.title}</H3>
      <StyledP>{post.excerpt}</StyledP>
    </StyledLink>
  </Wrapper>
)
