import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export default function LogoLarge(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "logo-large.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
      )}
    />
  )
}
