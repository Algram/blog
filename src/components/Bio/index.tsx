import React from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

import profilePic from '../../assets/profile-pic.svg'

const Wrapper = styled.p`
  ${clearFix()}
`

const BioImage = styled.img`
  float: left;
  padding-right: 15px;
  width: 100px;
`

export const Bio = ({ author }) => (
  <Wrapper>
    <BioImage src={profilePic} alt={`author ${author.name}`} />
    Written by <strong>{author.name}</strong> who lives in Germany and likes to
    code a lot.&nbsp;
    <a
      href="https://github.com/Algram"
      target="_blank"
      rel="noopener noreferrer"
    >
      You should check out his GitHub
    </a>
    &nbsp; or write him an &nbsp;
    <a href={`mailto:${author.email}`}>Email</a>.
  </Wrapper>
)
