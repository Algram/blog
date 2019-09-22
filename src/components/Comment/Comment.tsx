import React from 'react'
import styled from 'styled-components'
import marked from 'marked'
import moment from 'moment'
import { colors, media } from '../../utils/style'

const Wrapper = styled.div`
  margin-bottom: 15px;
  display: flex;

  // Reset the full width blocks from normal markdown
  && pre {
    width: 100%;
    margin: 15px 0;
  }

  & a {
    word-wrap: break-word;
    word-break: break-all;
  }

  & p {
    margin: 10px 0;

    &:last-of-type {
      margin: 10px 0 0 0;
    }
  }
`
const Avatar = styled.img`
  max-width: 60px;
  height: 60px;
  flex-shrink: 0;
  object-fit: contain;

  @media (${media.phone}) {
    display: none;
  }
`

const AvatarInline = styled(Avatar)`
  display: none;

  @media (${media.phone}) {
    display: inline;
    max-width: 40px;
    height: 40px;
  }
`

const ContentWrapper = styled.div`
  flex: 1;
  padding: 15px;
  background: ${colors.colorBackgroundLight};
`

const Author = styled.span`
  color: ${colors.colorTextLighter};
  font-size: 0.9em;

  @media (${media.phone}) {
    margin-left: 15px;
    vertical-align: 25px;
  }
`

const Date = styled.span`
  color: ${colors.colorTextLighter};
  float: right;
  font-size: 0.9em;
`

export default ({ data }) => (
  <Wrapper>
    <Avatar src={data.user.avatar_url} />
    <ContentWrapper>
      <AvatarInline src={data.user.avatar_url} />
      <Author>{data.user.login}</Author>
      <Date>{moment(data.created_at).fromNow()}</Date>
      <span dangerouslySetInnerHTML={{ __html: marked(data.body) }} />
    </ContentWrapper>
  </Wrapper>
)
