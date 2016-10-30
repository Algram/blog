import React from 'react';
import { config } from 'config';
import profilePic from './profile-pic.svg';
import Bio from 'components/Bio';

import 'scss/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__backdrop" />
        <h1 className="header__headline">{ config.blogTitle }</h1>
        <p>
          <img
            className="header__me"
            src={profilePic}
            alt={`author ${config.authorName}`}
          />
        Hi I'm <strong>{config.authorName}</strong> and I love to code.&nbsp;
          <a href={`mailto:${config.authorEmail}`}>
            Write me
          </a>
          &nbsp; if you have any questions!
          <div className="header__links">
            <a className="link link__github" href="https://github.com/Algram" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" />
            </a>
            <a className="link link__feed" href="/feed.xml" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-rss" />
            </a>
            {/* <a className=" link link__donate" href="#" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-coffee" />
            </a>*/}
          </div>
        </p>
      </div>
    );
  }
}

export default Header;
