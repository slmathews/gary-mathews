import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Hi people
          </h1>
          <p>Welcome to the Gary Mathews' Biography</p>
          <h3>Chapters</h3>
          <ul>
            <li>
              <Link to="/chapters/mission/">Mission</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
