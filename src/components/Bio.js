import React from 'react'
import profilePic from './profile-pic.svg'
import '../scss/bio.scss'

class Bio extends React.Component {
  render () {
    return (
      <p className='bio'>
        <img
          className='bio__img'
          src={profilePic}
          alt={`author ${this.props.author.name}`}
        />
          Written by <strong>{this.props.author.name}</strong> who lives in Germany and likes to code a lot.&nbsp;
        <a
          href='https://github.com/Algram'
          target='_blank'
          rel='noopener noreferrer'
        >
          You should check out his GitHub
        </a>
        &nbsp; or write him an &nbsp;
        <a href={`mailto:${this.props.author.email}`}>
        Email
        </a>
        .
      </p>
    )
  }
}

export default Bio

export const pageQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          email
        }
      }
    }
  }
`
