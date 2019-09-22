import React from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

import profilePic from '../../assets/profile-pic.svg'
import { H1 } from '../../components/Headline'
import { IconLink } from '../../components/Link'
import { media, colors } from '../../utils/style'

import { Backdrop } from './Backdrop'

const Wrapper = styled.div`
  color: ${colors.colorTextLight};

  @media (${media.phone}) {
    color: ${colors.colorText};
  }

  ${clearFix()}
`

const HeaderImage = styled.img`
  float: left;
  margin-left: -5px;
  padding-right: 15px;
  width: 120px;
`

const IconWrapper = styled.div`
  display: inline-block;
  float: right;
  font-size: 1.4em;
  padding-bottom: 12px;
`

export const Header = ({ title, author }) => (
  <Wrapper>
    <Backdrop />
    <H1>{title}</H1>
    <p>
      <HeaderImage src={profilePic} alt={`author ${author.name}`} />
      Hi I'm <strong>{author.name}</strong> and I love to code.&nbsp;
      <a href={`mailto:${author.email}`}>Write me</a>
      &nbsp;if you have any questions!
      <IconWrapper>
        <IconLink
          href="https://github.com/Algram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="icon-github" />
        </IconLink>
        <IconLink href="/rss.xml" rel="noopener noreferrer" target="_blank">
          <i className="icon-rss" />
        </IconLink>
      </IconWrapper>
    </p>
  </Wrapper>
)
