import React from 'react';
import { config } from 'config';
import profilePic from './profile-pic.svg';

import 'scss/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__headline">{ config.blogTitle }</h1>
        <img
          className="header__me"
          src={profilePic}
          alt={`author ${config.authorName}`}
        />
        <div className="header__links">
          <a className="link link__github" href="https://github.com/Algram" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github fa-2x" />
          </a>
          <a className="link link__feed" href="/feed.xml" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-rss fa-2x" />
          </a>
          <a className=" link link__donate" href="#" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-coffee fa-2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
