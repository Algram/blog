import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { colors } from '../../util/style-utils'
import { isScrolledIntoView } from '../../util/helpers'
import Loader from '../Loader'
import Comment from './Comment'
import mock from './comments.json'

const Header = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`

const Button = styled.button`
  flex-grow: 0;
  height: 40px;
  padding: 10px;
  border: none;
  background: ${colors.colorAccent};
  color: ${colors.colorTextLight};

  &:hover {
    cursor: pointer;
    background: ${darken(0.05, colors.colorAccent)};
  }
`

const H2 = styled.h2`
  margin-top: 0;
  flex-grow: 1;
`

class CommentsList extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      comments: mock
    }
  }

  loadComments () {
    this.setState({ loading: true })
    window.fetch('https://api.github.com/repos/dwilliamson/donw.io/issues/1/comments')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ comments: json.reverse(), loading: false })
      })
  }

  componentDidMount () {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
    const commentsList = document.querySelector('.js-comments')

    document.addEventListener('scroll', () => {
      if (isScrolledIntoView(commentsList) &&
          this.state.comments.length === 1 &&
          !this.state.loading
      ) {
        // this.loadComments()
      }
    })
  }

  render () {
    if (this.state.loading) {
      return (
        <Loader />
      )
    }

    return (
      <div className='js-comments'>
        <Header>
          <H2>Comments</H2>
          <Button>Leave a Comment over at GitHub</Button>
        </Header>
        <div>
          {this.state.comments.map(comment =>
            <Comment data={comment} />
          )}
        </div>
      </div>
    )
  }
}

export default CommentsList
