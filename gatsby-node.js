import _ from 'lodash'
import Promise from 'bluebird'
import path from 'path'

exports.createPages = ({ graphql }) => (
  new Promise((resolve, reject) => {
    const pages = []
    const markdownPage = path.resolve('page-templates/markdown-page.js')
    graphql(`
      {
        allImages {
          edges {
            node {
              FileName
              ImgSrc
              Caption
              Description
              Date
            }
          }
        }
        allMarkdown(first: 1000) {
          edges {
            node {
              path
            }
          }
        }
      }
    `)
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // Create markdown pages.
      _.each(result.data.allMarkdown.edges, (edge) => {
        pages.push({
          path: edge.node.path, // required
          component: markdownPage,
        })
      })

      // Create image index and details pages.
      //pages.push({
        //path: '/images/'
        //component: path.resolve('page-templates/image-index.js')
      //})
      //const imageDetailPath = path.resolve('page-templates/image-detail.js')
      _.each(result.data.allMarkdown.edges, (edge) => {
        //console.log(edge)
        //pages.push({
          //path: _.kebabCase(edge.node.FileName), // required
          //component: imageDetailPath,
        //})
      })

      resolve(pages)
    })
  })
)
