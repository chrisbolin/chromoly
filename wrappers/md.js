import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Post from '../components/post'

module.exports = React.createClass({
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <Post post={post}/>
      </DocumentTitle>
    )
  },
})
