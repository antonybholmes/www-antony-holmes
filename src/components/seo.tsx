/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import useSiteMetadata from "../hooks/sitemetadata"
import { useLocation } from "@reach/router"

type SEOProps = {
  title: string
  description?: string
  path?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  const location = useLocation()

  console.log(location.pathname)

  const { siteTitle, siteUrl, siteDescription } = useSiteMetadata()

  if (path === "") {
    path = location.pathname
  }

  path = `${siteUrl}${path}`

  title = `${title} | ${siteTitle}`

  if (description === "") {
    description = siteDescription
  }

  return (
    <GatsbySeo
      title={title}
      description={description}
      openGraph={{
        url: path,
        title: title,
        description: description,
      }}
    />
  )

  // return (
  //   <Helmet
  //     htmlAttributes={{
  //       lang,
  //     }}
  //     title={title}
  //     titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
  //     meta={[
  //       {
  //         name: `description`,
  //         content: description,
  //       },
  //       {
  //         name: `keywords`,
  //         content: keywords,
  //       },
  //       {
  //         property: `og:title`,
  //         content: title,
  //       },
  //       {
  //         property: `og:description`,
  //         content: description,
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`,
  //       },
  //       {
  //         name: `twitter:card`,
  //         content: `summary`,
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: social.twitter,
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: title,
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: description,
  //       },
  //     ].concat(meta)}
  //   />
  // )
}

SEO.defaultProps = {
  title: "",
  description: "",
  path: "",
}

export default SEO
