import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class ImagesIndex extends React.Component {
  render () {
    console.log(this.props)
    const files = this.props.data.allImages.edges.concat(this.props.data.allPdfs.edges)
    const groupedFiles = groupBy(files, (edge) => edge.node.year)
    const years = Object.keys(groupedFiles).sort()
    years.forEach((year) => groupedFiles[year] = sortBy(groupedFiles[year], (image) => image.node.sortable))
    years.forEach((year) => console.log(sortBy(groupedFiles[year], (image) => image.node.sortable)))
    console.log(groupedFiles)
    console.log(years)
    return (
      <DocumentTitle title={this.props.data.site.siteMetadata.title}>
        <div>
          <h1>
            Images
          </h1>
          <p>Welcome to the Gary Mathews' Biography</p>
          {years.map((year) => {
            return (
              <div>
                <h2>{year}</h2>
                {groupedFiles[year].map((edge) => {
                  return (
                    <div>
                      <h4>{edge.node.__typename}: {edge.node.Caption} — {edge.node.date}</h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: edge.node.Description }}
                      />
                      <img src={edge.node.ImgSrc} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </DocumentTitle>
    )
  }
}

export const pageQuery = `
query ImagesIndex {
  site {
    siteMetadata {
      title
    }
  }
  allImages {
    edges {
      node {
        __typename
        ImgSrc
        Caption
        Description
        date: Date(formatString: "DD MMM YYYY")
        year: Date(formatString: "YYYY")
        sortable: Date(formatString: "YYYYMMDD")
      }
    }
  }
  allPdfs {
    edges {
      node {
        __typename
        Caption
        Description
        date: Date(formatString: "DD MMM YYYY")
        year: Date(formatString: "YYYY")
        sortable: Date(formatString: "YYYYMMDD")
      }
    }
  }
}
`
