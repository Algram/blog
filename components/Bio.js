import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import profilePic from './profile-pic.svg';

import '../scss/bio.scss';

class Bio extends React.Component {
  render() {
    return (
      <p className="bio">
        <img
          className="bio__img"
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
        />
      Written by <strong>{config.authorName}</strong> who lives in Germany and likes to code a lot.&nbsp;
        <a
          href="https://github.com/Algram"
          target="_blank"
          rel="noopener noreferrer"
        >
          You should check out my GitHub.
        </a>
      </p>
    );
  }
}

export default Bio;
