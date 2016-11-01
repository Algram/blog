import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import 'normalize.css';
import 'scss/font-awesome/font-awesome.css';
import 'scss/global.scss';

class Template extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
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
