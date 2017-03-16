import React from 'react'

const ImageDetail = (props) => {
  console.log(props)
  return (
    <div>hi</div>
  )
}

export default ImageDetail

export const pageQuery = `
query ImageDetail($path: String!) {
  markdown(path: $path) {
    bodyHTML
    frontmatter {
        title
    }
  }
}
`
