import React from 'react';
import { config } from 'config';

import '../scss/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__headline">{ config.blogTitle }</h1>
      </div>
    );
  }
}

export default Header;
