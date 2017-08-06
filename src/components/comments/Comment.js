import React from 'react'
import styled from 'styled-components'
import marked from 'marked'
import moment from 'moment'
import { colors } from '../../util/style-utils'

const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  background: ${colors.colorBackgroundLight};
`

const Comment = ({ data }) => {
  return (
    <Wrapper>
      <div className='comment__avatar'>
        <img src={data.user.avatar_url} />
      </div>
      <div className='comment__content'>
        <div className='author'>{data.user.login}</div>
        <span className='text' dangerouslySetInnerHTML={{ __html: marked(data.body) }} />
      </div>
      <span className='comment__date'>{moment(data.created_at).fromNow()}</span>
    </Wrapper>
  )
}

export default Comment
