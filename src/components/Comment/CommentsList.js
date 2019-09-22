import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { colors, media } from '../../utils/style'
import { isScrolledIntoView } from '../../utils/helpers'
import { Square as SquareLoader } from '../Loader'
import Comment from './Comment'

const Header = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 15px;

  @media (${media.phone}) {
    flex-direction: column;
  }
`

const Button = styled.a`
  padding: 12px;
  border: none;
  background: ${colors.colorAccent};
  color: ${colors.colorTextLight};
  text-decoration: none;

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
  constructor() {
    super()
    this.state = {
      loading: false,
      comments: [],
    }

    this.scrollHandler = this.scrollHandler.bind(this)
  }

  loadComments() {
    this.setState({ loading: true })
    window
      .fetch(
        `https://api.github.com/repos/algram/blog-comments/issues/${this.props.id}/comments`
      )
      .then(response => response.json())
      .then(json => {
        this.setState({ comments: json.reverse(), loading: false })
      })
      .catch(err => {
        console.error(err)
        // TODO handle error and show github issue link as alternative
      })
  }

  scrollHandler() {
    const commentsList = document.querySelector('.js-comments')

    if (
      isScrolledIntoView(commentsList) &&
      this.state.comments.length === 0 &&
      !this.state.loading
    ) {
      this.loadComments()
      document.removeEventListener('scroll', this.scrollHandler)
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler)
  }

  render() {
    if (this.state.loading) {
      return <SquareLoader />
    }

    return (
      <div className="js-comments">
        <Header>
          <H2>Comments</H2>
          <Button
            href={`https://github.com/Algram/blog-comments/issues/${this.props.id}#new_comment_field`}
            target="_blank"
          >
            Leave a Comment over at GitHub
          </Button>
        </Header>
        <div>
          {!this.state.comments.length && (
            <span>No comments yet. Change that!</span>
          )}
          {this.state.comments.map(comment => (
            <Comment data={comment} />
          ))}
        </div>
      </div>
    )
  }
}

export default CommentsList
