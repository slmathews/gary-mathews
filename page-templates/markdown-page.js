import React from 'react'
import DocumentTitle from 'react-document-title'
import get from 'lodash/get'
import { rhythm } from 'utils/typography'

class MarkdownPage extends React.Component {
  render () {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const pageTitle = get(this.props, 'data.markdown.frontmatter.title')
    const body = get(this.props, 'data.markdown.bodyHTML')

    return (
      <DocumentTitle title={`${pageTitle} | ${siteTitle}`}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: rhythm(24),
            marginBottom: rhythm(2),
          }}
        >
          <h1>{pageTitle}</h1>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </DocumentTitle>
    )
  }
}

export default MarkdownPage

export const pageQuery = `
query Article($path: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdown(path: $path) {
    bodyHTML
    frontmatter {
        title
    }
  }
}
`
