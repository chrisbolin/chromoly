import React from 'react'
import Header from '../components/header'

module.exports = React.createClass({
  render () {
    const showHeader = (this.props.location.pathname !== "/");
    return (
      <div>
        {showHeader ? <Header/> : null}
        {this.props.children}
      </div>
    )
  },
})
