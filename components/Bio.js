import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import profilePic from './profile-pic.jpg';

class Bio extends React.Component {
  render() {
    return (null
      /*<p>
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in San Francisco building useful things. <a href="https://twitter.com/kylemathews">You should follow him on Twitter</a>
      </p>*/
    );
  }
}

export default Bio;
