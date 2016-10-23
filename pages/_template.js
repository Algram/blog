import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

class Template extends Component {
  render() {
    const { children } = this.props;
    return (
      <div id="blog">
        {children}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
};

export default Template;
