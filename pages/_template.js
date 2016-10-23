import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import 'normalize.css';
import '../scss/global.scss';

class Template extends Component {
  render() {
    const { children } = this.props;
    return (children);
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
};

export default Template;
