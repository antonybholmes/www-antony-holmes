/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import useSiteMetadata from "../hooks/sitemetadata"

type SEOProps = {
  title: string
  description?: string
  path: string
}

const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  const { siteTitle, siteUrl } = useSiteMetadata()

  const t = `${title} | ${siteTitle}`

  return (
    <GatsbySeo
      title={t}
      description={description}
      openGraph={{
        url: `${siteUrl}${path}`,
        title: t,
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
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
