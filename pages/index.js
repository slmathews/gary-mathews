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
            <li><Link to="/chapters/elementary-school/">Elementary School</Link></li>
            <li><Link to="/chapters/secondary-school/">Secondary School</Link></li>
            <li><Link to="/chapters/scouting/">Scouting</Link></li>
            <li><Link to="/chapters/ricks-college/">Ricks College</Link></li>
            <li><Link to="/chapters/mission/">Mission</Link></li>
            <li><Link to="/chapters/byu-undergrad/">BYU — Undergraduate</Link></li>
            <li><Link to="/chapters/byu-graduate/">BYU — Graduate</Link></li>
            <li><Link to="/chapters/teaching-career/">Gary as a teacher</Link></li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
