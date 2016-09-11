import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { filterPages } from '../utils'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Chromoly Magazine
          </h1>
          <div>
            {filterPages(this.props.route.pages).map((page) => (
              <div key={page.path}>
                <Link to={prefixLink(page.path)}>{page.data.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
