import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom>
          <Link
            to={prefixLink('/')}
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            → Chromoly
          </Link>
        </Headroom>
        {this.props.children}
      </div>
    )
  },
})
