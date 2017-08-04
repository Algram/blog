import React from 'react'
import 'normalize.css'
import '../scss/material.scss'
import '../scss/font-awesome/font-awesome.css'
import '../scss/global.scss'

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className='container'>
        {children()}
      </div>
    )
  }
}

Layout.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Layout
