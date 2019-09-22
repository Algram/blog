import React from 'react'

import profilePic from './profile-pic.svg'
import '../scss/header.scss'

export const Header = ({ title, author }) => (
  <div className="header">
    <div className="header__backdrop" />
    <h1 className="header__headline">{title}</h1>
    <p>
      <img
        className="header__me"
        src={profilePic}
        alt={`author ${author.name}`}
      />
      Hi I'm <strong>{author.name}</strong> and I love to code.&nbsp;
      <a href={`mailto:${author.email}`}>Write me</a>
      &nbsp;if you have any questions!
      <span className="header__links">
        <a
          className="link link__github"
          href="https://github.com/Algram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="icon-github" />
        </a>
        <a
          className="link link__feed"
          href="/rss.xml"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="icon-rss" />
        </a>
        {/* <a className=" link link__donate" href="#" rel="noopener noreferrer" target="_blank">
              <i className="icon-coffee" />
            </a> */}
      </span>
    </p>
  </div>
)
