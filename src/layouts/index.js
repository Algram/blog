import React from 'react'
import 'normalize.css'
import '../scss/material.scss'
import '../scss/iconfont/iconfont.css'
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

export default Layout
