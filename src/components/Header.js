import React, { Component } from 'react'
import profilePic from './profile-pic.svg'

import '../scss/header.scss'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header__backdrop' />
        <h1 className='header__headline'>{ this.props.title }</h1>
        <p>
          <img
            className='header__me'
            src={profilePic}
            alt={`author ${this.props.author.name}`}
          />
        Hi I'm <strong>{this.props.author.name}</strong> and I love to code.&nbsp;
          <a href={`mailto:${this.props.author.email}`}>
            Write me
          </a>
          &nbsp;if you have any questions!
          <span className='header__links'>
            <a className='link link__github' href='https://github.com/Algram' rel='noopener noreferrer' target='_blank'>
              <i className='icon-github' />
            </a>
            <a className='link link__feed' href='/feed.xml' rel='noopener noreferrer' target='_blank'>
              <i className='icon-rss' />
            </a>
            {/* <a className=" link link__donate" href="#" rel="noopener noreferrer" target="_blank">
              <i className="icon-coffee" />
            </a> */}
          </span>
        </p>
      </div>
    )
  }
}

export default Header

export const pageQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        author {
          name
          email
        }
      }
    }
  }
`
