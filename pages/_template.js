import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import 'normalize.css';
import '../scss/bootstrap/bootstrap-grid.min.css';
import '../scss/global.scss';

class Template extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.object
};

export default Template;
