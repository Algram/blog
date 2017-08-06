import React, { Component } from 'react'
import Comment from './Comment'
import { isScrolledIntoView } from '../../util/helpers'
import '../../scss/comments.scss'
import mock from './comments.json'

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
        this.setState({ comments: json, loading: false })
      })
  }

  componentDidMount () {
    const commentsList = document.querySelector('.comments.comments__list')

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
        <div>LOADING</div>
      )
    }

    return (
      <div className='comments comments__list'>
        <button>Comment</button><br /><br />
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
