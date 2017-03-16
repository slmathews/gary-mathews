import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <DocumentTitle title={this.props.data.site.siteMetadata.title}>
        <div>
          <h1>
            Hi people
          </h1>
          <p>Welcome to the Gary Mathews' Biography</p>
          <h3>Chapters</h3>
          <ul>
            <li><Link to={prefixLink('/chapters/elementary-school/')}>Elementary School</Link></li>
            <li><Link to={prefixLink('/chapters/secondary-school/')}>Secondary School</Link></li>
            <li><Link to={prefixLink('/chapters/scouting/')}>Scouting</Link></li>
            <li><Link to={prefixLink('/chapters/ricks-college/')}>Ricks College</Link></li>
            <li><Link to={prefixLink('/chapters/mission/')}>Mission</Link></li>
            <li><Link to={prefixLink('/chapters/byu-undergrad/')}>BYU — Undergraduate</Link></li>
            <li><Link to={prefixLink('/chapters/byu-graduate/')}>BYU — Graduate</Link></li>
            <li><Link to={prefixLink('/chapters/teaching-career/')}>Gary as a teacher</Link></li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

export const pageQuery = `
query Index {
  site {
    siteMetadata {
      title
    }
  }
}
`
